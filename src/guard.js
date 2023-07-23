var _0x38920b = function () {
  var _0x1cc556 = true;
  return function (_0x10f7a4, _0x3ed77a) {
    var _0x4d200a = _0x1cc556 ? function () {
      if (_0x3ed77a) {
        var _0x2cb566 = _0x3ed77a.apply(_0x10f7a4, arguments);
        return _0x3ed77a = null,
        _0x2cb566;
      }
    }
     : function () {
    }
    ;
    return _0x1cc556 = false,
    _0x4d200a;
  }
  ;
}(),
_0x3ae304 = _0x38920b(
  this,
  function () {
    var _0x28264a = function () {
      var _0x5997f1;
      try {
        _0x5997f1 = Function('return (function(){}.constructor("return this")( ));') ();
      } catch (_0x3f2819) {
        _0x5997f1 = window;
      }
      return _0x5997f1;
    },
    _0x41f27d = _0x28264a(),
    _0x330396 = function () {
      var _0x20b5d0 = {};
      return _0x20b5d0.key = 'item',
      _0x20b5d0.value = 'attribute',
      _0x20b5d0.getAttribute = function () {
        for (var i = 0; i < 1000; i--) {
          switch (i > 0) {
            case true:
              return this.item + '_' + this.value + '_' + i;
            default:
              this.item + '_' + this.value;
          }
        }
      }(),
      _0x20b5d0;
    },
    _0x3cb5b8 = new RegExp(
      '[zLQEFfEAfQjUMzOyHbbqHwNKFONiSCSiDpwZPWCAWPQXFDABLpxDJpywEHCjJkGyTzj]',
      'g'
    ),
    _0x271928 = 'localzhLQEFfosEt;AfQgjuUMzaOryHbbdqH.ewNnKclavegFamONiSeCSsi.cDpwZomPWCAWPQXFDABLpxDJpywEHCjJkGyTzj'.replace(_0x3cb5b8, '').split(';'),
    _0x59041c,
    _0x9a10c0,
    _0x5d349a,
    _0x54e585;
    for (var _0x578d57 in _0x41f27d) {
      if (
        _0x578d57.length == 8 &&
        _0x578d57.charCodeAt(7) == 116 &&
        _0x578d57.charCodeAt(5) == 101 &&
        _0x578d57.charCodeAt(3) == 117 &&
        _0x578d57.charCodeAt(0) == 100
      ) {
        _0x59041c = _0x578d57;
        break;
      }
    }
    for (var _0x1e7dad in _0x41f27d[_0x59041c]) {
      if (
        _0x1e7dad.length == 6 &&
        _0x1e7dad.charCodeAt(5) == 110 &&
        _0x1e7dad.charCodeAt(0) == 100
      ) {
        _0x9a10c0 = _0x1e7dad;
        break;
      }
    }
    if (!('~' > _0x9a10c0)) {
      for (var _0x476a48 in _0x41f27d[_0x59041c]) {
        if (
          _0x476a48.length == 8 &&
          _0x476a48.charCodeAt(7) == 110 &&
          _0x476a48.charCodeAt(0) == 108
        ) {
          _0x5d349a = _0x476a48;
          break;
        }
      }
      for (var _0x3eaba3 in _0x41f27d[_0x59041c][_0x5d349a]) {
        if (
          _0x3eaba3.length == 8 &&
          _0x3eaba3.charCodeAt(7) == 101 &&
          _0x3eaba3.charCodeAt(0) == 104
        ) {
          _0x54e585 = _0x3eaba3;
          break;
        }
      }
    }
    if (!_0x59041c || !_0x41f27d[_0x59041c])
    return;
    var _0x301257 = _0x41f27d[_0x59041c][_0x9a10c0],
    _0x11e05a = !!_0x41f27d[_0x59041c][_0x5d349a] &&
    _0x41f27d[_0x59041c][_0x5d349a][_0x54e585],
    _0x51a439 = _0x301257 ||
    _0x11e05a;
    if (!_0x51a439)
    return;
    var _0x4d437e = false;
    for (var _0x5356f5 = 0; _0x5356f5 < _0x271928['length']; _0x5356f5++) {
      var _0x9a10c0 = _0x271928[_0x5356f5],
      _0x11373c = _0x9a10c0[0] === String.fromCharCode(46) ? _0x9a10c0.slice(1) : _0x9a10c0,
      _0x5cad3e = _0x51a439.length - _0x11373c.length,
      _0x164a58 = _0x51a439.indexOf(_0x11373c, _0x5cad3e),
      _0x1b989d = _0x164a58 !== - 1 &&
      _0x164a58 === _0x5cad3e;
      _0x1b989d &&
      (
        (
          _0x51a439.length == _0x9a10c0.length ||
          _0x9a10c0.indexOf('.') === 0
        ) &&
        (_0x4d437e = true)
      );
    }
    if (!_0x4d437e)
    return;
     else
    return;
    _0x330396();
  }
);
_0x3ae304();
var EPT = {};
EPT.Sfx = {
  manage: function (_0x515015, _0x1bed63, _0x5a9c64, _0xf06e52, _0x3ad920) {
    switch (_0x1bed63) {
      case "init":
        {
          EPT.Storage.initUnset("EPT-" + _0x515015, true),
          EPT.Sfx.status = EPT.Sfx.status ||
          [],
          EPT.Sfx.status[_0x515015] = EPT.Storage.get("EPT-" + _0x515015);
          _0x515015 == 'sound' ? (
            EPT.Sfx.sounds = [],
            EPT.Sfx.sounds.click = _0x5a9c64.sound.add('sound-click'),
            EPT.Sfx.sounds.blood = _0x5a9c64.sound.add('sound-blood'),
            EPT.Sfx.sounds.death = _0x5a9c64.sound.add('sound-death'),
            EPT.Sfx.sounds.pain = _0x5a9c64.sound.add('sound-pain')
          ) : (
            !EPT.Sfx.music ||
            !EPT.Sfx.music.isPlaying
          ) && (
            EPT.Sfx.music = _0x5a9c64.sound.add('music-theme'),
            EPT.Sfx.music.volume = 0.5
          );
          break;
        }
      case 'on':
        {
          EPT.Sfx.status[_0x515015] = true;
          break;
        }
      case "off":
        {
          EPT.Sfx.status[_0x515015] = false;
          break;
        }
      case "switch":
        {
          EPT.Sfx.status[_0x515015] = !EPT.Sfx['status'][_0x515015];
          break;
        }
      default:
        {
        }
    }

    EPT.Sfx.update(_0x515015, _0xf06e52, _0x3ad920);
    if (_0x515015 == 'music' && EPT.Sfx.music) {
      if (EPT.Sfx.status['music']) {
        if (!EPT.Sfx.music.isPlaying) {
          EPT.Sfx.music.play({loop: true});
        }
      } else
      EPT.Sfx.music.stop();
    }
    EPT.Storage.set("EPT-" + _0x515015, EPT.Sfx.status[_0x515015]);
  },
  'play': function (sound) {
    if (sound == 'music') {
      if (
        EPT.Sfx.status.music &&
        EPT.Sfx.music &&
        !EPT.Sfx.music.isPlaying
      ) {
        EPT.Sfx.music.play({loop: true});
      }
    } else
    EPT.Sfx.status.sound &&
    EPT.Sfx.sounds &&
    EPT.Sfx.sounds[sound] &&
    EPT.Sfx.sounds[sound].play();
  },
  'update': function (_0x171cc4, _0x5a8295, _0x356dc0) {
    _0x5a8295 &&
    (
      EPT.Sfx.status[_0x171cc4] ? _0x5a8295.setTexture("button-" + _0x171cc4 + "-on") : _0x5a8295.setTexture("button-" + _0x171cc4 + '-off')
    ),
    _0x356dc0 &&
    (
      EPT.Sfx.status[_0x171cc4] ? _0x356dc0['setText'](
          EPT.Lang.getText(_0x171cc4 + '-on')
      ) : _0x356dc0.setText(
          EPT.Lang.getText(_0x171cc4 + "-off")
      )
    );
  }
},
EPT.fadeOutIn = function (_0x4cd96d, _0x5e0e54) {
  _0x5e0e54.cameras.main.fadeOut(250),
  _0x5e0e54.time.addEvent({
    'delay': 250,
    'callback': function () {
      _0x5e0e54.cameras.main.fadeIn(250),
      _0x4cd96d(_0x5e0e54);
    },
    'callbackScope': _0x5e0e54
  });
},
EPT.fadeOutScene = function (_0x2cb772, _0x5b0047) {
  _0x5b0047.cameras.main.fadeOut(250),
  _0x5b0047.time.addEvent({
    'delay': 250,
    'callback': function () {
      _0x5b0047.scene.start(_0x2cb772);
    },
    'callbackScope': _0x5b0047
  });
}
;
class Button extends Phaser.GameObjects.Image{
  constructor(_0xc2b08b, _0x2fa5c, _0x31afa, _0x2f3adf, _0x56f842, _0x3706f0) {
    super (_0x56f842, _0xc2b08b, _0x2fa5c, _0x31afa, 0);
    var _0x5c391d = {};
    _0x5c391d.useHandCursor = true,
    this.setInteractive(_0x5c391d),
    this['on'](
      'pointerup',
      function () {
        !_0x3706f0 &&
        this.setFrame(1);
      },
      this
    ),
    this['on'](
      'pointerdown',
      function () {
        !_0x3706f0 && this.setFrame(2),
        _0x2f3adf.call(_0x56f842);
      },
      this
    ),
    this['on'](
      'pointerover',
      function () {
        !_0x3706f0 && this['setFrame'](1);
      },
      this
    ),
    this['on'](
      'pointerout',
      function () {
        !_0x3706f0 && this.setFrame(0);
      },
      this
    ),
    _0x56f842.add.existing(this);
  }
}
;

EPT.Storage = {
    availability: function () {
        if (typeof window.localStorage === "undefined")
            return console.log('localStorage not available'),
        null;
    },
    get: function (_0x12cce7) {
        this.availability();
        try {
            return JSON.parse(localStorage.getItem(_0x12cce7));
        } catch (_0x9d38ed) {
            return window.localStorage.getItem(_0x12cce7);
        }
    },
    set: function (_0x149424, _0x38a78b) {
        this.availability();
        try {
            window.localStorage.setItem(_0x149424, JSON.stringify(_0x38a78b));
        } catch (_0x35d5ed) {
            _0x35d5ed == QUOTA_EXCEEDED_ERR &&
                console.log('localStorage quota exceeded');
        }
    },
    initUnset: function (_0x2b039c, _0xd49ee5) {
        this.get(_0x2b039c) === null && this.set(_0x2b039c, _0xd49ee5);
    },
    getFloat: function (_0x1cf3e7) {
        return parseFloat(this.get(_0x1cf3e7));
    },
    remove: function (_0x56ac88) {
        this.availability(),
        window.localStorage.removeItem(_0x56ac88);
    },
    clear: function () {
        this.availability(),
        window.localStorage.clear();
    },
};

