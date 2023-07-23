'use strict';

const { minify } = require("terser");
const { copyFile, mkdir, readdir, writeFile, readFile, stat } = require('fs/promises');
const fs = require("fs");
const archiver = require('archiver');
const del = require('del');
const path = require("path")

async function copyDir(src, dest) {
    await mkdir(dest, { recursive: true });
    let entries = await readdir(src, { withFileTypes: true });

    for (let entry of entries) {
        let srcPath = path.join(src, entry.name);
        let destPath = path.join(dest, entry.name);

        entry.isDirectory() ?
            await copyDir(srcPath, destPath) :
            await copyFile(srcPath, destPath);
    }
}

const appName = "BodyGuard";
const files = [
    'node_modules/webxdc-scores/dist/webxdc-scores.umd.js',
    'vendor/phaser.3.54.0.min.js',
    'src/guard.js',
    'src/lang.js',
    'src/start.js',
];

(async () => {
    try {
        const allContents = await Promise.all(files.map((file) => {
            return readFile(file);
        }));

        await del('dist/');
        await del(appName+'.xdc');
        await mkdir('dist/');

        await copyDir("img", "dist/img/");
        await copyDir("sfx", "dist/sfx/");
        await copyFile('manifest.toml', 'dist/manifest.toml');
        await copyFile('icon.png', 'dist/icon.png');
        await copyFile('index.html', 'dist/index.html');

        const minified = await minify(allContents.map((buffer) => {
            return buffer.toString();
        }).join('\n'));

        await writeFile('dist/index.js', minified.code);

        await new Promise((resolve, reject) => {
            const output = fs.createWriteStream(appName+'.xdc');
            output.on('error', reject);
            output.on('close', resolve);

            const archive = archiver('zip', {
                zlib: { level: 9 }
            });
            archive.directory('dist/', false);
            archive.pipe(output);
            archive.finalize();
        })

        const stats = await stat(appName+'.xdc');
        const maxSize = 640 * 1024;

        console.log(`${stats.size} / ${maxSize} (${Math.round(stats.size * 100 / maxSize)}%)`);
        // copy webxdc.js for testing with npm run start
        await copyFile('webxdc.js', 'dist/webxdc.js');
    } catch (err) {
        console.error(err);
    }
})();