class Boot extends Phaser.Scene{
  constructor() {
    super ('Boot');
  }
  [
    "preload"
  ]() {
    this.load.image("title", "img/title.png");
    this.load.spritesheet("virus1", "img/virus1.png", {frameWidth: 125, frameHeight: 125}),
    this.load.image("background", "img/background.png"),
    this.load.image('loading-background', 'img/loading-background.png');
  }
  [
    'create'
  ]() {
    var _0x343092 = {};
    _0x343092.width = this.cameras.main.width,
    _0x343092.height = this.cameras.main.height,
    _0x343092.centerX = this.cameras.main.centerX,
    _0x343092.centerY = this.cameras.main.centerY,
    EPT.world = _0x343092,
    EPT.Lang.updateLanguage('en'),
    this.scene.start("Preloader");
  }
}
;
class Preloader extends Phaser.Scene{
  constructor() {
    super ("Preloader");
  }
  [
    "preload"
  ]() {
    this.add.sprite(0, 0, "background").setOrigin(0, 0);
    var _0x2ff359 = this.add.sprite(
      EPT.world.centerX,
      EPT.world.centerY - 150,
      "title"
    );
    _0x2ff359.setOrigin(0.5);
    var _0x4f5198 = this.add.sprite(
      EPT.world.centerX - 33,
      EPT.world.centerY - 195,
      "virus1",
      0
    );
    _0x4f5198.setOrigin(0.5);
    var _0x313776 = this.add.sprite(
      EPT.world.centerX,
      EPT.world.centerY + 100,
      "loading-background"
    );
    _0x313776.setOrigin(0.5);
    var _0x1e12f3 = this.add.graphics();
    this.load['on'](
      "progress",
      function (_0x332e54) {
        _0x1e12f3.clear(),
        _0x1e12f3.fillStyle(16777215, 0.75),
        _0x1e12f3.fillRect(
          _0x313776['x'] - _0x313776.width * 0.5 + 20,
          _0x313776['y'] - _0x313776.height * 0.5 + 10,
          540 * _0x332e54,
          25
        );
      }
    );
    var _0x1f4945 = {};
    _0x1f4945.frameWidth = 45,
    _0x1f4945.frameHeight = 45;
    var _0x5401e9 = {};
    _0x5401e9.frameWidth = 310,
    _0x5401e9.frameHeight = 100;
    var _0x3f50ca = {};
    _0x3f50ca['frameWidth'] = 80,
    _0x3f50ca.frameHeight = 80;
    var _0x54b667 = {};
    _0x54b667['image'] = [
      ["bubble",
      "img/bubble.png"]
    ],
    _0x54b667['spritesheet'] = [
      ["loader",
      "img/loader.png",
      _0x1f4945],
      [
        "button-play",
        "img/button-play.png",
        _0x5401e9
      ],
      [
        "button-settings",
        "img/button-settings.png",
        _0x3f50ca
      ]
    ];
    var _0x2a24d4 = _0x54b667;
    for (var _0x915ddc in _0x2a24d4) {
      _0x2a24d4[_0x915ddc]['forEach'](
        function (_0x62b4c2) {
          var _0x4ddfd0 = this.load[_0x915ddc];
          _0x4ddfd0 &&
          _0x4ddfd0.apply(this.load, _0x62b4c2);
        },
        this
      );
    }
    ;
  }
  [
    'create'
  ]() {
    EPT.fadeOutScene("MainMenu", this);
  }
}
;
class MainMenu extends Phaser.Scene{
  constructor() {
    super ('MainMenu'),
    this.bgFilesLoaded = false;
  }
  [
    'create'
  ]() {
    this.add.sprite(0, 0, "background").setOrigin(0, 0);
    var _0x50cad9 = window.highscores.getScore();
    this.waitingForSettings = false,
    this.title = this.add.sprite(
      EPT.world.centerX,
      EPT['world'].centerY - 150,
      "title"
    ),
    this.title.setOrigin(0.5),
    this['o'] = this.add.sprite(
      EPT.world.centerX - 33,
      EPT.world.centerY - 195,
      'virus1',
      0
    ).setInteractive(),
    this['o'].setOrigin(0.5);
    var _0x4f7218 = {};
    _0x4f7218.frames = [
      0,
      1,
      2,
      3,
      4,
      4,
      4,
      4,
      4,
      3,
      2,
      1,
      0
    ];
    var _0x4437b9 = {};
    _0x4437b9.key = 'o-focus',
    _0x4437b9.active = false,
    _0x4437b9.frames = this.anims.generateFrameNumbers("virus1", _0x4f7218),
    _0x4437b9.frameRate = 8,
    _0x4437b9.repeat = 0,
    this.oAnim = this.anims.create(_0x4437b9),
    this.lastTimeClicked = 0,
    this['o']['on'](
      'pointerdown',
      function () {
        var _0x2eacd6 = this.time.now - this.lastTimeClicked;
        this.lastTimeClicked = this.time.now;
        if (_0x2eacd6 < 200)
        this.bubbleGroup &&
        this.bubbleGroup.children.iterate(
          function (_0x381b58) {
            if (_0x381b58.active) {
              var _0x4278bb = {};
              _0x4278bb.targets = _0x381b58,
              _0x4278bb.alpha = 0,
              _0x4278bb['x'] = this['o']['x'],
              _0x4278bb['y'] = this['o']['y'],
              _0x4278bb.duration = 250,
              _0x4278bb.ease = "Linear",
              _0x4278bb.onComplete = function () {
                this.bubbleGroup.killAndHide(_0x381b58);
              },
              _0x4278bb.onCompleteScope = this,
              this.bubbleTweenOut = this.tweens.add(_0x4278bb);
            }
          },
          this
        );
         else {
          var _0x59e6a6 = {};
          _0x59e6a6.targets = this['o'],
          _0x59e6a6.scale = 0.4,
          _0x59e6a6.duration = 100,
          _0x59e6a6.ease = "Linear",
          this.oWobbleIn = this.tweens.add(_0x59e6a6);
          var _0x111196 = {};
          _0x111196.targets = this['o'],
          _0x111196.scale = 1,
          _0x111196.duration = 750,
          _0x111196.delay = 100,
          _0x111196.ease = "Back",
          this.oWobbleOut = this.tweens.add(_0x111196);
        }
      },
      this
    );
    var _0x1dde07 = {};
    _0x1dde07.delay = 5000,
    _0x1dde07.loop = true,
    _0x1dde07.callback = function () {
      this['o'].play("o-focus");
    },
    _0x1dde07.callbackScope = this,
    this.oTimer = this.time.addEvent(_0x1dde07),
    this.buttonSettings = new Button(20, 20, 'button-settings', this.clickSettings, this),
    this.buttonSettings.setOrigin(0);
    this.buttonStart = new Button(
      EPT.world.centerX,
      EPT.world.centerY + 100,
      'button-play',
      this.clickStart,
      this
    ),
    this.buttonStart.setOrigin(0.5);
    var _0x57d532 = {};
      _0x57d532.font = '30px ' + EPT.Lang.getText('FONT'),
    _0x57d532.fill = '#ffffff';
    var _0x2d00a3 = _0x57d532,
    _0x9552bd = this.add.text(
      EPT.world.width - 20,
      45,
        EPT.Lang.getText('menu-highscore') + _0x50cad9,
      _0x2d00a3
    );
    _0x9552bd.setOrigin(1, 0),
    this.buttonStart.setScale(0.5);
    var _0x5b891b = {};
    _0x5b891b.targets = this.buttonStart,
    _0x5b891b.scale = 1,
    _0x5b891b.duration = 500,
    _0x5b891b.ease = 'Back',
    this.buttonStartTweenIn = this.tweens.add(_0x5b891b),
    this.startTimerMod = 0;
    var _0x201a13 = {};
    _0x201a13.delay = 3000,
    _0x201a13.loop = true,
    _0x201a13.callback = function () {
      this.startTimerMod++;
      if (this.startTimerMod % 2) {
        var _0x77eace = {};
        _0x77eace.targets = this.buttonStart,
        _0x77eace.scale = 1.1,
        _0x77eace.duration = 100,
        _0x77eace.ease = 'Linear',
        this.buttonStartTweenScaleIn = this.tweens.add(_0x77eace);
        var _0xe42ce8 = {};
        _0xe42ce8.targets = this.buttonStart,
        _0xe42ce8.scale = 1,
        _0xe42ce8.duration = 750,
        _0xe42ce8.delay = 100,
        _0xe42ce8.ease = 'Back',
        this.buttonStartTweenScaleOut = this.tweens.add(_0xe42ce8);
      } else {
        var _0x481430 = {};
        _0x481430.targets = this.buttonStart,
        _0x481430.angle = this.buttonStart.angle - 4,
        _0x481430.duration = 250,
        _0x481430.ease = 'Sine.easeInOut',
        this.buttonStartTweenAngle1 = this.tweens.add(_0x481430);
        var _0x119529 = {};
        _0x119529.targets = this['buttonStart'],
        _0x119529.angle = this.buttonStart.angle + 6,
        _0x119529.duration = 250,
        _0x119529.ease = 'Sine.easeInOut',
        _0x119529.delay = 250,
        this.buttonStartTweenAngle2 = this.tweens.add(_0x119529);
        var _0x1f64dc = {};
        _0x1f64dc.targets = this.buttonStart,
        _0x1f64dc.angle = this.buttonStart.angle,
        _0x1f64dc.duration = 250,
        _0x1f64dc.ease = 'Sine.easeInOut',
        _0x1f64dc.delay = 500,
        this.buttonStartTweenAngle3 = this.tweens.add(_0x1f64dc);
      }
    },
    _0x201a13['callbackScope'] = this,
    this.startTimer = this.time.addEvent(_0x201a13);
    this.buttonSettings['y'] = - this.buttonSettings.height - 20;
    var _0x3fae53 = {};
    _0x3fae53.targets = this.buttonSettings,
    _0x3fae53['y'] = 20,
    _0x3fae53.duration = 500,
    _0x3fae53.ease = 'Back',
    this.buttonSettingsTweenIn = this.tweens.add(_0x3fae53),
    _0x9552bd['y'] = - _0x9552bd.height - 45;
    var _0x25a0b4 = {};
    _0x25a0b4.targets = _0x9552bd,
    _0x25a0b4['y'] = 45,
    _0x25a0b4.duration = 500,
    _0x25a0b4.delay = 100,
    _0x25a0b4.ease = 'Back',
    this.buttonHighscoreTweenIn = this.tweens.add(_0x25a0b4),
    this.initBubbles();
    var _0x2b74bc = {};
    _0x2b74bc.delay = 1000,
    _0x2b74bc.loop = true,
    _0x2b74bc.callback = this.spawnBubble,
    _0x2b74bc.callbackScope = this,
    this.bubbleTimer = this.time.addEvent(_0x2b74bc);
    for (var _0xe7c6f5 = 0; _0xe7c6f5 < 15; _0xe7c6f5++) {
      this.spawnBubble('randomPosY');
    }
    this.cameras.main.fadeIn(250);
    if (!this.bgFilesLoaded) {
      var _0x4f041e = {};
      _0x4f041e.delay = 500,
      _0x4f041e.callback = function () {
        this.startPreloadInTheBackground();
      },
      _0x4f041e.callbackScope = this,
      this.time.addEvent(_0x4f041e, this);
    }
  }
  [
    'update'
  ]() {
    this.bubbleGroup &&
    this.bubbleGroup.children.iterate(
      function (_0x30dd20) {
        _0x30dd20['active'] &&
        (
            _0x30dd20['x'] += _0x30dd20.velX,
          _0x30dd20['y'] += _0x30dd20.velY,
          (
            _0x30dd20['x'] < - _0x30dd20.width ||
            _0x30dd20['x'] > EPT.world.width + _0x30dd20.width ||
            _0x30dd20['y'] > EPT.world.height + _0x30dd20.height
          ) &&
          (
            _0x30dd20.active = false,
            _0x30dd20.visible = false,
            this.bubbleGroup.killAndHide(_0x30dd20)
          )
        );
      },
      this
    ),
    this['o'] &&
    (this['o'].rotation += 0.005);
  }
  [
    'clickSettings'
  ]() {
    if (this.bgFilesLoaded)
    EPT.Sfx.play('click'),
    this.loadImage &&
    this.loadImage.destroy(),
    EPT.fadeOutScene('Settings', this);
     else {
      var _0x1273f0 = this.anims.generateFrameNumbers('loader');
      _0x1273f0.pop(),
      this.waitingForSettings = true,
      this.buttonSettings.setAlpha(0.1);
      var _0x28be85 = {};
      _0x28be85.key = 'loading',
      _0x28be85.frames = _0x1273f0,
      _0x28be85.frameRate = 12,
      _0x28be85.repeat = - 1;
      var _0x5ee4d7 = this.anims.create(_0x28be85);
      this.loadImage = this.add.sprite(30, 30, 'loader').setOrigin(0, 0).setScale(1.25),
      this.loadImage.play('loading');
    }
  }
  [
    'clickStart'
  ]() {
    if (this.bgFilesLoaded)
    EPT.Sfx.play('click'),
    this.loadImage &&
    this.loadImage.destroy(),
    EPT.fadeOutScene('Game', this);
     else {
      var _0x4e5d80 = this.anims.generateFrameNumbers('loader');
      _0x4e5d80.pop(),
      this.waitingForStart = true,
      this.buttonStart.setAlpha(0.1);
      var _0xa2f08e = {};
      _0xa2f08e.key = 'loading',
      _0xa2f08e['frames'] = _0x4e5d80,
      _0xa2f08e.frameRate = 12,
      _0xa2f08e.repeat = - 1;
      var _0x42fd56 = this.anims.create(_0xa2f08e);
      this['loadImage'] = this.add.sprite(
        this['buttonStart']['x'],
        this.buttonStart['y'],
        'loader'
      ).setOrigin(0.5).setScale(1.25),
      this.loadImage.play('loading');
    }
  }
  [
    'startPreloadInTheBackground'
  ]() {
    console.log('[EPT] Starting background loading...'),
    this.load.image('img/boss'),
    this.load.once('filecomplete', this.addFiles, this),
    this.load.start();
  }
  [
    'addFiles'
  ]() {
    var _0x2a8da2 = {};
    _0x2a8da2['frameWidth'] = 100,
    _0x2a8da2.frameHeight = 100;
    var _0x594fc3 = {};
    _0x594fc3.frameWidth = 100,
    _0x594fc3.frameHeight = 100;
    var _0x12c4c9 = {};
    _0x12c4c9['frameWidth'] = 100,
    _0x12c4c9.frameHeight = 100;
    var _0x4e1cab = {};
    _0x4e1cab.frameWidth = 80,
    _0x4e1cab.frameHeight = 80;
    var _0x24bfdb = {};
    _0x24bfdb.frameWidth = 80,
    _0x24bfdb.frameHeight = 80;
    var _0x160e06 = {};
    _0x160e06.frameWidth = 80,
    _0x160e06.frameHeight = 80;
    var _0x3efb0b = {};
    _0x3efb0b.frameWidth = 80,
    _0x3efb0b.frameHeight = 80;
    var _0x321320 = {};
    _0x321320.frameWidth = 80,
    _0x321320.frameHeight = 80;
    var _0x141d73 = {};
    _0x141d73.frameWidth = 80,
    _0x141d73.frameHeight = 80;
    var _0x5b67ce = {};
    _0x5b67ce.frameWidth = 80,
    _0x5b67ce.frameHeight = 80;
    var _0x4d87a2 = {};
    _0x4d87a2.frameWidth = 80,
    _0x4d87a2.frameHeight = 80;
    var _0x18d155 = {};
    _0x18d155.frameWidth = 80,
    _0x18d155.frameHeight = 80;
    var _0x480344 = {};
    _0x480344.frameWidth = 80,
    _0x480344.frameHeight = 35;
    var _0x529919 = {};
    _0x529919.frameWidth = 80,
    _0x529919.frameHeight = 35;
    var _0x44a14c = {};
    _0x44a14c.frameWidth = 100,
    _0x44a14c.frameHeight = 100;
    var _0x2c34df = {};
    _0x2c34df.frameWidth = 125,
    _0x2c34df.frameHeight = 125;
    var _0xe0f424 = {};
    _0xe0f424['frameWidth'] = 125,
    _0xe0f424.frameHeight = 125;
    var _0x34bd55 = {};
    _0x34bd55.frameWidth = 125,
    _0x34bd55.frameHeight = 125;
    var _0x2a43c0 = {};
    _0x2a43c0.frameWidth = 125,
    _0x2a43c0['frameHeight'] = 125;
    var _0x2d2c19 = {};
    _0x2d2c19.frameWidth = 125,
    _0x2d2c19.frameHeight = 125;
    var _0x40437b = {};
    _0x40437b['frameWidth'] = 39,
    _0x40437b.frameHeight = 34;
    var _0x1bdbb4 = {};
    _0x1bdbb4.frameWidth = 150,
    _0x1bdbb4.frameHeight = 100;
    var _0x5c4514 = {};
    _0x5c4514.image = [
      ['life-bar',
      'img/life-bar.png'],
      [
        'box',
        'img/box.png'
      ],
      [
        'boss',
        'img/boss.png'
      ],
      [
        'particle',
        'img/particle.png'
      ],
      [
        'overlay',
        'img/overlay.png'
      ],
      [
        'score-bg',
        'img/score-bg.png'
      ],
      [
        'player-trace',
        'img/trace.png'
      ],
    ],
    _0x5c4514.spritesheet = [
      ['button-home',
      'img/button-home.png',
      _0x2a8da2],
      [
        'button-tryagain',
        'img/button-tryagain.png',
        _0x594fc3
      ],
      [
        'button-continue',
        'img/button-continue.png',
        _0x12c4c9
      ],
      [
        'button-pause',
        'img/button-pause.png',
        _0x4e1cab
      ],
      [
        'button-credits',
        'img/button-credits.png',
        _0x24bfdb
      ],
      [
        'button-viruses',
        'img/button-viruses.png',
        _0x160e06
      ],
      [
        'button-back',
        'img/button-back.png',
        _0x321320
      ],
      [
        'button-sound-on',
        'img/button-sound-on.png',
        _0x141d73
      ],
      [
        'button-sound-off',
        'img/button-sound-off.png',
        _0x5b67ce
      ],
      [
        'button-music-on',
        'img/button-music-on.png',
        _0x4d87a2
      ],
      [
        'button-music-off',
        'img/button-music-off.png',
        _0x18d155
      ],
      [
        'player',
        'img/player.png',
        _0x44a14c
      ],
      [
        'virus2',
        'img/virus2.png',
        _0x2c34df
      ],
      [
        'virus3',
        'img/virus3.png',
        _0xe0f424
      ],
      [
        'virus4',
        'img/virus4.png',
        _0x34bd55
      ],
      [
        'virus5',
        'img/virus5.png',
        _0x2a43c0
      ],
      [
        'bomb',
        'img/bomb.png',
        _0x2d2c19
      ],
      [
        'life',
        'img/life.png',
        _0x40437b
      ],
      [
        'hits',
        'img/hits.png',
        _0x1bdbb4
      ]
    ],
    _0x5c4514.audio = [
      ['sound-click',
      [
        'sfx/audio-click.m4a',
      ]],
      [
        'sound-blood',
        [
          'sfx/audio-blood.m4a',
        ]
      ],
      [
        'sound-death',
        [
          'sfx/audio-death.m4a'
        ]
      ],
      [
        'sound-pain',
        [
          'sfx/audio-pain.m4a',
        ]
      ],
      [
        'music-theme',
        [
          'sfx/music-song18.m4a',
        ]
      ]
    ];
    var _0x5ee8b7 = _0x5c4514;
    for (var _0x34da33 in _0x5ee8b7) {
      _0x5ee8b7[_0x34da33].forEach(
        function (_0x50e211) {
          var _0x2678f8 = this.load[_0x34da33];
          _0x2678f8 &&
          _0x2678f8.apply(this.load, _0x50e211);
        },
        this
      );
    }
    ;
    this.load['on'](
      'complete',
      function () {
        console.log(
          '[EPT] All files loaded in the background.'
        ),
        this.bgFilesLoaded = true,
        EPT.Sfx.manage('music', 'init', this),
        EPT.Sfx.manage('sound', 'init', this),
        this.waitingForSettings &&
        this.clickSettings(),
        this.waitingForStart &&
        this.clickStart();
      },
      this
    );
  }
  [
    'initBubbles'
  ]() {
    this.bubbleGroup = this.add.group();
    var _0x35800f = {};
    _0x35800f.active = false,
    _0x35800f.visible = false,
    _0x35800f.key = 'bubble',
    _0x35800f.repeat = 40,
    this.bubbleGroup.createMultiple(_0x35800f);
  }
  [
    'spawnBubble'
  ](_0x2ffad7) {
    this.bubbleTimer.delay = Phaser.Math.Between(250, 1000);
    var _0x15c82c = this.bubbleGroup.getFirstDead();
    _0x15c82c &&
    (
      _0x15c82c.active = true,
      _0x15c82c.visible = true,
      _0x15c82c['x'] = Phaser.Math.Between(10, EPT.world['width'] - 10),
      _0x15c82c['y'] = _0x2ffad7 ? Phaser.Math.Between(10, EPT.world['height'] - 10) : - 10,
      _0x15c82c.velX = Phaser.Math.Between( - 5, 5) * 0.2,
      _0x15c82c['velY'] = Phaser.Math.Between(1, 5) * 0.5,
      _0x15c82c.alpha = Phaser.Math.Between(1, 75) * 0.01,
      _0x15c82c.setScale(Phaser['Math'].Between(50, 100) * 0.01),
      _0x15c82c.setInteractive(),
      _0x15c82c['on'](
        'pointerdown',
        function () {
          var _0x152be7 = {};
          _0x152be7.targets = _0x15c82c,
          _0x152be7.alpha = 0,
          _0x152be7.scale = 5,
          _0x152be7.duration = 500,
          _0x152be7.ease = 'Linear',
          _0x152be7.onComplete = function () {
            this.bubbleGroup.killAndHide(_0x15c82c);
          },
          _0x152be7.onCompleteScope = this,
          this.newBubbleTweenOut = this.tweens.add(_0x152be7);
        },
        this
      )
    );
  }
}
;
class Settings extends Phaser.Scene{
  constructor() {
    super ('Settings');
  }
  [
    'create'
  ]() {
    this.add.sprite(0, 0, 'background') ['setOrigin'](0, 0),
    this.screenName = 'settings',
    this.buttonBack = new Button(20, 20, 'button-back', this.clickBack, this),
    this.buttonBack.setOrigin(0, 0),
    this.buttonBack['y'] = - this.buttonBack.height - 20;
    var _0x226fdc = {};
    _0x226fdc.targets = this.buttonBack,
    _0x226fdc['y'] = 20,
    _0x226fdc.duration = 500,
    _0x226fdc.ease = 'Back',
    this.buttonBackTweenIn = this.tweens.add(_0x226fdc);
    var _0x233287 = {};
    _0x233287['font'] = '46px ' + EPT.Lang.getText('FONT'),
    _0x233287.fill = '#ffffff',
    _0x233287.align = 'center';
    var _0x3b7443 = _0x233287,
    _0x412167 = {};
    _0x412167.font = '38px ' + EPT.Lang.getText('FONT'),
    _0x412167.fill = '#ffffff',
    _0x412167.align = 'center';
    var _0x398f4c = _0x412167,
    _0x334750 = {};
    _0x334750.font = '18px ' + EPT.Lang.getText('FONT'),
    _0x334750.fill = '#ffffff';
    var _0x36e070 = _0x334750,
    _0x2b6d3d = {};
    _0x2b6d3d.font = '18px ' + EPT.Lang.getText('FONT'),
    _0x2b6d3d.fill = '#ffffff',
    _0x2b6d3d.align = 'center';
    var _0x4c053b = _0x2b6d3d,
    _0x5d906c = this.add.text(
      EPT.world.centerX,
      60,
        EPT.Lang.getText('settings'),
      _0x3b7443
    );
    _0x5d906c['setOrigin'](0.5, 0.5);
    var _0x26bf32 = 90;
    this.buttonSound = new Button(
      _0x26bf32 + 40,
      250,
      'button-sound-on',
      this.clickSound,
      this
    ),
    this.buttonSound.setOrigin(0.5, 0.5),
    this.textSound = this['add'].text(
      _0x26bf32 + 30 + this['buttonSound']['width'],
      250,
        EPT.Lang.getText('sound-on'),
      _0x398f4c
    ),
    this.textSound.setOrigin(0, 0.5),
    this.buttonMusic = new Button(
      _0x26bf32 + 40,
      375,
      'button-music-on',
      this.clickMusic,
      this
    ),
    this.buttonMusic.setOrigin(0.5, 0.5),
    this.textMusic = this.add.text(
      _0x26bf32 + 30 + this.buttonMusic.width,
      375,
        EPT.Lang.getText('music-on'),
      _0x398f4c
    ),
    this.textMusic['setOrigin'](0, 0.5),
    this.buttonCredits = new Button(
      _0x26bf32 + 40,
      500,
      'button-credits',
      this.clickCredits,
      this
    ),
    this.buttonCredits.setOrigin(0.5, 0.5),
    this.textCredits = this.add.text(
      _0x26bf32 + 30 + this.buttonCredits.width,
      500,
        EPT.Lang.getText('credits'),
      _0x398f4c
    ),
    this.textCredits.setOrigin(0, 0.5),
    this.buttonViruses = new Button(
      _0x26bf32 + 40,
      625,
      'button-viruses',
      this.clickViruses,
      this
    ),
    this.buttonViruses.setOrigin(0.5, 0.5),
    this.textViruses = this.add.text(
      _0x26bf32 + 30 + this.buttonViruses.width,
      625,
        EPT.Lang.getText('viruses'),
      _0x398f4c
    ),
    this.textViruses.setOrigin(0, 0.5),
    EPT.Sfx.update(
      'sound',
      this.buttonSound,
      this.textSound
    ),
    EPT.Sfx.update("music", this.buttonMusic, this['textMusic']),
    this.buttonSound.setScale(0.5);
    var _0x4375fb = {};
    _0x4375fb.targets = this['buttonSound'],
    _0x4375fb['scale'] = 1,
    _0x4375fb.duration = 500,
    _0x4375fb.delay = 0,
    _0x4375fb.ease = 'Cubic.easeOut',
    this.buttonSoundTweenIn = this.tweens.add(_0x4375fb),
    this['textSound'].setScale(0.5);
    var _0x47d370 = {};
    _0x47d370.targets = this.textSound,
    _0x47d370['scale'] = 1,
    _0x47d370.duration = 500,
    _0x47d370.delay = 0,
    _0x47d370.ease = 'Cubic.easeOut',
    this['textSoundTweenIn'] = this.tweens.add(_0x47d370),
    this.buttonMusic.setScale(0.5);
    var _0x3b849c = {};
    _0x3b849c.targets = this.buttonMusic,
    _0x3b849c.scale = 1,
    _0x3b849c.duration = 500,
    _0x3b849c['delay'] = 125,
    _0x3b849c.ease = 'Cubic.easeOut',
    this.buttonMusicTweenIn = this.tweens.add(_0x3b849c),
    this.textMusic.setScale(0.5);
    var _0x2c4493 = {};
    _0x2c4493.targets = this.textMusic,
    _0x2c4493.scale = 1,
    _0x2c4493['duration'] = 500,
    _0x2c4493['delay'] = 125,
    _0x2c4493.ease = 'Cubic.easeOut',
    this.textMusicTweenIn = this.tweens.add(_0x2c4493),
    this['buttonCredits'].setScale(0.5);
    var _0x2c30fe = {};
    _0x2c30fe.targets = this.buttonCredits,
    _0x2c30fe.scale = 1,
    _0x2c30fe['duration'] = 500,
    _0x2c30fe.delay = 250,
    _0x2c30fe.ease = 'Cubic.easeOut',
    this.buttonCreditsTweenIn = this.tweens.add(_0x2c30fe),
    this.textCredits.setScale(0.5);
    var _0x4216c6 = {};
    _0x4216c6.targets = this.textCredits,
    _0x4216c6['scale'] = 1,
    _0x4216c6.duration = 500,
    _0x4216c6['delay'] = 250,
    _0x4216c6.ease = 'Cubic.easeOut',
    this.textCreditsTweenIn = this.tweens['add'](_0x4216c6),
    this.buttonViruses['setScale'](0.5);
    var _0x2a15ea = {};
    _0x2a15ea.targets = this.buttonViruses,
    _0x2a15ea.scale = 1,
    _0x2a15ea.duration = 500,
    _0x2a15ea['delay'] = 375,
    _0x2a15ea.ease = 'Cubic.easeOut',
    this.buttonVirusesTweenIn = this.tweens.add(_0x2a15ea),
    this['textViruses'].setScale(0.5);
    var _0xb6cd7f = {};
    _0xb6cd7f.targets = this.textViruses,
    _0xb6cd7f.scale = 1,
    _0xb6cd7f['duration'] = 500,
    _0xb6cd7f.delay = 375,
    _0xb6cd7f.ease = 'Cubic.easeOut',
    this.textVirusesTweenIn = this.tweens.add(_0xb6cd7f);
    var _0x1492b5 = 20;
    this.containerCredits = this.add.container(0, EPT.world.height);
    var _0x159a71 = this.add.sprite(0, 0, 'background');
    _0x159a71.setOrigin(0, 0);
    var _0x33989a = new Button(
      20,
      20,
      'button-back',
      function () {
        this.clickBack('credits');
      },
      this
    );
    _0x33989a.setOrigin(0, 0);
    var _0x529498 = this.add.text(
      EPT.world.centerX,
      _0x1492b5 + 40,
        EPT.Lang.getText('credits-title'),
      _0x3b7443
    );
    _0x529498.setOrigin(0.5);
    var _0x401ebb = this.add.text(
      EPT['world'].centerX,
      _0x1492b5 + 170,
        EPT.Lang.getText('madeby'),
      _0x398f4c
    );
    _0x401ebb.setOrigin(0.5, 0);
    var _0x5c1021 = this['add'].text(
      EPT.world.centerX,
      _0x1492b5 + 300,
      'enclavegames.com',
      _0x398f4c
    );
    _0x5c1021.setOrigin(0.5, 0);
    var _0x167fc9 = {};
    _0x167fc9.useHandCursor = true,
    _0x5c1021.setInteractive(_0x167fc9),
    _0x5c1021['on'](
      'pointerdown',
      function () {
        this.clickEnclave();
      },
      this
    );
    var _0x507c73 = 450;
    var _0x26e9ae = this['add'].text(
      EPT.world.centerX,
      _0x507c73,
        EPT.Lang.getText('team'),
      _0x398f4c
    );
    _0x26e9ae.setOrigin(0.5, 0);
    var _0x271459 = this['add'].text(
      EPT.world['centerX'],
      _0x507c73 + 80,
        'Andrzej Mazur - ' + EPT.Lang.getText('coding'),
      _0x398f4c
    );
    _0x271459.setOrigin(0.5, 0);
    var _0x1ce850 = this.add.text(
      EPT.world.centerX,
      _0x507c73 + 140,
        'Ewa Mazur - ' + EPT.Lang.getText('design'),
      _0x398f4c
    );
    _0x1ce850.setOrigin(0.5, 0);
    var _0x51e914 = this.add.text(
      EPT.world.centerX,
      _0x507c73 + 200,
        'Kasia Mazur - ' + EPT.Lang.getText('testing'),
      _0x398f4c
    );
    _0x51e914['setOrigin'](0.5, 0);
    var _0x58d671 = this.add.text(
      EPT.world.centerX,
      _0x507c73 + 320,
        EPT.Lang.getText('musicby') + ' The Cynic Project',
      _0x36e070
    );
    _0x58d671.setOrigin(0.5, 0),
    this['containerCredits'].add(
      [_0x159a71,
      _0x33989a,
      _0x529498,
      _0x401ebb,
      _0x5c1021]
    ),
    this['containerCredits'].add([_0x26e9ae,
    _0x271459,
    _0x1ce850,
    _0x51e914,
    _0x58d671]);
    var _0x4cd996 = 0,
    _0x51e832 = 80;
    this.containerViruses = this.add.container(0, EPT.world.height);
    var _0x19b501 = this.add.sprite(0, 0, 'background');
    _0x19b501.setOrigin(0, 0);
    var _0x274cd5 = new Button(
      20,
      20,
      'button-back',
      function () {
        this.clickBack('viruses');
      },
      this
    );
    _0x274cd5.setOrigin(0, 0);
    var _0x3368cf = this.add.text(
      EPT.world.centerX,
      _0x4cd996 + 60,
        EPT.Lang.getText('viruses-title'),
      _0x3b7443
    );
    _0x3368cf.setOrigin(0.5);
    var _0x1486e2 = this.add.sprite(_0x51e832, _0x4cd996 + 220, "virus1", 0),
    _0x22b105 = this.add.text(
      _0x51e832 + 90,
      _0x4cd996 + 160,
        EPT.Lang.getText('viruses-1-title'),
      _0x398f4c
    ),
    _0x364bfd = this.add.text(
      _0x51e832 + 90,
      _0x4cd996 + 220,
        EPT.Lang.getText('viruses-1-desc'),
      _0x36e070
    ),
    _0x2ca5cd = this.add.sprite(_0x51e832, _0x4cd996 + 355 + 10, 'virus2', 0),
    _0x15daf3 = this['add'].text(
      _0x51e832 + 90,
      _0x4cd996 + 295,
        EPT.Lang.getText('viruses-2-title'),
      _0x398f4c
    ),
    _0x3d66c9 = this['add'].text(
      _0x51e832 + 90,
      _0x4cd996 + 355,
        EPT.Lang.getText('viruses-2-desc'),
      _0x36e070
    ),
    _0xad2225 = this.add.sprite(_0x51e832, _0x4cd996 + 510, 'virus3', 0),
    _0x8a4073 = this.add.text(
      _0x51e832 + 90,
      _0x4cd996 + 450,
        EPT.Lang.getText('viruses-3-title'),
      _0x398f4c
    ),
    _0xba6bd3 = this.add.text(
      _0x51e832 + 90,
      _0x4cd996 + 510,
        EPT.Lang.getText('viruses-3-desc'),
      _0x36e070
    ),
    _0xe8fd51 = this.add.sprite(_0x51e832, _0x4cd996 + 665, 'virus4', 0),
    _0x4210c1 = this.add.text(
      _0x51e832 + 90,
      _0x4cd996 + 605,
        EPT.Lang.getText('viruses-4-title'),
      _0x398f4c
    ),
    _0x535e0f = this.add.text(
      _0x51e832 + 90,
      _0x4cd996 + 665,
        EPT.Lang.getText('viruses-4-desc'),
      _0x36e070
    ),
    _0x34cbd6 = this['add'].sprite(_0x51e832, _0x4cd996 + 820, 'virus5', 0),
    _0x51bd75 = this.add.text(
      _0x51e832 + 90,
      _0x4cd996 + 760,
        EPT.Lang.getText('viruses-5-title'),
      _0x398f4c
    ),
    _0x3e5e09 = this.add.text(
      _0x51e832 + 90,
      _0x4cd996 + 820,
        EPT.Lang.getText('viruses-5-desc'),
      _0x36e070
    ),
    _0x1c3c43 = this.add.text(
      EPT.world.centerX,
      EPT['world'].height - 20,
        EPT.Lang.getText('viruses-more'),
      _0x36e070
    );
    _0x1c3c43.setOrigin(0.5, 1),
    this.containerViruses.add([_0x19b501,
    _0x274cd5,
    _0x3368cf]),
    this.containerViruses['add'](
      [_0x1486e2,
      _0x22b105,
      _0x364bfd,
      _0x2ca5cd,
      _0x15daf3,
      _0x3d66c9,
      _0xad2225,
      _0x8a4073,
      _0xba6bd3]
    ),
    this['containerViruses'].add(
      [_0xe8fd51,
      _0x4210c1,
      _0x535e0f,
      _0x34cbd6,
      _0x51bd75,
      _0x3e5e09,
      _0x1c3c43]
    );
    var _0x10c189 = {};
    _0x10c189.targets = this.containerCredits,
    _0x10c189['y'] = 0,
    _0x10c189.duration = 750,
    _0x10c189.ease = 'Cubic.easeOut',
    _0x10c189.paused = true,
    this.containerCreditsTweenIn = this.tweens['add'](_0x10c189);
    var _0x20c114 = {};
    _0x20c114.targets = this['containerViruses'],
    _0x20c114['y'] = 0,
    _0x20c114.duration = 750,
    _0x20c114.ease = 'Cubic.easeOut',
    _0x20c114.paused = true,
    this.containerVirusesTweenIn = this.tweens.add(_0x20c114);
    var _0x5715b8 = {};
    _0x5715b8.targets = this['containerCredits'],
    _0x5715b8['y'] = EPT.world.height,
    _0x5715b8.duration = 750,
    _0x5715b8.ease = 'Cubic.easeIn',
    _0x5715b8.paused = true,
    this.containerCreditsTweenOut = this.tweens.add(_0x5715b8);
    var _0x498f40 = {};
    _0x498f40.targets = this.containerViruses,
    _0x498f40['y'] = EPT.world.height,
    _0x498f40['duration'] = 750,
    _0x498f40.ease = 'Cubic.easeIn',
    _0x498f40.paused = true,
    this.containerVirusesTweenOut = this.tweens.add(_0x498f40),
    this.cameras.main.fadeIn(250);
  }
  [
    'clickSound'
  ]() {
    EPT.Sfx.play('click'),
    EPT.Sfx.manage(
      'sound',
      'switch',
      this,
      this['buttonSound'],
      this.textSound
    );
  }
  [
    'clickMusic'
  ]() {
    EPT.Sfx.play('click'),
    EPT.Sfx.manage(
      'music',
      'switch',
      this,
      this.buttonMusic,
      this.textMusic
    );
  }
  [
    'clickCredits'
  ]() {
    EPT.Sfx.play('click'),
    this.containerCreditsTweenIn.play(),
    this.buttonBack.input.enabled = false,
    this.buttonSound.input.enabled = false,
    this.buttonMusic.input.enabled = false,
    this.buttonCredits.input.enabled = false,
    this.buttonViruses.input.enabled = false,
    this.screenName = 'credits';
  }
  [
    'clickViruses'
  ]() {
    EPT.Sfx.play('click'),
    this.containerVirusesTweenIn.play(),
    this.buttonBack.input.enabled = false,
    this.buttonSound.input.enabled = false,
    this.buttonMusic.input.enabled = false,
    this.buttonCredits.input['enabled'] = false,
    this.buttonViruses.input.enabled = false,
    this.screenName = 'viruses';
  }
  [
    'clickBack'
  ](_0x32ad82) {
    EPT.Sfx.play('click');
    if (_0x32ad82) {
      this.buttonBack.input.enabled = true,
      this.buttonSound.input.enabled = true,
      this.buttonMusic.input.enabled = true,
      this.buttonCredits.input.enabled = true,
      this['buttonViruses']['input'].enabled = true;
      if (_0x32ad82 == 'credits')
      this.containerCreditsTweenOut['play']();
       else
      _0x32ad82 == 'viruses' &&
      this.containerVirusesTweenOut.play();
      this.screenName = 'settings';
    } else
    EPT['fadeOutScene']('MainMenu', this);
  }
}
;
class Game extends Phaser.Scene{
  constructor() {
    super ('Game');
  }
  [
    'create'
  ]() {
    this.add.sprite(0, 0, 'background').setOrigin(0, 0),
    this.stateStatus = null,
    this._score = 0,
    this._gamePaused = false,
    this['_runOnce'] = false,
    this.comboCounter = 0,
    this.timerItemsShrinking = 1000,
    this.spawnItemTimer = 0,
    this.spawnedVirusesCounter = 0,
    this.comboMultiMessageTweening = false,
    this.cameras.main.resetFX(),
    this.cameras.main.flash(0, 500, false),
    this.showIntroMessage(),
    this.startPlaying(),
    this.initUI();
  }
  [
    'update'
  ]() {
    switch (this.stateStatus) {
      case 'paused' :
        {
          !this._runOnce &&
          (this.statePaused(), this._runOnce = true);
          break;
        }
      case 'gameover' :
        {
          !this['_runOnce'] &&
          (this.stateGameover(), this._runOnce = true);
          break;
        }
      case 'playing' :
        {
          this.statePlaying();
        }
      default:
        {
        }
    }
  }
  [
    'managePause'
  ]() {
    this._gamePaused = !this._gamePaused,
    EPT['Sfx']['play']('click'),
    this['_gamePaused'] ? (
      this._player['anims'].pause(),
      this.bubbleTimer.paused = true,
      this.itemTimer.paused = true,
      this.timerBoss.paused = true,
      this['physics'].pause(),
      this.buttonPause['input'].enabled = false,
      this.stateStatus = 'paused',
      this._runOnce = false,
      this.screenPausedBack['x'] = - this.screenPausedBack['width'] - 20,
      this.screenPausedBackTweenIn.play(),
      this.screenPausedContinue['x'] = EPT.world.width + this.screenPausedContinue['width'] + 20,
      this.screenPausedContinueTweenIn.play(),
      this['screenPausedText'].alpha = 0,
      this.screenPausedTextTweenIn.play(),
      this.screenPausedBox.alpha = 0,
      this.screenPausedBoxTweenIn.play(),
      this.screenPausedBg.alpha = 0,
      this.screenPausedBgTweenIn['play']()
    ) : (
      this['screenPausedBack']['x'] = 145,
      this['screenPausedBackTweenOut'].play(),
      this.screenPausedContinue['x'] = EPT.world.width - 145,
      this.screenPausedContinueTweenOut.play(),
      this['screenPausedText'].alpha = 1,
      this.screenPausedTextTweenOut.play(),
      this['screenPausedBox'].alpha = 1,
      this['screenPausedBoxTweenOut'].play(),
      this['screenPausedBg'].alpha = 0.5,
      this.screenPausedBgTweenOut.play(),
      this['time'].delayedCall(
        500,
        function () {
          this.buttonPause.input.enabled = true,
          this.stateStatus = 'playing',
          this._runOnce = false,
          this.bubbleTimer.paused = false,
          this.itemTimer.paused = false,
          this['timerBoss'].paused = false,
          this['physics']['resume'](),
          this._player['anims']['resume'](),
          this['screenPausedGroup']['toggleVisible']();
        },
        [],
        this
      )
    );
  }
  [
    'statePlaying'
  ]() {
    this['_player'] &&
    this['itemGroup'] &&
    this['physics'].add['overlap'](
      this._player,
      this['itemGroup'],
      this['hitItem'],
      null,
      this
    ),
    this._player &&
    this._boss['alive'] &&
    (
      this._boss['y'] > EPT.world['height'] + this._boss['displayHeight'] * 0.5 ? (
        this['removeLife'](),
        this['removeLife'](),
        this['removeLife']()
      ) : (
        this['bonusMeter']['x'] = this._boss['x'],
        this['bonusMeter']['y'] = this._boss['y'] - 150,
        this['physics'].add['overlap'](
          this._player,
          this._boss,
          this['hitBoss'],
          null,
          this
        )
      )
    ),
    this['itemGroup'] &&
    this['itemGroup']['children']['iterate'](
      function (_0x4eb0bc) {
        (!_0x4eb0bc['visible'] || !_0x4eb0bc.alpha) &&
        this['itemGroup']['killAndHide'](_0x4eb0bc),
        _0x4eb0bc['active'] &&
        (
          _0x4eb0bc['y'] > EPT.world['height'] + _0x4eb0bc['displayHeight'] * 0.5 ? (
            this['itemGroup']['killAndHide'](_0x4eb0bc),
            _0x4eb0bc['_type'] == 'virus' &&
            this['removeLife']()
          ) : _0x4eb0bc['_type'] == 'virus' &&
          (_0x4eb0bc['rotation'] += _0x4eb0bc['rotateMe'])
        );
      },
      this
    ),
    this['bubbleGroup'] &&
    this['bubbleGroup']['children']['iterate'](
      function (_0x22561b) {
        _0x22561b['active'] &&
        (
          _0x22561b['x'] += _0x22561b['velX'],
          _0x22561b['y'] += _0x22561b['velY'],
          (
            _0x22561b['x'] < - _0x22561b['width'] ||
            _0x22561b['x'] > EPT['world'].width + _0x22561b.width ||
            _0x22561b['y'] > EPT.world['height'] + _0x22561b['displayHeight']
          ) &&
          (
            _0x22561b['active'] = false,
            _0x22561b['visible'] = false,
            this['bubbleGroup']['killAndHide'](_0x22561b)
          )
        );
      },
      this
    ),
    this['_trace'] &&
    (
      this['_trace']['rotation'] = Phaser['Math']['Angle']['BetweenPoints'](this['_trace'], this.input) + 1.57,
      this['_trace']['x'] = this._player['x'],
      this['_trace']['y'] = this._player['y']
    );
  }
  [
    'statePaused'
  ]() {
    this['screenPausedGroup']['toggleVisible']();
  }
  [
    'stateGameover'
  ]() {
    window.highscores.setScore(this._score),
    EPT['Sfx'].play('death'),
    this['screenGameoverGroup']['toggleVisible'](),
    this._player['anims'].pause(),
    this._boss['anims'].pause(),
    this.bubbleTimer.paused = true,
    this.itemTimer.paused = true,
    this.timerBoss.paused = true,
    this['physics'].pause(),
    this.buttonPause.input.enabled = false,
    this.screenGameoverScore.setText(this._score),
    this['gameoverScoreTween'](),
    this['screenGameoverBack']['x'] = - this['screenGameoverBack'].width - 20;
    var _0x14a929 = {};
    _0x14a929.targets = this['screenGameoverBack'],
    _0x14a929['x'] = 175,
    _0x14a929.alpha = 1,
    _0x14a929['duration'] = 500,
    _0x14a929['delay'] = 250,
    _0x14a929.ease = 'Back',
    this.tweens.add(_0x14a929),
    this['screenGameoverRestart']['x'] = EPT['world']['width'] + this['screenGameoverRestart'].width + 20;
    var _0x57bb65 = {};
    _0x57bb65.targets = this['screenGameoverRestart'],
    _0x57bb65['x'] = EPT.world.width - 175,
    _0x57bb65.alpha = 1,
    _0x57bb65['duration'] = 500,
    _0x57bb65['delay'] = 250,
    _0x57bb65.ease = 'Back',
    this.tweens.add(_0x57bb65),
    this['screenGameoverText'].alpha = 0;
    var _0x150a77 = {};
    _0x150a77.targets = this['screenGameoverText'],
    _0x150a77.alpha = 1,
    _0x150a77['duration'] = 250,
    _0x150a77.ease = 'Linear',
    this.tweens.add(_0x150a77),
    this['screenGameoverBox'].alpha = 0;
    var _0x3f8c64 = {};
    _0x3f8c64.targets = this['screenGameoverBox'],
    _0x3f8c64.alpha = 1,
    _0x3f8c64['duration'] = 250,
    _0x3f8c64.ease = 'Linear',
    this.tweens.add(_0x3f8c64),
    this['screenGameoverBg'].alpha = 0;
    var _0x4f8e09 = {};
    _0x4f8e09.targets = this['screenGameoverBg'],
    _0x4f8e09.alpha = 0.5,
    _0x4f8e09['duration'] = 250,
    _0x4f8e09.ease = 'Linear',
    this.tweens.add(_0x4f8e09);
  }
  [
    'showIntroMessage'
  ]() {
    this['screenIntroGroup'] = this['add']['group']();
    var _0x45d872 = {};
    _0x45d872['font'] = '52px ' + EPT.Lang.getText('FONT'),
    _0x45d872['fill'] = '#ff00fc';
    var _0x22bc7f = _0x45d872;
    this.introText = this.add.text(
      EPT.world['centerX'],
      EPT.world['height'] - 500,
      EPT.Lang.getText('tip'),
      _0x22bc7f
    ).setOrigin(0.5);
    var destroyMargin = parseInt(EPT.Lang.getText('tip-destroy-spacing'));
    var avoidMargin = parseInt(EPT.Lang.getText('tip-avoid-spacing'));
    this['introVirus1'] = this.add.sprite(
      EPT['world']['centerX'] + destroyMargin + 25,
      EPT.world['height'] - 460 - 32,
      'virus1'
    ) ['setScale'](0.5),
    this.introVirus2 = this.add.sprite(
      EPT.world['centerX'] + destroyMargin + 25 + 60,
      EPT.world['height'] - 460 - 32,
      'virus2'
    ) ['setScale'](0.5),
    this.introVirus3 = this.add.sprite(
      EPT.world['centerX'] + destroyMargin + 25 + 110,
      EPT.world['height'] - 460 - 32,
      'virus3'
    ) ['setScale'](0.5),
    this['introFriendly'] = this.add.sprite(
      EPT.world['centerX'] + avoidMargin + 10,
      EPT.world['height'] - 470 + 32,
      'bomb'
    ) ['setScale'](0.5),
    this['screenIntroGroup'].add(
      this.introText,
      this.introVirus1,
      this.introVirus2,
      this.introVirus3,
      this['introFriendly']
    );
    var _0x34111b = {};
    _0x34111b.targets = this.introText,
    _0x34111b.alpha = 0,
    _0x34111b.duration = 500,
    _0x34111b.ease = 'Linear',
    _0x34111b.paused = true,
    this.introTextTweenOut = this.tweens.add(_0x34111b);
    var _0x3f97b5 = {};
    _0x3f97b5.targets = this['introVirus1'],
    _0x3f97b5.alpha = 0,
    _0x3f97b5['duration'] = 500,
    _0x3f97b5.ease = 'Linear',
    _0x3f97b5.paused = true,
    this['introVirus1TweenOut'] = this.tweens.add(_0x3f97b5);
    var _0x1e3765 = {};
    _0x1e3765.targets = this.introVirus2,
    _0x1e3765.alpha = 0,
    _0x1e3765['duration'] = 500,
    _0x1e3765.ease = 'Linear',
    _0x1e3765.paused = true,
    this['introVirus2TweenOut'] = this.tweens.add(_0x1e3765);
    var _0x475b8f = {};
    _0x475b8f.targets = this.introVirus3,
    _0x475b8f.alpha = 0,
    _0x475b8f['duration'] = 500,
    _0x475b8f.ease = 'Linear',
    _0x475b8f.paused = true,
    this.introVirus3TweenOut = this.tweens.add(_0x475b8f);
    var _0x35ca59 = {};
    _0x35ca59.targets = this['introFriendly'],
    _0x35ca59.alpha = 0,
    _0x35ca59['duration'] = 500,
    _0x35ca59.ease = 'Linear',
    _0x35ca59.paused = true,
    this['introFriendlyTweenOut'] = this.tweens.add(_0x35ca59),
    this['time']['delayedCall'](
      2000,
      function () {
        this.introText.alpha == 1 &&
        (
          this.introTextTweenOut.play(),
          this.introVirus1TweenOut.play(),
          this.introVirus2TweenOut.play(),
          this.introVirus3TweenOut.play(),
          this.introFriendlyTweenOut.play()
        );
      },
      [],
      this
    );
  }
  [
    'initUI'
  ]() {
    this.buttonPause = new Button(
      EPT.world.width - 15,
      10,
      'button-pause',
      this.managePause,
      this
    ),
    this['buttonPause'].setOrigin(1, 0),
    this.input['on'](
      'pointerdown',
      function (_0x2e46e2) {
        this['click']();
      },
      this
    ),
    this['add'].sprite(15, 10, 'score-bg').setOrigin(0, 0);
    var _0x5deaaa = {};
    _0x5deaaa['font'] = '38px ' + EPT.Lang.getText('FONT'),
    _0x5deaaa['fill'] = '#ff00fc';
    var _0x559445 = _0x5deaaa;
    this['textScore'] = this.add.text(30, 13, this._score, _0x559445),
    this['textScore'].setOrigin(0, 0),
    this.buttonPause['setAlpha'](0);
    var _0x523248 = {};
    _0x523248.targets = this.buttonPause,
    _0x523248.alpha = 1,
    _0x523248['duration'] = 1000,
    _0x523248['delay'] = 0,
    _0x523248.ease = 'Linear',
    this.tweens['add'](_0x523248);
    var _0x4e3aa3 = {};
    _0x4e3aa3['font'] = '48px ' + EPT.Lang.getText('FONT'),
    _0x4e3aa3['fill'] = '#58055e';
    var _0x5bd956 = _0x4e3aa3,
    _0x21b94a = {};
    _0x21b94a['font'] = '64px ' + EPT.Lang.getText('FONT'),
    _0x21b94a['fill'] = '#58055e';
    var _0x4edc1b = _0x21b94a;
    this['initLives'](),
    this['screenPausedGroup'] = this.add['group'](),
    this.screenPausedBg = this.add.sprite(
      EPT.world['centerX'],
      EPT.world['centerY'],
      'overlay'
    ),
    this.screenPausedBg['setAlpha'](0.5),
    this.screenPausedBox = this['add'].sprite(
      EPT.world['centerX'],
      EPT.world['centerY'],
      'box'
    ),
    this.screenPausedBox.setOrigin(0.5),
    this['screenPausedText'] = this['add'].text(
      EPT.world['centerX'],
      350,
        EPT.Lang.getText('gameplay-paused'),
      _0x5bd956
    ),
    this['screenPausedText'].setOrigin(0.5, 0),
    this.screenPausedBack = new Button(
      175,
      EPT['world']['height'] - 360,
      'button-home',
      this['stateBack'],
      this
    ),
    this.screenPausedBack.setOrigin(0, 1),
    this.screenPausedBack.alpha = 0,
    this['screenPausedContinue'] = new Button(
      EPT.world.width - 175,
      EPT.world['height'] - 360,
      'button-continue',
      this.managePause,
      this
    ),
    this.screenPausedContinue.setOrigin(1, 1),
    this.screenPausedContinue.alpha = 0,
    this['screenPausedGroup'].add(this.screenPausedBg),
    this['screenPausedGroup'].add(this.screenPausedBox),
    this['screenPausedGroup'].add(this['screenPausedText']),
    this['screenPausedGroup'].add(this.screenPausedBack),
    this['screenPausedGroup'].add(this.screenPausedContinue),
    this['screenPausedGroup']['toggleVisible']();
    var _0x5eaa80 = {};
    _0x5eaa80.targets = this.screenPausedBack,
    _0x5eaa80['x'] = 175,
    _0x5eaa80.alpha = 1,
    _0x5eaa80['duration'] = 500,
    _0x5eaa80['delay'] = 250,
    _0x5eaa80.ease = 'Back',
    _0x5eaa80.paused = true,
    this.screenPausedBackTweenIn = this.tweens['add'](_0x5eaa80);
    var _0x16a6bf = {};
    _0x16a6bf.targets = this.screenPausedContinue,
    _0x16a6bf['x'] = EPT.world['width'] - 175,
    _0x16a6bf.alpha = 1,
    _0x16a6bf['duration'] = 500,
    _0x16a6bf['delay'] = 250,
    _0x16a6bf.ease = 'Back',
    _0x16a6bf.paused = true,
    this.screenPausedContinueTweenIn = this.tweens['add'](_0x16a6bf);
    var _0x5880f9 = {};
    _0x5880f9.targets = this['screenPausedText'],
    _0x5880f9.alpha = 1,
    _0x5880f9['duration'] = 250,
    _0x5880f9.ease = 'Linear',
    _0x5880f9.paused = true,
    this.screenPausedTextTweenIn = this.tweens.add(_0x5880f9);
    var _0x54b6aa = {};
    _0x54b6aa.targets = this.screenPausedBox,
    _0x54b6aa.alpha = 1,
    _0x54b6aa['duration'] = 250,
    _0x54b6aa.ease = 'Linear',
    _0x54b6aa.paused = true,
    this['screenPausedBoxTweenIn'] = this.tweens.add(_0x54b6aa);
    var _0x26e288 = {};
    _0x26e288.targets = this.screenPausedBg,
    _0x26e288.alpha = 0.5,
    _0x26e288['duration'] = 250,
    _0x26e288.ease = 'Linear',
    _0x26e288.paused = true,
    this.screenPausedBgTweenIn = this.tweens['add'](_0x26e288);
    var _0x2c8942 = {};
    _0x2c8942.targets = this.screenPausedBack,
    _0x2c8942['x'] = - this.screenPausedBack.width - 20,
    _0x2c8942.alpha = 0,
    _0x2c8942['duration'] = 500,
    _0x2c8942.ease = 'Back',
    _0x2c8942.paused = true,
    this['screenPausedBackTweenOut'] = this.tweens.add(_0x2c8942);
    var _0x27cf2e = {};
    _0x27cf2e.targets = this.screenPausedContinue,
    _0x27cf2e['x'] = EPT.world.width + this.screenPausedContinue.width + 20,
    _0x27cf2e.alpha = 0,
    _0x27cf2e['duration'] = 500,
    _0x27cf2e.ease = 'Back',
    _0x27cf2e.paused = true,
    this.screenPausedContinueTweenOut = this.tweens.add(_0x27cf2e);
    var _0x2c8259 = {};
    _0x2c8259.targets = this['screenPausedText'],
    _0x2c8259.alpha = 0,
    _0x2c8259['duration'] = 250,
    _0x2c8259.ease = 'Linear',
    _0x2c8259.paused = true,
    this.screenPausedTextTweenOut = this.tweens.add(_0x2c8259);
    var _0x4903e1 = {};
    _0x4903e1.targets = this.screenPausedBox,
    _0x4903e1.alpha = 0,
    _0x4903e1['duration'] = 250,
    _0x4903e1.ease = 'Linear',
    _0x4903e1.paused = true,
    this['screenPausedBoxTweenOut'] = this.tweens.add(_0x4903e1);
    var _0xff75fd = {};
    _0xff75fd.targets = this['screenPausedBg'],
    _0xff75fd.alpha = 0,
    _0xff75fd['duration'] = 250,
    _0xff75fd.ease = 'Linear',
    _0xff75fd.paused = true,
    this.screenPausedBgTweenOut = this.tweens.add(_0xff75fd),
    this['screenGameoverGroup'] = this.add['group'](),
    this['screenGameoverBg'] = this.add.sprite(
      EPT.world['centerX'],
      EPT['world']['centerY'],
      'overlay'
    ),
    this['screenGameoverBg']['setAlpha'](0.5),
    this['screenGameoverBox'] = this.add.sprite(
      EPT.world['centerX'],
      EPT['world']['centerY'],
      'box'
    ),
    this['screenGameoverBox'].setOrigin(0.5),
    this['screenGameoverText'] = this.add.text(
      EPT['world']['centerX'],
      320,
        EPT.Lang.getText('gameplay-gameover'),
      _0x5bd956
    ),
    this['screenGameoverText'].setOrigin(0.5, 0),
    this['screenGameoverBack'] = new Button(
      175,
      EPT.world['height'] - 340,
      'button-home',
      this['stateBack'],
      this
    ),
    this['screenGameoverBack'].setOrigin(0, 1),
    this['screenGameoverRestart'] = new Button(
      EPT['world'].width - 175,
      EPT.world['height'] - 340,
      'button-tryagain',
      this['stateRestart'],
      this
    ),
    this['screenGameoverRestart'].setOrigin(1, 1),
    this['screenGameoverScore'] = this.add.text(
      EPT.world['centerX'],
      440,
      this._score,
      _0x4edc1b
    ),
    this['screenGameoverScore'].setOrigin(0.5),
    this['screenGameoverGroup'].add(this['screenGameoverBg']),
    this['screenGameoverGroup'].add(this['screenGameoverBox']),
    this['screenGameoverGroup'].add(this['screenGameoverText']),
    this['screenGameoverGroup'].add(this['screenGameoverBack']),
    this['screenGameoverGroup'].add(this['screenGameoverRestart']),
    this['screenGameoverGroup'].add(this['screenGameoverScore']),
    this['screenGameoverGroup']['toggleVisible']();
  }
  [
    'startPlaying'
  ]() {
    this['spawnPlayer'](),
    this['initBubbles']();
    var _0x583c1f = {};
    _0x583c1f['delay'] = 1000,
    _0x583c1f['loop'] = true,
    _0x583c1f['callback'] = this['spawnBubble'],
    _0x583c1f['callbackScope'] = this,
    this.bubbleTimer = this['time']['addEvent'](_0x583c1f),
    this['initItems']();
    var _0x69c6db = {};
    _0x69c6db['delay'] = 1000,
    _0x69c6db['loop'] = true,
    _0x69c6db['callback'] = this['spawnItem'],
    _0x69c6db['callbackScope'] = this,
    this.itemTimer = this['time']['addEvent'](_0x69c6db),
    this['initBoss']();
    var _0x220431 = {};
    _0x220431['delay'] = 30000,
    _0x220431['loop'] = true,
    _0x220431['callback'] = this['spawnBoss'],
    _0x220431['callbackScope'] = this,
    this.timerBoss = this['time']['addEvent'](_0x220431),
    this['initParticles'](),
    this['initHitAnim']();
    for (var _0x2f14d0 = 0; _0x2f14d0 < 15; _0x2f14d0++) {
      this['spawnBubble']('randomPosY');
    }
    this['initMessage'](),
    this.stateStatus = 'playing';
  }
  [
    'spawnPlayer'
  ]() {
    this._player = this['physics'].add.sprite(
      EPT['world']['centerX'],
      EPT['world']['height'] - 200,
      'player'
    ),
    this._player['body']['setCircle'](50),
    this._player['setImmovable'](true),
    this._player.setOrigin(0.5),
    this['_trace'] = this.add.sprite(100, 100, 'player-trace'),
    this['_trace'].setOrigin(0.5, 0),
    this['_trace'].alpha = 0;
    var _0x4157d5 = {};
    _0x4157d5.targets = this['_trace'],
    _0x4157d5.alpha = 0,
    _0x4157d5['duration'] = 350,
    _0x4157d5.ease = 'Linear.None',
    _0x4157d5.paused = true,
    this['traceTweenOut'] = this.tweens['add'](_0x4157d5);
    var _0x4d9d0e = {};
    _0x4d9d0e['frames'] = [
      0
    ];
    var _0x35c885 = {};
    _0x35c885['key'] = 'player-static',
    _0x35c885['frames'] = this['anims']['generateFrameNumbers']('player', _0x4d9d0e),
    _0x35c885['frameRate'] = 6,
    _0x35c885['repeat'] = - 1,
    this['anims']['create'](_0x35c885);
    var _0x94eaa2 = {};
    _0x94eaa2['frames'] = [
      0,
      2,
      1,
      2
    ];
    var _0x5c414c = {};
    _0x5c414c['key'] = 'player-idle',
    _0x5c414c['frames'] = this['anims']['generateFrameNumbers']('player', _0x94eaa2),
    _0x5c414c['frameRate'] = 6,
    _0x5c414c['repeat'] = - 1,
    this['anims']['create'](_0x5c414c);
    var _0x1244ae = {};
    _0x1244ae['frames'] = [
      3,
      4,
      5
    ];
    var _0x36bda4 = {};
    _0x36bda4['key'] = 'player-attack',
    _0x36bda4['frames'] = this['anims']['generateFrameNumbers']('player', _0x1244ae),
    _0x36bda4['frameRate'] = 6,
    _0x36bda4['repeat'] = - 1,
    this['anims']['create'](_0x36bda4),
    this._player.play('player-idle'),
    this._player['setAlpha'](0),
    this._player['setScale'](0.25),
    this['_playerY'] = this._player['y'],
    this._player['y'] = EPT.world['height'] + this._player['displayHeight'] * 2;
    var _0x1e024b = {};
    _0x1e024b.targets = this._player,
    _0x1e024b.alpha = 1,
    _0x1e024b['scale'] = 1,
    _0x1e024b['y'] = this['_playerY'],
    _0x1e024b['duration'] = 1000,
    _0x1e024b.ease = 'Expo.easeOut',
    this['playerTweenIn'] = this.tweens.add(_0x1e024b);
  }
  [
    'initLives'
  ]() {
    this['_lives'] = 3;
    var _0x4fac2f = 37,
    _0x25e183 = 90;
    this['livesImg'] = [],
    this['add'].sprite(_0x4fac2f, _0x25e183, 'life', 1),
    this.add['sprite'](_0x4fac2f + 53, _0x25e183, 'life', 1),
    this['add'].sprite(_0x4fac2f + 106, _0x25e183, 'life', 1),
    this['livesImg'][0] = this.add['sprite'](_0x4fac2f, _0x25e183, 'life', 0) ['setScale'](0),
    this['livesImg'][1] = this.add['sprite'](_0x4fac2f + 53, _0x25e183, 'life', 0) ['setScale'](0),
    this['livesImg'][2] = this.add.sprite(_0x4fac2f + 106, _0x25e183, 'life', 0) ['setScale'](0);
    var _0x5ae627 = {};
    _0x5ae627.targets = this['livesImg'][0],
    _0x5ae627['scale'] = 1,
    _0x5ae627['duration'] = 250,
    _0x5ae627['delay'] = 400,
    _0x5ae627.ease = 'Back',
    this.tweens.add(_0x5ae627);
    var _0x1a5dae = {};
    _0x1a5dae.targets = this['livesImg'][1],
    _0x1a5dae['scale'] = 1,
    _0x1a5dae['duration'] = 250,
    _0x1a5dae['delay'] = 600,
    _0x1a5dae.ease = 'Back',
    this.tweens.add(_0x1a5dae);
    var _0xed7af4 = {};
    _0xed7af4.targets = this['livesImg'][2],
    _0xed7af4['scale'] = 1,
    _0xed7af4['duration'] = 250,
    _0xed7af4['delay'] = 800,
    _0xed7af4.ease = 'Back',
    this.tweens.add(_0xed7af4);
  }
  [
    'removeLife'
  ]() {
    EPT.Sfx.play('pain'),
    this._lives -= 1,
    this.cameras.main.shake(200, 0.015, true);
    try {
        window.navigator.vibrate(100);
    } catch (e) {
        console.error(e);
    }
    switch (this._lives) {
      case 2:
        {
          var _0x18eb90 = {};
          _0x18eb90.targets = this['livesImg'][2],
          _0x18eb90['scaleX'] = 0,
          _0x18eb90['scaleY'] = 0,
          _0x18eb90['duration'] = 500,
          _0x18eb90.ease = 'Back',
          this.tweens.add(_0x18eb90);
          break;
        }
      case 1:
        {
          var _0x394904 = {};
          _0x394904.targets = this['livesImg'][1],
          _0x394904['scaleX'] = 0,
          _0x394904['scaleY'] = 0,
          _0x394904['duration'] = 500,
          _0x394904.ease = 'Back',
          this.tweens.add(_0x394904);
          break;
        }
      case 0:
        {
          this['livesImg'][0]['setScale'](0),
          this.stateStatus = 'gameover';
          break;
        }
    }
  }
  [
    'initMessage'
  ]() {
    this['_message'] = this.add.text(
      EPT.world['centerX'],
      EPT['world']['centerY'],
      'Combo x0!',
      {
        'font': '38px ' + EPT.Lang.getText('FONT'),
        'fill': '#ff00fc'
      }
    ),
    this['_message'].setOrigin(0.5),
    this['_message']['setAlpha'](0);
    var _0x493ffe = {};
    _0x493ffe.targets = this['_message'],
    _0x493ffe['scale'] = 2,
    _0x493ffe.alpha = 0,
    _0x493ffe['duration'] = 1000,
    _0x493ffe.ease = 'Linear',
    _0x493ffe.paused = true,
    this['_messageTween'] = this.tweens.add(_0x493ffe);
  }
  [
    'showMessage'
  ](_0x312c31) {
    this['_message']['setText'](_0x312c31),
    !this['_messageTween']['isPlaying']() &&
    (
      this['_message']['setAlpha'](1),
      this['_messageTween'].play()
    );
  }
  [
    'showCollectedScore'
  ](_0x47f9c6, _0x4d6fe2, _0x4fe309) {
    var _0x482c9f = {};
    _0x482c9f.font = '38px ' + EPT.Lang.getText('FONT'),
    _0x482c9f.fill = '#ff00fc';
    var _0xfee592 = this.add.text(_0x47f9c6, _0x4d6fe2, _0x4fe309, _0x482c9f);
    _0xfee592.setOrigin(0.5, 0.5);
    var _0x43d4e2 = {};
    _0x43d4e2.targets = _0xfee592,
    _0x43d4e2.alpha = 0,
    _0x43d4e2['y'] = _0x4d6fe2 - 25,
    _0x43d4e2.duration = 1000,
    _0x43d4e2.ease = 'Linear',
    this['collectedScoreMessageTween'] = this.tweens.add(_0x43d4e2);
  }
  [
    'stateRestart'
  ]() {
    EPT['Sfx'].play('click'),
    EPT['fadeOutScene']('Game', this);
  }
  [
    'stateBack'
  ]() {
    EPT['Sfx'].play('click'),
    EPT['fadeOutScene']('MainMenu', this);
  }
  [
    'gameoverScoreTween'
  ]() {
    this.screenGameoverScore.setText('0');
    if (this._score) {
      var _0x2942ca = 1500;
      if (this._score < 100)
      _0x2942ca = 1000;
       else
      this._score < 1000 ? _0x2942ca = 2000 : _0x2942ca = 2500;
      this.screenGameoverScore.setScale(0.2);
      var _0x4a3679 = {};
      _0x4a3679.targets = this.screenGameoverScore,
      _0x4a3679.scale = 1,
      _0x4a3679.duration = _0x2942ca,
      _0x4a3679.ease = 'Linear',
      _0x4a3679.onComplete = function () {
        var _0x20c097 = {};
        _0x20c097.targets = this.screenGameoverScore,
        _0x20c097['scale'] = 1,
        _0x20c097['duration'] = 500,
        _0x20c097.ease = 'Quart.easeOut',
        this.screenGameoverScoreTweenBounceIn = this.tweens.add(_0x20c097);
        var _0x85574e = {};
        _0x85574e.targets = this.screenGameoverScore,
        _0x85574e.scale = 1.5,
        _0x85574e.duration = 500,
        _0x85574e.delay = 500,
        _0x85574e.ease = 'Quart.easeIn',
        this.screenGameoverScoreTweenBounceOut = this.tweens.add(_0x85574e);
        var _0x4b1a7f = {};
        _0x4b1a7f.delay = 1000,
        _0x4b1a7f.loop = true,
        _0x4b1a7f.callback = function () {
          this.screenGameoverScoreTweenBounceIn.play(),
          this.screenGameoverScoreTweenBounceOut.play();
        },
        _0x4b1a7f.callbackScope = this,
        this.screenGameoverScoreTimer = this.time.addEvent(_0x4b1a7f);
      },
      _0x4a3679.onCompleteScope = this,
      this.screenGameoverScoreTween = this.tweens.add(_0x4a3679);
      var _0x4fe7c0 = {};
      _0x4fe7c0['from'] = 0,
      _0x4fe7c0['to'] = this._score,
      _0x4fe7c0['duration'] = _0x2942ca,
      _0x4fe7c0.delay = 250,
      _0x4fe7c0['onUpdateScope'] = this,
      _0x4fe7c0.onCompleteScope = this,
      _0x4fe7c0['onUpdate'] = function () {
        this.screenGameoverScore.setText(
          Math.floor(this.pointsTween.getValue())
        );
      },
      _0x4fe7c0['onComplete'] = function () {
        var _0x165eeb = {};
        _0x165eeb.min = 0,
        _0x165eeb.max = 200;
        var _0x40783a = {};
        _0x40783a.min = 0,
        _0x40783a.max = 360;
        var _0x27fcd5 = {};
        _0x27fcd5.start = 1,
        _0x27fcd5.end = 0;
        var _0x46bb4b = {};
        _0x46bb4b.start = 0.5,
        _0x46bb4b.end = 0;
        var _0x186fb2 = {};
        _0x186fb2['x'] = this['screenGameoverScore']['x'] - 100,
        _0x186fb2['y'] = this['screenGameoverScore']['y'] - this['screenGameoverScore']['displayHeight'] + 30,
        _0x186fb2['speed'] = _0x165eeb,
        _0x186fb2['angle'] = _0x40783a,
        _0x186fb2['scale'] = _0x27fcd5,
        _0x186fb2.alpha = _0x46bb4b,
        _0x186fb2['blendMode'] = 'ADD',
        _0x186fb2['active'] = true,
        _0x186fb2['lifespan'] = 1500,
        _0x186fb2['gravityY'] = 200,
        _0x186fb2['quantity'] = 100;
        var _0x23332f = this.add.particles('bubble').createEmitter(_0x186fb2);
        _0x23332f.explode();
        var _0x1de979 = {};
        _0x1de979.min = 0,
        _0x1de979.max = 200;
        var _0x3e1753 = {};
        _0x3e1753['min'] = 0,
        _0x3e1753.max = 360;
        var _0x192873 = {};
        _0x192873.start = 1,
        _0x192873['end'] = 0;
        var _0x5c6f8b = {};
        _0x5c6f8b.start = 0.5,
        _0x5c6f8b.end = 0;
        var _0x3ccf1e = {};
        _0x3ccf1e['x'] = this.screenGameoverScore['x'] + 100,
        _0x3ccf1e['y'] = this.screenGameoverScore['y'] - this.screenGameoverScore.displayHeight + 30,
        _0x3ccf1e['speed'] = _0x1de979,
        _0x3ccf1e['angle'] = _0x3e1753,
        _0x3ccf1e['scale'] = _0x192873,
        _0x3ccf1e.alpha = _0x5c6f8b,
        _0x3ccf1e['blendMode'] = 'ADD',
        _0x3ccf1e['active'] = true,
        _0x3ccf1e['lifespan'] = 1500,
        _0x3ccf1e['gravityY'] = 200,
        _0x3ccf1e['quantity'] = 100;
        var _0x3941ff = this.add.particles('bubble').createEmitter(_0x3ccf1e);
        _0x3941ff.explode();
      },
      this.pointsTween = this.tweens.addCounter(_0x4fe7c0);
    }
  }
  [
    'click'
  ]() {
    this['playerTweenIn']['isPlaying']() &&
    (
      this['playerTweenIn']['stop'](),
      this._player['setAlpha'](1),
      this['_player']['setScale'](1)
    );
    this.comboCounter = 0;
    this['bonusMeter'] &&
    this['bonusMeter']['active'] &&
    (this._boss['vulnerable'] = true);
    this.introText.alpha == 1 &&
    (
      this.introTextTweenOut.play(),
      this.introVirus1TweenOut.play(),
      this.introVirus2TweenOut.play(),
      this.introVirus3TweenOut.play(),
      this.introFriendlyTweenOut.play()
    );
    if (
      !this._gamePaused &&
      this.stateStatus != 'paused' &&
      this.stateStatus != 'gameover'
    ) {
      this['_player'].play('player-attack');
      var _0x420d72 = {};
      _0x420d72['x'] = this.input['x'],
      _0x420d72['y'] = this.input['y'];
      var _0x6eaa87 = _0x420d72,
      _0x1f2080 = Phaser['Math']['Distance']['BetweenPoints'](this['_player'], _0x6eaa87);
      _0x1f2080 < 185 ? _0x1f2080 < 50 ? (
        this['_trace']['displayHeight'] = 50,
        this['_trace'].alpha = 0.3
      ) : (
        this['_trace']['displayHeight'] = _0x1f2080,
        this['_trace'].alpha = 0.6
      ) : (
        this['_trace']['displayHeight'] = 185,
        this['_trace'].alpha = 0.9
      );
      var _0x3cb623 = {};
      _0x3cb623.targets = this._player,
      _0x3cb623['x'] = _0x6eaa87['x'],
      _0x3cb623['y'] = _0x6eaa87['y'],
      _0x3cb623['duration'] = 500,
      _0x3cb623.ease = 'Expo.easeOut',
      this['_playerTweenMove'] = this.tweens.add(_0x3cb623),
      this['time'].delayedCall(
        500,
        function () {
          this['_player']['play']('player-idle'),
          this['comboCounter'] = 0;
        },
        [],
        this
      ),
      this['traceTweenOut'].play();
    }
  }
  [
    'initBubbles'
  ]() {
    this['bubbleGroup'] = this.add['group']();
    var _0x2b458a = {};
    _0x2b458a['active'] = false,
    _0x2b458a['visible'] = false,
    _0x2b458a['key'] = 'bubble',
    _0x2b458a['repeat'] = 40,
    this['bubbleGroup']['createMultiple'](_0x2b458a);
  }
  [
    'spawnBubble'
  ](_0x191eb8) {
    this['bubbleTimer']['delay'] = Phaser['Math']['Between'](250, 1000);
    var _0x486a88 = this['bubbleGroup']['getFirstDead']();
    _0x486a88 &&
    (
      _0x486a88['active'] = true,
      _0x486a88['visible'] = true,
      _0x486a88['x'] = Phaser['Math']['Between'](10, EPT.world.width - 10),
      _0x486a88['y'] = _0x191eb8 ? Phaser['Math']['Between'](10, EPT['world']['height'] - 10) : - 10,
      _0x486a88['velX'] = Phaser['Math']['Between']( - 5, 5) * 0.2,
      _0x486a88['velY'] = Phaser['Math']['Between'](1, 5) * 0.5,
      _0x486a88.alpha = Phaser['Math']['Between'](1, 75) * 0.01,
      _0x486a88['setScale'](Phaser['Math']['Between'](50, 100) * 0.01)
    );
  }
  [
    'initItems'
  ]() {
    this['itemGroup'] = this['physics']['add']['group']();
    var _0x478d54 = {};
    _0x478d54['active'] = false,
    _0x478d54['visible'] = false,
    _0x478d54['quantity'] = 40,
    _0x478d54['key'] = 'virus1',
    _0x478d54['frame'] = [
      0
    ],
    this['itemGroup']['createMultiple'](_0x478d54);
    for (var _0x108740 = 1; _0x108740 <= 5; _0x108740++) {
      for (var _0x30249b = 1; _0x30249b <= 5; _0x30249b++) {
        var _0x3904 = {};
        _0x3904['key'] = 'virus' + _0x108740 + '-static' + _0x30249b,
        _0x3904['frames'] = this['anims']['generateFrameNumbers']('virus' + _0x108740, {
          'frames': [
            _0x30249b - 1
          ]
        }),
        this['anims']['create'](_0x3904);
      }
      var _0x5ebcb5 = {};
      _0x5ebcb5['key'] = 'bomb-static' + _0x108740,
      _0x5ebcb5['frames'] = this['anims']['generateFrameNumbers']('bomb', {
        'frames': [
          _0x108740 - 1
        ]
      }),
      this['anims']['create'](_0x5ebcb5);
    }
  }
  [
    'spawnItem'
  ]() {
    this.timerItemsShrinking > 500 &&
    (this['timerItemsShrinking'] -= 10);
    var _0x5923b9 = Phaser['Math']['Between'](this['timerItemsShrinking'] - 250, this.timerItemsShrinking + 250);
    this['itemTimer']['delay'] = _0x5923b9;
    var _0x5d6f0c = this['itemGroup']['getFirstDead']();
    if (_0x5d6f0c['visible'])
    var _0x5d6f0c = this['itemGroup']['getFirstDead']();
    var _0x5535b3 = Phaser.Math.Between(1, 10),
    _0x43361f = 'virus';
    _0x5535b3 == 7 &&
    (_0x43361f = 'bomb');
    if (_0x5d6f0c) {
      _0x5d6f0c['_type'] = _0x43361f,
      _0x5d6f0c.setOrigin(0.5),
      _0x5d6f0c['setActive'](true) ['setVisible'](true),
      _0x5d6f0c['x'] = Phaser['Math']['Between'](60, EPT.world.width - 60),
      _0x5d6f0c['y'] = - 150;
      var _0xa60860 = Phaser['Math']['Between'](175, 200) * (1000 / this['timerItemsShrinking']);
      _0x5d6f0c['body']['velocity']['set'](0, _0xa60860),
      _0x5d6f0c['setImmovable'](true);
      if (_0x43361f == 'bomb') {
        var _0x46ae15 = Phaser['Math']['Between'](85, 100) * 0.01;
        _0x5d6f0c.play(
          'bomb-static' + Phaser['Math']['Between'](1, 5)
        ),
        _0x5d6f0c['setAlpha'](Phaser['Math']['Between'](85, 100) * 0.01),
        _0x5d6f0c['setScale'](_0x46ae15),
        _0x5d6f0c['body']['setCircle'](20 * _0x46ae15),
        _0x5d6f0c['body']['setOffset'](45, 45),
        _0x5d6f0c['setAngle'](0),
        _0x5d6f0c['setRotation'](0),
        _0x5d6f0c['rotateMe'] = 0;
      } else {
        this.spawnedVirusesCounter++;
        if (this.spawnedVirusesCounter <= 10)
        var _0x3e6d47 = 1;
         else {
          if (this.spawnedVirusesCounter <= 20)
          var _0x3e6d47 = 2;
           else {
            if (this.spawnedVirusesCounter <= 30)
            var _0x3e6d47 = 3;
             else {
              if (this.spawnedVirusesCounter <= 40)
              var _0x3e6d47 = 4;
               else
              var _0x3e6d47 = 5;
            }
          }
        }
        var _0x1c7dc0 = Phaser['Math']['Between'](75, 100) * 0.01,
        _0x51facc = Phaser['Math']['Between'](1, _0x3e6d47);
        _0x5d6f0c.play(
          'virus' + _0x51facc + '-static' + Phaser['Math']['Between'](1, 5)
        ),
        _0x5d6f0c['rotateMe'] = Phaser['Math']['Between']( - 10, 10) * 0.001,
        _0x5d6f0c['setAlpha'](Phaser['Math']['Between'](75, 100) * 0.01),
        _0x5d6f0c['setScale'](_0x1c7dc0),
        _0x5d6f0c['body']['setCircle'](50 * _0x1c7dc0),
        _0x5d6f0c['body']['setOffset'](20, 20),
        _0x5d6f0c['scoreMultiplier'] = _0x51facc;
      }
    }
  }
  [
    'hitItem'
  ](_0x2837e9, _0x3f5a7f) {
    if (_0x3f5a7f['active']) {
      this['itemGroup']['kill'](_0x3f5a7f),
      _0x3f5a7f['body']['velocity']['set'](0, 0);
      if (_0x3f5a7f['_type'] == 'bomb') {
        this['removeLife']();
        var _0x1f2578 = {};
        _0x1f2578.targets = _0x3f5a7f,
        _0x1f2578.alpha = 0,
        _0x1f2578['scale'] = 0,
        _0x1f2578['duration'] = 150,
        _0x1f2578.ease = 'Linear',
        _0x1f2578['onComplete'] = function () {
        this.itemGroup.killAndHide(_0x3f5a7f);
        },
        _0x1f2578['onCompleteScope'] = this,
        this['itemHitTween'] = this.tweens['add'](_0x1f2578);
      } else {
        EPT['Sfx'].play('blood'),
        this.comboCounter++;
        this['comboCounter'] > 1 &&
        this['showMessage']('Combo x' + this['comboCounter'] + '!');
        this._score += 10 * _0x3f5a7f['scoreMultiplier'] * this.comboCounter,
        this['textScore']['setText']('' + this._score),
        this['showCollectedScore'](
          _0x3f5a7f['x'],
          _0x3f5a7f['y'],
          '+' + 10 * _0x3f5a7f['scoreMultiplier'] * this.comboCounter
        );
        var _0x333d72 = this.comboCounter,
        _0x44e46e = {};
        _0x44e46e.targets = _0x3f5a7f,
        _0x44e46e.alpha = 0,
        _0x44e46e['scaleX'] = 0,
        _0x44e46e['scaleY'] = 0,
        _0x44e46e['duration'] = 150,
        _0x44e46e.ease = 'Linear',
        _0x44e46e['onComplete'] = function () {
          this['spawnParticles'](_0x3f5a7f['x'], _0x3f5a7f['y'], _0x333d72),
          this['itemGroup']['killAndHide'](_0x3f5a7f);
        },
        _0x44e46e['onCompleteScope'] = this,
        this['itemHideTween'] = this.tweens['add'](_0x44e46e);
      }
    }
  }
  [
    'initParticles'
  ]() {
    this['particleGroup'] = this.add['group']();
    var _0x332925 = {};
    _0x332925['active'] = false,
    _0x332925['visible'] = false,
    _0x332925['quantity'] = 40,
    _0x332925['key'] = 'particle',
    _0x332925['frame'] = [
      0
    ],
    this['particleGroup']['createMultiple'](_0x332925);
  }
  [
    'spawnParticles'
  ](_0x324f17, _0x2c1b01, _0x329fea) {
    for (var _0x70a20c = 0; _0x70a20c < _0x329fea; _0x70a20c++) {
      var _0x5450d5 = Phaser['Math']['Between']( - 30, 30),
      _0x58df4c = Phaser['Math']['Between']( - 30, 30);
      this['spawnParticle'](_0x324f17 + _0x5450d5, _0x2c1b01 + _0x58df4c);
    }
  }
  [
    'spawnParticle'
  ](_0xa7eaf5, _0x301568) {
    var _0x230604 = this['particleGroup']['getFirstDead']();
    if (_0x230604) {
      _0x230604['active'] = true,
      _0x230604['visible'] = true,
      _0x230604['x'] = _0xa7eaf5,
      _0x230604['y'] = _0x301568,
      _0x230604.alpha = 0;
      var _0x208fd2 = {};
      _0x208fd2.targets = _0x230604,
      _0x208fd2.alpha = 1,
      _0x208fd2['duration'] = 250,
      _0x208fd2.ease = 'Linear',
      this['newParticleTweenIn'] = this.tweens.add(_0x208fd2);
      var _0x138833 = Phaser['Math']['Between'](750, 1250),
      _0x597ead = {};
      _0x597ead.targets = _0x230604,
      _0x597ead['x'] = 30,
      _0x597ead['y'] = 30,
      _0x597ead.alpha = 0,
      _0x597ead['duration'] = 1250,
      _0x597ead.ease = 'Expo.easeOut',
      _0x597ead['delay'] = _0x138833,
      _0x597ead['onComplete'] = function () {
        _0x230604['active'] = false,
        _0x230604['visible'] = false;
      },
      _0x597ead['onCompleteScope'] = this,
      this['newParticleTweenMove'] = this.tweens.add(_0x597ead);
    }
  }
  [
    'initBoss'
  ]() {
    this._boss = this['physics'].add.sprite(EPT.world['centerX'], - 150, 'boss'),
    this._boss.setOrigin(0.5),
    this._boss['vulnerable'] = true,
    this._boss['health'] = 20,
    this._boss['body']['setSize'](230, 190, 40, 40),
    this._boss['alive'] = false;
    var _0x41127b = {};
    _0x41127b.targets = this._boss,
    _0x41127b.alpha = 0.75,
    _0x41127b['duration'] = 5000,
    _0x41127b.ease = 'Linear',
    _0x41127b.paused = true,
    this['bossTweenIn'] = this.tweens.add(_0x41127b);
  }
  [
    'spawnBoss'
  ]() {
    if (!this._boss['alive']) {
      this._boss['active'] = true,
      this._boss['visible'] = true,
      this._boss['alive'] = true,
      this._boss['x'] = EPT.world['centerX'],
      this._boss['y'] = - 150,
      this._boss['health'] = 20,
      this['bonusMeter'] = this.add.sprite(0, - 150, 'life-bar'),
      this['bonusMeter'].setOrigin(0.5),
      this['bonusMeter']['setScale'](0.2),
      this['bonusMeter']['displayWidth'] = 200,
      this['bonusMeter']['active'] = true,
      this['bonusMeter']['visible'] = true,
      this._boss['body']['velocity']['y'] = 75,
      this._boss.alpha = 0.1,
      this['bossTweenIn']['play'](),
      this['tweenBossPart1'] = null,
      this['tweenBossPart2'] = null;
      var _0x281c25 = {};
      _0x281c25.targets = this._boss,
      _0x281c25['scale'] = 0.9,
      _0x281c25['duration'] = 1000,
      _0x281c25.ease = 'Quart.easeOut',
      _0x281c25['onComplete'] = function () {
        var _0x1b1e7c = {};
        _0x1b1e7c.targets = this._boss,
        _0x1b1e7c['scale'] = 1.1,
        _0x1b1e7c['duration'] = 2000,
        _0x1b1e7c.ease = 'Quart.easeIn',
        this['tweenBossPart2'] = this.tweens['add'](_0x1b1e7c);
      },
      _0x281c25['onCompleteScope'] = this,
      this['tweenBossPart1'] = this.tweens.add(_0x281c25);
      var _0x10e143 = {};
      _0x10e143['delay'] = 3000,
      _0x10e143['loop'] = true,
      _0x10e143['callback'] = function () {
        var _0x54004c = {};
        _0x54004c.targets = this._boss,
        _0x54004c['scale'] = 0.9,
        _0x54004c['duration'] = 1000,
        _0x54004c.ease = 'Quart.easeOut',
        _0x54004c['onComplete'] = function () {
          var _0x5cdcbb = {};
          _0x5cdcbb.targets = this._boss,
          _0x5cdcbb['scale'] = 1.1,
          _0x5cdcbb['duration'] = 2000,
          _0x5cdcbb.ease = 'Quart.easeIn',
          this['tweenBossPart2'] = this.tweens['add'](_0x5cdcbb);
        },
        _0x54004c['onCompleteScope'] = this,
        this['tweenBossPart1'] = this.tweens['add'](_0x54004c);
      },
      _0x10e143['callbackScope'] = this,
      this['BossLoop'] = this['time']['addEvent'](_0x10e143);
    }
  }
  [
    'hitBoss'
  ]() {
    if (this._boss['vulnerable']) {
      this._boss['health']--,
      this._boss['vulnerable'] = false,
      this['cameras'].main['shake'](150, 0.01, true),
      this['showHitAnim'](this._boss['x'], this._boss['y']);
      var _0x1abce9 = this['bonusMeter']['displayWidth'] - 10,
      _0x508a99 = {};
      _0x508a99.targets = this['bonusMeter'],
      _0x508a99['displayWidth'] = _0x1abce9,
      _0x508a99['duration'] = 100,
      _0x508a99.ease = 'Linear',
      this['bonusMeterTween'] = this.tweens.add(_0x508a99);
      if (!this._boss['health']) {
        this['bonusMeter']['active'] = false,
        this['bonusMeter']['visible'] = false,
        this.cameras.main.flash(500),
        this._boss['alive'] = false;
        var _0x3cce41 = {};
        _0x3cce41.targets = this._boss,
        _0x3cce41['scale'] = 0,
        _0x3cce41.alpha = 0,
        _0x3cce41['duration'] = 1500,
        _0x3cce41.ease = 'Linear',
        _0x3cce41['onComplete'] = function () {
          this['spawnParticles'](this._boss['x'], this._boss['y'], 20),
          this._score += 200,
          this['showMessage']('Bonus +200!'),
          this._boss['active'] = false,
          this._boss['visible'] = false;
        },
        _0x3cce41['onCompleteScope'] = this,
        this['bossKillTween'] = this.tweens.add(_0x3cce41);
      }
    }
  }
  [
    'initHitAnim'
  ]() {
    this._hit = this.add['sprite'](0, 0, 'hits', 0),
    this._hit.setOrigin(0.5),
    this._hit.alpha = 0;
    var _0x66cbbc = {};
    _0x66cbbc.targets = this._hit,
    _0x66cbbc.alpha = 0,
    _0x66cbbc['duration'] = 500,
    _0x66cbbc.ease = 'Linear',
    _0x66cbbc.paused = true,
    this['hitAnimTween'] = this.tweens.add(_0x66cbbc);
  }
  [
    'showHitAnim'
  ](_0x49fbc1, _0x3dd2d8) {
    if (this.bonusMeter.active) {
      var _0x915a5e = Phaser.Math.Between( - 30, 30),
      _0x1a3564 = Phaser.Math.Between( - 30, 30);
      this._hit.setFrame(Phaser.Math.Between(0, 2)),
      this._hit['x'] = _0x49fbc1 + _0x915a5e,
      this._hit['y'] = _0x3dd2d8 + _0x1a3564,
      this._hit.alpha = 1,
      this.hitAnimTween.play();
    }
  }
}
