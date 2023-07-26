// const AudioEngineInstace = window.WebAudioEngine;





! function() {
    "use strict";
    var e, t = Laya.View,
        i = Laya.ClassUtils.regClass;
    ! function(e) {
        class t extends Laya.Scene {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("GameScene")
            }
        }
        e.GameSceneUI = t, i("ui.GameSceneUI", t);
        class a extends Laya.Scene {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("LoadingScene")
            }
        }
        e.LoadingSceneUI = a, i("ui.LoadingSceneUI", a)
    }(e || (e = {})),
    function(e) {
        ! function(e) {
            class a extends t {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Views/Begin")
                }
            }
            e.BeginUI = a, i("ui.Views.BeginUI", a);
            class s extends Laya.View {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Views/Option")
                }
            }
            e.OptionUI = s, i("ui.Views.OptionUI", s);
            class n extends Laya.Scene {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.createView(n.uiView)
                }
            }
            n.uiView = {
                type: "Scene",
                props: {
                    width: 750,
                    height: 1334
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        top: 0,
                        skin: "ui/bg.jpg",
                        right: 0,
                        left: 0,
                        bottom: -20
                    },
                    compId: 3
                }, {
                    type: "Button",
                    props: {
                        y: 51,
                        x: 23,
                        var: "btn_home",
                        stateNum: 1,
                        skin: "ui/btn_home1.png",
                        name: "btn_home"
                    },
                    compId: 4
                }, {
                    type: "Image",
                    props: {
                        skin: "ui/img_shop_k_bg.png",
                        name: "img",
                        centerY: -80,
                        centerX: 0
                    },
                    compId: 5,
                    child: [{
                        type: "Panel",
                        props: {
                            y: 90,
                            x: 53,
                            width: 705,
                            var: "pan",
                            name: "pan",
                            height: 471
                        },
                        compId: 7,
                        child: [{
                            type: "Box",
                            props: {
                                y: 12,
                                x: 40,
                                var: "box"
                            },
                            compId: 91,
                            child: [{
                                type: "Box",
                                props: {
                                    x: -20,
                                    var: "box1"
                                },
                                compId: 60,
                                child: [{
                                    type: "Image",
                                    props: {
                                        x: 20,
                                        var: "img_0",
                                        skin: "ui/img_k_1.png",
                                        name: "img_0"
                                    },
                                    compId: 9,
                                    child: [{
                                        type: "Sprite",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            var: "sp_0",
                                            texture: "ui/img_k_3.png",
                                            name: "sp_0"
                                        },
                                        compId: 15
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            var: "img_k_0",
                                            skin: "ui/img_k_2.png"
                                        },
                                        compId: 40
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 61,
                                            x: 74,
                                            var: "img_r_0",
                                            skin: "gameui/1.png",
                                            name: "img_r_0"
                                        },
                                        compId: 46
                                    }]
                                }, {
                                    type: "Image",
                                    props: {
                                        x: 240,
                                        var: "img_1",
                                        skin: "ui/img_k_1.png",
                                        name: "img_1"
                                    },
                                    compId: 10,
                                    child: [{
                                        type: "Sprite",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            var: "sp_1",
                                            texture: "ui/img_k_3.png",
                                            name: "sp_1"
                                        },
                                        compId: 16
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            var: "img_k_1",
                                            skin: "ui/img_k_2.png"
                                        },
                                        compId: 41
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 61,
                                            x: 74,
                                            var: "img_r_1",
                                            skin: "gameui/2.png",
                                            name: "img_r_1"
                                        },
                                        compId: 47
                                    }]
                                }, {
                                    type: "Image",
                                    props: {
                                        x: 460,
                                        var: "img_2",
                                        skin: "ui/img_k_1.png",
                                        name: "img_2"
                                    },
                                    compId: 11,
                                    child: [{
                                        type: "Sprite",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            var: "sp_2",
                                            texture: "ui/img_k_3.png",
                                            name: "sp_2"
                                        },
                                        compId: 17
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            var: "img_k_2",
                                            skin: "ui/img_k_2.png"
                                        },
                                        compId: 42
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 61,
                                            x: 74,
                                            var: "img_r_2",
                                            skin: "gameui/3.png",
                                            name: "img_r_2"
                                        },
                                        compId: 48
                                    }]
                                }, {
                                    type: "Image",
                                    props: {
                                        y: 216,
                                        x: 20,
                                        var: "img_3",
                                        skin: "ui/img_k_1.png",
                                        name: "img_3"
                                    },
                                    compId: 12,
                                    child: [{
                                        type: "Sprite",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            var: "sp_3",
                                            texture: "ui/img_k_3.png",
                                            name: "sp_3"
                                        },
                                        compId: 18
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            var: "img_k_3",
                                            skin: "ui/img_k_2.png"
                                        },
                                        compId: 43
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 61,
                                            x: 74,
                                            var: "img_r_3",
                                            skin: "gameui/4.png",
                                            name: "img_r_3"
                                        },
                                        compId: 49
                                    }]
                                }, {
                                    type: "Image",
                                    props: {
                                        y: 215,
                                        x: 240,
                                        var: "img_4",
                                        skin: "ui/img_k_1.png",
                                        name: "img_4"
                                    },
                                    compId: 13,
                                    child: [{
                                        type: "Sprite",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            var: "sp_4",
                                            texture: "ui/img_k_3.png",
                                            name: "sp_4"
                                        },
                                        compId: 19
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            var: "img_k_4",
                                            skin: "ui/img_k_2.png"
                                        },
                                        compId: 44
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 61,
                                            x: 74,
                                            var: "img_r_4",
                                            skin: "gameui/5.png",
                                            name: "img_r_4"
                                        },
                                        compId: 50
                                    }]
                                }, {
                                    type: "Image",
                                    props: {
                                        y: 215,
                                        x: 460,
                                        var: "img_5",
                                        skin: "ui/img_k_1.png",
                                        name: "img_5"
                                    },
                                    compId: 14,
                                    child: [{
                                        type: "Sprite",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            var: "sp_5",
                                            texture: "ui/img_k_3.png",
                                            name: "sp_5"
                                        },
                                        compId: 20
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            var: "img_k_5",
                                            skin: "ui/img_k_2.png"
                                        },
                                        compId: 45
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 61,
                                            x: 74,
                                            var: "img_r_5",
                                            skin: "gameui/6.png",
                                            name: "img_r_5"
                                        },
                                        compId: 51
                                    }]
                                }]
                            }, {
                                type: "Box",
                                props: {
                                    x: 665,
                                    var: "box2"
                                },
                                compId: 63,
                                child: [{
                                    type: "Image",
                                    props: {
                                        var: "img_6",
                                        skin: "ui/img_k_1.png"
                                    },
                                    compId: 64,
                                    child: [{
                                        type: "Sprite",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            var: "sp_6",
                                            texture: "ui/img_k_3.png"
                                        },
                                        compId: 65
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            var: "img_k_6",
                                            skin: "ui/img_k_2.png"
                                        },
                                        compId: 67
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 61,
                                            x: 74,
                                            var: "img_r_6",
                                            skin: "gameui/7.png"
                                        },
                                        compId: 66
                                    }]
                                }, {
                                    type: "Image",
                                    props: {
                                        x: 240,
                                        var: "img_7",
                                        skin: "ui/img_k_1.png"
                                    },
                                    compId: 68,
                                    child: [{
                                        type: "Sprite",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            var: "sp_7",
                                            texture: "ui/img_k_3.png"
                                        },
                                        compId: 69
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            var: "img_k_7",
                                            skin: "ui/img_k_2.png"
                                        },
                                        compId: 71
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 61,
                                            x: 74,
                                            var: "img_r_7",
                                            skin: "gameui/8.png"
                                        },
                                        compId: 70
                                    }]
                                }, {
                                    type: "Image",
                                    props: {
                                        x: 480,
                                        var: "img_8",
                                        skin: "ui/img_k_1.png"
                                    },
                                    compId: 72,
                                    child: [{
                                        type: "Sprite",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            var: "sp_8",
                                            texture: "ui/img_k_3.png"
                                        },
                                        compId: 73
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            var: "img_k_8",
                                            skin: "ui/img_k_2.png"
                                        },
                                        compId: 75
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 61,
                                            x: 74,
                                            var: "img_r_8",
                                            skin: "gameui/9.png"
                                        },
                                        compId: 74
                                    }]
                                }, {
                                    type: "Image",
                                    props: {
                                        y: 216,
                                        var: "img_9",
                                        skin: "ui/img_k_1.png"
                                    },
                                    compId: 76,
                                    child: [{
                                        type: "Sprite",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            var: "sp_9",
                                            texture: "ui/img_k_3.png"
                                        },
                                        compId: 77
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            var: "img_k_9",
                                            skin: "ui/img_k_2.png"
                                        },
                                        compId: 79
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 61,
                                            x: 74,
                                            var: "img_r_9",
                                            skin: "gameui/10.png"
                                        },
                                        compId: 78
                                    }]
                                }, {
                                    type: "Image",
                                    props: {
                                        y: 215,
                                        x: 240,
                                        var: "img_10",
                                        skin: "ui/img_k_1.png"
                                    },
                                    compId: 80,
                                    child: [{
                                        type: "Sprite",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            var: "sp_10",
                                            texture: "ui/img_k_3.png"
                                        },
                                        compId: 81
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            var: "img_k_10",
                                            skin: "ui/img_k_2.png"
                                        },
                                        compId: 83
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 61,
                                            x: 74,
                                            var: "img_r_10",
                                            skin: "gameui/11.png"
                                        },
                                        compId: 82
                                    }]
                                }, {
                                    type: "Image",
                                    props: {
                                        y: 215,
                                        x: 480,
                                        var: "img_11",
                                        skin: "ui/img_k_1.png"
                                    },
                                    compId: 84,
                                    child: [{
                                        type: "Sprite",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            var: "sp_11",
                                            texture: "ui/img_k_3.png"
                                        },
                                        compId: 85
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            var: "img_k_11",
                                            skin: "ui/img_k_2.png"
                                        },
                                        compId: 87
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 61,
                                            x: 74,
                                            var: "img_r_11",
                                            skin: "gameui/12.png"
                                        },
                                        compId: 86
                                    }]
                                }]
                            }]
                        }]
                    }, {
                        type: "Image",
                        props: {
                            y: 41,
                            x: 225,
                            skin: "ui/img_jsxpf.png"
                        },
                        compId: 21
                    }, {
                        type: "Button",
                        props: {
                            y: 630,
                            x: 120,
                            var: "btn_buy",
                            stateNum: 1,
                            skin: "ui/btn_buy.png",
                            name: "btn_buy"
                        },
                        compId: 22,
                        child: [{
                            type: "FontClip",
                            props: {
                                y: 33,
                                x: 107,
                                var: "txt_buy",
                                value: "1000",
                                skin: "ui/num2.png",
                                sheet: "1234567890",
                                clipX: 10
                            },
                            compId: 61
                        }]
                    }, {
                        type: "Button",
                        props: {
                            y: 630,
                            var: "btn_addgold",
                            stateNum: 1,
                            skin: "ui/btn_gold.png",
                            right: 120,
                            name: "btn_addgold"
                        },
                        compId: 23,
                        child: [{
                            type: "FontClip",
                            props: {
                                y: 37,
                                x: 120,
                                var: "txt_gold",
                                value: "30",
                                skin: "ui/num3.png",
                                sheet: "1234567890",
                                clipX: 10
                            },
                            compId: 62
                        }, {
                            type: "Image",
                            props: {
                                y: 45.5,
                                x: 86,
                                skin: "ui/img_jia.png"
                            },
                            compId: 88
                        }]
                    }, {
                        type: "Button",
                        props: {
                            y: 305.5,
                            var: "btn_right",
                            stateNum: 1,
                            skin: "ui/btn_right.png",
                            right: 68
                        },
                        compId: 89
                    }, {
                        type: "Button",
                        props: {
                            y: 305.5,
                            x: 66,
                            var: "btn_left",
                            stateNum: 1,
                            skin: "ui/btn_left.png"
                        },
                        compId: 90
                    }]
                }, {
                    type: "Box",
                    props: {
                        y: 51,
                        x: 132,
                        width: 212,
                        var: "box_gold",
                        height: 75
                    },
                    compId: 53,
                    child: [{
                        type: "Image",
                        props: {
                            y: 10,
                            x: 0,
                            var: "coin_img",
                            skin: "ui/img_gold.png",
                            name: "coin_img"
                        },
                        compId: 36,
                        child: [{
                            type: "Label",
                            props: {
                                y: 8.5,
                                x: 46,
                                width: 139,
                                var: "coin_label",
                                valign: "middle",
                                text: "label",
                                name: "coin_label",
                                height: 39,
                                fontSize: 40,
                                color: "#000000",
                                align: "center"
                            },
                            compId: 37
                        }]
                    }]
                }],
                loadList: ["ui/bg.jpg", "ui/btn_home1.png", "ui/img_shop_k_bg.png", "ui/img_k_1.png", "ui/img_k_3.png", "ui/img_k_2.png", "gameui/1.png", "gameui/2.png", "gameui/3.png", "gameui/4.png", "gameui/5.png", "gameui/6.png", "gameui/7.png", "gameui/8.png", "gameui/9.png", "gameui/10.png", "gameui/11.png", "gameui/12.png", "ui/img_jsxpf.png", "ui/btn_buy.png", "ui/num2.png", "ui/btn_gold.png", "ui/num3.png", "ui/img_jia.png", "ui/btn_right.png", "ui/btn_left.png", "ui/img_gold.png"],
                loadList3D: []
            }, e.ShopUIUI = n, i("ui.Views.ShopUIUI", n)
        }(e.Views || (e.Views = {}))
    }(e || (e = {}));
    class a {}
    a.enterScene = "EntryScene.scene", a.gameScene = "GameScene.scene", a.modelRootPath = "LayaScene_SampleScene/Conventional", a.ServerURL = "test.91lingxi.cn", a.NormalLogin = "/ladmin/api/game/Login", a.WXLogin = "/ladmin/api/game/LoginByWeiXin", a.rmapCofigUrl = "./../mapconfigs/", a.scene1 = "SampleScene1.ls", a.scene2 = "SampleScene2.ls", a.scene3 = "SampleScene3.ls", a.movemodel = "movemodel.lh", a.runner1 = "runner1.lh", a.runner2 = "runner2.lh", a.runner3 = "runner3.lh", a.runner4 = "runner4.lh", a.runner5 = "runner5.lh", a.jumparea = "jumparea.lh", a.wall = "wall.lh", a.stand = "stand.lh", a.road0 = "road0.lh", a.road6 = "road6.lh", a.road6_r = "road6_r.lh", a.road_12 = "road_12.lh", a.road_15 = "road_15.lh", a.road_18 = "road_18.lh", a.road_30 = "road_30.lh", a.road_45 = "road_45.lh", a.finishpoint = "finishpoint.lh", a.coin = "coin.lh", a.lightning = "lightning.lh", a.magnet = "magnet.lh", a.trap = "trap.lh", a.empty = "empty.lh", a.wincelebrate = "particle_celebrate.lh", a.coinProportion = 1, a.speed = 3, a.speedUpTime = 5, a.magnetRange = 3, a.magnetTime = 5, a.coinFlySpeed = 10, a.floorHigh = .04, a.levelMax = 50, a.roadStraight = 1, a.roadCurved6L = 2, a.roadCurved6R = 3, a.roadCurved12 = 4, a.roadCurved15 = 5, a.roadCurved18 = 6, a.roadCurved30 = 7, a.roadCurved45 = 8, a.roadCurved100 = 100, a.eleNone = 1, a.eleJumpPointOne = 2, a.eleJumpPointTwo = 3, a.eleJumpPointThree = 4, a.eleJumpPointFour = 5, a.elePerson = 6, a.eleWall = 7, a.eleEmpty = 8, a.eleBulges = 9, a.eleGold = 10, a.eleSpeedUp = 11, a.eleMagent = 12, a.eleHighWall = 13, a.jumpPointSkin1 = 1, a.jumpPointSkin2 = 2, a.jumpPointSkin3 = 3, a.jumpPointSkin4 = 4, a.standSkinId1 = 1, a.standSkinId2 = 2, a.standSkinId3 = 3, a.standSkinId4 = 4, a.standSkinId5 = 5, a.standSkinId6 = 6, a.standSkinId7 = 7, a.standSkinId8 = 8, a.standSkinId9 = 9, a.standSkinId10 = 10, a.standSkinId11 = 11, a.standSkinId12 = 12, a.skinIdPath1 = "texture/button1.png", a.skinIdPath2 = "texture/button2.png", a.skinIdPath3 = "texture/button3.png", a.skinIdPath4 = "texture/button4.png", a.skinIdPath5 = "texture/texture1.png", a.skinIdPath6 = "texture/texture2.png", a.skinIdPath7 = "texture/texture3.png", a.skinIdPath8 = "texture/texture4.png", a.skinIdPath9 = "texture/texture5.png", a.skinIdPath10 = "texture/texture6.png", a.skinIdPath11 = "texture/texture7.png", a.skinIdPath12 = "texture/texture8.png", a.skinIdPath13 = "texture/texture9.png", a.skinIdPath14 = "texture/texture10.png", a.skinIdPath15 = "texture/texture11.png", a.skinIdPath16 = "texture/texture12.png", a.soundCoin = 1, a.soundDieMan = 2, a.soundDieWoman = 3, a.soundJump = 4, a.soundGoodJumpOne = 5, a.soundGoodJumpTwo = 6, a.soundGoodJumpThree = 7, a.soundGoodJumpFour = 8, a.soundJumpLand = 9, a.soundBadLand = 10, a.soundDieFall = 11, a.soundBGM = 12, a.soundWin = 13, a.soundLose = 14, a.pathCoin = "sound/coin.mp3", a.pathDieMan = "sound/dieman.mp3", a.pathDieWoman = "sound/diewoman.mp3", a.pathJump = "sound/jump.mp3", a.pathGoodJumpOne = "sound/goodjump1.mp3", a.pathGoodJumpTwo = "sound/goodjump2.mp3", a.pathGoodJumpThree = "sound/goodjump3.mp3", a.pathGoodJumpFour = "sound/goodjump4.mp3", a.pathJumpLand = "sound/jumpland.mp3", a.pathBadLand = "sound/badland.mp3", a.pathDieFall = "sound/diefall.mp3", a.pathBGM = "sound/bgm.mp3", a.pathWin = "sound/win.mp3", a.pathLose = "sound/lose.mp3";
    class s {}
    s.allCoinNum = 0, s.roundCoinNum = 0, s.allSkinId = null, s.curSelSkin = null, s.curRoundId = "0";
    class n {}
    n.mWriteBox = ["wxd6326a4cc084496b", "wxfaf145024bebc7e3", "wx9a3e815c90339707", "wxbfb4fbce683b195d", "wxef82b48ec3e84052", "wx1684baae0229796f", "wxbbc6a27518f0b643", "wxfda19241d125329e", "wx079e29e7935ecddd", "wx55e533d9ef8f3ec3"];
    class o extends Laya.Box {
        constructor() {
            super(), this.pos(0, 0), this.size(182, 250);
            let e = new Laya.Image;
            e.name = "mBack", e.anchorX = .5, e.anchorY = .5, e.pos(91, 75), e.size(150, 150), this.addChild(e), e.skin = h.cdnface + "main/bk1.png";
            let t = new Laya.Image;
            t.name = "mBack2", t.anchorX = .5, t.anchorY = .5, t.pos(91, 75), t.size(150, 150), this.addChild(t);
            let i = new Laya.Label;
            i.name = "GameName", i.color = "#000000", i.fontSize = 25, i.centerX = 0, i.y = 165, this.addChild(i);
            let a = new Laya.Label;
            a.name = "PlayNum", a.color = "#000000", a.fontSize = 18, a.centerX = 0, a.y = 206, this.addChild(a)
        }
    }
    class r extends Laya.Image {
        constructor() {
            super()
        }
        initCode() {
            this.mNoIcon = new Laya.Label, this.mNoIcon.pos(10, 18), this.mNoIcon.size(5, 25), this.mNoIcon.bgColor = "#FFA650", this.addChild(this.mNoIcon), this.mIcon = new Laya.Image, this.mIcon.pos(25, 12), this.mIcon.size(40, 40), this.addChild(this.mIcon), this.mName = new Laya.Label, this.mName.pos(30, 18), this.mName.size(180, 25), this.mName.color = "#000000", this.mName.bold = !0, this.mName.fontSize = 25, this.addChild(this.mName), this.mList = new Laya.List, this.mList.pos(10, 70), this.mList.size(730, 230), this.mList.spaceX = 0, this.mList.itemRender = o, this.addChild(this.mList)
        }
    }
    class h extends Laya.View {
        constructor() {
            super(), this.mIconJumpData = null, this.mNextShowGroup = 0, this.mStartGroupY = 0, this.mShowGameAppid = "", this.mGoGame = null, this.mWxMenuButtonRect = null, this.width = Laya.stage.width, this.height = Laya.stage.height, this.x = Laya.stage.width
        }
        createChildren() {
            super.createChildren(), this.createView(h.uiView)
        }
        getMenuButtonTop_CenterPoint() {
            let e = new Laya.Point(0, 0);
            if (Laya.Browser.onMiniGame) {
                if (h.mWxVer >= "2.1.0" && null == this.mWxMenuButtonRect) {
                    let e = wx.getMenuButtonBoundingClientRect();
                    null != e && NaN != e.height && null != e.height && null != e.height && (this.mWxMenuButtonRect = e)
                }
                if (null != this.mWxMenuButtonRect) {
                    let t = this.mWxMenuButtonRect.height,
                        i = this.mWxMenuButtonRect.top;
                    return e.x = i * Laya.stage.height / h.mPhone.screenHeight, e.y = t * Laya.stage.height / h.mPhone.screenHeight, e
                }
            }
            return e
        }
        static getJSON(e) {
            if ("" == e || null == e) return {
                code: -999
            };
            var t = e.indexOf("{", 0);
            return e = e.substr(t, e.length - t), JSON.parse(e)
        }
        static onBtnMouseDown(e) {
            e.scale(1.05, 1.05)
        }
        static onBtnMouseOut(e) {
            e.scale(1, 1)
        }
        static registImgBtnClick(e, t, i = null, a = !0) {
            null == i && (i = this), a && (e.on(Laya.Event.MOUSE_DOWN, this, this.onBtnMouseDown, [e]), e.on(Laya.Event.MOUSE_UP, this, this.onBtnMouseOut, [e]), e.on(Laya.Event.MOUSE_OUT, this, this.onBtnMouseOut, [e])), e.on(Laya.Event.CLICK, i, function(e) {
                null != t && (null == t.args ? t.args = [e] : t.args.push(e), t.run())
            })
        }
        static InitServerListEx(e, t) {
            if (h.mType = 2, h.mGameName = t, null == h.mSelf) {
                if (Laya.Browser.onMiniGame && (h.mPhone = wx.getSystemInfoSync()), Laya.Browser.onMiniGame)(h.mPhone.model.indexOf("iPhone X") >= 0 || Number(h.mPhone.screenHeight) >= 812) && (h.iphoneX = !0), h.mWxVer = h.mPhone.SDKVersion;
                h.mSelf = new h, 2 == h.mType ? h.mSelf.x = Laya.stage.width + 10 : h.mSelf.x = -Laya.stage.width - 10, h.mSelf.zOrder = 9, h.mSelf.visible = !1, h.mSelf.onInit_GoGame(), Laya.stage.addChild(h.mSelf), h.mMoreList = e, h.InitData(), h.mSelf.onInit(), console.log("InitServerListEx...............")
            }
        }
        static InitData() {
            h.mGroupList = [];
            let e = null;
            for (let t = 0; t < h.mMoreList.length; ++t) {
                if (null == h.mMoreList[t].groupid) return;
                e != h.mMoreList[t].groupid && (h.mGroupList.push([]), e = h.mMoreList[t].groupid), h.mGroupList[h.mGroupList.length - 1].push(h.mMoreList[t])
            }
            console.log("InitGroup : ", h.mGroupList)
        }
        static ShowList(e, t, i, a, s, o, r) {
            if (h.mCloseHandler = s, h.mJumpHandle = r, i.length > 0 && (h.mJumpWrite = i), console.log("MG : ", a, i, t), a.length > 0) {
                let r = !1;
                for (let i = 0; i < e.length; ++i) {
                    let m = e[i];
                    if (m.appid.toUpperCase() == a.trim().toUpperCase()) {
                        if (0 == l.success_appid.length) m.jump_type = 3, m.box_appid = m.appid;
                        else
                            for (let t = 0; t < l.success_appid.length; t++)
                                if (null != l.success_appid[t] && null != l.success_appid[t]) {
                                    if (a == l.success_appid[t].toString()) {
                                        let t = h.GetIndexList(e);
                                        for (let e = 0; e < t.length; e++) {
                                            if (-1 == l.success_appid.indexOf(t[e].appid)) {
                                                m.jump_type = 3, m.box_appid = t[e].appid;
                                                break
                                            }
                                            e == t.length - 1 && (m.jump_type = 3, m.box_appid = m.appid)
                                        }
                                        break
                                    }
                                    t == l.success_appid.length - 1 && (m.jump_type = 3, m.box_appid = m.appid)
                                } if (-1 == n.mWriteBox.indexOf(m.box_appid)) return void wx.showToast({
                            title: "暂停跳转",
                            icon: "none",
                            duration: 2e3,
                            false: e => {
                                console.log(e)
                            },
                            success: e => {
                                console.log(e)
                            }
                        });
                        if (3 == m.jump_type) return console.log("MG : GoToJump_3", a), r = !0, void h.jumpToGame_3(m, function() {
                            h.ShowList3(e, t, a, s, o)
                        }, function() {
                            null != h.mCloseHandler && h.mCloseHandler.run()
                        });
                        break
                    }
                }
                if (console.log("MG : ", a, r), 0 == r) {
                    if (Laya.Browser.onAndroid)
                        for (let n = 0; n < i.length; ++n) {
                            if (i[n].toUpperCase() == a.trim().toUpperCase()) {
                                r = !0;
                                let i = {
                                    path: "",
                                    param: ""
                                };
                                i.appid = a, i.name = "", i.box_appid = a, i.box_path = "pages/index/index", console.log("MG : ToJump3 : ", i), h.jumpToGame_3(i, function() {
                                    h.ShowList3(e, t, a, s, o)
                                }, function() {
                                    null != h.mCloseHandler && h.mCloseHandler.run()
                                })
                            }
                        }
                    0 == r && h.ShowList3(e, t, a, s, o)
                }
            } else h.ShowList3(e, t, a, s, o)
        }
        static ShowList3(e, t, i, a, s = 9) {
            if (Laya.Browser.onMiniGame && wx.showLoading({
                    title: "资源加载中",
                    mask: !0
                }), null == h.mSelf ? e.length > 0 && h.InitServerListEx(e, t) : Laya.timer.once(300, h.mSelf, h.mSelf.latterLoadicon2, [], !0), null == h.mSelf) return;
            h.iphoneX && (h.mSelf.mTitle.top = 60, h.mSelf.mPanel.top = h.mSelf.mTitle.top + 100);
            let n = h.mSelf.getMenuButtonTop_CenterPoint();
            n.x > 0 ? (h.mSelf.mTitle.top = n.x + n.y / 2 - h.mSelf.mTitle.height / 2, h.mSelf.mPanel.top = h.mSelf.mTitle.top + 100, console.log("use getMenuButtonTop_CanterPoint . ", n)) : console.log("no use getMenuButtonTop_CanterPoint . ", n), h.mSelf.mShowGameAppid = i, h.mSelf.zOrder = s, h.mSelf.visible = !0, h.mSelf.ShowAllGames2(), h.checkLoadIconCount()
        }
        static checkLoadIconCount() {
            h.latterRunShowTween()
        }
        static latterRunShowTween() {
            Laya.Browser.onMiniGame && wx.hideLoading({}), Laya.timer.callLater(h.mSelf, function() {
                2 == h.mType ? (h.mSelf.x = Laya.stage.width + 10, Laya.Tween.to(h.mSelf, {
                    x: 0
                }, 350, null, new Laya.Handler(this, function() {
                    h.mSelf.ShowGameApp()
                }))) : (h.mSelf.x = -Laya.stage.width - 10, Laya.Tween.to(h.mSelf, {
                    x: 0
                }, 350, null, new Laya.Handler(this, function() {
                    h.mSelf.ShowGameApp()
                })))
            })
        }
        static GetIndexList(e) {
            let t = [];
            for (let i = 0; i < e.length; ++i) 1 == Number(e[i].show_index) && String(e[i].url_btn).toString().length > 10 && String(e[i].url_result).toString().length > 10 && t.push(e[i]);
            return t
        }
        static GetIndexRandom(e) {
            let t = h.GetIndexList(e);
            if (t.length > 0) {
                let e = t[h.getRandom(0, t.length - 1)];
                if (null != e) return e
            }
            return null
        }
        static GetIndexRandomList(e, t) {
            let i = [],
                a = h.GetIndexList(e);
            if (a.length > 0)
                for (; t > 0 && a.length > 0;) {
                    let e = a.splice(h.getRandom(0, a.length - 1), 1);
                    i.push(e[0]), t--
                }
            return i
        }
        static GetIndexRandomListResult(e, t) {
            let i = [],
                a = [],
                s = h.GetIndexList(e);
            if (s.length > 0)
                for (; t > 0 && s.length > 0;) {
                    let e = s.splice(h.getRandom(0, s.length - 1), 1); - 1 == l.success_appid.indexOf(e[0].appid) ? (i.push(e[0]), t--) : a.push(e[0])
                }
            if (t > 0)
                for (; t > 0 && a.length > 0;) {
                    let e = a.splice(h.getRandom(0, a.length - 1), 1);
                    i.push(e[0]), t--
                }
            return i
        }
        static CloseList() {
            null != h.mSelf && (2 == h.mType ? Laya.Tween.to(h.mSelf, {
                x: Laya.stage.width + 10
            }, 420, null, new Laya.Handler(this, function() {
                h.mSelf.visible = !1, null != h.mCloseHandler && (h.mCloseHandler.once = !0, h.mCloseHandler.run(), h.mCloseHandler = null)
            })) : Laya.Tween.to(h.mSelf, {
                x: -Laya.stage.width - 10
            }, 420, null, new Laya.Handler(this, function() {
                h.mSelf.visible = !1, null != h.mCloseHandler && (h.mCloseHandler.once = !0, h.mCloseHandler.run(), h.mCloseHandler = null)
            })))
        }
        onInit_GoGame() {
            let e = this;
            if (null == this.mGoGame) {
                this.mGoGame = new Laya.Image, this.mGoGame.size(this.width, this.height), this.mGoGame.pos(0, 0);
                let t = new Laya.Label;
                t.left = 0, t.right = 0, t.top = 0, t.bottom = 0, t.bgColor = "#000000", t.alpha = .5, this.mGoGame.addChild(t), t.on(Laya.Event.CLICK, t, function() {
                    e.mGoGame.visible = !1
                });
                let i = new Laya.Image;
                i.name = "GameNameBack", i.size(550, 680), i.mouseEnabled = !0, i.mouseThrough = !1, i.pos((this.width - i.width) / 2, (this.height - i.height) / 2), i.skin = h.cdnface + "main/bg.png", this.mGoGame.addChild(i), t.on(Laya.Event.CLICK, t, function() {});
                let a = new Laya.Image;
                a.name = "StarBack", a.skin = h.cdnface + "main/popup_share_star.png", a.size(490, 271), a.centerX = 0, a.y = 30, i.addChild(a), this.mIconMax = new Laya.Image, this.mIconMax.name = "IconBack", this.mIconMax.skin = h.cdnface + "main/bk2.png", this.mIconMax.size(180, 180), this.mIconMax.centerX = 0, this.mIconMax.centerY = 15, a.addChild(this.mIconMax);
                let s = new Laya.Image;
                s.pos(0, 0), s.size(180, 180), s.skin = h.cdnface + "main/180s.png", this.mIconMax.addChild(s), this.mIconName = new Laya.Label, this.mIconName.size(490, 40), this.mIconName.centerX = 0, this.mIconName.y = a.y + a.height + 10, this.mIconName.align = "center", this.mIconName.fontSize = 36, this.mIconName.color = "#332E4D", this.mIconName.bold = !0, i.addChild(this.mIconName), this.mIconTips = new Laya.Label, this.mIconTips.size(470, 80), this.mIconTips.centerX = 0, this.mIconTips.y = a.y + a.height + 70, this.mIconTips.align = "center", this.mIconTips.fontSize = 26, this.mIconTips.color = "#A1A1B3", this.mIconTips.bold = !1, this.mIconTips.wordWrap = !0, this.mIconTips.leading = 5, i.addChild(this.mIconTips), this.mIconGoGame = new Laya.Image, this.mIconGoGame.skin = h.cdnface + "main/popup_btn_begin.png", this.mIconGoGame.size(360, 80), this.mIconGoGame.centerX = 0, this.mIconGoGame.y = this.mIconTips.y + this.mIconTips.height + 45, i.addChild(this.mIconGoGame), this.mIconBottom = new Laya.Label, this.mIconBottom.size(470, 80), this.mIconBottom.centerX = 0, this.mIconBottom.y = this.mIconGoGame.y + this.mIconGoGame.height + 20, this.mIconBottom.align = "center", this.mIconBottom.fontSize = 24, this.mIconBottom.color = "#8A91E6", this.mIconBottom.text = "和好友一起玩吧", i.addChild(this.mIconBottom);
                let n = new Laya.Image;
                n.size(100, 100), n.right = 0, n.top = 0, h.registImgBtnClick(n, new Laya.Handler(this, function(t) {
                    t.stopPropagation(), e.mGoGame.visible = !1
                }));
                let o = new Laya.Image;
                o.name = "IconBack", o.skin = h.cdnface + "main/close.png", o.size(30, 30), o.right = 20, o.top = 20, i.addChild(o), i.addChild(n), h.registImgBtnClick(this.mIconGoGame, new Laya.Handler(this, function(t) {
                    t.stopPropagation(), e.jumpToGameFromData(e.mIconJumpData), e.mGoGame.visible = !1
                })), this.mGoGame.visible = !1, this.addChild(this.mGoGame)
            }
        }
        onInit() {
            if (0 == h.mMoreList.length) return h.mSelf.visible = !1, void console.log("No More GameList ... ");
            this.mPanel.vScrollBarSkin = "", this.mPanel.hScrollBarSkin = void 0, this.mBack.skin = h.cdnface + "main/head_btn_back1.png", this.mGameName.text = h.mGameName, h.registImgBtnClick(this.mBack, new Laya.Handler(this, function(e) {
                e.stopPropagation(), h.CloseList()
            })), h.registImgBtnClick(this.mBack2, new Laya.Handler(this, function(e) {
                e.stopPropagation(), h.CloseList()
            }))
        }
        AddOneGroupPage() {
            let e = this;
            if (e.mNextShowGroup < h.mGroupList.length) {
                let t = new r;
                t.initCode(), e.mPanel.addChild(t);
                let i = h.mGroupList[e.mNextShowGroup];
                if (t.y = e.mStartGroupY, t.x = 0, t.height = e.mPanel.height, e.init_page_game(t, i), e.mStartGroupY += t.height, console.log("changeHandler : ", e.mPanel.vScrollBar.max, e.mNextShowGroup, h.mGroupList.length), e.mNextShowGroup == h.mGroupList.length - 1) {
                    let i = new Laya.Label;
                    i.text = "别扯了，已经到底了...", i.size(470, 300), i.centerX = 0, i.y = t.y + t.height + 10, i.align = "center", i.fontSize = 24, i.color = "#8A91E6", e.mPanel.addChild(i)
                }
                if (++e.mNextShowGroup, t.y + t.height > 1500) return !1
            }
            return !0
        }
        ShowAllGames() {
            let e = this;
            if (0 == e.mNextShowGroup) {
                for (e.mPanel.removeChildren(), e.mStartGroupY = 0, console.log("start : ", e.mNextShowGroup, h.mGroupList.length), e.mNextShowGroup = 0; e.mNextShowGroup < h.mGroupList.length;) e.AddOneGroupPage();
                e.mPanel.refresh()
            }
        }
        ShowAllGames2() {
            let e = this;
            0 == e.mNextShowGroup && (e.mPanel.removeChildren(), e.mStartGroupY = 0, Laya.timer.once(200, this, this.ShowNextGroup))
        }
        ShowNextGroup() {
            let e = this;
            e.mNextShowGroup < h.mGroupList.length ? (e.AddOneGroupPage(), e.mPanel.refresh(), Laya.timer.once(300, this, this.ShowNextGroup), console.log("show group : ", e.mNextShowGroup, h.mGroupList.length)) : console.log("group show over .")
        }
        ShowGameApp() {
            this.mIconJumpData = null;
            for (let e = 0; e < h.mMoreList.length; ++e) {
                if (h.mMoreList[e].appid.trim().toUpperCase() == h.mSelf.mShowGameAppid.trim().toUpperCase()) {
                    this.mIconJumpData = h.mMoreList[e];
                    break
                }
            }
            null != this.mIconJumpData ? (this.mIconMax.skin = this.mIconJumpData.url_icon, this.mIconName.text = this.mIconJumpData.name, this.mIconTips.text = this.mIconJumpData.msg, this.mGoGame.visible = !0) : null != this.mGoGame && (this.mGoGame.visible = !1)
        }
        drawCircleRect(e, t, i, a, s, n, o, r = 0, h = "") {
            var l = [
                ["moveTo", n, 0],
                ["arcTo", a, 0, a, n, n],
                ["arcTo", a, s, a - n, s, n],
                ["arcTo", 0, s, 0, s - n, n],
                ["arcTo", 0, 0, n, 0, n]
            ];
            r > 0 ? e.drawPath(t, i, l, {
                fillStyle: o
            }, {
                strokeStyle: h,
                lineWidth: r.toString()
            }) : e.drawPath(t, i, l, {
                fillStyle: o
            })
        }
        init_page_game(e, t) {
            e.mName.text = t[0].groupname;
            let i = t[0].groupicon;
            if (i.length > 10 ? (e.mNoIcon.visible = !1, e.mIcon.visible = !0, e.mIcon.skin = i, e.mName.x = e.mIcon.x + e.mIcon.width + 10) : (e.mNoIcon.visible = !0, e.mIcon.visible = !1, e.mName.x = e.mIcon.x), Laya.stage.width > Laya.stage.height) {
                let i = Laya.stage.width;
                1 == h.iphoneX && (i = Laya.stage.width - 60);
                let a = Math.floor(i / 182);
                e.width = Laya.stage.width, e.mList.width = 182 * a, e.mList.x = (Laya.stage.width - e.mList.width) / 2;
                let s = e.mList.x - e.mNoIcon.x;
                e.mNoIcon.x += s, e.mIcon.x += s, e.mName.x += s, e.mList.repeatX = a, e.mList.repeatY = Math.ceil(t.length / a)
            } else if (Laya.stage.width <= 728) {
                e.mList.repeatX = 3, e.mList.repeatY = Math.ceil(t.length / 3), e.width = Laya.stage.width, e.mList.width = 546, e.mList.x = (Laya.stage.width - e.mList.width) / 2;
                let i = e.mList.x - e.mNoIcon.x;
                e.mNoIcon.x += i, e.mIcon.x += i, e.mName.x += i
            } else e.mList.repeatX = 4, e.mList.repeatY = Math.ceil(t.length / 4);
            e.height = 70 + 250 * e.mList.repeatY, e.mList.selectEnable = !0, e.mList.renderHandler = new Laya.Handler(this, this.onListRender), e.mList.mouseHandler = new Laya.Handler(this, this.listmouse), e.mList.array = t
        }
        static getRandom(e, t) {
            return Math.round(Math.random() * (t - e)) + e
        }
        onListRender(e, t) {
            let i = e.dataSource,
                a = e.getChildByName("GameName"),
                s = e.getChildByName("PlayNum"),
                n = e.getChildByName("mBack2");
            a.text = i.name;
            let o = Number(i.base);
            if (null == i.basenum || 0 == Number(i.basenum)) {
                let e = o - o / 10,
                    t = o + o / 10;
                i.basenum = Math.floor(h.getRandom(e, t) / 1e4)
            }
            s.text = i.basenum + "万人在玩", h.mListSrcs.push([n, i.url_icon + "?t=" + i.updated_time]), 1 == h.mListSrcs.length && Laya.timer.once(300, this, this.latterLoadicon2, [], !0), h.registImgBtnClick(n, null, this)
        }
        latterLoadicon2() {
            if (Laya.loader.retryNum = 10, 0 == h.mListSrcs.length && 0 == h.mListSrcs2.length || 0 == h.mSelf.visible) return;
            let e = null,
                t = "";
            if (h.mListSrcs.length > 0) {
                let i = h.mListSrcs.shift();
                e = i[0], t = i[1], h.mListSrcs2.push([e, t])
            } else {
                if (!(h.mReloadCount <= 1 && h.mListSrcs2.length > 0)) return; {
                    h.mListSrcs = h.mListSrcs2, h.mListSrcs2 = [], h.mReloadCount++;
                    let i = h.mListSrcs.length;
                    console.log("reload count = ", i);
                    let a = h.mListSrcs.shift();
                    e = a[0], t = a[1], h.mListSrcs2.push([e, t])
                }
            }
            if (0 == e.numChildren) {
                let t = new Laya.Image;
                t.pos(0, 0), t.size(150, 150), t.skin = h.cdnface + "main/150s.png", e.addChild(t)
            }
            e.loadImage(t, new Laya.Handler(this, function() {
                let e = [];
                for (let i = 0; i < h.mListSrcs2.length; ++i) h.mListSrcs2[i][1] != t && e.push(h.mListSrcs2[i]);
                h.mListSrcs2 = e, h.mLoadCount++, h.mSelf.latterLoadicon2(), Laya.timer.once(2e3, this, this.latterLoadicon2, [], !0)
            })), Laya.timer.once(2e3, this, this.latterLoadicon2, [], !0)
        }
        latterLoadicon(e, t) {
            if (Laya.loader.retryNum = 10, e.skin = t, e.size(150, 150), 0 == e.numChildren) {
                let t = new Laya.Image;
                t.pos(0, 0), t.size(150, 150), t.skin = h.cdnface + "main/150s.png", e.addChild(t)
            }
        }
        listmouse(e, t) {
            if (e.type == Laya.Event.CLICK) {
                let t = e.currentTarget.dataSource;
                "mBack2" == e.target.name && (e.stopPropagation(), this.jumpToGameFromData(t))
            }
        }
        isJumpWriteList(e) {
            let t = !1;
            for (let i = 0; i < h.mJumpWrite.length; ++i) {
                h.mJumpWrite[i].trim().toUpperCase() == e.trim().toUpperCase() && (t = !0)
            }
            return t
        }
        jumpToGameFromData(e) {
            // if (null == e) return;
            // if (!Laya.Browser.onMiniGame) return;
            // let t = e.path,
            //     i = e.param,
            //     a = e.appid,
            //     s = e.box_appid,
            //     n = a,
            //     o = a.split("?");
            // 2 == o.length && (n = o[0]);
            // let r = a.split("&");
            // 2 == r.length && (n = r[0]);
            // let l = Number(e.jump_type),
            //     m = "http1s://tcdn.wanzhushipin.cn/xcx/set/qrcode/" + n + ".jpg?t=" + e.updated_time;
            // if (null != e.big_url && (m = e.big_url), console.log("list click : ", e, m), t.length < 5 && (t = "pages/index/index"), Laya.Browser.onMiniGame)
            //     if (h.mWxVer >= "2.2.0") {
            //         let n = function(t) {
            //                 String(t.errMsg).indexOf(":fail cancel") <= 0 ? (wx.previewImage({
            //                     urls: [m]
            //                 }), console.log("跳转错误：显示二维码：", a, e.name, t.errMsg), h.mJumpHandle && (h.mJumpHandle.args = [3, Number(e.id), l >= 2, !0, s], h.mJumpHandle.run())) : (console.log("用户取消：", a, e.name, t.errMsg), h.mJumpHandle && (h.mJumpHandle.args = [2, Number(e.id), l >= 2, !0, s], h.mJumpHandle.run()))
            //             },
            //             o = function(t) {
            //                 console.log("跳转成功", a, e.name, t), h.mJumpHandle && (h.mJumpHandle.args = [1, Number(e.id), l >= 2, !0, s], h.mJumpHandle.run())
            //             };
            //         if (this.isJumpWriteList(a)) return wx.navigateToMiniProgram({
            //             appId: a,
            //             path: t + "?" + i,
            //             fail: n,
            //             success: o
            //         }), void console.log("在列表中直接跳转：", a, e.name, t);
            //         if (0 == l) wx.previewImage({
            //             urls: [m],
            //             success: e => {
            //                 console.log("预览图片成功")
            //             }
            //         }), console.log("二维码显示：", a, e.name, l), h.mJumpHandle && (h.mJumpHandle.args = [3, Number(e.id), !1, !0, s], h.mJumpHandle.run());
            //         else if (1 == l) wx.navigateToMiniProgram({
            //             appId: a,
            //             path: t + "?" + i,
            //             fail: n,
            //             success: o
            //         }), console.log("直接跳转：", a, e.name, t + "?" + i);
            //         else if (l >= 2) {
            //             let s = String(e.box_appid);
            //             if (s.length < 12) wx.navigateToMiniProgram({
            //                 appId: a,
            //                 path: t + "?" + i,
            //                 fail: n,
            //                 success: o
            //             }), console.log("直接跳转：盒子appid错误", a, e.name, t + "?" + i, s);
            //             else {
            //                 let i = String(e.box_path);
            //                 i.length < 5 ? i = t.indexOf("?") < 0 ? t + "?" + e.param : t + e.param : i.indexOf("?") < 0 ? i += "?" + e.param : i += e.param, i.indexOf("target=") < 0 && (i += "&target=" + a), wx.navigateToMiniProgram({
            //                     appId: s,
            //                     path: i,
            //                     fail: n,
            //                     success: o
            //                 }), console.log("盒子跳转：", a, e.name, i, s)
            //             }
            //         }
            //     } else wx.previewImage({
            //         urls: [m],
            //         success: e => {
            //             console.log("预览图片成功")
            //         }
            //     }), h.mJumpHandle && (h.mJumpHandle.args = [3, Number(e.id), !1, !0, s], h.mJumpHandle.run()), console.log("版本不支持。显示二维码", a, e.name);
            // else console.log("请在微信中测试跳转：", a, e.name, t)
        }
        static jumpToGame_3(e, t, i) {
            let a = e.path,
                s = (e.param, e.appid),
                n = String(e.box_appid);
            a.length < 5 && (a = "pages/index/index");
            let o = String(e.box_path);
            o.length < 5 ? o = a.indexOf("?") < 0 ? a + "?" + e.param : a + e.param : o.indexOf("?") < 0 ? o += "?" + e.param : o += e.param, o.indexOf("target=") < 0 && (o += "&target=" + s);
            let r = function(a) {
                    String(a.errMsg).indexOf(":fail cancel") <= 0 ? (null != t && t(), h.mJumpHandle && (h.mJumpHandle.args = [0, Number(e.id), !1, !1, n], h.mJumpHandle.run())) : (console.log("用户取消", s, e.name, a.errMsg), null != i && i(), h.mJumpHandle && (h.mJumpHandle.args = [2, Number(e.id), !1, !1, n], h.mJumpHandle.run()))
                },
                l = function(t) {
                    console.log("跳转成功", s, e.name, t), null != i && i(), h.mJumpHandle && (h.mJumpHandle.args = [1, Number(e.id), !1, !1, n], h.mJumpHandle.run())
                };
            Laya.Browser.onMiniGame && wx.navigateToMiniProgram({
                appId: n,
                path: o,
                success: l,
                fail: r
            }), console.log("直接盒子跳转：", s, e.name, o, n)
        }
    }
    h.mSelf = null, h.mVer = "", h.mGameName = "", h.mJumpWrite = [], h.mWxVer = "", h.mMoreList = [], h.mGroupList = [], h.mServerUrl = "", h.mType = 0, h.mPhone = {}, h.iphoneX = !1, h.cdnface = "", h.mListSrcs = [], h.mListSrcs2 = [], h.mReloadCount = 0, h.mLoadCount = 0, h.uiView = {
        type: "View",
        props: {
            y: 0,
            x: 0,
            width: 750,
            height: 1334
        },
        child: [{
            type: "Label",
            props: {
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                bgColor: "#ffffff"
            }
        }, {
            type: "Image",
            props: {
                var: "mTitle",
                right: 0,
                left: 0,
                height: 100
            },
            child: [{
                type: "Image",
                props: {
                    y: -61,
                    x: 0,
                    width: 166,
                    var: "mBack2",
                    height: 161
                }
            }, {
                type: "Image",
                props: {
                    x: 20,
                    width: 44,
                    var: "mBack",
                    height: 44,
                    centerY: 0
                }
            }, {
                type: "Label",
                props: {
                    y: 30,
                    var: "mGameName",
                    text: "",
                    fontSize: 40,
                    color: "#332E4D",
                    centerX: 0,
                    bold: !0
                }
            }]
        }, {
            type: "Panel",
            props: {
                var: "mPanel",
                top: 100,
                right: 0,
                left: 0,
                bottom: 0
            }
        }]
    };
    class l {
        constructor() {}
        static showBoxPage(e, t, i, a = 9999999) {
            l.showBefore() && (l.appid = e, h.ShowList(t, i, n.mWriteBox, e, new Laya.Handler(this, l.CloseBox), a, new Laya.Handler(this, l.JumpInfo)))
        }
        static showBefore() {
            return !0
        }
        static CloseBox() {
            console.log("back call")
        }
        static JumpInfo(e, t, i, a, s) {
            console.log("跳转结果：", e, t, i, a, s);
            if (Laya.Browser.onAndroid) {
                -1 == l.success_appid.indexOf(s) ? "game" : "bigbox"
            } else "game";
            if (s == this.setName(t) && !0, 1 == e) {
                if (-1 == l.fail_appid.indexOf(s)) {
                    -1 == l.success_appid.indexOf(s) && (l.success_appid[l.success_appid.length] = s), console.log(l.success_appid), se.mWX.setUserValue("zs-20200723-success_appid", JSON.stringify(l.success_appid), null, () => {
                        l.success_appid = l.success_appid
                    })
                }
            }
        }
        static setId() {
            for (var e = 0; e < se.mWX.mGamesBox.length; e++)
                if (se.mWX.mGamesBox[e].appid == l.appid) return Number(se.mWX.mGamesBox[e].gameid);
            return Number(l.appid)
        }
        static setId1(e) {
            for (var t = 0; t < se.mWX.mGamesBox.length; t++)
                if (se.mWX.mGamesBox[t].appid == e) return Number(se.mWX.mGamesBox[t].gameid);
            return Number(l.appid)
        }
        static setName(e) {
            for (var t = 0; t < se.mWX.mGamesBox.length; t++)
                if (Number(se.mWX.mGamesBox[t].id) == Number(e)) return se.mWX.mGamesBox[t].appid;
            return l.appid
        }
    }
    l.success_appid = [], l.fail_appid = [], l.appid = null;
    class m {}
    m.mAdOn = !0, m.mSoundable = !0, m.mVersion = 1007, m.TAG = "diexr", m.mScoreUnit = "分", m.mURL = "", m.mCmd = {
        check: "1.0.1/" + m.TAG + "/check?",
        login: "1.0.1/" + m.TAG + "/login?",
        login2: "1.0.2/" + m.TAG + "/login2?",
        challenge: "1.0.1/" + m.TAG + "/challenge?",
        querycards: "1.0.1/" + m.TAG + "/querycards?",
        rank: "1.0.1/" + m.TAG + "/rank?",
        report: "1.0.1/" + m.TAG + "/report?",
        AddCard: "1.0.1/" + m.TAG + "/addcard?",
        AddMyCard: "1.0.1/" + m.TAG + "/AddMyCard?",
        ad: "1.0.1/" + m.TAG + "/ad?",
        mymark: "1.0.1/" + m.TAG + "/mymark?",
        ItemTotle: "1.0.1/" + m.TAG + "/ItemTotle?",
        SetUserValue: "1.0.1/" + m.TAG + "/SetUserValue?",
        ChangeTCt: "1.0.1/" + m.TAG + "/ChangeTCt?"
    }, m.mKeys = {
        "1.0.1": "qweasdqweasdasd_)2sda2c_22zxc"
    }, m.maidinKey = "9bdfFbvgt1s_fd0d3e27ef", m.mReportAdHitUrl = m.mURL + "1.0.1/" + m.TAG + "/data?", m.mBannerAdId = "adunit-6578b8888ea1fbbf", m.mVideoAdId = "adunit-5378481ca38abba0", m.sMusicOnOff = !0, m.sSoundOnOff = !0, m.mIsNewUser = !1, m.sStartGameTime = 0, m.mLineColor = "#FF5572";
    class d {
        constructor() {}
        static getUrlParams(e, t = "1.0.1") {
            let i = !1,
                a = new Array;
            for (let t in e) {
                if ("string" != typeof e[t] && "number" != typeof e[t]) continue;
                "tick" == t && (i = !0);
                let s = t.toLocaleLowerCase();
                e[s] = e[t], a.push(s)
            }
            if (0 == i) {
                var s = new Date;
                e.tick = Math.floor(s.getTime() / 1e3), a.push("tick")
            }
            a.sort(function(e, t) {
                return e > t ? 1 : -1
            });
            let n = "";
            for (var o = 0; o < a.length; o++) n = n + a[o] + "=" + e[a[o]] + "&";
            let r = "";
            return n + "key=" + (r = "maidian" == t ? ie.MD5(n + "key=" + m.maidinKey) : null != m.mKeys[t] ? ie.MD5(n + "key=" + m.mKeys[t]) : ie.MD5(n + "key=wvkbfuhl"))
        }
        static getCDN() {
            return ""
        }
        static getJSON(e) {
            if ("" == e || null == e) return {
                code: -999
            };
            var t = e.indexOf("{", 0);
            return e = e.substr(t, e.length - t), JSON.parse(e)
        }
        static getServer() {
            return m.mURL
        }
    }
    const u = !0;
    class c {
        static log(e) {
            u && console.log(m.TAG + ": " + e)
        }
    }
    class g {}
    g.sShareUrls = [], g.mShareTitles = {
        shareApp: "",
        shareGift: "",
        shareGroupRank: "",
        shareProp: " ",
        share2Friend: "",
        shareRelay: "",
        shareContinue: "！",
        shareToUsePropInStartAward: "",
        shareToUsePropInPassAward: ""
    }, g.mShareUrls = {
        shareApp: "share/share2.jpg",
        shareGift: "share/share1.png",
        shareGroupRank: "share/share2.png",
        shareProp: "share/share2.png",
        share2Friend: "share/share1.png",
        shareRelay: "share/share1.png",
        shareContinue: "share/share2.png",
        shareToUsePropInStartAward: "share/share1.png",
        shareToUsePropInPassAward: "share/share2.png"
    }, g.mShareIds = {
        shareApp: 1,
        shareGift: 8,
        shareGroupRank: 2,
        shareProp: 1,
        share2Friend: 4,
        shareRelay: 6,
        shareContinue: 3,
        shareToUsePropInStartAward: 12,
        shareToUsePropInPassAward: 12,
        shareToGetDoubleCoin: 13,
        shareToGetCoin: 11,
        shareToReborn: 13,
        shareToGetStartAward: 13
    };
    class y {
        constructor() {
            y._b64tab = (() => {
                let e = {};
                for (let t = 0, i = y._b64chars.length; t < i; t++) e[y._b64chars.charAt(t)] = t;
                return e
            })
        }
        static _cb_btou(e) {
            switch (e.length) {
                case 4:
                    let t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
                    return String.fromCharCode(55296 + (t >>> 10)) + String.fromCharCode(56320 + (1023 & t));
                case 3:
                    return String.fromCharCode((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
                default:
                    return String.fromCharCode((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1))
            }
        }
        static _cb_decode(e) {
            let t = e.length,
                i = t % 4,
                a = (t > 0 ? this._b64tab[e.charAt(0)] << 18 : 0) | (t > 1 ? this._b64tab[e.charAt(1)] << 12 : 0) | (t > 2 ? this._b64tab[e.charAt(2)] << 6 : 0) | (t > 3 ? this._b64tab[e.charAt(3)] : 0),
                s = [String.fromCharCode(a >>> 16), String.fromCharCode(a >>> 8 & 255), String.fromCharCode(255 & a)];
            return s.length -= [0, 0, 2, 1][i], s.join("")
        }
        static _cb_encode(e) {
            let t = [0, 2, 1][e.length % 3],
                i = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);
            return [y._b64chars.charAt(i >>> 18), y._b64chars.charAt(i >>> 12 & 63), t >= 2 ? "=" : y._b64chars.charAt(i >>> 6 & 63), t >= 1 ? "=" : y._b64chars.charAt(63 & i)].join("")
        }
        static _cb_utob(e) {
            if (e.length < 2) {
                let t = e.charCodeAt(0);
                return t < 128 ? e : t < 2048 ? String.fromCharCode(192 | t >>> 6) + String.fromCharCode(128 | 63 & t) : String.fromCharCode(224 | t >>> 12 & 15) + String.fromCharCode(128 | t >>> 6 & 63) + String.fromCharCode(128 | 63 & t)
            } {
                let t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
                return String.fromCharCode(240 | t >>> 18 & 7) + String.fromCharCode(128 | t >>> 12 & 63) + String.fromCharCode(128 | t >>> 6 & 63) + String.fromCharCode(128 | 63 & t)
            }
        }
        static _re_btou() {
            return new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g")
        }
        static _atob(e) {
            return e.replace(/[\s\S]{1,4}/g, this._cb_decode)
        }
        static _btoa(e) {
            return e.replace(/[\s\S]{1,3}/g, this._cb_encode)
        }
        static _btou(e) {
            return e.replace(this._re_btou, this._cb_btou)
        }
        static _decode(e) {
            let t = String(e).replace(/[-_]/g, e => "-" == e ? "+" : "/");
            return console.log("1 = ", t), t = t.replace(/[^A-Za-z0-9\+\/]/g, ""), console.log("2 = ", t), (e => this._btou(atob(e)))(t)
        }
        static _encode(e, t = !1) {
            let i = e => this._btoa(this._utob(e));
            return t ? i(String(e)).replace(/[+\/]/g, e => "+" == e ? "-" : "_").replace(/=/g, "") : i(String(e))
        }
        static EncodeURI(e) {
            return this._encode(e, !0)
        }
        static FromBase64(e) {
            return this._decode(e)
        }
        static ToBase64(e) {
            return this._encode(e)
        }
        static stringToBytes(e) {
            var t, i, a = new Array;
            t = e.length;
            for (var s = 0; s < t; s++)(i = e.charCodeAt(s)) >= 65536 && i <= 1114111 ? (a.push(i >> 18 & 7 | 240), a.push(i >> 12 & 63 | 128), a.push(i >> 6 & 63 | 128), a.push(63 & i | 128)) : i >= 2048 && i <= 65535 ? (a.push(i >> 12 & 15 | 224), a.push(i >> 6 & 63 | 128), a.push(63 & i | 128)) : i >= 128 && i <= 2047 ? (a.push(i >> 6 & 31 | 192), a.push(63 & i | 128)) : a.push(255 & i);
            return a
        }
        static byteToString(e) {
            if ("string" == typeof e) return e;
            for (var t = "", i = e, a = 0; a < i.length; a++) {
                var s = i[a].toString(2),
                    n = s.match(/^1+?(?=0)/);
                if (n && 8 == s.length) {
                    for (var o = n[0].length, r = i[a].toString(2).slice(7 - o), h = 1; h < o; h++) r += i[h + a].toString(2).slice(2);
                    t += String.fromCharCode(parseInt(r, 2)), a += o - 1
                } else t += String.fromCharCode(i[a])
            }
            return t
        }
        static _utob(e) {
            return e.replace(this._re_utob, this._cb_utob)
        }
    }
    y._b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", y._fromCharCode = String.fromCharCode, y._re_utob = /[�-�][�-�F]|[^-]/g;
    const _ = y.ToBase64("Typescript"),
        p = y.EncodeURI('Typescript"');
    console.log(_), console.log(p);
    class f {
        static getTimeBySecond(e) {
            let t = Math.round((e - 1800) / 3600),
                i = Math.round((e - 30) / 60) % 60,
                a = Math.floor(e % 60);
            return (t > 0 ? t > 9 ? String(t) : "0" + t : "00") + ":" + (i > 0 ? i > 9 ? String(i) : "0" + i : "00") + ":" + (a > 0 ? a > 9 ? String(a) : "0" + a : "00")
        }
        static getTodayFirstSecond() {
            var e = new Date;
            return e.setHours(0, 0, 0, 0), e.getTime() / 1e3
        }
        static getCurrTime() {
            var e = new Date;
            return Math.floor(e.getTime() / 1e3)
        }
    }
    class L { //广告类
        constructor() {
            this.mBannerOffsetY = 80, this.adBanner = null, this.mIsInvokeRemoveCustomBannerAd = !1, this.mCustomBanner = null, this.mCustomBannerAdList = [], this.banner_realHeight = 0, this.banner_realWidth = 0, this.rush_bannernumb = 0
        }
        static playVideo(e, t = null, i = null) {
            // L.sIsPlayVideo || ae.uo.loadingVideo(a => {
            //     a ? (L.sIsPlayVideo = !0, ae.uo.showVideoAD(t => {
            //         t ? (L.sIsPlayVideo = !1, null != e && null != e && e()) : (L.sIsPlayVideo = !1, null != i && i())
            //     })) : (L.sIsPlayVideo = !1, null != t ? t() : wx.showToast({
            //         title: "视频获取失败",
            //         icon: "none",
            //         image: "",
            //         duration: 2e3
            //     }))
            // })
            platform.getInstance().showReward(() => {
                null != e && null != e && e()
            }, () => {
                null != t && null != t && t()
            }, () => {
                null != i && null != i && i()
            })
        }
        showBannerAd(e, t = 1, i = null) {
            // if ("" == L.sDefaultBannerId) return;
            // let a = this;
            // if (window.wx)
            //     if (null == a.adBanner) {
            //         e = L.sDefaultBannerId, L.sDefaultBannerIdList.length > 0 && (this.rush_bannernumb >= L.sDefaultBannerIdList.length && (this.rush_bannernumb = 0), e = L.sDefaultBannerIdList[this.rush_bannernumb], this.rush_bannernumb++), a.adBanner = wx.createBannerAd({
            //             adUnitId: e,
            //             style: {
            //                 left: 0,
            //                 top: ae.uo.phone().screenHeight - 107,
            //                 width: ae.uo.phone().screenWidth * t
            //             }
            //         });
            //         let s = 812 == ae.uo.phone().screenHeight ? 20 : 0;
            //         a.adBanner.onResize(e => {
            //             a.adBanner.style.top = ae.uo.phone().screenHeight - a.adBanner.style.realHeight - s, a.adBanner.style.left = (ae.uo.phone().screenWidth - a.adBanner.style.realWidth) / 2, a.adBanner.style.realHeight > 104 && Laya.stage.height
            //         }), a.adBanner.onLoad(() => {
            //             console.log("adBanner 广告加载成功"), this.banner_realHeight = a.adBanner.style.realHeight, this.banner_realWidth = a.adBanner.style.realWidth, null != i && (i(), i = null)
            //         }), a.adBanner.onError(e => {
            //             this.banner_realHeight = 0, this.banner_realWidth = 0, console.log("adbanner onerror = " + JSON.stringify(e)), null != i && (i(), i = null)
            //         })
            //     } else null != a.mCustomBanner ? a.mCustomBanner.visible = !0 : a.adBanner.show()
        }
        hideBannerAd() {
            // this.removeCustomBannerAd(), null != this.adBanner && null != this.adBanner && this.adBanner.hide()
        }
        addCustomBannerAd() {
            // if (0 == this.mCustomBannerAdList.length) return;
            // let e = this;
            // this.mIsInvokeRemoveCustomBannerAd = !1;
            // var t = Math.floor(Math.random() * this.mCustomBannerAdList.length),
            //     i = this.mCustomBannerAdList[t].url;
            // this.mCustomBannerAdList[t].appid, this.mCustomBannerAdList[t].path, Number(this.mCustomBannerAdList[t].third), this.mCustomBannerAdList[t].id;
            // null == e.mCustomBanner && (e.mCustomBanner = new Laya.Image, e.mCustomBanner.zOrder = 1e3), e.mCustomBanner.loadImage(i, Laya.Handler.create(this, () => {
            //     e.mIsInvokeRemoveCustomBannerAd || (e.mCustomBanner.anchorX = .5, e.mCustomBanner.x = Laya.stage.width / 2, Laya.stage.addChild(e.mCustomBanner))
            // }))
        }
        onCustomBannerClick(e, t, i, a, s) {
            s.stopPropagation()
        }
        removeCustomBannerAd() {
            // this.mIsInvokeRemoveCustomBannerAd = !0, null != this.mCustomBanner && (this.mCustomBanner.visible = !1)
        }
    }
    L.sDefaultBannerId = "", L.sDefaultBannerIdList = [], L.sDefaultVideoId = "", L.sIsPlayVideo = !1;
    class S {
        static getShareUrl(e, t) {
            if (null != g.sShareUrls)
                for (var i = 0; i < g.sShareUrls.length; i++)
                    if (Number(g.sShareUrls[i].id) == e) {
                        var a = g.sShareUrls[i].url;
                        if (null != a && a.length > 2) return a;
                        break
                    }
            return t
        }
        static getShareTitle(e, t, i = []) {
            if (null != g.sShareUrls)
                for (var a = 0; a < g.sShareUrls.length; a++)
                    if (Number(g.sShareUrls[a].id) == e) {
                        var s = g.sShareUrls[a].title;
                        if (null != s && s.length > 2) {
                            for (var n = 0; n < i.length; n++) s.indexOf("{" + n + "}") > -1 && (s = s.replace("{" + n + "}", String(i[n])));
                            return s
                        }
                        break
                    }
            return t
        }
        static getShareTitleByKey(e, t = []) {
            for (var i = g.mShareIds[e], a = g.mShareTitles[e], s = 0; s < t.length; s++) a.indexOf("{" + s + "}") > -1 && (a = a.replace("{" + s + "}", String(t[s])));
            return S.getShareTitle(i, a, t)
        }
        static getShareUrlByKey(e) {
            var t = g.mShareIds[e],
                i = g.mShareUrls[e];
            return S.getShareUrl(t, i)
        }
        static shareApp() {
            console.log("开启分享"), S.is_exit = !1, wx.onShareAppMessage(function() {
                var e = g.mShareIds.shareApp;
                return {
                    title: S.getShareTitleByKey("shareApp"),
                    imageUrl: S.getShareUrlByKey("shareApp"),
                    query: "uid=" + se.mWX.mUID + "&score=0&client=0&type=0&id=0&surl=" + e,
                    success: function(e) {}
                }
            })
        }
        static shareGroupRank() {
            var e = g.mShareIds.shareGroupRank,
                t = S.getShareTitleByKey("shareGroupRank"),
                i = S.getShareUrlByKey("shareGroupRank");
            S.is_exit = !1, se.mWX.mShareCallback = (() => {
                wx.showToast({
                    title: "",
                    icon: "success",
                    image: "",
                    duration: 2e3
                })
            }), wx.shareAppMessage({
                title: t,
                imageUrl: i,
                query: "uid=" + se.mWX.mUID + "&id=0&type=8&map=0&surl=" + e,
                success: function(e) {},
                fail: function(e) {
                    console.log(e)
                }
            })
        }
        static shareProp(e) {
            se.is_share = !0;
            var t = g.mShareIds.shareProp,
                i = S.getShareTitleByKey("shareProp"),
                a = S.getShareUrlByKey("shareProp");
            S.is_exit = !1, se.mWX.mCallShareTime = f.getCurrTime(), se.mWX.mShareCallback = (() => {
                e(!0)
            }), se.mWX.mShareIsNoCallback = (() => {
                se.mWX.mShareIsNoCallback = null, e(!1)
            });
            var s = e;
            se.mWX.mShareIsAgainCallback = (() => {
                S.shareProp(s)
            })
            //  wx.shareAppMessage({
            //     title: i,
            //     imageUrl: a,
            //     query: "gift=" + se.mWX.mUID + "&uid=" + se.mWX.mUID + "&id=" + se.mWX.mShareID + "&score=0&client=0&type=0&surl=" + t,
            //     success: function (e) {
            //         se.mWX.reportADHit(String(t))
            //     },
            //     fail: function (e) { }
            // })
        }
        static share2Friend() {
            var e = g.mShareIds.share2Friend,
                t = S.getShareTitleByKey("share2Friend"),
                i = S.getShareUrlByKey("share2Friend");
            se.mWX.mCallShareTime = f.getCurrTime(), se.mWX.mShareCallback = (() => {}), se.mWX.mShareIsNoCallback = (() => {
                se.mWX.mShareIsNoCallback = null
            }), se.mWX.mShareIsAgainCallback = (() => {
                S.share2Friend()
            }), wx.shareAppMessage({
                title: t,
                imageUrl: i,
                query: "gift=" + se.mWX.mUID + "&uid=" + se.mWX.mUID + "&id=0&score=0&client=0&type=0&surl=" + e,
                success: function(e) {},
                fail: function(e) {}
            })
        }
        static shareRelay(e) {
            var t = g.mShareIds.shareRelay,
                i = S.getShareTitleByKey("shareRelay"),
                a = S.getShareUrlByKey("shareRelay");
            S.is_exit = !1, wx.shareAppMessage({
                title: i,
                imageUrl: a,
                query: "uid=" + se.mWX.mUID + "&id=" + se.mWX.mShareID + "&score=" + e + "&client=0&type=2&surl=" + t,
                success: function(e) {}
            })
        }
        static shareGift(e) {
            se.is_share = !0;
            var t = g.mShareIds.shareGift,
                i = S.getShareTitleByKey("shareGift"),
                a = S.getShareUrlByKey("shareGift");
            S.is_exit = !1, se.mWX.mCallShareTime = f.getCurrTime(), se.mWX.mShareCallback = (() => {
                se.mWX.indexBpTotle("icon_page", {
                    is_success: 1,
                    is_click: 1,
                    from_type: "share",
                    icon_type: 7,
                    reward_num: 50,
                    from_page: "scoreboard_page"
                }), e()
            }), se.mWX.mShareIsNoCallback = (() => {
                se.mWX.indexBpTotle("icon_page", {
                    is_success: 0,
                    is_click: 1,
                    from_type: "share",
                    icon_type: 7,
                    reward_num: 50,
                    from_page: "scoreboard_page"
                }), se.mWX.mShareIsNoCallback = null
            }), wx.shareAppMessage({
                title: i,
                imageUrl: a,
                query: "uid=" + se.mWX.mUID + "&id=0&type=0&map=0&surl=" + t,
                success: function(e) {},
                fail: function(e) {
                    console.log(e)
                }
            })
        }
        static shareContinue(e) {
            se.is_share = !0;
            var t = g.mShareIds.shareContinue,
                i = S.getShareTitleByKey("shareContinue"),
                a = S.getShareUrlByKey("shareContinue");
            S.is_exit = !1, se.mWX.mCallShareTime = f.getCurrTime(), se.mWX.mShareCallback = (() => {
                e(!0)
            }), se.mWX.mShareIsNoCallback = (() => {
                e(!1)
            }), wx.shareAppMessage({
                title: i,
                imageUrl: a,
                query: "uid=" + se.mWX.mUID + "&id=0&type=0&map=0&surl=" + t,
                success: function(e) {},
                fail: function(e) {
                    console.log(e)
                }
            })
        }
        static shareAward(e) {
            se.is_share = !0;
            var t = g.mShareIds.shareToUsePropInStartAward,
                i = S.getShareTitleByKey("shareToUsePropInStartAward"),
                a = S.getShareUrlByKey("shareToUsePropInStartAward");
            S.is_exit = !1, se.mWX.mCallShareTime = f.getCurrTime(), se.mWX.mShareCallback = (() => {
                e(!0)
            }), se.mWX.mShareIsNoCallback = (() => {
                se.mWX.mShareIsNoCallback = null, e(!1)
            });
            var s = e;
            se.mWX.mShareIsAgainCallback = (() => {
                S.shareAward(s)
            }), wx.shareAppMessage({
                title: i,
                imageUrl: a,
                query: "uid=" + se.mWX.mUID + "&id=0&type=0&map=0&surl=" + t,
                success: function(e) {},
                fail: function(e) {
                    console.log(e)
                }
            })
        }
        static shareDoubleCoin(e, t = 0) {
            se.is_share = !0;
            g.mShareIds.shareApp;
            var i = S.getShareTitleByKey("shareApp"),
                a = S.getShareUrlByKey("shareApp");
            se.mWX.mCallShareTime = f.getCurrTime(), S.is_exit = !1, se.mWX.mShareCallback = (() => {
                var i = {
                    is_success: 1,
                    is_click: 1,
                    from_type: "share",
                    icon_type: 9,
                    reward_num: t,
                    from_page: "scoreboard_page"
                };
                se.mWX.indexBpTotle("icon_page", i), e()
            }), se.mWX.mShareIsNoCallback = (() => {
                se.mWX.indexBpTotle("icon_page", {
                    is_success: 0,
                    is_click: 1,
                    from_type: "share",
                    icon_type: 9,
                    reward_num: 0,
                    from_page: "scoreboard_page"
                }), se.mWX.mShareIsNoCallback = null
            });
            var s = e;
            se.mWX.mShareIsAgainCallback = (() => {
                S.shareDoubleCoin(s)
            }), wx.shareAppMessage({
                title: i,
                imageUrl: a,
                success: function(e) {},
                fail: function(e) {
                    console.log(e)
                }
            })
        }
        static shareNowCoin(e) {
            var t = g.mShareIds.shareToGetCoin,
                i = S.getShareTitleByKey("shareToGetCoin"),
                a = S.getShareUrlByKey("shareToGetCoin");
            se.mWX.mCallShareTime = f.getCurrTime(), S.is_exit = !1, se.mWX.mShareCallback = (() => {
                e()
            }), se.mWX.mShareIsNoCallback = (() => {
                se.mWX.mShareIsNoCallback = null
            });
            var s = e;
            se.mWX.mShareIsAgainCallback = (() => {
                S.shareNowCoin(s)
            }), console.log("分享的ID", t), wx.shareAppMessage({
                title: i,
                imageUrl: a,
                success: function(e) {},
                fail: function(e) {}
            })
        }
        static shareToReborn(e) {
            var t = g.mShareIds.shareToReborn,
                i = S.getShareTitleByKey("shareToReborn"),
                a = S.getShareUrlByKey("shareToReborn");
            se.mWX.mCallShareTime = f.getCurrTime(), S.is_exit = !1, se.mWX.mShareCallback = (() => {
                e()
            }), wx.shareAppMessage({
                title: i,
                imageUrl: a,
                query: "uid=" + se.mWX.mUID + "&id=0&type=0&map=0&surl=" + t,
                success: function(e) {},
                fail: function(e) {
                    console.log(e)
                }
            })
        }
        static shareToGetStartAward(e) {
            var t = g.mShareIds.shareToGetStartAward,
                i = S.getShareTitleByKey("shareToGetStartAward"),
                a = S.getShareUrlByKey("shareToGetStartAward");
            se.mWX.mCallShareTime = f.getCurrTime(), S.is_exit = !1, se.mWX.mShareCallback = (() => {
                e()
            }), wx.shareAppMessage({
                title: i,
                imageUrl: a,
                query: "uid=" + se.mWX.mUID + "&id=0&type=0&map=0&surl=" + t,
                success: function(e) {},
                fail: function(e) {
                    console.log(e)
                }
            })
        }
    }
    S.is_exit = !0;
    class w extends Laya.Label {
        constructor() {
            super(), this.align = "center", this.valign = "middle", this.fontSize = 32
        }
        static addPoint(e, t = 6) {
            return e.length <= t ? e : e.slice(0, t) + "..."
        }
    }
    class C extends Laya.EventDispatcher {
        static get Inst() {
            return C._inst || (C._inst = new C), C._inst
        }
    }
    C._inst = null, C.INIT_JUMP_GAMES = "INIT_JUMP_GAMES", C.CLICK_GAME_SUCCESS_CALLBACK = "CLICK_GAME_SUCCESS_CALLBACK", C.FENFA_GAMES_SHOW = "FENFA_GAMES_SHOW", C.FENFA_GAMES_CLICK_GAME = "FENFA_GAMES_CLICK_GAME", C.TAB_GAMES_SHARE_INIT = "TAB_GAMES_SHARE_INIT", C.TAB_GAMES_SHARE_CLOSE = "TAB_GAMES_SHARE_CLOSE", C.TAB_GAMES_SHARE_CLICK_TO_GAME = "TAB_GAMES_SHARE_CLICK_TO_GAME", C.BANNER_GAMES_INIT = "BANNER_GAMES_INIT", C.HOT_GAMES_INIT = "HOT_GAMES_INIT", C.HOT_GAMES_ON_CLOSE = "HOT_GAMES_ON_CLOSE", C.HOT_GAMES_ON_TO_GAME = "HOT_GAMES_ON_TO_GAME", C.RESULT_GAMES_INIT = "RESULT_GAMES_INIT", C.FRIEND_SHARE_GAMES_INIT = "FRIEND_SHARE_GAMES_INIT", C.FRIEND_SHARE_GAMES_ON_CLOSE = "FRIEND_SHARE_GAMES_ON_CLOSE", C.FRIEND_SHARE_GAMES_SHOW_OR_CLOSE = "FRIEND_SHARE_GAMES_SHOW_OR_CLOSE";
    class v {
        static md5(e) {
            return (new b).hex_md5(e)
        }
    }
    class b {
        constructor() {
            this.hexcase = 0, this.b64pad = ""
        }
        hex_md5(e) {
            return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(e)))
        }
        b64_md5(e) {
            return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(e)))
        }
        any_md5(e, t) {
            return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(e)), t)
        }
        hex_hmac_md5(e, t) {
            return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)))
        }
        b64_hmac_md5(e, t) {
            return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)))
        }
        any_hmac_md5(e, t, i) {
            return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)), i)
        }
        md5_vm_test() {
            return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc").toLowerCase()
        }
        rstr_md5(e) {
            return this.binl2rstr(this.binl_md5(this.rstr2binl(e), 8 * e.length))
        }
        rstr_hmac_md5(e, t) {
            var i = this.rstr2binl(e);
            i.length > 16 && (i = this.binl_md5(i, 8 * e.length));
            for (var a = Array(16), s = Array(16), n = 0; n < 16; n++) a[n] = 909522486 ^ i[n], s[n] = 1549556828 ^ i[n];
            var o = this.binl_md5(a.concat(this.rstr2binl(t)), 512 + 8 * t.length);
            return this.binl2rstr(this.binl_md5(s.concat(o), 640))
        }
        rstr2hex(e) {
            try {
                this.hexcase
            } catch (e) {
                this.hexcase = 0
            }
            for (var t, i = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", a = "", s = 0; s < e.length; s++) t = e.charCodeAt(s), a += i.charAt(t >>> 4 & 15) + i.charAt(15 & t);
            return a
        }
        rstr2b64(e) {
            try {
                this.b64pad
            } catch (e) {
                this.b64pad = ""
            }
            for (var t = "", i = e.length, a = 0; a < i; a += 3)
                for (var s = e.charCodeAt(a) << 16 | (a + 1 < i ? e.charCodeAt(a + 1) << 8 : 0) | (a + 2 < i ? e.charCodeAt(a + 2) : 0), n = 0; n < 4; n++) 8 * a + 6 * n > 8 * e.length ? t += this.b64pad : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(s >>> 6 * (3 - n) & 63);
            return t
        }
        rstr2any(e, t) {
            var i, a, s, n, o, r = t.length,
                h = Array(Math.ceil(e.length / 2));
            for (i = 0; i < h.length; i++) h[i] = e.charCodeAt(2 * i) << 8 | e.charCodeAt(2 * i + 1);
            var l = Math.ceil(8 * e.length / (Math.log(t.length) / Math.log(2))),
                m = Array(l);
            for (a = 0; a < l; a++) {
                for (o = Array(), n = 0, i = 0; i < h.length; i++) n = (n << 16) + h[i], n -= (s = Math.floor(n / r)) * r, (o.length > 0 || s > 0) && (o[o.length] = s);
                m[a] = n, h = o
            }
            var d = "";
            for (i = m.length - 1; i >= 0; i--) d += t.charAt(m[i]);
            return d
        }
        str2rstr_utf8(e) {
            for (var t, i, a = "", s = -1; ++s < e.length;) t = e.charCodeAt(s), i = s + 1 < e.length ? e.charCodeAt(s + 1) : 0, 55296 <= t && t <= 56319 && 56320 <= i && i <= 57343 && (t = 65536 + ((1023 & t) << 10) + (1023 & i), s++), t <= 127 ? a += String.fromCharCode(t) : t <= 2047 ? a += String.fromCharCode(192 | t >>> 6 & 31, 128 | 63 & t) : t <= 65535 ? a += String.fromCharCode(224 | t >>> 12 & 15, 128 | t >>> 6 & 63, 128 | 63 & t) : t <= 2097151 && (a += String.fromCharCode(240 | t >>> 18 & 7, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63, 128 | 63 & t));
            return a
        }
        str2rstr_utf16le(e) {
            for (var t = "", i = 0; i < e.length; i++) t += String.fromCharCode(255 & e.charCodeAt(i), e.charCodeAt(i) >>> 8 & 255);
            return t
        }
        str2rstr_utf16be(e) {
            for (var t = "", i = 0; i < e.length; i++) t += String.fromCharCode(e.charCodeAt(i) >>> 8 & 255, 255 & e.charCodeAt(i));
            return t
        }
        rstr2binl(e) {
            for (var t = Array(e.length >> 2), i = 0; i < t.length; i++) t[i] = 0;
            for (i = 0; i < 8 * e.length; i += 8) t[i >> 5] |= (255 & e.charCodeAt(i / 8)) << i % 32;
            return t
        }
        binl2rstr(e) {
            for (var t = "", i = 0; i < 32 * e.length; i += 8) t += String.fromCharCode(e[i >> 5] >>> i % 32 & 255);
            return t
        }
        binl_md5(e, t) {
            e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
            for (var i = 1732584193, a = -271733879, s = -1732584194, n = 271733878, o = 0; o < e.length; o += 16) {
                var r = i,
                    h = a,
                    l = s,
                    m = n;
                i = this.md5_ff(i, a, s, n, e[o + 0], 7, -680876936), n = this.md5_ff(n, i, a, s, e[o + 1], 12, -389564586), s = this.md5_ff(s, n, i, a, e[o + 2], 17, 606105819), a = this.md5_ff(a, s, n, i, e[o + 3], 22, -1044525330), i = this.md5_ff(i, a, s, n, e[o + 4], 7, -176418897), n = this.md5_ff(n, i, a, s, e[o + 5], 12, 1200080426), s = this.md5_ff(s, n, i, a, e[o + 6], 17, -1473231341), a = this.md5_ff(a, s, n, i, e[o + 7], 22, -45705983), i = this.md5_ff(i, a, s, n, e[o + 8], 7, 1770035416), n = this.md5_ff(n, i, a, s, e[o + 9], 12, -1958414417), s = this.md5_ff(s, n, i, a, e[o + 10], 17, -42063), a = this.md5_ff(a, s, n, i, e[o + 11], 22, -1990404162), i = this.md5_ff(i, a, s, n, e[o + 12], 7, 1804603682), n = this.md5_ff(n, i, a, s, e[o + 13], 12, -40341101), s = this.md5_ff(s, n, i, a, e[o + 14], 17, -1502002290), a = this.md5_ff(a, s, n, i, e[o + 15], 22, 1236535329), i = this.md5_gg(i, a, s, n, e[o + 1], 5, -165796510), n = this.md5_gg(n, i, a, s, e[o + 6], 9, -1069501632), s = this.md5_gg(s, n, i, a, e[o + 11], 14, 643717713), a = this.md5_gg(a, s, n, i, e[o + 0], 20, -373897302), i = this.md5_gg(i, a, s, n, e[o + 5], 5, -701558691), n = this.md5_gg(n, i, a, s, e[o + 10], 9, 38016083), s = this.md5_gg(s, n, i, a, e[o + 15], 14, -660478335), a = this.md5_gg(a, s, n, i, e[o + 4], 20, -405537848), i = this.md5_gg(i, a, s, n, e[o + 9], 5, 568446438), n = this.md5_gg(n, i, a, s, e[o + 14], 9, -1019803690), s = this.md5_gg(s, n, i, a, e[o + 3], 14, -187363961), a = this.md5_gg(a, s, n, i, e[o + 8], 20, 1163531501), i = this.md5_gg(i, a, s, n, e[o + 13], 5, -1444681467), n = this.md5_gg(n, i, a, s, e[o + 2], 9, -51403784), s = this.md5_gg(s, n, i, a, e[o + 7], 14, 1735328473), a = this.md5_gg(a, s, n, i, e[o + 12], 20, -1926607734), i = this.md5_hh(i, a, s, n, e[o + 5], 4, -378558), n = this.md5_hh(n, i, a, s, e[o + 8], 11, -2022574463), s = this.md5_hh(s, n, i, a, e[o + 11], 16, 1839030562), a = this.md5_hh(a, s, n, i, e[o + 14], 23, -35309556), i = this.md5_hh(i, a, s, n, e[o + 1], 4, -1530992060), n = this.md5_hh(n, i, a, s, e[o + 4], 11, 1272893353), s = this.md5_hh(s, n, i, a, e[o + 7], 16, -155497632), a = this.md5_hh(a, s, n, i, e[o + 10], 23, -1094730640), i = this.md5_hh(i, a, s, n, e[o + 13], 4, 681279174), n = this.md5_hh(n, i, a, s, e[o + 0], 11, -358537222), s = this.md5_hh(s, n, i, a, e[o + 3], 16, -722521979), a = this.md5_hh(a, s, n, i, e[o + 6], 23, 76029189), i = this.md5_hh(i, a, s, n, e[o + 9], 4, -640364487), n = this.md5_hh(n, i, a, s, e[o + 12], 11, -421815835), s = this.md5_hh(s, n, i, a, e[o + 15], 16, 530742520), a = this.md5_hh(a, s, n, i, e[o + 2], 23, -995338651), i = this.md5_ii(i, a, s, n, e[o + 0], 6, -198630844), n = this.md5_ii(n, i, a, s, e[o + 7], 10, 1126891415), s = this.md5_ii(s, n, i, a, e[o + 14], 15, -1416354905), a = this.md5_ii(a, s, n, i, e[o + 5], 21, -57434055), i = this.md5_ii(i, a, s, n, e[o + 12], 6, 1700485571), n = this.md5_ii(n, i, a, s, e[o + 3], 10, -1894986606), s = this.md5_ii(s, n, i, a, e[o + 10], 15, -1051523), a = this.md5_ii(a, s, n, i, e[o + 1], 21, -2054922799), i = this.md5_ii(i, a, s, n, e[o + 8], 6, 1873313359), n = this.md5_ii(n, i, a, s, e[o + 15], 10, -30611744), s = this.md5_ii(s, n, i, a, e[o + 6], 15, -1560198380), a = this.md5_ii(a, s, n, i, e[o + 13], 21, 1309151649), i = this.md5_ii(i, a, s, n, e[o + 4], 6, -145523070), n = this.md5_ii(n, i, a, s, e[o + 11], 10, -1120210379), s = this.md5_ii(s, n, i, a, e[o + 2], 15, 718787259), a = this.md5_ii(a, s, n, i, e[o + 9], 21, -343485551), i = this.safe_add(i, r), a = this.safe_add(a, h), s = this.safe_add(s, l), n = this.safe_add(n, m)
            }
            return [i, a, s, n]
        }
        md5_cmn(e, t, i, a, s, n) {
            return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(t, e), this.safe_add(a, n)), s), i)
        }
        md5_ff(e, t, i, a, s, n, o) {
            return this.md5_cmn(t & i | ~t & a, e, t, s, n, o)
        }
        md5_gg(e, t, i, a, s, n, o) {
            return this.md5_cmn(t & a | i & ~a, e, t, s, n, o)
        }
        md5_hh(e, t, i, a, s, n, o) {
            return this.md5_cmn(t ^ i ^ a, e, t, s, n, o)
        }
        md5_ii(e, t, i, a, s, n, o) {
            return this.md5_cmn(i ^ (t | ~a), e, t, s, n, o)
        }
        safe_add(e, t) {
            var i = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (i >> 16) << 16 | 65535 & i
        }
        bit_rol(e, t) {
            return e << t | e >>> 32 - t
        }
    }
    var I = Laya.HttpRequest,
        x = Laya.Event;
    class k {
        static GetGamesBox(e, t) {
            // k.mHttpCall = new I, k.mHttpCall.once(x.COMPLETE, k, function (e) {
            //     let i = null;
            //     i = k.getJSON(e), console.log(i), 0 == i.code && t && t.runWith(i), k.mHttpCall = null
            // }), k.mHttpCall.once(x.ERROR, k, k.onHttpRequestError), console.log("uo/GetGamesBox");
            // let i = [];
            // i.position_type = "result_page", i.type = e, window.wx ? i.uid = ae.uo.mWeUser.uid : i.uid = k.uid;
            // let a = k.sBaseURL + k.urlConfig.GetGamesBox.url + k.getUrlParams(i, k.urlConfig.GetGamesBox.key);
            // k.mHttpCall.send(a, null, "get", "text")
        }
        static ClickGame(e, t) {
            // k.mHttpCall = new I, k.mHttpCall.once(x.COMPLETE, k, function (i) {
            //     let a = null;
            //     a = k.getJSON(i), console.log(a), 0 == a.code && C.Inst.event(C.CLICK_GAME_SUCCESS_CALLBACK, [e, t, a]), k.mHttpCall = null
            // }), k.mHttpCall.once(x.ERROR, k, k.onHttpRequestError), console.log("uo/ClickGame");
            // let i = [];
            // window.wx ? i.uid = ae.uo.mWeUser.uid : i.uid = k.uid, i.appid = e;
            // let a = k.sBaseURL + k.urlConfig.ClickGame.url + k.getUrlParams(i, k.urlConfig.ClickGame.key);
            // k.mHttpCall.send(a, null, "get", "text")
        }
        static GetTabGames(e) {
            // k.mHttpCall = new I, k.mHttpCall.once(x.COMPLETE, k, function (t) {
            //     let i = null;
            //     i = k.getJSON(t), console.log(i), 0 == i.code && e && e.runWith(i), k.mHttpCall = null
            // }), k.mHttpCall.once(x.ERROR, k, k.onHttpRequestError), console.log("uo/GetGamesBoxLabel");
            // let t = [];
            // t.position_type = "result_page", window.wx ? t.uid = ae.uo.mWeUser.uid : t.uid = k.uid;
            // let i = k.sBaseURL + k.urlConfig.GetGamesBoxLabel.url + k.getUrlParams(t, k.urlConfig.GetGamesBoxLabel.key);
            // k.mHttpCall.send(i, null, "get", "text")
        }
        static commitTotle(e, t) {}
        static onHttpRequestError(e) {
            // k.mHttpCall = null, console.log("onHttpRequestError:" + e)
        }
        static getJSON(e) {
            // if ("" == e || null == e) return {
            //     code: -999
            // };
            // var t = e.indexOf("{", 0);
            // return e = e.substr(t, e.length - t), JSON.parse(e)
        }
        static getUrlParams(e, t = "1.0.1") {
            // let i = !1,
            //     a = new Array;
            // for (let t in e) {
            //     if ("string" != typeof e[t] && "number" != typeof e[t]) continue;
            //     "tick" == t && (i = !0);
            //     let s = t.toLocaleLowerCase();
            //     e[s] = e[t], a.push(s)
            // }
            // if (0 == i) {
            //     var s = new Date;
            //     e.tick = Math.floor(s.getTime() / 1e3), a.push("tick")
            // }
            // a.sort(function (e, t) {
            //     return e > t ? 1 : -1
            // });
            // let n = "";
            // for (var o = 0; o < a.length; o++) n = n + a[o] + "=" + e[a[o]] + "&";
            // let r = "";
            // return n + "key=" + (r = null != k.mKeys[t] ? v.md5(n + "key=" + k.mKeys[t]) : v.md5(n + "key=vicky"))
        }
    }
    k.mKeys = {
        "1.0.1": "qweasdqweasdasd_)2sda2c_22zxc"
    }, k.sBaseURL = "", k.urlConfig = {
        // GetGamesBox: {
        //     url: "1.0.1/diexr/GetGamesBox2?",
        //     key: "1.0.1",
        //     tips: "分发游戏数据"
        // },
        // ClickGame: {
        //     url: "1.0.1/diexr/ClickGame?",
        //     key: "1.0.1",
        //     tips: "提交点击游戏信息"
        // },
        // GetGamesBoxLabel: {
        //     url: "1.0.1/diexr/GetGamesBoxLabel?",
        //     key: "1.0.1",
        //     tips: "游戏集合页"
        // }
    }, k.uid = 1000001, k.mHttpCall = null;
    class B {
        constructor() {
            this.jumpedGameInfo = {}, this.jumpGameInfo = {
                jump_tag: "",
                callBack: "",
                jump_appid: "",
                showList: [],
                banner_name: ""
            }, this.banner_name = ""
        }
        static get Inst() {
            return B._inst || (B._inst = new B), B._inst
        }
        initEvent() {
            C.Inst.on(C.INIT_JUMP_GAMES, this, this.initJumpGames), C.Inst.on(C.CLICK_GAME_SUCCESS_CALLBACK, this, this.changeClickGame)
        }
        initJumpGames(e, t) {
            this.jumpedGameInfo[e] = t
        }
        changeClickGame(e, t, i) {
            for (let t in this.jumpedGameInfo) this.jumpedGameInfo[t].forEach(t => {
                t.appid === e && (t.jumped = i.jumped)
            })
        }
        jump(e, t, i, a, s) {
            console.log(e.name), this.jumpGameInfo.banner_name = s, this.jumpGameInfo.jump_tag = t, this.jumpGameInfo.showList = i, this.jumpGameInfo.callBack = a;
            let n = [],
                o = [];
            for (let e = 0; e < this.jumpedGameInfo[t].length; e++) {
                let i = this.jumpedGameInfo[t][e];
                i.jumped ? o.push(i.appid) : n.push(i)
            }
            o.indexOf(e.appid) < 0 || !n.length ? (this.jumpGameInfo.jump_appid = e.appid, this.jumpGame(e, !0)) : (n = this.randomArr(n), this.jumpGameInfo.jump_appid = n[0].appid, this.jumpGame(n[0], !1))
        }
        jumpGame(e, t) {
            console.log(e.name);
            let i = e.appid,
                a = "";
            a = e.param.indexOf("?") >= 0 || e.path.indexOf("?") >= 0 ? e.path + e.param : e.path + "?" + e.param, Laya.Browser.onMiniGame ? wx.navigateToMiniProgram({
                appId: i,
                path: a,
                fail: () => {
                    B.Inst.jumpedCB(e, 0, t)
                },
                success: () => {
                    B.Inst.jumpedCB(e, 1, t)
                }
            }) : B.Inst.jumpedCB(e, 1, t)
        }
        jumpedCB(e, t, i) {
            C.Inst.event(C[this.jumpGameInfo.callBack], [B.Inst.jumpGameInfo, e, t, i]), 1 == t && B.Inst.jumpGameInfo.jump_appid && k.ClickGame(B.Inst.jumpGameInfo.jump_appid, B.Inst.jumpGameInfo.jump_tag)
        }
        randomArr(e) {
            let t = e.concat(),
                i = e.length;
            for (let e = 0; e < i; e++) {
                let a = t[e],
                    s = Math.floor(Math.random() * i);
                t[e] = t[s], t[s] = a
            }
            return t
        }
    }
    class G extends Laya.View {
        constructor() {
            super(), this.gameData = [], this.tablesName = {
                "最新游戏": "newGames",
                "爆款游戏": "hotGames",
                "好友在玩": "friendGames"
            }, this.initY = 106, this.moveType = 1, this.moveTimeType = !0, this.showList = [], this.allGame = [], this.size(Laya.stage.width, Laya.stage.height), this.pos(0, 0);
            let e = new Laya.Label;
            e.size(Laya.stage.width, Laya.stage.height), e.bgColor = "#FFFFFF", e.pos(0, 0), this.addChild(e), this.panelBox = new Laya.Panel, this.panelBox.pos(0, 0), this.panelBox.size(this.width, this.height), this.panelBox.vScrollBarSkin = "", this.addChild(this.panelBox), C.Inst.on(C.TAB_GAMES_SHARE_INIT, this, this.initData)
        }
        initData(e, t) {
            this.gameData = e.label_games_box, this.zOrder = 1e4, this.initView(), t.addChild(this)
        }
        initView() {
            for (var e in this.gameData) {
                var t = this.gameData[e];
                this.initGamesBox(t), B.Inst.jumpedGameInfo[G.TAG] || (B.Inst.jumpedGameInfo[G.TAG] = []), B.Inst.jumpedGameInfo[G.TAG].push.apply(B.Inst.jumpedGameInfo[G.TAG], t.games), t.games.forEach(e => {
                    this.showList.push(e.appid)
                })
            }
            let i = new Laya.Box;
            i.size(this.width, 20), i.pos(0, this.initY), this.panelBox.addChild(i), Laya.timer.callLater(this, () => {
                this.panelBox.vScrollBar.max && (this.panelBox.vScrollBar.elasticBackTime = 200, this.panelBox.vScrollBar.elasticDistance = 150, this.panelBox.on(Laya.Event.MOUSE_DOWN, this, this.onTouch), this.panelBox.on(Laya.Event.MOUSE_UP, this, this.onLeave), this.panelBox.on(Laya.Event.MOUSE_OUT, this, this.onLeave), Laya.timer.once(1e3, this, this.loopGames))
            }), this.toGameBtn = new Laya.Image("fenfa/toGameBtn.png"), this.toGameBtn.size(278, 96), this.addChild(this.toGameBtn), this.toGameBtn.bottom = 32, this.toGameBtn.centerX = 0, this.toGameBtn.on(Laya.Event.CLICK, this, () => {
                C.Inst.event(C.TAB_GAMES_SHARE_CLICK_TO_GAME, []), this.closePage()
            }), C.Inst.event(C.FENFA_GAMES_SHOW, [this.showList, G.TAG])
        }
        closePage() {
            C.Inst.event(C.TAB_GAMES_SHARE_CLOSE, []), Laya.timer.clear(this, this.loopGames), Laya.Tween.clearAll(this.panelBox.vScrollBar), this.removeSelf(), this.destroy(!0)
        }
        onTouch(e) {
            Laya.timer.clear(this, this.loopGames), Laya.Tween.clearAll(this.panelBox.vScrollBar)
        }
        onLeave() {
            this.preventMove() && Laya.timer.once(1e3, this, this.loopGames)
        }
        preventMove() {
            return this.moveTimeType ? (this.moveTimeType = !1, Laya.timer.once(100, this, this.changeMoveType), !0) : (Laya.timer.clear(this, this.changeMoveType), Laya.timer.once(100, this, this.changeMoveType), !1)
        }
        changeMoveType() {
            this.moveTimeType = !0
        }
        loopGames() {
            let e = 0,
                t = 10 * this.panelBox.vScrollBar.max,
                i = this.panelBox.vScrollBar.value / this.panelBox.vScrollBar.max * t;
            1 == this.moveType && (e = this.panelBox.vScrollBar.max, i = (this.panelBox.vScrollBar.max - this.panelBox.vScrollBar.value) / this.panelBox.vScrollBar.max * t);
            Laya.Tween.to(this.panelBox.vScrollBar, {
                value: e
            }, i, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                this.panelBox.vScrollBar.value + 216 > this.panelBox.vScrollBar.max ? this.moveType = -1 : this.panelBox.vScrollBar.value - 216 < 0 && (this.moveType = 1), this.loopGames()
            }), 0, !0)
        }
        initGamesBox(e) {
            let t = new Laya.Box;
            t.name = this.tablesName[e.name], t.width = this.width;
            let i = new Laya.Image;
            i.skin = "fenfa/" + this.tablesName[e.name] + ".png", i.name = t.name + "table", i.size(194, 40), t.addChild(i), i.pos(26, 0);
            let a = new Laya.List;
            a.name = t.name + "List", a.renderHandler = new Laya.Handler(this, this.updataGames), a.repeatX = 3, a.repeatY = Math.ceil(e.games.length / 3), a.spaceX = 48, a.spaceY = 40, a.itemRender = A, a.size(this.width, 216 * a.repeatY), t.addChild(a), a.pos(0, i.height + i.y + 40), a.array = e.games, this.panelBox.addChild(t), t.size(this.width, a.height + a.y + i.height + i.y), t.pos(0, this.initY), this.initY = t.height + t.y + a.repeatY * a.spaceY
        }
        updataGames(e, t) {
            let i = e.getChildByName("game_img"),
                a = e.getChildByName("game_name"),
                s = e.dataSource;
            i.skin = s.url_icon, a.text = w.addPoint(s.name), e.on(Laya.Event.CLICK, this, () => {
                B.Inst.jump(s, G.TAG, this.showList, "FENFA_GAMES_CLICK_GAME", "1")
            })
        }
    }
    G.TAG = "mp_page";
    class A extends Laya.Box {
        constructor() {
            super(), this.initBox(), this.size(178, 216)
        }
        initBox() {
            let e = new Laya.Image;
            e.name = "game_img", e.size(178, 178), e.pos(60, 0), this.addChild(e);
            let t = new Laya.Image;
            t.name = "game_mask", t.skin = "fenfa/headmask.png", t.size(178, 178), t.pos(0, 0), e.addChild(t);
            let i = new w;
            i.name = "game_name", i.size(e.width, 48), i.pos(e.x, e.height + e.y + 10), this.addChild(i)
        }
    }
    class M {
        static showChine1(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine2(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine3(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = ""
            }
        }
        static showChine4(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine5(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine6(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine7(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine8(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine9(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine10(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine11(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
    }
    class N {
        static showChine1(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine2(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine3(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine4(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine5(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine6(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine7(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine8(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine9(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine10(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine11(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
    }
    class U {
        static showChine1(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine2(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine3(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine4(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine5(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine6(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine7(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine8(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine9(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine10(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine11(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
    }
    class E {
        static showChine1(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine2(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine3(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine4(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine5(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine6(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine7(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine8(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine9(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine10(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine11(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
    }
    class T {
        static showChine1(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine2(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine3(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine4(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine5(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine6(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine7(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine8(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine9(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine10(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine11(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
    }
    class O {
        static showChine1(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine2(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine3(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine5(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine6(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine7(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine4(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine8(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine9(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine10(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
        static showChine11(e) {
            if ("chinese" == e) {
                var t = new Laya.Label;
                t.fontSize = 30, t.color = "#f0f0f0", t.text = ""
            }
        }
    }
    class P extends e.LoadingSceneUI {
        constructor() {
            super(), this.loadResOk = !1, this.loadPassOk = !1, this.data1 = !1, this.data2 = !1
        }
        onEnable() {
            this.height = Laya.stage.height, this.hunxiao(),
                null == se.adUtil && (se.adUtil = new L),
                P.load_success = !0, se.mWX = new $
            // if (this.height = Laya.stage.height, this.hunxiao(), 
            // null == se.adUtil && (se.adUtil = new L), 
            // window.wx ? null == ae.uo && (new ae, se.mWX = new $, ae.uo.initWX(2)) 
            // : (P.load_success = !0, se.mWX = new $), 
            // window.wx && (wx.showShareMenu({
            //     withShareTicket: !0
            // }), S.shareApp()), 
            // this.pro1.width = 5, this.font.value = "0", window.wx) {
            //     var e = this;
            //     wx.loadSubpackage({
            //         name: "LayaScene_SampleScene",
            //         success: t => {
            //             e.data2 = !0, e.LoadRes(), Laya.loader.create(ne.loadBatchRes([a.movemodel, a.finishpoint, a.scene1, a.scene2, a.scene3, a.runner2, a.runner3, a.runner4, a.runner5, a.jumparea, a.wall, a.stand, a.road0, a.road6, a.road6_r, a.coin, a.lightning, a.magnet, a.trap, a.empty, a.wincelebrate]), Laya.Handler.create(this, this.onPreLoadFinish)), console.log("分包加载成功2", t)
            //         },
            //         fail: e => {
            //             console.log("分包加载失败2", e)
            //         }
            //     })
            // } else 
            this.data1 = !0, this.data2 = !0;
            platform.getInstance().yadstartup("Tower-Run-Online", () => {
                window.yad.on(Laya.Event.MOUSE_DOWN, yad, () => {
                    platform.getInstance().navigate("GAME", "LOGO")
                })
                Laya.loader.create(ne.loadBatchRes([a.movemodel,
                        a.finishpoint, a.scene1, a.scene2, a.scene3, a.runner2, a.runner3, a.runner4,
                        a.runner5, a.jumparea, a.wall, a.stand, a.road0, a.road6, a.road6_r, a.coin,
                        a.lightning, a.magnet, a.trap, a.empty, a.wincelebrate
                    ]),
                    Laya.Handler.create(this, this.onPreLoadFinish));
            });
            Laya.timer.frameLoop(1, this, this.loop)
        }
        onPreLoadFinish() {
            this.loadResOk = !0
        }
        LoadRes() {
            var e = this;
            wx.loadSubpackage({
                name: "res",
                success: t => {
                    e.data1 = !0;
                    Laya.loader.load(["res/atlas/set.atlas", "res/atlas/fenfa.atlas", "res/atlas/finger.atlas", "res/atlas/ui.atlas"]), console.log("分包加载成功1", t)
                },
                fail: e => {
                    console.log("分包加载失败1", e)
                }
            })
        }
        onDisable() {}
        onDestroy() {}
        loop() {
            var e = this.pro1.width;
            e += 5;
            var t = Math.floor(e / 476 * 100);
            if (this.font.value = t + "%", P.load_success && this.loadResOk && this.data1 && this.data2) {
                if (e >= 476) {
                    e = 476, se.adUtil.showBannerAd("");
                    se.mWX.indexBpTotle("homepage_load ", {}), window.wx && (se.setMenuHeight(), se.fenFa()), "" != se.mWX.getUserDataByKey("zs-20200723-shop_skin") && (se.shop_skin = JSON.parse(se.mWX.getUserDataByKey("zs-20200723-shop_skin")));
                    var i = se.mWX.getOnOffValueByKey("of_tab_game_share");
                    window.wx && "0" != ae.uo.adid && "0" != i && (this.TabGamesShare ? (C.Inst.offAll(C.TAB_GAMES_SHARE_INIT), C.Inst.offAll(C.TAB_GAMES_SHARE_CLOSE), this.TabGamesShare.removeSelf(), this.TabGamesShare.destroy(!0), this.TabGamesShare = null) : (k.GetTabGames(Laya.Handler.create(this, e => {
                        e.label_games_box[0] && (this.TabGamesShare = new G, C.Inst.event(C.TAB_GAMES_SHARE_INIT, [e, Laya.stage]))
                    })), C.Inst.on(C.TAB_GAMES_SHARE_CLOSE, this, () => {
                        C.Inst.offAll(C.TAB_GAMES_SHARE_INIT), C.Inst.offAll(C.TAB_GAMES_SHARE_CLOSE), this.TabGamesShare.removeSelf(), this.TabGamesShare.destroy(!0), this.TabGamesShare = null
                    }))), se.day(), Laya.timer.clearAll(this), ne.setDeadPoint(""), ne.setHighPointY(""), Laya.Scene.open(a.gameScene, !1), Laya.timer.once(15e3, this, () => {
                        Laya.Scene.destroy(this.url)
                    })
                }
            } else e >= 450 && (e = 450);
            this.pro1.width = e
        }
        hunxiao() {
            M.showChine1(1), M.showChine2(1), M.showChine3(1), M.showChine4(1), M.showChine5(1), M.showChine6(1), M.showChine7(1), M.showChine8(1), M.showChine9(1), M.showChine10(1), M.showChine11(1), N.showChine1(1), N.showChine2(1), N.showChine3(1), N.showChine4(1), N.showChine5(1), N.showChine6(1), N.showChine7(1), N.showChine8(1), N.showChine9(1), N.showChine10(1), N.showChine11(1), U.showChine1(1), U.showChine2(1), U.showChine3(1), U.showChine4(1), U.showChine5(1), U.showChine6(1), U.showChine7(1), U.showChine8(1), U.showChine9(1), U.showChine10(1), U.showChine11(1), E.showChine1(1), E.showChine2(1), E.showChine3(1), E.showChine4(1), E.showChine5(1), E.showChine6(1), E.showChine7(1), E.showChine8(1), E.showChine9(1), E.showChine10(1), E.showChine11(1), T.showChine1(1), T.showChine2(1), T.showChine3(1), T.showChine4(1), T.showChine5(1), T.showChine6(1), T.showChine7(1), T.showChine8(1), T.showChine9(1), T.showChine10(1), T.showChine11(1), O.showChine1(1), O.showChine2(1), O.showChine3(1), O.showChine4(1), O.showChine5(1), O.showChine6(1), O.showChine7(1), O.showChine8(1), O.showChine9(1), O.showChine10(1), O.showChine11(1)
        }
    }
    P.load_success = !0;
    class R {
        static getPropType(e) {
            switch (e) {
                case 1:
                    return "direct";
                case 2:
                    return "video";
                case 3:
                    return "share";
                default:
                    return "other "
            }
        }
        static submitInfo(e, t) {
            Laya.Browser.onMiniGame && se.mWX.indexBpTotle(e, t)
        }
        static btnFadeOut(e, t, i = null) {
            e.alpha = 0, Laya.timer.once(t - 340, null, () => {
                Laya.Tween.to(e, {
                    alpha: 1
                }, 340, null, i)
            })
        }
        static addAni(e, t, i, a, s, n) {
            Laya.loader.load([t], Laya.Handler.create(this, () => {
                e.skin = t;
                let a = 0,
                    s = [];
                try {
                    i.forEach(e => {
                        a += Number(e), s.push(a)
                    })
                } catch (e) {
                    console.log(i)
                }
                let o = [];
                o.push(t);
                for (let e = 2; e <= a; e++) {
                    let i = t.replace("_1.", "_" + e + ".");
                    o.push(i)
                }
                let r = new Laya.Animation;
                r.interval = 120, r.loadImages(o), "small" == n ? (r.scale(1, 1), r.pos(2, 0)) : "big" == n ? r.scale(.6, .6) : "big2" == n && r.scale(.95, .95), r.play(), e.addChild(r)
            }))
        }
        static get phoneInfo() {
            return R._phineInfo || (R._phineInfo = wx.getSystemInfoSync()), R._phineInfo
        }
        static getMenuTop(e) {
            if (!Laya.Browser.onMiniGame) return;
            let t = () => {
                var t = R.phoneInfo.screenHeight / 1334;
                R.phoneInfo.screenWidth;
                R.phoneInfo.screenHeight < 812 ? e.y = 20 / t - 30 : e.y = 94
            };
            if (R.phoneInfo.SDKVersion < "2.1.0") t();
            else if (R.menuLayout || (R.menuLayout = wx.getMenuButtonBoundingClientRect()), R.menuLayout.top) {
                let t = R.menuLayout.height,
                    i = (R.menuLayout.top + t / 2) * (750 / R.phoneInfo.screenWidth);
                e.y = i - e.height / 2
            } else t()
        }
    }
    R.submitUrl = "";
    class H extends e.Views.OptionUI {
        constructor() {
            super(), Laya.loader.load("res/atlas/gameui.atlas", Laya.Handler.create(this, this.onLoaded))
        }
        onLoaded() {}
        onEnable() {
            console.log("===========GameBegin1=============="), this.btnBack.on(Laya.Event.CLICK, this, this.onBtnBackClick), this.btnMusic.on(Laya.Event.CLICK, this, this.onBtnMusicClick), ne._stopVoice ? this.btnMusic.gray = !0 : this.btnMusic.gray = !1
        }
        onBtnMusicClick() {}
        onBtnBackClick() {
            this.destroy()
        }
    }
    class W extends e.Views.ShopUIUI {
        constructor() {
            super(), this.img_bg = [], this.img_type = [], this.skin_num = 0, this.img_k = [], this.img_r = [], this.skin_id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], this.btn_gold_num = 1e3, this.down_x = 0, this.move_x = 0
        }
        onAwake() {}
        onEnable() {
            this.height = Laya.stage.height, this.coin_label.text = ne.getCoinNum() + "", this.btn_home.y = se.applist_y, this.box_gold.y = se.applist_y, this.skin_num = se.shop_skin.length;
            for (var e = 0; e < 12; e++) this.img_bg[this.img_bg.length] = this["img_" + e], this.img_bg[e].visible = !0, this.img_type[this.img_type.length] = this["sp_" + e], this.img_type[e].visible = !0, this.img_k[this.img_k.length] = this["img_k_" + e], this.img_k[e].visible = !1, this.img_r[this.img_r.length] = this["img_r_" + e], this.img_r[e].visible = !1, e < this.skin_num && (this.img_type[e].visible = !1, this.img_r[e].visible = !0), this.img_r[e].on(Laya.Event.CLICK, this, this.ChangeSkin, [this.skin_id[e]]); - 1 != se.shop_skin.indexOf(Number(ne.getCurSkinId())) && (this.img_k[se.shop_skin.indexOf(Number(ne.getCurSkinId()))].visible = !0);
            var t = Number(se.mWX.getOnOffValueByKey("of_shop_type"));
            // 1 == t || 0 == se.mWX.fhOnoff ? 

            // this.btn_addgold.skin = "ui/btn_gold.png" : this.btn_addgold.skin = 2 == t ?
            //     "ui/btn_gold_video.png" : 3 == t ? "ui/btn_gold_share.png" : "ui/btn_gold.png",
            this.btn_addgold.skin = "ui/btn_gold_video.png";



            this.showBtnGold(),
                this.btn_home.on(Laya.Event.CLICK, this, this.onHome), this.btn_buy.on(Laya.Event.CLICK, this, this.onBuy),
                this.btn_addgold.on(Laya.Event.CLICK, this, this.showVideo), this.btn_left.on(Laya.Event.CLICK, this, this.onLeft),
                this.btn_right.on(Laya.Event.CLICK, this, this.onRight), this.box.on(Laya.Event.MOUSE_DOWN, this, this.onDown),
                this.box.on(Laya.Event.MOUSE_MOVE, this, this.onMove), this.box.on(Laya.Event.MOUSE_UP, this, this.onUp);
            se.shopui.on(W.add_gold, this, this.onShopAddGold);
        }

        onShopAddGold() {
            this.coin_label.text = String(ne.getCoinNum());
        }

        onDown(e) {
            this.down_x = 0, this.move_x = 0, this.down_x = e.stageX
        }
        onMove(e) {
            this.move_x = e.stageX
        }
        onUp(e) {
            0 != this.move_x && (this.down_x > this.move_x ? this.onRight() : this.onLeft())
        }
        showBtnGold() {
            this.skin_num = se.shop_skin.length, this.skin_num < 12 ?
                (this.btn_gold_num = 1e2 + 50 * this.skin_num, this.btn_gold_num > 3e2 &&
                    (this.btn_gold_num = 3e2), this.txt_buy.value = this.btn_gold_num + "", this.btn_gold_num > Number(this.coin_label.text) ?
                    this.btn_buy.gray = !0 : this.btn_buy.gray = !1) :
                (this.btn_buy.visible = !1, this.btn_addgold.centerX = 0)
        }
        onBuy() {
            Number(this.coin_label.text) >= this.btn_gold_num ? (this.skin_num > 5 ? this.onRight() : this.onLeft(),
                // window.wx &&  wx.showToast({
                //     title: "解锁成功",
                //     icon: "none",
                //     duration: 2e3,
                //     false: e => {
                //         console.log(e)
                //     },
                //     success: e => {
                //         console.log(e)
                //     }
                // }), 
                this.img_type[this.skin_num].visible = !1, this.img_r[this.skin_num].visible = !0, se.shop_skin[se.shop_skin.length] = this.skin_id[se.shop_skin.length],
                this.skin_num = se.shop_skin.length, se.mWX.setUserValue("zs-20200723-shop_skin", JSON.stringify(se.shop_skin)), ne.addCoinNum(-this.btn_gold_num),
                this.coin_label.text = s.allCoinNum + "", this.showBtnGold()) : null
            //   window.wx ? wx.showToast({
            //     title: "金币不足",
            //     icon: "none",
            //     duration: 2e3,
            //     false: e => {
            //         console.log(e)
            //     },
            //     success: e => {
            //         console.log(e)
            //     }
            // }) : console.log("金币不足")
        }
        ChangeSkin(e) {
            -1 != se.shop_skin.indexOf(e) && (this.img_r[se.shop_skin.indexOf(e)].visible ? 0 == this.img_k[se.shop_skin.indexOf(e)].visible ? (this.img_k[se.shop_skin.indexOf(e)].visible = !0, -1 != se.shop_skin.indexOf(Number(ne.getCurSkinId())) && (this.img_k[se.shop_skin.indexOf(Number(ne.getCurSkinId()))].visible = !1), this.changeSkin(e)) : console.log("已经在使用") : console.log("没有改皮肤"))
        }
        showVideo() {
            var e = Number(se.mWX.getOnOffValueByKey("of_shop_type"));
            1 == e || 0 == se.mWX.fhOnoff || 2 == e ? L.playVideo(() => {
                this.Relife(), this.inde1("video", 1)
            }, () => {
                S.shareProp(e => {
                    e ? (this.Relife(), this.inde1("share", 1)) : (this.inde1("share", 0), Laya.timer.clearAll(this))
                })
            }, () => {
                Laya.timer.clearAll(this), this.inde1("video", 0)
            }) : 3 == e && S.shareProp(e => {
                e ? (this.Relife(), this.inde1("share", 1)) : (Laya.timer.clearAll(this), this.inde1("share", 0))
            })
        }
        inde1(e, t) {
            var i = {
                icon_type: "skin",
                is_click: 1,
                is_success: t,
                from_type: e
            };
            se.mWX.indexBpTotle("icon_page", i)
        }
        Relife() {
            ne.addCoinNum(30), this.coin_label.text = s.allCoinNum + "", se.shopui.event(W.add_gold), this.showBtnGold()
        }
        changeSkin(e) {
            se.shopui.event(W.change_skin, [e])
        }
        onLeft() {
            -650 == this.box.x && Laya.Tween.to(this.box, {
                x: 40
            }, 800)
        }
        onRight() {
            40 == this.box.x && Laya.Tween.to(this.box, {
                x: -650
            }, 800)
        }
        onHome() {
            se.adUtil.hideBannerAd(), this.removeSelf(), se.shopui = null, this.destroy(!0)
        }
        onDisable() {}
    }
    W.change_skin = "change_skin", W.add_gold = "add_gold";
    class D extends Laya.Label {
        constructor() {
            super(), this.moveTimeType = !0, this.size(Laya.stage.width, Laya.stage.height), this.pos(0, 0)
        }
        preventMove() {
            return !!this.moveTimeType && (this.moveTimeType = !1, Laya.timer.once(100, this, () => {
                this.moveTimeType = !0
            }), !0)
        }
        rotateIcon(e, t) {
            e.rotation = -90, Laya.Tween.to(e, {
                rotation: 0
            }, 450, null, Laya.Handler.create(this, () => {
                t.run()
            }))
        }
        createBg(e = .75) {
            let t = new Laya.Label;
            t.bgColor = "#000", t.alpha = e, t.size(this.width, this.height), this.addChild(t)
        }
    }
    class X {
        static convert(e) {
            let t = [],
                i = [],
                a = "",
                s = "",
                n = [],
                o = [],
                r = "",
                h = [],
                l = [],
                m = "";
            if (!e.anim_config || "" == e.anim_config) return null; {
                let d = {};
                try {
                    (d = JSON.parse(e.anim_config)).framelist = d.group_static.toString().split(","), d.framebiglist = d.group_static_big.toString().split(","), d.millisecond = d.millisecond_static.toString().split(","), d.millisecond_big = d.millisecond_static_big.toString().split(","), d.millisecond2 = d.millisecond2.toString().split(","), d.millisecond_big2 = d.millisecond_big2.toString().split(","), d.millisecond3 = d.millisecond3.toString().split(","), d.millisecond_big3 = d.millisecond_big3.toString().split(",")
                } catch (e) {
                    return console.log(e), null
                }
                t = d.framelist, i = d.millisecond, a = e.static_icon, h = d.millisecond3, s = e.url_icon, n = d.framebiglist, o = d.millisecond_big, r = e.static_big_btn_icon, l = d.millisecond_big3, m = e.big_btn_icon
            }
            return {
                small_frame: t,
                small_interval: i,
                small_image: a,
                millisecond: h,
                small_static_image: s,
                big_frame: n,
                big_interval: o,
                big_image: r,
                millisecond_big: l,
                big_static_image: m
            }
        }
        static addAni(e, t, i, a, s, n) {
            Laya.loader.load([t], Laya.Handler.create(this, () => {
                e.skin = t;
                let a = 0,
                    s = [];
                try {
                    i.forEach(e => {
                        a += Number(e), s.push(a)
                    })
                } catch (e) {
                    console.log(i)
                }
                let o = [];
                o.push(t);
                for (let e = 2; e <= a; e++) {
                    let i = t.replace("_1.", "_" + e + ".");
                    o.push(i)
                }
                Laya.loader.load(o, Laya.Handler.create(this, () => {
                    let t = new Laya.Animation;
                    t.interval = 120, t.loadImages(o), "small" == n ? (t.scale(1, 1), t.pos(2, 0)) : "big" == n ? t.scale(.6, .6) : "big2" == n ? t.scale(.95, .95) : "big4" == n && t.scale(.7, .7), t.play(), e.addChild(t)
                }), null, Laya.Loader.IMAGE, 4)
            }))
        }
    }
    class V extends D {
        constructor() {
            super(), this.gameData = [], this.showList = [], this.direct = 1, this.DELAY_TIME = 90, this.SPEED = 2, this.delayTimer = 0, this.isTouch = !1, this.banner_name = "", this.size(Laya.stage.width, 200), C.Inst.on(C.BANNER_GAMES_INIT, this, this.initData)
        }
        clearPage() {
            C.Inst.offAll(C.BANNER_GAMES_INIT)
        }
        initData(e, t, i, a) {
            this.gameData = [], this.showList = [], this.banner_name = a, this.gameData = e.games_box, this.gameData.forEach(e => {
                this.showList.push(e.appid)
            }), C.Inst.event(C.INIT_JUMP_GAMES, [V.TAG, this.gameData]), this.pos(0, i), this.initView(), this.zOrder = 50, t.addChild(this), C.Inst.off(C.BANNER_GAMES_INIT, this, this.initData)
        }
        initView() {
            this.listBgImg = new Laya.Image("fenfa/mask.png"), this.listBgImg.size(this.width, this.height), this.addChild(this.listBgImg), this.gameList = new Laya.List, this.gameList.renderHandler = new Laya.Handler(this, this.updataGames), this.gameList.repeatX = this.gameData.length, this.gameList.repeatY = 1, this.gameList.itemRender = z, this.gameList.size(this.width, 200), this.gameList.hScrollBarSkin = "", this.gameList.scrollBar.elasticBackTime = 200, this.gameList.scrollBar.elasticDistance = 150, this.listBgImg.addChild(this.gameList), this.gameList.array = this.gameData, C.Inst.event(C.FENFA_GAMES_SHOW, [this.showList, this.banner_name]), this.listBgImg.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), this.listBgImg.on(Laya.Event.MOUSE_UP, this, this.onMouseUp), this.listBgImg.on(Laya.Event.MOUSE_OUT, this, this.onMouseUp), Laya.timer.frameLoop(1, this, this._frameLoop)
        }
        updataGames(e, t) {
            let i = e.getChildByName("gameIcon"),
                a = e.dataSource,
                s = X.convert(a);
            s && (X.addAni(i, s.small_image, s.small_frame, s.small_interval, s.millisecond, "small"), e.offAll(Laya.Event.CLICK), e.on(Laya.Event.CLICK, this, () => {
                B.Inst.jump(a, V.TAG, this.showList, "FENFA_GAMES_CLICK_GAME", this.banner_name)
            }))
        }
        scroll() {
            console.log("MyLikeView::scroll()");
            let e = this.gameData.length;
            e > 10 && (e = 10), this.gameList.scrollBar.min = 0, this.gameList.scrollBar.max = 184 * (e - 4) + 30, this.gameList.scrollBar.elasticBackTime = 200, this.gameList.scrollBar.elasticDistance = 150
        }
        _frameLoop() {
            let e = this.gameData.length,
                t = this.gameList.scrollBar;
            if (e > 10 && (e = 10), !(e <= 4))
                if (this.isTouch);
                else if (this.delayTimer <= 0)
                if (1 == this.direct) {
                    let i = t.value;
                    t.value += this.SPEED;
                    for (let a = 0; a < e; a++) {
                        let s = 184 * a;
                        t.value >= s && i < s && (this.delayTimer = this.DELAY_TIME), (t.value >= 184 * (e - 4) || i == t.value) && (this.delayTimer = this.DELAY_TIME, this.direct = -1)
                    }
                } else {
                    let i = t.value;
                    t.value -= this.SPEED;
                    for (let a = 0; a < e; a++) {
                        let e = 184 * a;
                        t.value <= e && i > e && (this.delayTimer = this.DELAY_TIME), (t.value <= 0 || i == t.value) && (this.delayTimer = this.DELAY_TIME, this.direct = 1)
                    }
                }
            else this.delayTimer -= 1
        }
        onMouseDown() {
            console.log("==MouseDown=="), this.isTouch = !0
        }
        onMouseUp() {
            console.log("===MouseUP=="), this.isTouch && (this.isTouch = !1, this.delayTimer = this.DELAY_TIME)
        }
    }
    V.TAG = "banner";
    class z extends Laya.Box {
        constructor() {
            super(), this.initBox(), this.size(184, 184), this.pos(8, 8)
        }
        initBox() {
            let e = new Laya.Image;
            e.name = "gameIcon", e.size(156, 156), e.scale(.9, .9), e.anchorX = .5, e.anchorY = .5, this.addChild(e), e.centerX = 0, e.centerY = 0;
            let t = new Laya.Image;
            t.skin = "fenfa/border2.png", t.size(184, 184), t.pos(0, 0), this.addChild(t)
        }
    }
    class F extends D {
        constructor() {
            super(), this.gameData = [], this.showList = [], this.showHand = !1, this.size(Laya.stage.width, 720), C.Inst.on(C.RESULT_GAMES_INIT, this, this.initData)
        }
        initData(e, t, i, a) {
            this.gameData = e.games_box, this.showHand = i, this.y = a, this.gameData.forEach(e => {
                this.showList.push(e.appid)
            }), C.Inst.event(C.INIT_JUMP_GAMES, [F.TAG, this.gameData]), this.initView(), t.addChild(this), C.Inst.event(C.FENFA_GAMES_SHOW, [this.showList, F.TAG])
        }
        initView() {
            this.gameList = new Laya.List, this.gameList.pos(0, 0), this.gameList.size(this.width, this.height), this.gameList.renderHandler = new Laya.Handler(this, this.updataGames), this.gameList.repeatX = 3, this.gameList.repeatY = 2, this.gameList.spaceX = 10, this.gameList.spaceY = 18, this.gameList.itemRender = J, this.addChild(this.gameList), this.gameList.array = this.gameData
        }
        updataGames(e, t) {
            let i = e.getChildByName("gameImg"),
                a = e.dataSource,
                s = e.getChildByName("hand");
            a.differ && this.showHand && !s ? this.addHand(e) : s && (s.removeSelf(), s.destroy());
            let n = X.convert(a);
            n && (X.addAni(i, n.big_image, n.big_frame, n.big_interval, n.millisecond_big, "big"), this.rotateIcon(e, Laya.Handler.create(this, () => {
                e.on(Laya.Event.CLICK, this, () => {
                    B.Inst.jump(a, F.TAG, this.showList, "FENFA_GAMES_CLICK_GAME", "1")
                })
            })))
        }
        clearPage() {
            C.Inst.offAll(C.RESULT_GAMES_INIT)
        }
        addHand(e) {
            let t = new Laya.Animation;
            t.loadAtlas("res/atlas/finger.atlas", Laya.Handler.create(this, () => {
                e && t.play(0, !0)
            })), t.name = "hand", t.scale(.8, .8), t.pos(20, 100), t.zOrder = 100, e.addChild(t)
        }
    }
    F.TAG = "result_page";
    class J extends Laya.Box {
        constructor() {
            super(), this.size(238, 332), this.pos(10, 332), this.anchorX = 0, this.anchorY = 1, this.initBox()
        }
        initBox() {
            let e = new Laya.Image;
            e.name = "gameImg", e.size(198, 264), e.pos(119, 152), e.anchorX = .5, e.anchorY = .5, this.addChild(e);
            let t = new Laya.Image;
            t.name = "gameBroder", t.skin = "fenfa/result_border.png", t.size(238, 332), t.pos(0, 0), this.addChild(t)
        }
    }
    class K extends D {
        constructor() {
            super(), this.gameData = [], this.showList = [], this.moveType = 1, C.Inst.on(C.HOT_GAMES_INIT, this, this.initData), Z.banner_reash("hotshare")
        }
        initData(e, t) {
            this.gameData = e.games_box, this.gameData.forEach(e => {
                this.showList.push(e.appid)
            }), C.Inst.event(C.INIT_JUMP_GAMES, [K.TAG, this.gameData]), this.initView(), this.zOrder = 100, t.addChild(this), C.Inst.event(C.FENFA_GAMES_SHOW, [this.showList, K.TAG])
        }
        initView() {
            this.createBg(1);
            let e = new Laya.Image("fenfa/bkyx.png");
            e.y = 70, e.centerX = 0, this.addChild(e), this.gameList = new Laya.List,
                this.gameList.renderHandler = new Laya.Handler(this, this.updataGames),
                this.gameList.repeatX = 2, this.gameList.repeatY = Math.ceil(this.gameData.length / 2), this.gameList.spaceX = 32,
                this.gameList.spaceY = 20, this.gameList.top = 200, this.gameList.bottom = 0, this.gameList.left = 0,
                this.gameList.right = 0, this.gameList.itemRender = j, this.gameList.vScrollBarSkin = "", this.gameList.scrollBar.elasticBackTime = 200,
                this.gameList.scrollBar.elasticDistance = 50, this.addChild(this.gameList), this.gameList.array = this.gameData,
                this.gameList.on(Laya.Event.MOUSE_DOWN, this, this.onTouch), this.gameList.on(Laya.Event.MOUSE_UP, this, this.onLeave),
                this.gameList.on(Laya.Event.MOUSE_OUT, this, this.onLeave),
                this.closeBtn = new Laya.Image("fenfa/fhan.png"), this.closeBtn.pos(0, 72),
                this.closeBtn.size(108, 99), this.addChild(this.closeBtn), this.closeBtn.on(Laya.Event.CLICK, this, this.onBtnClose),
                this.startBtn = new Laya.Image("fenfa/btn_start.png"), this.startBtn.bottom = 64, this.startBtn.centerX = 0, this.addChild(this.startBtn);
            var t = JSON.parse(se.mWX.getOnOffParamByKey("of_mistake_type"));
            if (1 == se.mWX.fhOnoff && 1 != Number(t.hotshare)) {
                var i = JSON.parse(se.mWX.getOnOffParamByKey("of_touch_mistake")),
                    a = !1;
                1 == Number(i.user) ? "" != ae.uo.channe_id && "0" != ae.uo.channe_id && (2 == Number(t.hotshare) ? a = !0 : 3 == Number(t.hotshare) && Number(ae.uo.mWeUser.uid) % 2 == 0 && (a = !0)) : 2 == Number(t.hotshare) ? a = !0 : 3 == Number(t.hotshare) && Number(ae.uo.mWeUser.uid) % 2 == 0 && (a = !0), console.log("444444444444444444", Z.touchNum < Number(JSON.parse(se.mWX.getOnOffParamByKey("of_touch_mistake")).touchNum), se.checkTimeSlot(), a, 0 == Number(se.mWX.ip_location.bool)), Z.touchNum < Number(JSON.parse(se.mWX.getOnOffParamByKey("of_touch_mistake")).touchNum) && se.checkTimeSlot() && a && 0 == Number(se.mWX.ip_location.bool) && (Z.touchNum++, se.mWX.setUserValue("zs-20200723-touchNum", Z.touchNum + ""), se.adUtil.adBanner && (i.touchTime < 3 && (i.touchTime = [1e3, 1e3, 1e3, 1e3]), Number(i.bannerRefresh), Laya.timer.once(Number(i.touchTime[2]), this, () => {
                    se.adUtil.showBannerAd(""), Laya.timer.once(Number(i.touchTime[3]), this, () => {
                        se.adUtil.hideBannerAd()
                    })
                })))
            }
            this.startBtn.on(Laya.Event.CLICK, this, this.onBtnStart), Laya.timer.once(1e3, this, () => {
                this.gameList.scrollBar.max += 200, this.loopGames()
            })
        }
        onBtnClose(e) {
            e.stopPropagation(), C.Inst.event(C.HOT_GAMES_ON_CLOSE)
        }
        onBtnStart(e) {
            e.stopPropagation(), C.Inst.event(C.HOT_GAMES_ON_CLOSE)
        }
        loopGames() {
            let e = 0,
                t = 2e3 * Math.ceil(this.gameData.length / 2),
                i = this.gameList.scrollBar.value / this.gameList.scrollBar.max * t;
            1 == this.moveType && (e = this.gameList.scrollBar.max, i = (this.gameList.scrollBar.max - this.gameList.scrollBar.value) / this.gameList.scrollBar.max * t), Laya.Tween.to(this.gameList.scrollBar, {
                value: e
            }, i, Laya.Ease.linearInOut, Laya.Handler.create(this, () => {
                this.gameList.scrollBar.value + 360 > this.gameList.scrollBar.max ? this.moveType = -1 : this.gameList.scrollBar.value - 360 < 0 && (this.moveType = 1), this.loopGames()
            }))
        }
        onTouch(e) {
            Laya.timer.clear(this, this.loopGames), Laya.Tween.clearAll(this.gameList.scrollBar)
        }
        onLeave() {
            this.preventMove() && Laya.timer.once(1e3, this, this.loopGames)
        }
        updataGames(e, t) {
            let i = e.getChildByName("gameImg"),
                a = e.dataSource,
                s = X.convert(a);
            s && (X.addAni(i, s.big_image, s.big_frame, s.big_interval, s.millisecond_big, "big2"), e.offAll(Laya.Event.CLICK), e.on(Laya.Event.CLICK, this, () => {
                B.Inst.jump(a, K.TAG, this.showList, "FENFA_GAMES_CLICK_GAME", "1")
            }))
        }
        clearPage() {
            C.Inst.offAll(C.HOT_GAMES_INIT)
        }
    }
    K.TAG = "recommend_page";
    class j extends Laya.Box {
        constructor() {
            super(), this.initBox(), this.size(330, 440), this.anchorX = .5, this.anchorY = .5, this.pos(197, 220)
        }
        initBox() {
            let e = new Laya.Image;
            e.name = "gameImg", e.size(308, 412), e.pos(12, 12), this.addChild(e);
            let t = new Laya.Image;
            t.name = "game_mask", t.skin = "fenfa/kuang.png", t.centerX = .5, t.centerY = .5, this.addChild(t)
        }
    }
    class q extends Laya.Image {
        constructor() {
            super()
        }
        btnShowLater(e) {
            this.alpha = 0, Laya.timer.once(2e3, e, () => {
                e.addChild(this), Laya.Tween.to(this, {
                    alpha: 1
                }, 300)
            })
        }
    }
    class Y extends D {
        constructor() {
            super(), this.showList = [], this.friend_name = "", this.size(Laya.stage.width, Laya.stage.height), this.pos(0, 0), C.Inst.on(C.FRIEND_SHARE_GAMES_INIT, this, this.initData)
        }
        initData(e, t, i = "1") {
            this.gameData = e, this.showList = [this.gameData.appid], C.Inst.event(C.INIT_JUMP_GAMES, [Y.TAG, [this.gameData]]), this.initView(), this.initOpenData(), this.zOrder = 100, t.addChild(this), this.friend_name = "1" == i ? Y.TAG : i, C.Inst.event(C.FENFA_GAMES_SHOW, [this.showList, this.friend_name])
        }
        initOpenData() {
            if (Laya.Browser.onMiniGame) {
                wx.postMessage({
                    type: "friendShare",
                    game: this.gameData,
                    show: 1
                });
                let e = new Laya.WXOpenDataViewer;
                e.name = "inviteImg", e.size(this.width, this.height), e.pos(0, 0), this.addChild(e)
            }
        }
        initView() {
            this.createBg(), this.showBox = new Laya.Image("fenfa/invite_play_bg.png"), this.showBox.size(600, 255), this.showBox.centerX = 0, this.showBox.centerY = 0, this.addChild(this.showBox), this.showBox.on(Laya.Event.CLICK, this, this.onClikGame), this.headImg = new Laya.Image, this.headImg.size(80, 80), this.headImg.pos(42, 42), Laya.timer.once(2e3, this, () => {
                this.headImg.skin = "fenfa/fakeImg.jpg"
            }), this.showBox.addChild(this.headImg);
            let e = new Laya.Image;
            e.size(80, 80), e.pos(0, 0), this.headImg.addChild(e), this.friendText = new w, this.friendText.size(420, 36), this.friendText.pos(144, 36), this.friendText.fontSize = 30, this.friendText.color = "#010101", this.friendText.text = "", this.showBox.addChild(this.friendText), this.gameText = new w, this.gameText.size(420, 36), this.gameText.pos(144, 88), this.gameText.fontSize = 30, this.gameText.color = "#000000", this.gameText.bold = !0, this.gameText.text = this.gameData.name, this.showBox.addChild(this.gameText);
            let t = new Laya.Image("fenfa/invite_play_ok.png");
            this.showBox.addChild(t), t.centerX = 0, t.bottom = 32, this.closeBtn = new q, this.closeBtn.skin = "fenfa/invite_play_pass.png", this.closeBtn.centerX = 0, this.closeBtn.centerY = 242, this.closeBtn.btnShowLater(this), this.closeBtn.on(Laya.Event.CLICK, this, this.onCloseFriend)
        }
        onClikGame() {
            B.Inst.jump(this.gameData, Y.TAG, [this.gameData.appid], "FENFA_GAMES_CLICK_GAME", this.friend_name)
        }
        onCloseFriend() {
            B.Inst.jumpGameInfo.banner_name = this.friend_name, B.Inst.jumpGameInfo.callBack = "FENFA_GAMES_CLICK_GAME", B.Inst.jumpGameInfo.jump_tag = this.friend_name, B.Inst.jumpGameInfo.showList = [this.gameData.appid];
            let e = [],
                t = [];
            for (let i = 0; i < B.Inst.jumpedGameInfo[Y.TAG].length; i++) {
                let a = B.Inst.jumpedGameInfo[Y.TAG][i];
                a.jumped ? t.push(a.appid) : e.push(a)
            }
            t.indexOf(this.gameData.appid) < 0 || !e.length ? B.Inst.jumpedCB(this.gameData, -1, !0) : B.Inst.jumpedCB(this.gameData, 1, !1), C.Inst.event(C.FRIEND_SHARE_GAMES_ON_CLOSE)
        }
        clearPage() {
            Laya.Browser.onMiniGame && wx.postMessage({
                type: "friendShare",
                show: 0
            });
            let e = this.getChildByName("inviteImg");
            e && (e.removeSelf(), e.destroy(!0)), C.Inst.offAll(C.FRIEND_SHARE_GAMES_INIT)
        }
    }
    Y.TAG = "friend_recom";
    class Z extends e.Views.BeginUI {
        constructor() {
            super(), this._clickflag = 0, this._clickLable = null, this.show_btn = !1, this.data = null, this.skin_id = 1, this.num = 5, this.isWin = !1, this.is_click = !1, Laya.loader.load("res/atlas/gameui.atlas", Laya.Handler.create(this, this.onLoaded))
        }
        onLoaded() {}
        SetGameReference(e) {
            this.game = e
        }
        onEnable() {
            if (this.height = Laya.stage.height, null == se.BannerGamesShare && (se.BannerGamesShare = new V), this.box.visible = !1, this.box_start.visible = !0, this.RewardUI.visible = !1, this.RelifeUI.visible = !1, this.GameOverUI.visible = !1, null != Z.is_relice && this.onBeginClick(Z.is_relice), window.wx && 1 == se.mWX.fhOnoff) {
                var e = JSON.parse(se.mWX.getOnOffParamByKey("of_show_fenfa_closebtn"));
                1 == Number(e.btnShow) ? Number(ae.uo.mWeUser.uid % 2 != 0) && (this.show_btn = !0) : 2 == Number(e.btnShow) && (this.show_btn = !0)
            }
            this.show_btn ?
                (this.btn_friend.y = se.applist_y, this.img_gold.y = this.btn_friend.y + 100,
                    this.btn_friend.on(Laya.Event.CLICK, this, this.onshowFriend)) :
                (this.img_gold.y = se.applist_y, this.btn_friend.visible = !1),
                this.box_num.y = se.applist_y + 50, this.img_start.scale(1.1, 1.1),
                this.moveLikeGame1(800, 0), this.img_mask.x = -240,
                this.box_start.on(Laya.Event.CLICK, this, this.onBeginClick),
                this.btn_sound.on(Laya.Event.CLICK, this, this.onBtnMusicClick),
                this.btn_shop.on(Laya.Event.CLICK, this, this.onShop), se.BannerGamesShare ?
                (se.BannerGamesShare.clearPage(), se.BannerGamesShare.removeSelf(),
                    se.BannerGamesShare.destroy(!0), se.BannerGamesShare = null, k.GetGamesBox("banner", Laya.Handler.create(this, e => {
                        null == se.BannerGamesShare && (se.BannerGamesShare = new V), C.Inst.event(C.BANNER_GAMES_INIT, [e, Laya.stage, Laya.stage.height - 240, "banner_home"])
                    }))) : k.GetGamesBox("banner", Laya.Handler.create(this, e => {
                    null == se.BannerGamesShare && (se.BannerGamesShare = new V), C.Inst.event(C.BANNER_GAMES_INIT, [e, Laya.stage, Laya.stage.height - 240, "banner_home"])
                })), se.DiversionImg ?
                (se.DiversionImg.removeSelf(), se.DiversionImg.destroy(!0), se.DiversionImg = null,
                    k.GetGamesBox("diversion", Laya.Handler.create(this, e => {
                        se.DiversionImg = new Laya.Image,
                            se.DiversionImg.anchorX = .5,
                            se.DiversionImg.anchorY = .5,
                            se.DiversionImg.pos(100, 350),
                            se.DiversionImg.zOrder = 100,
                            se.DiversionImg.skin = e.games_box[0].url_btn;
                        var t = e.games_box,
                            i = [];
                        t.forEach(e => {
                            i.push(e.appid)
                        }), this.addChild(se.DiversionImg), Z.rotaOtherGame(se.DiversionImg), C.Inst.event(C.FENFA_GAMES_SHOW, [i, "icon"]), se.DiversionImg.on(Laya.Event.CLICK, this, () => {
                            let t = e.games_box[0];
                            B.Inst.jump(t, V.TAG, i, "FENFA_GAMES_CLICK_GAME", "icon")
                        })
                    }))) : k.GetGamesBox("diversion", Laya.Handler.create(this, e => {
                    se.DiversionImg = new Laya.Image, se.DiversionImg.anchorX = .5, se.DiversionImg.anchorY = .5, se.DiversionImg.pos(100, 350), se.DiversionImg.zOrder = 10, se.DiversionImg.skin = e.games_box[0].url_btn;
                    var t = e.games_box;
                    this.addChild(se.DiversionImg);
                    var i = [];
                    t.forEach(e => {
                        i.push(e.appid)
                    }), Z.rotaOtherGame(se.DiversionImg), C.Inst.event(C.FENFA_GAMES_SHOW, [i, "icon"]), se.DiversionImg.on(Laya.Event.CLICK, this, () => {
                        let t = e.games_box[0];
                        B.Inst.jump(t, V.TAG, i, "FENFA_GAMES_CLICK_GAME", "icon")
                    })
                }));
            if (!se.DiversionImg) {
                se.DiversionImg = new Laya.Image
            }
            let t = Number(se.mWX.getOnOffValueByKey("of_shop_type"));
            this.btn_shop.visible = !0;
            0 != Number(t) && 0 != se.mWX.fhOnoff || (this.btn_shop.visible = !0),
                se.adUtil.hideBannerAd(),
                console.log("===========GameBegin=============="),
                this.btnbegin.on(Laya.Event.CLICK, this, this.onBeginClick),
                this.btnset.on(Laya.Event.CLICK, this, this.onBtnSetClick),
                this.btnRestart.on(Laya.Event.CLICK, this, this.onBtnRestartClick),
                this.btnPrev.on(Laya.Event.CLICK, this, this.onBtnPrevClick),
                this.btnNext.on(Laya.Event.CLICK, this, this.onBtnNextClick),
                this.btnset.on(Laya.Event.CLICK, this, this.onBtnSetClick),
                this.btnRevive.on(Laya.Event.CLICK, this, this.onBtnReviveClick),
                this.btnSkin.on(Laya.Event.CLICK, this, this.onBtnSkinClick), this.btnBack.on(Laya.Event.CLICK, this, this.onBtnBackClick), this.btnleft.on(Laya.Event.CLICK, this, this.onBtnChangeClick), this.btnright.on(Laya.Event.CLICK, this, this.onBtnChangeClick),
                this.txt_num1.text = String(Number(ne.getRoundId())),
                this.txt_num2.text = String(Number(ne.getRoundId()) + 1),
                this.txtCoin.text = String(ne.getCoinNum()), this.font.value = String(ne.getCoinNum())
        }
        onBeginClick(e) {
            let t = this;
            console.log("===========onBeginClick1234==============", this.game._moveIndexMax), this.labSkin.visible || (t.btnbegin.visible = !1, t.begin.visible = !1, t.btnRestart.visible = !1, t.labBegin.visible = !1, this.game.addMouseEvent(), this.game.onMouseDown(e), this.box_start.visible = !1)
        }
        updataplace(e, t) {
            this.img_mask.x = -240;
            var i = 237 * (t / e);
            this.img_mask.x = -240 + i
        }
        onBtnSetClick() {
            this._option = new H, Laya.stage.addChild(this._option)
        }
        onBtnSkinClick() {
            this.btnPrev.visible = !1, this.btnNext.visible = !1, this.btnset.visible = !1, this.btnSkin.visible = !1, this.btnBack.visible = !0, this.labSkin.visible = !0
        }
        onBtnBackClick() {
            this.btnPrev.visible = !0, this.btnNext.visible = !0, this.btnset.visible = !0, this.btnSkin.visible = !0, this.btnBack.visible = !1, this.labSkin.visible = !1
        }
        onSkinChange(e) {
            "imgSkin1" == e.target.name || "imgSkin7" == e.target.name ? (this.skin1.visible = !0, this.skin2.visible = !1, this.skin3.visible = !1, this.skin4.visible = !1, this.skin5.visible = !1, this.skin6.visible = !1, this.btnleft.visible ? (this.game.onChangePensonSkin(this.game._runner, 7), ne.addCurSkinId("7"), this._clickflag = 1) : (this.game.onChangePensonSkin(this.game._runner, 1), ne.addCurSkinId("1"), this._clickflag = 0), this._clickLable = this.skin1) : "imgSkin2" == e.target.name || "imgSkin8" == e.target.name ? (this.skin1.visible = !1, this.skin2.visible = !0, this.skin3.visible = !1, this.skin4.visible = !1, this.skin5.visible = !1, this.skin6.visible = !1, this.btnleft.visible ? (this.game.onChangePensonSkin(this.game._runner, 8), ne.addCurSkinId("8"), this._clickflag = 1) : (this.game.onChangePensonSkin(this.game._runner, 2), ne.addCurSkinId("2"), this._clickflag = 0), this._clickLable = this.skin2) : "imgSkin3" == e.target.name || "imgSkin9" == e.target.name ? (this.skin1.visible = !1, this.skin2.visible = !1, this.skin3.visible = !0, this.skin4.visible = !1, this.skin5.visible = !1, this.skin6.visible = !1, this.btnleft.visible ? (this.game.onChangePensonSkin(this.game._runner, 9), ne.addCurSkinId("9"), this._clickflag = 1) : (this.game.onChangePensonSkin(this.game._runner, 3), ne.addCurSkinId("3"), this._clickflag = 0), this._clickLable = this.skin3) : "imgSkin4" == e.target.name || "imgSkin10" == e.target.name ? (this.skin1.visible = !1, this.skin2.visible = !1, this.skin3.visible = !1, this.skin4.visible = !0, this.skin5.visible = !1, this.skin6.visible = !1, this.btnleft.visible ? (this.game.onChangePensonSkin(this.game._runner, 10), ne.addCurSkinId("10"), this._clickflag = 1) : (this.game.onChangePensonSkin(this.game._runner, 4), ne.addCurSkinId("4"), this._clickflag = 0), this._clickLable = this.skin4) : "imgSkin5" == e.target.name || "imgSkin11" == e.target.name ? (this.skin1.visible = !1, this.skin2.visible = !1, this.skin3.visible = !1, this.skin4.visible = !1, this.skin5.visible = !0, this.skin6.visible = !1, this.btnleft.visible ? (this.game.onChangePensonSkin(this.game._runner, 11), ne.addCurSkinId("11"), this._clickflag = 1) : (this.game.onChangePensonSkin(this.game._runner, 5), ne.addCurSkinId("5"), this._clickflag = 0), this._clickLable = this.skin5) : "imgSkin6" != e.target.name && "imgSkin12" != e.target.name || (this.skin1.visible = !1, this.skin2.visible = !1, this.skin3.visible = !1, this.skin4.visible = !1, this.skin5.visible = !1, this.skin6.visible = !0, this.btnleft.visible ? (this.game.onChangePensonSkin(this.game._runner, 12), ne.addCurSkinId("12"), this._clickflag = 1) : (this.game.onChangePensonSkin(this.game._runner, 6), ne.addCurSkinId("6"), this._clickflag = 0), this._clickLable = this.skin6)
        }
        onBtnChangeClick(e) {
            "btnleft" == e.target.name ? (this.imgSkin1.visible = !0, this.imgSkin2.visible = !0, this.imgSkin3.visible = !0, this.imgSkin4.visible = !0, this.imgSkin5.visible = !0, this.imgSkin6.visible = !0, this.imgSkin7.visible = !1, this.imgSkin8.visible = !1, this.imgSkin9.visible = !1, this.imgSkin10.visible = !1, this.imgSkin11.visible = !1, this.imgSkin12.visible = !1, this.btnleft.visible = !1, this.btnright.visible = !0, 1 == this._clickflag ? (this.skin1.visible = !1, this.skin2.visible = !1, this.skin3.visible = !1, this.skin4.visible = !1, this.skin5.visible = !1, this.skin6.visible = !1, this._clickLable.visible = !1) : this._clickLable.visible = !0) : (this.imgSkin1.visible = !1, this.imgSkin2.visible = !1, this.imgSkin3.visible = !1, this.imgSkin4.visible = !1, this.imgSkin5.visible = !1, this.imgSkin6.visible = !1, this.imgSkin7.visible = !0, this.imgSkin8.visible = !0, this.imgSkin9.visible = !0, this.imgSkin10.visible = !0, this.imgSkin11.visible = !0, this.imgSkin12.visible = !0, this.btnleft.visible = !0, this.btnright.visible = !1, 0 == this._clickflag ? (this.skin1.visible = !1, this.skin2.visible = !1, this.skin3.visible = !1, this.skin4.visible = !1, this.skin5.visible = !1, this.skin6.visible = !1, this._clickLable.visible = !1) : this._clickLable.visible = !0)
        }
        onBtnPrevClick() {
            if (ne.setDeadPoint(""), ne.setHighPointY(""), 0 == this.game._cleanDataFlag) {
                if (this.game._cleanDataFlag = 1, Number(ne.getRoundId()) > 1) ne.addUpRoundId(), this.game.onGameRevive();
                else {
                    let e = String(a.levelMax);
                    if (e.length < 4) {
                        let t = 4 - e.length;
                        for (let i = 0; i < t; i++) e = "0" + e
                    }
                    localStorage.setItem("zs-20200723-roundid", e), this.game.onGameRevive()
                }
            }
        }
        onBtnNextClick() {
            if (ne.setDeadPoint(""), ne.setHighPointY(""), 0 == this.game._cleanDataFlag) {
                this.game._cleanDataFlag = 1, Number(ne.getRoundId()) < a.levelMax ? (ne.addNextRoundId(), this.game.onGameRevive()) : (localStorage.setItem("zs-20200723-roundid", "0001"), this.game.onGameRevive())
            }
        }
        onBtnRestartClick() {
            this.game.onGameRevive()
        }
        onBtnReviveClick() {
            ne.setDeadPoint(String(this.game._moveIndex)), ne.setHighPointY(String(this.game._floorHigh)), this.btnRevive.visible = !1, this.game.onGameRevive()
        }
        showRestart() {
            this.RewardUI.visible || this.RelifeUI.visible || this.GameOverUI.visible || this.showView("RelifeUI"), ne.setDeadPoint(""), ne.setHighPointY("")
        }
        showGameEnd() {
            Laya.timer.once(1e3, this, () => {
                this.RewardUI.visible || this.RelifeUI.visible || this.GameOverUI.visible || this.showView("RewardUI")
            }), ne.setDeadPoint(""), ne.setHighPointY("")
        }
        setGold(e) {
            this.txtCoin.visible = !0, this.txtCoin.text = String(Number(this.txtCoin.text) + e), this.font.value = String(Number(this.font.value) + e)
        }
        onBtnMusicClick(e) {
            e.stopPropagation(), 0 != this.box_start.visible && (1 == ne._music ? this.btn_set_music.skin = "set/img_close.png" : this.btn_set_music.skin = "set/img_open.png", 1 == ne._sound ? this.btn_set_sound.skin = "set/img_close.png" : this.btn_set_sound.skin = "set/img_open.png", this.box_set.visible = !0, this.btn_set_music.on(Laya.Event.CLICK, this, this.onMusic), this.btn_set_sound.on(Laya.Event.CLICK, this, this.onSound), this.btn_close_set.on(Laya.Event.CLICK, this, this.onCloseSet))
        }
        onMusic() {
            1 == ne._music ? (this.btn_set_music.skin = "set/img_open.png", ne._music = !1, ne.playBGM(a.soundBGM),
                    window.WebAudioEngine.playMusic(a.pathBGM),
                    Laya.LocalStorage.setItem("Tower-Run-Online-zs-music", "false")) :
                (this.btn_set_music.skin = "set/img_close.png", ne._music = !0, ne.stopBGM(), window.WebAudioEngine.stopMusic(),
                    Laya.LocalStorage.setItem("Tower-Run-Online-zs-music", "true")
                )
        }

        onSound() {
            1 == ne._sound ? (this.btn_set_sound.skin = "set/img_open.png", ne._sound = !1, Laya.SoundManager.soundMuted = false,
                    Laya.LocalStorage.setItem("Tower-Run-Online-zs-sound", "false")) :
                (this.btn_set_sound.skin = "set/img_close.png", ne._sound = !0, Laya.SoundManager.soundMuted = true,
                    Laya.LocalStorage.setItem("Tower-Run-Online-zs-sound", "true"))
        }
        onshowFriend() {
            k.GetGamesBox("friend_share", Laya.Handler.create(this, e => {
                e.games_box[0] ? (se.adUtil.hideBannerAd(), se.is_game = !0, Laya.timer.clearAll(this), se.FriendShareBtn = new Y, C.Inst.event(C.FRIEND_SHARE_GAMES_INIT, [e.games_box[0], Laya.stage, "friend_recom_push"]), C.Inst.on(C.FRIEND_SHARE_GAMES_ON_CLOSE, this, this.onCloseFriendBtn), C.Inst.on(C.FRIEND_SHARE_GAMES_SHOW_OR_CLOSE, this, this.onCloseFriendBtn)) : this.onCloseFriendBtn()
            }))
        }
        onCloseFriendBtn() {
            se.FriendShareBtn && (C.Inst.off(C.FRIEND_SHARE_GAMES_SHOW_OR_CLOSE, this, this.onCloseFriendBtn), C.Inst.off(C.FRIEND_SHARE_GAMES_ON_CLOSE, this, this.onCloseFriendBtn), se.FriendShareBtn.clearPage(), se.FriendShareBtn.removeSelf(), se.FriendShareBtn.destroy(!0), se.FriendShareBtn = null), se.is_game = !1, (this.RewardUI.visible || this.RelifeUI.visible || this.GameOverUI.visible) && (se.adUtil.showBannerAd(""), this.btnDis(1), this.RelifeUI.visible && (this.skipBtn.alpha = 1, this.skipBtn.visible = !0, Laya.timer.loop(1e3, this, () => {
                this.onTxt()
            })), this.GameOverUI.visible && (this.isWin ? (this.nextBtn.alpha = 1, this.nextBtn.visible = !0) : (this.againBtn.alpha = 1, this.againBtn.visible = !0, this.btn_nextlevel.alpha = 1, this.btn_nextlevel.visible = !0)))
        }
        onCloseSet() {
            this.box_set.visible = !1, this.btn_set_music.off(Laya.Event.CLICK, this, this.onMusic), this.btn_set_sound.off(Laya.Event.CLICK, this, this.onSound), this.btn_close_set.off(Laya.Event.CLICK, this, this.onCloseSet)
        }
        onJump(e) {
            e.stopPropagation()
        }
        onShop(e) {
            e.stopPropagation(),
                null == se.shopui &&
                (se.shopui = new W,
                    Laya.stage.addChild(se.shopui),
                    se.shopui.on(W.change_skin, this, this.onChangeSkin),
                    se.shopui.on(W.add_gold, this, this.onShopAddGold))
        }
        onShopAddGold() {
            this.txtCoin.text = String(ne.getCoinNum()), this.font.value = String(ne.getCoinNum())
        }
        onChangeSkin(e) {
            this.game.onChangePensonSkin(this.game._runner, e), ne.addCurSkinId("" + e), this._clickflag = 1
        }
        showView(e = "box_start") {
            if (console.log("显示页面", e), this.box_start.visible = !1, this.RewardUI.visible = !1, this.RelifeUI.visible = !1, this.GameOverUI.visible = !1, se.adUtil.hideBannerAd(), 1 == ne._stopVoice ? this.btn_sound.skin = "ui/btn_sound2.png" : this.btn_sound.skin = "ui/btn_sound1.png", "box_start" == e) se.DiversionImg.visible = !0, this.box_start.visible = !0, se.BannerGamesShare && (se.BannerGamesShare.visible = !0);
            else if ("RewardUI" == e) {
                if (this.data = Z.getReward(Number(ne.getRoundId())), "" == this.data) return void this.onclose();
                if ("1" == this.data.gettype || 0 == se.mWX.fhOnoff && "0" != this.data.gettype);
                else if ("2" == this.data.gettype);
                else if ("3" != this.data.gettype) return this.RewardUI.visible = !1, void this.onclose();
                se.DiversionImg.visible = !1, se.BannerGamesShare && (se.BannerGamesShare.visible = !0), this.relifeBtn.off(Laya.Event.CLICK, this, this.RelifeBtnClick), this.skipBtn.off(Laya.Event.CLICK, this, this.SkipBtnClick), this.RewardUI.visible = !0, this.RewardUI.height = Laya.stage.height, this.showRewardUI()
            } else "RelifeUI" == e ? (Z.is_relice = null,
                se.DiversionImg.visible = !1, se.BannerGamesShare &&
                (se.BannerGamesShare.visible = !0),
                this.relifeBtn.off(Laya.Event.CLICK, this, this.RelifeBtnClick),
                this.skipBtn.off(Laya.Event.CLICK, this, this.SkipBtnClick),
                this.RelifeUI.visible = !0, this.RelifeUI.height = Laya.stage.height,
                this.ShowRelifeUI()) : "GameOverUI" == e && (Laya.timer.clearAll(this),
                Z.is_relice = null, se.DiversionImg.visible = !1, se.BannerGamesShare &&
                (se.BannerGamesShare.visible = !1), this.returnBtn.visible = !1,
                this.returnBtn.off(Laya.Event.CLICK, this, this.ReturnBtnClick),
                this.nextBtn.off(Laya.Event.CLICK, this, this.NextBtnClick),
                this.againBtn.off(Laya.Event.CLICK, this, this.AgainBtnClick),
                this.btn_nextlevel.off(Laya.Event.CLICK, this, this.NextLevelBtnClick),
                this.GameOverUI.visible = !0, this.GameOverUI.height = Laya.stage.height, this.ShowGameOverUI())
        }
        static banner_reash(e) {
            var t = JSON.parse(se.mWX.getOnOffParamByKey("of_mistake_type"));
            if (1 == se.mWX.fhOnoff && 1 != Number(t[e])) {
                var i = JSON.parse(se.mWX.getOnOffParamByKey("of_touch_mistake")),
                    a = !1;
                1 == Number(i.user) ? "" != ae.uo.channe_id && "0" != ae.uo.channe_id && (2 == Number(t[e]) ? a = !0 : 3 == Number(t[e]) && Number(ae.uo.mWeUser.uid) % 2 == 0 && (a = !0)) : 2 == Number(t[e]) ? a = !0 : 3 == Number(t[e]) && Number(ae.uo.mWeUser.uid) % 2 == 0 && (a = !0), Z.touchNum < Number(JSON.parse(se.mWX.getOnOffParamByKey("of_touch_mistake")).touchNum) && se.checkTimeSlot() && a && 0 == Number(se.mWX.ip_location.bool) && se.adUtil.adBanner && (Z.is_mistake = !0, 0 == Number(i.bannerRefresh) || (se.adUtil.adBanner.destroy(!0), se.adUtil.adBanner = null, se.adUtil.showBannerAd("", 1, () => {})))
            }
        }
        touchMistake(e, t, i) {
            var a = JSON.parse(se.mWX.getOnOffParamByKey("of_mistake_type"));
            if (1 == se.mWX.fhOnoff && 1 != Number(a[e])) {
                var s = JSON.parse(se.mWX.getOnOffParamByKey("of_touch_mistake")),
                    n = !1;
                1 == Number(s.user) ? "" != ae.uo.channe_id && "0" != ae.uo.channe_id && (2 == Number(a[e]) ? n = !0 : 3 == Number(a[e]) && Number(ae.uo.mWeUser.uid) % 2 == 0 && (n = !0)) : 2 == Number(a[e]) ? n = !0 : 3 == Number(a[e]) && Number(ae.uo.mWeUser.uid) % 2 == 0 && (n = !0), console.log("555555555555555555", Z.touchNum < Number(JSON.parse(se.mWX.getOnOffParamByKey("of_touch_mistake")).touchNum), se.checkTimeSlot(), n, 0 == Number(se.mWX.ip_location.bool)), Z.touchNum < Number(JSON.parse(se.mWX.getOnOffParamByKey("of_touch_mistake")).touchNum) && se.checkTimeSlot() && n && 0 == Number(se.mWX.ip_location.bool) ? (t(), Z.touchNum++, console.log("555555555555555555册数", Z.touchNum), se.mWX.setUserValue("zs-20200723-touchNum", Z.touchNum + ""), se.adUtil.adBanner ? (Number(s.bannerRefresh), Laya.timer.once(Number(s.touchTime[0]), this, () => {
                    se.adUtil.showBannerAd(""), Laya.timer.once(Number(s.touchTime[1]), this, () => {
                        this.btnDis(1)
                    })
                })) : (se.adUtil.showBannerAd(""), this.btnDis(1))) : i()
            } else i()
        }
        showRewardUI() {
            if (this.RewardUI.height = Laya.stage.height, this.RewardUI.visible) {
                if (this.data = Z.getReward(Number(ne.getRoundId())), "" == this.data) return void this.onclose(); {
                    if ("1" == this.data.gettype || 0 == se.mWX.fhOnoff && "0" != this.data.gettype) this.btn_reward.skin = "ui/btn_receive.png";
                    else if ("2" == this.data.gettype) this.btn_reward.skin = "ui/btn_receive_video.png";
                    else {
                        if ("3" != this.data.gettype) return this.RewardUI.visible = !1, void this.onclose();
                        this.btn_reward.skin = "ui/btn_receive.png"
                    }
                    Z.banner_reash("reward");
                    se.mWX.indexBpTotle("end_award", {});
                    var e = this.data.rewardid;
                    this.skin_id = e, this.img_type.skin = "gameui/" + this.skin_id + ".png";
                    let t = se.applist_y + 60;
                    this.show_btn && (t = this.btn_friend.y + 100), se.BannerGamesShare ? (se.BannerGamesShare.clearPage(), se.BannerGamesShare.removeSelf(), se.BannerGamesShare.destroy(!0), se.BannerGamesShare = null, k.GetGamesBox("banner", Laya.Handler.create(this, e => {
                        null == se.BannerGamesShare && (se.BannerGamesShare = new V), C.Inst.event(C.BANNER_GAMES_INIT, [e, Laya.stage, t, "banner_end"])
                    }))) : (console.log("onShowBannerList"), k.GetGamesBox("banner", Laya.Handler.create(this, e => {
                        null == se.BannerGamesShare && (se.BannerGamesShare = new V), C.Inst.event(C.BANNER_GAMES_INIT, [e, Laya.stage, t, "banner_end"])
                    }))), this.btn_reward.on(Laya.Event.CLICK, this, this.onReward), this.btn_close.on(Laya.Event.CLICK, this, this.onclose), this.touchMistake("reward", () => {
                        this.btn_close.height = 70, this.btn_close.skin = "ui/btn_skip2.png", this.btn_close.visible = !0, this.btn_close.alpha = 1, this.btn_close.y = Laya.stage.height - 200
                    }, () => {
                        se.adUtil.showBannerAd(""), this.btnDis(), this.btn_close.alpha = 0, this.btn_close.visible = !1;
                        var e = se.mWX.getOnOffParamByKey("of_over_btntime"),
                            t = "0";
                        "" != e && (t = JSON.parse(e).time), Laya.timer.once(Number(t), this, () => {
                            this.btn_close.visible = !0, Laya.Tween.to(this.btn_close, {
                                alpha: 1
                            }, 500)
                        })
                    })
                }
            }
        }
        onReward() {
            1 == this.data.gettype || 0 == se.mWX.fhOnoff || 2 == this.data.gettype ? L.playVideo(() => {
                this.inde1("video", 1), this.reward()
            }, () => {
                S.shareProp(e => {
                    e ? (this.inde1("share", 1), this.reward()) : this.inde1("share", 0)
                })
            }, () => {
                this.inde1("video", 0)
            }) : 3 == this.data.gettype && S.shareProp(e => {
                e ? (this.inde1("share", 1), this.reward()) : this.inde1("share", 0)
            })
        }
        reward() {
            window.wx && wx.showToast({
                title: "使用成功",
                icon: "none",
                duration: 2e3,
                false: e => {
                    console.log(e)
                },
                success: e => {
                    console.log(e)
                }
            }), this.game.onChangePensonSkin(this.game._runner, this.skin_id), ne.addCurSkinId("" + this.skin_id), this._clickflag = 1, this.HideRewardUI()
        }
        inde1(e, t) {
            var i = {
                icon_type: "end_award",
                is_click: 1,
                is_success: t,
                from_type: e
            };
            se.mWX.indexBpTotle("icon_page", i)
        }
        onclose() {
            this.HideRewardUI()
        }
        HideRewardUI() {
            if (this.isWin = !0, window.wx) {
                var e = se.mWX.getOnOffValueByKey("of_hotshare_page");
                0 == ae.uo.mIsNewUser && "1" == e ? (se.BannerGamesShare && (se.BannerGamesShare.clearPage(), se.BannerGamesShare.removeSelf(), se.BannerGamesShare.destroy(!0), se.BannerGamesShare = null), se.HotShare ? this.onCloseHot() : (console.log("hotShare"), k.GetGamesBox("hotShare", Laya.Handler.create(this, e => {
                    se.adUtil.hideBannerAd(), se.HotShare = new K, C.Inst.event(C.HOT_GAMES_INIT, [e, Laya.stage])
                })), C.Inst.on(C.HOT_GAMES_ON_CLOSE, this, this.onCloseHot), C.Inst.on(C.HOT_GAMES_ON_TO_GAME, this, this.onCloseHot))) : 0 == this.GameOverUI.visible && this.showView("GameOverUI")
            } else 0 == this.GameOverUI.visible && this.showView("GameOverUI")
        }
        onCloseHot() {
            se.HotShare && (C.Inst.off(C.HOT_GAMES_ON_CLOSE, this, this.onCloseHot), C.Inst.off(C.HOT_GAMES_ON_TO_GAME, this, this.onCloseHot), se.HotShare.clearPage(), se.HotShare.removeSelf(), se.HotShare.destroy(!0), se.HotShare = null), 0 == this.GameOverUI.visible && (Laya.timer.clearAll(this), this.showView("GameOverUI"))
        }
        btnDis(e = 2) {
            if (0 != se.adUtil.banner_realHeight) {
                var t = Laya.stage.width / se.adUtil.banner_realWidth * se.adUtil.banner_realHeight,
                    i = se.mWX.getOnOffParamByKey("of_btn_distance"),
                    a = "20";
                if ("" != i && (a = JSON.parse(i).distance), "" == a && null == a || 0 == se.mWX.fhOnoff) {
                    s = 40;
                    2 * Laya.stage.width < Laya.stage.height && (s = 812 == ae.uo.phone().screenHeight ? 100 + s : 60 + s), this.btn_close.y = Laya.stage.height - t - 40 - s, this.againBtn.y = Laya.stage.height - t - 40 - s, this.nextBtn.y = Laya.stage.height - t - 40 - s, this.btn_nextlevel.y = Laya.stage.height - t - 40 - s, this.skipBtn.y = Laya.stage.height - t - 40 - s
                } else {
                    var s = Number(a);
                    Z.is_mistake && (s += 25), 2 * Laya.stage.width < Laya.stage.height && 812 == ae.uo.phone().screenHeight && (s = 40 + s), this.btn_close.y = Laya.stage.height - t - 40 - s, this.againBtn.y = Laya.stage.height - t - 40 - s, this.nextBtn.y = Laya.stage.height - t - 40 - s, this.btn_nextlevel.y = Laya.stage.height - t - 40 - s, this.skipBtn.y = Laya.stage.height - t - 40 - s
                }
            } else this.btn_close.bottom = 250, this.againBtn.bottom = 250, this.nextBtn.bottom = 250, this.btn_nextlevel.bottom = 250, this.skipBtn.bottom = 250
        }
        static getReward(e) {
            if (null == Z.reward_date) {
                let e = se.mWX.stagesList;
                if ("" == e || null == e || null == e) return "";
                Z.reward_date = e
            }
            for (var t = "", i = 0; i < this.reward_date.length; i++)
                if (e == this.reward_date[i].id && 0 != this.reward_date[i].gettype) return t = this.reward_date[i];
            return t
        }
        ShowRelifeUI() {
            if (this.RelifeUI.height = Laya.stage.height, this.RelifeUI.visible) {
                se.mWX.indexBpTotle("resurvive_page ", {});
                let t = se.applist_y + 60;
                this.show_btn && (t = this.btn_friend.y + 100), se.BannerGamesShare ? (se.BannerGamesShare.clearPage(), se.BannerGamesShare.removeSelf(), se.BannerGamesShare.destroy(!0), se.BannerGamesShare = null, k.GetGamesBox("banner", Laya.Handler.create(this, e => {
                    null == se.BannerGamesShare && (se.BannerGamesShare = new V), C.Inst.event(C.BANNER_GAMES_INIT, [e, Laya.stage, t, "resurvive_banner"])
                }))) : (console.log("onShowBannerList"), k.GetGamesBox("banner", Laya.Handler.create(this, e => {
                    null == se.BannerGamesShare && (se.BannerGamesShare = new V), C.Inst.event(C.BANNER_GAMES_INIT, [e, Laya.stage, t, "resurvive_banner"])
                })));
                var e = Number(se.mWX.getOnOffValueByKey("of_score_type"));
                if (1 == e || 0 == se.mWX.fhOnoff || 2 == e) this.relifeBtn.skin = "ui/btn_revive_video.png";
                else {
                    if (3 != e) return void this.SkipBtnClick();
                    this.relifeBtn.skin = "ui/btn_revive_share.png"
                }
                Z.banner_reash("relife"), this.relifeBtn.on(Laya.Event.CLICK, this, this.RelifeBtnClick), this.skipBtn.on(Laya.Event.CLICK, this, this.SkipBtnClick), this.touchMistake("relife", () => {
                    this.skipBtn.height = 70, this.skipBtn.skin = "ui/btn_skip2.png", this.skipBtn.visible = !0, this.skipBtn.alpha = 1, this.skipBtn.y = Laya.stage.height - 200
                }, () => {
                    se.adUtil.showBannerAd(""), this.btnDis(), this.skipBtn.alpha = 0, this.skipBtn.visible = !1;
                    var e = se.mWX.getOnOffParamByKey("of_over_btntime"),
                        t = "0";
                    "" != e && (t = JSON.parse(e).time), Laya.timer.once(Number(t), this, () => {
                        this.skipBtn.visible = !0, Laya.Tween.to(this.skipBtn, {
                            alpha: 1
                        }, 500)
                    })
                }), this.num = 5, this.img_num.value = "over/5.png", this.img_num.x = -350, Laya.timer.loop(1e3, this, () => {
                    this.onTxt()
                })
            }
        }
        RelifeBtnClick(e) {
            Laya.timer.clearAll(this), this.skipBtn.alpha = 1, this.skipBtn.visible = !0;
            var t = Number(se.mWX.getOnOffValueByKey("of_score_type"));
            1 == t || 0 == se.mWX.fhOnoff || 2 == t ? L.playVideo(() => {
                this.Relife(e), this.inde2("video", 1)
            }, () => {
                Laya.timer.clearAll(this), Laya.timer.loop(1e3, this, () => {
                    this.onTxt()
                }), this.inde2("video", 0)
            }) : 3 == t && S.shareProp(t => {
                t ? (this.Relife(e), this.inde2("share", 1)) : (Laya.timer.clearAll(this), Laya.timer.loop(1e3, this, () => {
                    this.onTxt()
                }), this.inde2("share", 0))
            })
        }
        inde2(e, t) {
            var i = {
                icon_type: "resurvive",
                is_click: 1,
                is_success: t,
                from_type: e
            };
            se.mWX.indexBpTotle("icon_page", i)
        }
        SkipBtnClick() {
            if (this.isWin = !1, window.wx) {
                var e = se.mWX.getOnOffValueByKey("of_hotshare_page");
                0 == ae.uo.mIsNewUser && "1" == e ? (Laya.timer.clearAll(this), se.HotShare ? this.onCloseHot() : (console.log("hotShare"), k.GetGamesBox("hotShare", Laya.Handler.create(this, e => {
                    se.adUtil.hideBannerAd(), se.HotShare = new K, C.Inst.event(C.HOT_GAMES_INIT, [e, Laya.stage])
                })), C.Inst.on(C.HOT_GAMES_ON_CLOSE, this, this.onCloseHot), C.Inst.on(C.HOT_GAMES_ON_TO_GAME, this, this.onCloseHot))) : 0 == this.GameOverUI.visible && (Laya.timer.clearAll(this), this.showView("GameOverUI"))
            } else 0 == this.GameOverUI.visible && (Laya.timer.clearAll(this), this.showView("GameOverUI"))
        }
        onTxt() {
            if (this.num--, this.img_num.value = "over/" + this.num + ".png", this.num <= 0) return Laya.timer.clearAll(this), void this.SkipBtnClick()
        }
        Relife(e) {
            // window.wx && wx.showToast({
            //     title: "复活成功",
            //     icon: "none",
            //     duration: 2e3,
            //     false: e => {
            //         console.log(e)
            //     },
            //     success: e => {
            //         console.log(e)
            //     }
            // }),
            Z.is_relice = e, Laya.timer.clearAll(this), this.onBtnReviveClick()
        }
        ShowGameOverUI() {
            platform.getInstance().initList(this.list_otherGame);
            if (this.GameOverUI.height = Laya.stage.height, this.RelifeUI.visible = !1, this.GameOverUI.visible) {
                if (this.is_click = !1, this.isWin) {
                    this.nextBtn.visible = !0, this.againBtn.visible = !1, this.btn_nextlevel.visible = !1,
                        this.title.skin = "ui/img_cgcg.png";
                } else {
                    this.nextBtn.visible = !1, this.againBtn.visible = !0, this.btn_nextlevel.visible = !0, this.title.skin = "ui/img_cgsb.png";
                    var e = Number(se.mWX.getOnOffValueByKey("of_result_type"));
                    if (1 == e || 0 == se.mWX.fhOnoff) {} else if (2 == e) {} else {
                        if (3 != e) return void(this.btn_nextlevel.visible = !1);
                    }
                }
                var t = se.mWX.getOnOffValueByKey("of_friend_recom"),
                    i = JSON.parse(se.mWX.getOnOffParamByKey("of_friend_recom"));
                let s = !1,
                    n = Number(i.interval);
                if (0 == n) s = !0;
                else if (Number(i.startLevel) == se.level_num) s = !0;
                else if (Number(i.startLevel) < se.level_num) {
                    var a = se.level_num - i.startLevel;
                    a >= n && (s = a % (n + 1) == 0)
                }
                console.log("cccc", !se.FriendShare, "1" == t, i.startLevel <= se.level_num, s), !se.FriendShare && "1" == t && i.startLevel <= se.level_num && s ? (console.log("FriendShare"), k.GetGamesBox("friend_share", Laya.Handler.create(this, e => {
                    e.games_box[0] ? (se.adUtil.hideBannerAd(), se.FriendShare = new Y, C.Inst.event(C.FRIEND_SHARE_GAMES_INIT, [e.games_box[0], this]), C.Inst.on(C.FRIEND_SHARE_GAMES_ON_CLOSE, this, this.onCloseFriend), C.Inst.on(C.FRIEND_SHARE_GAMES_SHOW_OR_CLOSE, this, this.onCloseFriend)) : this.onCloseFriend(2)
                }))) : this.onCloseFriend()
            }
        }
        onCloseFriend(e = 1) {
            se.FriendShare && (C.Inst.off(C.FRIEND_SHARE_GAMES_SHOW_OR_CLOSE, this, this.onCloseFriend), C.Inst.off(C.FRIEND_SHARE_GAMES_ON_CLOSE, this, this.onCloseFriend), se.FriendShare.clearPage(), se.FriendShare.removeSelf(), se.FriendShare.destroy(!0), se.FriendShare = null), this.showOverData()
        }
        showOverData() {
            var e = {
                is_level_complete: this.isWin ? 1 : 0,
                level: se.level_num
            };
            if (se.mWX.indexBpTotle("level_complete_info ", e), se.mWX.setUserValue("zs-20200723-coin", s.allCoinNum + ""), this.returnBtn.y = se.applist_y, se.ResultGamesShare) {
                se.ResultGamesShare.clearPage(), se.ResultGamesShare.removeSelf(), se.ResultGamesShare.destroy(!0), se.ResultGamesShare = null, console.log("result");
                let e = !0;
                k.GetGamesBox("result", Laya.Handler.create(this, t => {
                    se.ResultGamesShare = new F, C.Inst.event(C.RESULT_GAMES_INIT, [t, this, e, Laya.stage.height / 2 - 380])
                }))
            } else {
                console.log("result");
                let e = !0;
                k.GetGamesBox("result", Laya.Handler.create(this, t => {
                    se.ResultGamesShare = new F, C.Inst.event(C.RESULT_GAMES_INIT, [t, this, e, Laya.stage.height / 2 - 380])
                }))
            }
            Z.banner_reash("result"), this.returnBtn.on(Laya.Event.CLICK, this, this.ReturnBtnClick), this.nextBtn.on(Laya.Event.CLICK, this, this.NextBtnClick), this.againBtn.on(Laya.Event.CLICK, this, this.AgainBtnClick), this.btn_nextlevel.on(Laya.Event.CLICK, this, this.NextLevelBtnClick), this.touchMistake("result", () => {
                if (this.isWin) this.nextBtn.height = 70, this.nextBtn.skin = "ui/btn_nextlevel2.png", this.nextBtn.visible = !0, this.nextBtn.alpha = 1, this.nextBtn.y = Laya.stage.height - 200;
                else {
                    var e = Number(se.mWX.getOnOffValueByKey("of_result_type"));
                    1 == e || 0 == se.mWX.fhOnoff ? null : 2 == e ? null : 3 == e && (null), this.btn_nextlevel.height = 70, this.againBtn.height = 70, this.againBtn.skin = "ui/btn_again2.png", this.againBtn.visible = !0, this.againBtn.alpha = 1, this.againBtn.y = Laya.stage.height - 200, this.btn_nextlevel.visible = !0, this.btn_nextlevel.alpha = 1, this.btn_nextlevel.y = Laya.stage.height - 200
                }
            }, () => {
                se.adUtil.showBannerAd(""), this.btnDis(), this.nextBtn.alpha = 0, this.nextBtn.visible = !1, this.againBtn.alpha = 0, this.againBtn.visible = !1, this.btn_nextlevel.alpha = 0, this.btn_nextlevel.visible = !1;
                var e = se.mWX.getOnOffParamByKey("of_over_btntime"),
                    t = "0";
                "" != e && (t = JSON.parse(e).time), Laya.timer.once(Number(t), this, () => {
                    this.isWin ? (this.nextBtn.visible = !0, Laya.Tween.to(this.nextBtn, {
                        alpha: 1
                    }, 500)) : (this.againBtn.visible = !0, Laya.Tween.to(this.againBtn, {
                        alpha: 1
                    }, 500), this.btn_nextlevel.visible = !0, Laya.Tween.to(this.btn_nextlevel, {
                        alpha: 1
                    }, 500))
                })
            })
        }
        HideGameOverUI() {}
        ReturnBtnClick() {
            if (this.RelifeUI.visible = !1, !this.is_click) {
                if (this.is_click = !0, Laya.timer.once(15e3, this, () => {
                        this.is_click = !1
                    }), this.isWin) {
                    if (ne.setDeadPoint(""), ne.setHighPointY(""), 0 == this.game._cleanDataFlag) {
                        this.game._cleanDataFlag = 1, Number(ne.getRoundId()) < a.levelMax ? (ne.addNextRoundId(), this.game.onGameRevive()) : this.game.onGameRevive()
                    }
                } else this.game.onGameRevive();
                Laya.timer.once(1e3, this, this.showView, ["box_start"]);
                var e = se.mWX.getOnOffValueByKey("of_hotshare_page");
                window.wx && "1" == e && (se.HotShare ? this.onCloseHotEnd() : (console.log("hotShare"), k.GetGamesBox("hotShare", Laya.Handler.create(this, e => {
                    se.HotShare = new K, C.Inst.event(C.HOT_GAMES_INIT, [e, Laya.stage])
                })), C.Inst.on(C.HOT_GAMES_ON_CLOSE, this, this.onCloseHotEnd), C.Inst.on(C.HOT_GAMES_ON_TO_GAME, this, this.onCloseHotEnd)))
            }
        }
        onCloseHotEnd() {
            se.HotShare && (C.Inst.off(C.HOT_GAMES_ON_CLOSE, this, this.onCloseHot), C.Inst.off(C.HOT_GAMES_ON_TO_GAME, this, this.onCloseHot), se.HotShare.clearPage(), se.HotShare.removeSelf(), se.HotShare.destroy(!0), se.HotShare = null)
        }
        NextBtnClick() {
            if (this.RelifeUI.visible = !1, !this.is_click) {
                if (this.is_click = !0, Laya.timer.once(15e3, this, () => {
                        this.is_click = !1
                    }), ne.setDeadPoint(""), ne.setHighPointY(""), 0 == this.game._cleanDataFlag) {
                    this.game._cleanDataFlag = 1, Number(ne.getRoundId()) < a.levelMax ? (ne.addNextRoundId(), se.level_num++, se.mWX.setUserValue("zs-20200723-level_num", se.level_num + ""), this.game.onGameRevive()) : this.game.onGameRevive()
                }
                if (this.HideGameOverUI(), window.wx) {
                    var e = se.mWX.getOnOffValueByKey("of_hotshare_page");
                    1 == ae.uo.mIsNewUser && "1" == e && (se.HotShare ? this.onCloseHotEnd() : (console.log("hotShare"), k.GetGamesBox("hotShare", Laya.Handler.create(this, e => {
                        se.HotShare = new K, C.Inst.event(C.HOT_GAMES_INIT, [e, Laya.stage])
                    })), C.Inst.on(C.HOT_GAMES_ON_CLOSE, this, this.onCloseHotEnd), C.Inst.on(C.HOT_GAMES_ON_TO_GAME, this, this.onCloseHotEnd)))
                }
            }
        }
        AgainBtnClick() {
            if (this.RelifeUI.visible = !1, !this.is_click && (this.is_click = !0, Laya.timer.once(15e3, this, () => {
                    this.is_click = !1
                }), this.game.onGameRevive(), this.HideGameOverUI(), window.wx)) {
                var e = se.mWX.getOnOffValueByKey("of_hotshare_page");
                1 == ae.uo.mIsNewUser && "1" == e && (se.HotShare ? this.onCloseHotEnd() : (console.log("hotShare"), k.GetGamesBox("hotShare", Laya.Handler.create(this, e => {
                    se.HotShare = new K, se.adUtil.hideBannerAd(), C.Inst.event(C.HOT_GAMES_INIT, [e, Laya.stage])
                })), C.Inst.on(C.HOT_GAMES_ON_CLOSE, this, this.onCloseHotEnd), C.Inst.on(C.HOT_GAMES_ON_TO_GAME, this, this.onCloseHotEnd)))
            }
        }
        NextLevelBtnClick() {
            if (Laya.timer.clearAll(this), this.RelifeUI.visible = !1, !this.is_click) {
                // this.is_click = !0, Laya.timer.once(15e3, this, () => {
                //     this.is_click = !1
                // }), 

                this.againBtn.alpha = 1, this.againBtn.visible = !0, this.btn_nextlevel.alpha = 1, this.btn_nextlevel.visible = !0,
                    this.btnDis(1);

                var e = Number(se.mWX.getOnOffValueByKey("of_result_type"));




                1 == e || 0 == se.mWX.fhOnoff || 2 == e ? L.playVideo(() => {
                    this.nextLevel(), this.inde3("video", 1)
                }, () => {
                    S.shareProp(e => {
                        e ? (this.nextLevel(), this.inde3("share", 1)) : (this.inde3("share", 0), Laya.timer.clearAll(this))
                    })
                }, () => {
                    Laya.timer.clearAll(this), this.inde3("video", 0)
                }) : 3 == e && S.shareProp(e => {
                    e ? (this.nextLevel(), this.inde3("share", 1)) : (Laya.timer.clearAll(this), this.inde3("share", 0))
                })
            }
        }
        inde3(e, t) {
            this.is_click = !1;
            var i = {
                icon_type: "next",
                is_click: 1,
                is_success: t,
                from_type: e
            };
            se.mWX.indexBpTotle("icon_page", i)
        }
        nextLevel() {
            if (ne.setDeadPoint(""), ne.setHighPointY(""), 0 == this.game._cleanDataFlag) {
                this.game._cleanDataFlag = 1, Number(ne.getRoundId()) < a.levelMax ? (ne.addRoundId(), this.game.onGameRevive()) : this.game.onGameRevive()
            }
            this.HideGameOverUI();
            // if (window.wx && wx.showToast({
            //     title: "跳关成功",
            //     icon: "none",
            //     duration: 2e3,
            //     false: e => {
            //         console.log(e)
            //     },
            //     success: e => {
            //         console.log(e)
            //     }
            // }), window.wx) {
            //     var e = se.mWX.getOnOffValueByKey("of_hotshare_page");
            //     1 == ae.uo.mIsNewUser && "1" == e && (se.HotShare ? this.onCloseHotEnd() : (console.log("hotShare"), k.GetGamesBox("hotShare", Laya.Handler.create(this, e => {
            //         se.HotShare = new K, C.Inst.event(C.HOT_GAMES_INIT, [e, Laya.stage])
            //     })), C.Inst.on(C.HOT_GAMES_ON_CLOSE, this, this.onCloseHotEnd), C.Inst.on(C.HOT_GAMES_ON_TO_GAME, this, this.onCloseHotEnd)))
            // }
        }
        moveLikeGame1(e, t, i = null) {
            let a = this;

            function Tw1() {
                Laya.Tween.to(a.img_start, {
                    scaleX: 1.1,
                    scaleY: 1.1
                }, e, null, new Laya.Handler(a, Tw2), t)
            }

            function Tw2() {
                Laya.Tween.to(a.img_start, {
                    scaleX: 1.4,
                    scaleY: 1.4
                }, e, null, new Laya.Handler(a, Tw1), t)
            }
            this.img_start.scale(1.1, 1.1), Laya.Tween.clearAll(a.img_start), Laya.Tween.to(a.img_start, {
                scaleX: 1.4,
                scaleY: 1.4
            }, e, null, new Laya.Handler(a, Tw1))
        }
        static rotaOtherGame(e) {
            Laya.Tween.clearAll(this);
            let t = this;

            function Tw1() {
                Laya.Tween.to(e, {
                    rotation: 0
                }, 200, null, new Laya.Handler(t, Tw2))
            }

            function Tw2() {
                Laya.Tween.to(e, {
                    rotation: 30
                }, 200, null, new Laya.Handler(t, Tw3), 2e3)
            }

            function Tw3() {
                Laya.Tween.to(e, {
                    rotation: 0
                }, 200, null, new Laya.Handler(t, Tw4))
            }

            function Tw4() {
                Laya.Tween.to(e, {
                    rotation: 30
                }, 200, null, new Laya.Handler(t, Tw1))
            }
            Laya.Tween.clearAll(e), Laya.Tween.to(e, {
                rotation: 30
            }, 200, null, new Laya.Handler(t, Tw1))
        }
    }
    Z.is_relice = null, Z.touchNum = 0, Z.is_mistake = !1, Z.reward_date = null;
    var Q = Laya.HttpRequest;
    class $ {
        constructor() {
            this.mUID = 0, this.mOnOff = [], this.mCards = 0, this.mWeiXinVersion = "", this.mADKeep = 0, this.mHttpCall = null, this.mLaunch = null, this.mSaveImage = "", this.mMyRank = 0, this.mChallenge = null, this.mShareID = 0, this.mMarks = [0, 0, 0, 0], this.fhOnoff = 0, this.mrelayID = 0, this.maxToolCards = 2, this.mToolCards = 0, this.mReturnAppid = "", this.mReturnUrl = "", this.mTaskInfo = [], this.mCoinsNum = 0, this.mPropList = [], this.mUsingPropId = "2001", this.mStartAward = [], this.mUserData = [], this.mNowDay = 0, this.mWxAdUrl = [], this.mGamesBox = [], this.mShareCallback = null, this.mShareIsNoCallback = null, this.mShareIsAgainCallback = null, this.mCallShareTime = 0, this.mShareCount = 0, this.mPassAwardListData = [], this.mdtValues = null, this.stagesList = null, this.media_type = 0, this.first_media_type = 0, this.is_address = !0
        }
        rankMeassage(e) {
            wx.postMessage({
                type: "FriendRank",
                show: 1,
                level: 0,
                info: ae.uo.getUser(),
                dir: ["none", "previous", "next"][e]
            })
        }
        closeRankMeassage() {
            wx.postMessage({
                type: "FriendRank",
                show: 0
            })
        }
        ResultMeassage() {
            wx.postMessage({
                type: "result",
                show: 1,
                level: 0,
                info: ae.uo.getUser()
            })
        }
        getItemListbytype(e) {
            if (null != se.mWX.mPropList) {
                e = e;
                for (var t = [], i = 0; i < se.mWX.mPropList.length; i++) Number(se.mWX.mPropList[i].type) == e && (t[t.length] = se.mWX.mPropList[i]);
                return t
            }
        }
        getItemList(e = 0) {
            if (null != se.mWX.mPropList) {
                for (var t = [], i = 0; i < se.mWX.mPropList.length; i++) 0 == e ? Number(se.mWX.mPropList[i].count) > 0 && (t[t.length] = se.mWX.mPropList[i]) : 0 == Number(se.mWX.mPropList[i].count) && Number(se.mWX.mPropList[i].id < 6001) && Number(3006 != se.mWX.mPropList[i].id) && (t[t.length] = se.mWX.mPropList[i]);
                return t
            }
        }
        reportMark(e, t, i = "") {
            let a = this;
            this.mHttpCall = new Q, this.mHttpCall.once(Laya.Event.COMPLETE, this, function(i) {
                let s = null;
                s = "string" == typeof i ? d.getJSON(i) : d.getJSON(a.mHttpCall.data), c.log("reportMark() -> onResult ret = " + JSON.stringify(s)), 0 == s.code && (a.mShareID = s.id, a.mCards = Number(s.cards), e > a.mMarks[0] && (a.mMarks[0] = e), null != t && null != t && t()), a.mHttpCall = null
            }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
            let s = [];
            s.mark = e, s.uid = this.mUID, s.id = this.mrelayID, s.reason = y.EncodeURI(i);
            let n = m.mURL + m.mCmd.report + d.getUrlParams(s, "1.0.1");
            c.log("reportMark() mark = " + e), c.log("reportMark() str = " + n), this.mHttpCall.send(n, null, "get", "text")
        }
        dealCards(e = null, t = null) {
            if (0 == this.mLaunch.query.gift) return;
            let i = this;
            this.mHttpCall = new Q, this.mHttpCall.once(Laya.Event.COMPLETE, this, function(e) {
                let t = null;
                t = "string" == typeof e ? d.getJSON(e) : d.getJSON(i.mHttpCall.data), c.log("dealCards() -> onResult ret = " + JSON.stringify(t)), t.code, i.mHttpCall = null
            }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
            let a = [];
            a.uid = this.mUID, null != i.mLaunch.query.gift ? a.gift = Number(this.mLaunch.query.gift) : void 0 !== this.mLaunch.query.gift ? a.gift = Number(this.mLaunch.query.gift) : a.gift = 0, null != t ? a.ticket = t : void 0 !== this.mLaunch.shareTicket && (a.ticket = this.mLaunch.shareTicket), this.mLaunch.query.gift = 0;
            let s = m.mURL + m.mCmd.AddCard + d.getUrlParams(a, "1.0.1");
            this.mHttpCall.send(s, null, "get", "text")
        }
        updateCards(e = !1) {
            let t = this;
            this.mHttpCall = new Q, this.mHttpCall.once(Laya.Event.COMPLETE, this, function(i) {
                e && wx.hideLoading();
                let a = null;
                a = "string" == typeof i ? d.getJSON(i) : d.getJSON(t.mHttpCall.data), c.log("updateCards() -> onResult ret = " + JSON.stringify(a)), 0 == a.code && (t.mCards = Number(a.cards)), t.mHttpCall = null
            }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
            let i = [];
            i.uid = this.mUID, e && wx.showLoading({
                title: "",
                mask: !0,
                success: () => {},
                fail: () => {},
                complete: () => {}
            });
            let a = m.mURL + m.mCmd.querycards + d.getUrlParams(i);
            this.mHttpCall.send(a, null, "get", "text")
        }
        addCardForMe(e) {
            let t = this;
            this.mHttpCall = new Q, this.mHttpCall.once(Laya.Event.COMPLETE, this, function(e) {
                let i = null;
                i = "string" == typeof e ? d.getJSON(e) : d.getJSON(t.mHttpCall.data), c.log("addCardForMe() -> onResult ret = " + JSON.stringify(i)), 0 == i.code && (t.mCards < 2 && (t.mCards = t.mCards + 1), wx.showToast({
                    title: "获得复活卡1张",
                    icon: "success",
                    image: "",
                    duration: 2e3,
                    success: () => {},
                    fail: () => {},
                    complete: () => {}
                })), t.mHttpCall = null
            }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
            let i = [];
            i.uid = t.mUID, i.id = e;
            let a = m.mURL + m.mCmd.AddMyCard + d.getUrlParams(i, "1.0.1");
            this.mHttpCall.send(a, null, "get", "text")
        }
        showWorldRank(e = 0) {
            let t = this;
            wx.showLoading({
                title: "",
                mask: !0,
                success: () => {},
                fail: () => {},
                complete: () => {}
            }), this.mHttpCall = new Q, this.mHttpCall.once(Laya.Event.COMPLETE, this, function(e) {
                let i = null;
                if (i = "string" == typeof e ? d.getJSON(e) : d.getJSON(t.mHttpCall.data), c.log("showWorldRank() -> onResult ret = " + JSON.stringify(i)), 0 == i.code) {
                    var a = Number(i.rank);
                    a > 0 && t.mMarks[0] > 0 && (console.log("MMRANK", a), t.mMyRank = a);
                    let e = se.wRankData,
                        r = i.data;
                    for (var s = 0; s < r.length; s++) {
                        var n = {};
                        null == r[s].name ? n.name = "null" : (n.name = se.subname(y.FromBase64(r[s].name), 12), console.log(n.name));
                        var o = y.FromBase64(r[s].avatar);
                        "0" == o.charAt(o.length - 1) && "/" == o.charAt(o.length - 2) && (o = o.substr(0, o.length - 2), o += "/132"), n.avatar = o, n.mark = Math.floor(r[s].hismark), n.city = r[s].city, n.uid = r[s].uid, n.map1 = Math.floor(r[s].mark1), n.map2 = Math.floor(r[s].mark2), n.map3 = Math.floor(r[s].mark3), e.push(n)
                    }
                    for (s = 0; s < e.length; s++) e[s].rank = s + 1;
                    r.length, wx.hideLoading()
                }
                t.mHttpCall = null
            }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
            let i = [];
            i.uid = this.mUID, i.page = e;
            let a = m.mURL + m.mCmd.rank + d.getUrlParams(i);
            this.mHttpCall.send(a, null, "get", "text"), c.log("showWorldRank() -> str = " + a)
        }
        onHttpRequestError(e) {
            this.mHttpCall = null, console.log("onHttpRequestError:" + e)
        }
        initMoreGame(e, t = !1) {
            let i = h.GetIndexRandom(se.mWX.mGamesBox);
            null != i ? (R.submitInfo("recom_show", {
                game_show_list: i.appid,
                position_type: "icon"
            }), e.name = i.gameid, se.moreGame_data = i, t ? (e.skin = i.url_btn, e.visible = !0) : e.skin = i.url_result) : (e.visible = !1, e.skin = "")
        }
        initMoreGame1(e, t) {
            let i = h.GetIndexRandom(se.mWX.mGamesBox);
            null != i ? (e.name = i.gameid, e.skin = i.url_icon, e.visible = !0, t.text = i.name) : (e.visible = !1, e.skin = "")
        }
        getMoreUrl(e) {
            for (var t = 0; t < this.mGamesBox.length; t++)
                if (Number(e) == Number(this.mGamesBox[t].gameid)) return this.mGamesBox[t]
        }
        reportADHit(e) {
            let t = this;
            this.mHttpCall = new Q, this.mHttpCall.once(Laya.Event.COMPLETE, this, function(e) {
                t.mHttpCall = null, c.log("reportADHit() -> onResult e = " + JSON.stringify(e))
            }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
            let i = [];
            i.uid = this.mUID, i.id = e;
            let a = m.mURL + m.mCmd.data + d.getUrlParams(i);
            c.log("reportADHit() -> onResult str = " + a), this.mHttpCall.send(a, null, "get", "text")
        }
        showMoreGamePage(e, t = null) {
            var i = se.mWX.getMoreUrl(e.name);
            null != i && (se.is_gamebox = !0, l.showBoxPage(i.appid, se.mWX.mGamesBox, "守卫国王"))
        }
        showMoreGamePage1(e, t = null) {
            var i = se.mWX.getMoreUrl(e.name);
            null != i && (se.is_gamebox = !0, se.moregame = 3, l.showBoxPage(i.appid, se.mWX.mGamesBox, "守卫国王"))
        }
        getAgentID() {
            return 0
        }
        initGameClub(e) {
            ae.uo.wxVersion() >= "2.0.3" && null == this.gameClub ? (console.log("创建游戏圈"), this.gameClub = wx.createGameClubButton({
                icon: "dark",
                type: "image",
                image: "gamebg/btn_bbs.png",
                style: {
                    right: 20,
                    top: e,
                    width: 30,
                    height: 44
                }
            })) : console.log("不能创建游戏圈")
        }
        isInitGameClub() {
            return null != this.gameClub && (se.mWX.displayGameClub(!0), !0)
        }
        getMyMark() {
            let e = this;
            this.mHttpCall = new Q, this.mHttpCall.once(Laya.Event.COMPLETE, this, function(t) {
                wx.hideLoading();
                let i = null;
                i = "string" == typeof t ? d.getJSON(t) : d.getJSON(e.mHttpCall.data), c.log("getMyMark() -> onResult ret = " + JSON.stringify(i)), 0 == i.code && (e.mMarks[0] = Number(i.mark.mark), wx.postMessage({
                    type: "send",
                    mark: e.mMarks[0],
                    level: 0,
                    best: 0,
                    user: ae.uo.getUser()
                })), e.mHttpCall = null
            }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
            let t = [];
            t.uid = this.mUID;
            let i = m.mURL + m.mCmd.mymark + d.getUrlParams(t, "1.0.1");
            this.mHttpCall.send(i, null, "get", "text"), c.log("getMyMark() -> str = " + i)
        }
        reportData(e) {
            let t = this;
            this.mHttpCall = new Q, this.mHttpCall.once(Laya.Event.COMPLETE, this, function(e) {
                t.mHttpCall = null, c.log("reportData() -> onResult e = " + JSON.stringify(e))
            }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
            let i = [];
            i.uid = this.mUID, i.type = e;
            let a = m.mURL + m.mCmd.ad + d.getUrlParams(i, "1.0.1");
            this.mHttpCall.send(a, null, "get", "text"), c.log("reportData() -> str = " + a)
        }
        initReturn() {
            var e = ae.uo.launch().query.pid;
            null == e || void 0 === e || "" == e ? (this.mReturnAppid = "", this.mReturnUrl = "") : 8 == Number(e) ? (this.mReturnAppid = "", this.mReturnUrl = "") : (this.mReturnAppid = e, this.mReturnUrl = "pages/index/index?")
        }
        getStageStatus() {
            let e = {};
            e.uid = ae.uo.mWeUser.uid, ae.uo.server(ee.mIF.getstages, e, function(e) {
                0 == e.code ? se.mWX.stagesList = e.stages : se.mWX.stagesList
            })
        }
        onLaunch(e, t = !1) {
            var i = ae.uo.getUser();
            let a = {};
            Laya.Browser.onIOS ? a.platform = 2 : a.platform = 1, a.uid = ae.uo.mWeUser.uid, a.name = y.EncodeURI(i.nickName), a.avatar = y.EncodeURI(i.avatarUrl), a.ver = m.mVersion, void 0 !== e.query.uid && (a.target = e.query.uid), void 0 !== e.query.type && (a.type = e.query.type), void 0 !== e.query.id && (a.id = e.query.id), ae.uo.server(ee.mIF.lauch, a, function(i) {
                if (se.mWX.getMediaType(e, i), 0 == i.code) {
                    if (console.log("用户的数据", i), se.mWX.mMarks[0] = Number(i.marks.mark), se.mWX.mMarks[1] = Number(i.marks.mark1), se.mWX.mMarks[2] = Number(i.marks.mark2), se.mWX.mMarks[3] = Number(i.marks.mark3), se.mWX.fhOnoff = Number(i.fh_onoff), console.log("开关", se.mWX.fhOnoff), se.mWX.mCards = Number(i.marks.cards), g.sShareUrls = i.shareurl, se.mWX.mTaskInfo = i.task_info, se.mWX.mOnOff = i.on_off, se.mWX.mNowDay = i.nowday, se.adUtil.mCustomBannerAdList = i.games_ad, se.mWX.mCoinsNum = Number(i.coins), se.mWX.mWxAdUrl = i.wxadurl, se.mWX.mdtValues = i.dt_values, se.mWX.ip_location = i.ip_location, null != i.item_list && null != i.item_list && (se.mWX.mPropList = i.item_list), "0" != String(i.use_item) && (se.mWX.mUsingPropId = String(i.use_item)), null != typeof i.start_reward && null != i.start_reward && i.start_reward.length > 0 && (se.mWX.mStartAward = i.start_reward), null != i.user_data && null != i.user_data && i.user_data.length > 0 && (se.mWX.mUserData = i.user_data), se.mWX.mUserData = i.user_data, "" != se.mWX.getOnOffParamByKey("of_bannerid")) {
                        let e = JSON.parse(se.mWX.getOnOffParamByKey("of_bannerid"));
                        L.sDefaultBannerId = e.bannerid
                    }
                    if ("" != se.mWX.getOnOffParamByKey("of_new_banner_id")) {
                        let e = JSON.parse(se.mWX.getOnOffParamByKey("of_new_banner_id"));
                        L.sDefaultBannerIdList = e.param
                    }
                    if ("" != se.mWX.getOnOffParamByKey("of_videoid")) {
                        let e = JSON.parse(se.mWX.getOnOffParamByKey("of_videoid"));
                        L.sDefaultVideoId = e.videoid
                    }
                    "" != se.mWX.getUserDataByKey("zs-20200723-touchNum") && (Z.touchNum = Number(se.mWX.getUserDataByKey("zs-20200723-touchNum"))), "" != se.mWX.getUserDataByKey("zs-20200723-roundid") && ("" != se.mWX.getUserDataByKey("zs-20200723-level_num") && Number(se.mWX.getUserDataByKey("zs-20200723-level_num")) > 67 ? se.level_num = Number(se.mWX.getUserDataByKey("zs-20200723-level_num")) : se.level_num = Number(se.mWX.getUserDataByKey("zs-20200723-roundid"))), se.mWX.mGamesBox = i.games_box, ae.uo.mIsNewUser = i.nowday == i.regday ? 1 : 0, ae.uo.mLaunch && ("" == se.mWX.getUserDataByKey("zs-20200723-first_channe_id") ? (null != ae.uo.mLaunch.query.wxgamecid && (ae.uo.channe_id = ae.uo.mLaunch.query.wxgamecid, ae.uo.first_channe_id = ae.uo.mLaunch.query.wxgamecid), se.mWX.setUserValue("zs-20200723-first_channe_id", ae.uo.first_channe_id + "")) : (null != ae.uo.mLaunch.query.wxgamecid && (ae.uo.channe_id = ae.uo.mLaunch.query.wxgamecid), ae.uo.first_channe_id = se.mWX.getUserDataByKey("zs-20200723-first_channe_id"))), ae.uo.mLaunch && ("" == se.mWX.getUserDataByKey("zs-20200723-first_adid") ? (null != ae.uo.mLaunch.query.adid && (ae.uo.adid = ae.uo.mLaunch.query.adid, ae.uo.first_adid = ae.uo.mLaunch.query.adid), se.mWX.setUserValue("zs-20200723-first_adid", ae.uo.first_adid + "")) : (null != ae.uo.mLaunch.query.adid && (ae.uo.adid = ae.uo.mLaunch.query.adid), ae.uo.first_adid = se.mWX.getUserDataByKey("zs-20200723-first_adid"))), se.mWX.address_1(), "" == se.mWX.getUserDataByKey("zs-20200723-first_share_from") ? (null == ae.uo.launch.query ? (ae.uo.first_share_from = "", ae.uo.sigh_id = "") : (ae.uo.first_share_from = ae.uo.launch.query.uid, ae.uo.sigh_id = ae.uo.launch.query.adid), se.mWX.setUserValue("zs-20200723-first_share_from", ae.uo.first_share_from), se.mWX.setUserValue("zs-20200723-sigh_id", ae.uo.sigh_id)) : (ae.uo.first_share_from = se.mWX.getUserDataByKey("zs-20200723-first_share_from"), ae.uo.sigh_id = se.mWX.getUserDataByKey("zs-20200723-sigh_id")), se.mWX.getStageStatus(), ae.uo.initVideoAD(L.sDefaultVideoId), ae.uo.loadingVideo(null), P.load_success = !0, t || se.mWX.dealQuery(e, !0)
                }
            })
        }
        getMediaType(e, t) {
            let i = e.query.ald_media_id;
            this.media_type = i ? Number(i) : 0;
            let a = t.nowday == t.regday;
            if (this.first_media_type = -1, a) {
                t.user_data.forEach(e => {
                    "first_media_type" == e.key && (this.first_media_type = Number(e.values))
                }), -1 == this.first_media_type && (this.first_media_type = this.media_type, se.mWX.setUserValue("zs-20200723-first_media_type", this.first_media_type + ""))
            } else {
                t.user_data.forEach(e => {
                    "first_media_type" == e.key && (this.first_media_type = Number(e.values))
                }), -1 == this.first_media_type && (this.first_media_type = 0, se.mWX.setUserValue("zs-20200723-first_media_type", this.first_media_type + ""))
            }
            console.log("ald_media_id = " + i + ",media_type = " + this.media_type + ",first_media_type = " + this.first_media_type)
        }
        address_1() {
            if (this.is_address) {
                this.is_address = !1;
                var e = wx.getSystemInfoSync();
                let t = Laya.LocalStorage.getItem("zs-20200723-firstEntryTime");
                "" == t && (t = String(f.getCurrTime()), Laya.LocalStorage.setItem("zs-20200723-firstEntryTime", t));
                let i = Laya.LocalStorage.getItem("zs-20200723-lastEntryTime");
                "" == i && (i = String(f.getCurrTime()), Laya.LocalStorage.setItem("zs-20200723-lastEntryTime", i));
                let a = {
                    channel_type: 0,
                    share_from: void 0 !== ae.uo.launch().query.uid ? ae.uo.launch().query.uid : "0",
                    first_entry_time: t,
                    last_entry_time: i,
                    wechat_version: e.version,
                    device_os_version: ae.uo.mPhone.system,
                    device_type: ae.uo.mPhone.model
                };
                se.mWX.indexBpTotle("app_entry", a)
            }
        }
        dealQuery(e, t = !1) {
            null != e.query.gift && void 0 !== e.query.gift ? e.query.id > 0 ? se.mWX.addCardForMe(e.query.id) : se.mWX.dealCards() : 8 == Number(e.query.type) ? void 0 !== e.shareTicket && "undefined" != e.shareTicket && e.shareTicket : e.query.id > 0 && (se.mWX.mrelayID = e.query.id)
        }
        displayGameClub(e) {
            null != se.mWX.gameClub && (e ? se.mWX.gameClub.show() : se.mWX.gameClub.hide())
        }
        getOnOffByKey(e) {
            if (0 == this.fhOnoff && "of_jump" != e) return !1;
            for (var t = 0; t < this.mOnOff.length; t++)
                if (this.mOnOff[t].key == e) return "0" != this.mOnOff[t].value;
            return !1
        }
        isTodayCheck(e, t) {
            for (var i = 1; i <= 7; i++)
                if (Number(e["day_" + i]) == t) return !1;
            return !0
        }
        updateLocalPropCount(e, t) {
            for (var i = 0; i < se.mWX.mPropList.length; i++)
                if (se.mWX.mPropList[i].id == e) {
                    se.mWX.mPropList[i].count = t;
                    break
                }
        }
        updateLocalTaskStatus(e, t) {
            for (var i = 0; i < this.mTaskInfo.length; i++)
                if (this.mTaskInfo[i].id == e) {
                    this.mTaskInfo[i].give = t;
                    break
                }
        }
        updateLocalTaskOverCount(e, t) {
            for (var i = 0; i < this.mTaskInfo.length; i++)
                if (this.mTaskInfo[i].id == e) {
                    this.mTaskInfo[i].over_count = t;
                    break
                }
        }
        setUserValue(e, t, i = !1, a = null) {
            // let s = this;
            // i && wx.showLoading({
            //     title: "",
            //     mask: !0,
            //     success: () => { },
            //     fail: () => { },
            //     complete: () => { }
            // }), this.mHttpCall = new Q, this.mHttpCall.once(Laya.Event.COMPLETE, this, function (n) {
            //     let o = null;
            //     0 == (o = "string" == typeof n ? d.getJSON(n) : d.getJSON(s.mHttpCall.data)).code && (s.updateUserDataByKey(e, t), null != a && a()), i && wx.hideLoading(), s.mHttpCall = null
            // }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
            // let n = [];
            // n.uid = this.mUID, n.dt_key = e, n.dt_value = t;
            // let o = m.mURL + m.mCmd.SetUserValue + d.getUrlParams(n, "1.0.1");
            // this.mHttpCall.send(o, null, "get", "text")
            Laya.LocalStorage.setItem(e, t);
        }
        getUserDataByKey(e) {
            // if (null == this.mUserData || null == this.mUserData || 0 == this.mUserData.length) return "gold" == e || "exp" == e ? "0" : "";
            for (var t = 0, i = 0; i < this.mUserData.length; i++) {
                if (this.mUserData[i].key == e) return this.mUserData[i].values;
                t++
            }
            let data = Laya.LocalStorage.getItem(e);
            if (data) {
                return data;
            }
            return t == this.mUserData.length ? "gold" == e || "exp" == e ? "0" : "" : void 0
        }
        updateUserDataByKey(e, t) {
            for (var i = 0, a = 0; a < this.mUserData.length; a++) this.mUserData[a].key == e ? this.mUserData[a].values = t : i++;
            if (i == this.mUserData.length) {
                let i = new Object;
                i.key = e, i.values = t, this.mUserData.push(i)
            }
        }
        ChangeTCt(e, t, i = null, a) {
            let s = this;
            this.mHttpCall = new Q, this.mHttpCall.once(Laya.Event.COMPLETE, this, function(t) {
                let i = null;
                0 == (i = "string" == typeof t ? d.getJSON(t) : d.getJSON(s.mHttpCall.data)).code && (se.mWX.updateLocalPropCount(String(e), i.new), null != a && null != a && a()), c.log("ChangeTCt() -> ret = " + JSON.stringify(i)), s.mHttpCall = null
            }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
            let n = [];
            n.uid = this.mUID, n.tid = e, n.count = t;
            let o = m.mURL + m.mCmd.ChangeTCt + d.getUrlParams(n, "1.0.1");
            this.mHttpCall.send(o, null, "get", "text"), c.log("ChangeTCt() str = " + o)
        }
        getPropCount(e) {
            var t = 0;
            return se.mWX.mPropList.forEach(i => {
                i.id != e || (t = Number(i.count))
            }), t
        }
        getSpecificTaskIdByGoto(e) {
            var t = "";
            return se.mWX.mTaskInfo.forEach(i => {
                if ("" != i.param) {
                    var a = JSON.parse(i.param);
                    "string" == typeof a.goto && a.goto == e && (t = i.id)
                }
            }), t
        }
        isTaskFinishByGoto(e) {
            var t = !1;
            return se.mWX.mTaskInfo.forEach(i => {
                if ("" != i.param) {
                    var a = JSON.parse(i.param);
                    "string" == typeof a.goto && a.goto == e && i.over_count >= i.count && (t = !0)
                }
            }), t
        }
        isOwnSpecificProp(e) {
            var t = 0;
            return this.mPropList.forEach(i => {
                i.id == e && Number(i.count) > 0 && (t = Number(i.count))
            }), t
        }
        getOnOffValueByKey(e) {
            for (var t = 0; t < this.mOnOff.length; t++)
                if (this.mOnOff[t].key == e) return this.mOnOff[t].value;
            return "0"
        }
        itemTotle(e, t, i, a = "", s = 1) {
            let n = this;
            this.mHttpCall = new Q, this.mHttpCall.once(Laya.Event.COMPLETE, this, function(e) {
                n.mHttpCall = null
            }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
            let o = [];
            o.uid = this.mUID, o.useitem = e, o.usect = s, o.poskey = t, null != i && null != i && (o.starttm = i), "" != a && (o.other = a);
            let r = m.mURL + m.mCmd.ItemTotle + d.getUrlParams(o, "1.0.1");
            this.mHttpCall.send(r, null, "get", "text")
        }
        getWxAdOpen(e) {
            var t = "";
            return null == se.mWX.mWxAdUrl || null == se.mWX.mWxAdUrl || 0 == se.mWX.mWxAdUrl.length ? t : (se.mWX.mWxAdUrl.forEach(i => {
                i.id != e || (t = i.open)
            }), t)
        }
        getWxAdUnitIdById(e) {
            var t = "";
            return null == se.mWX.mWxAdUrl || null == se.mWX.mWxAdUrl || 0 == se.mWX.mWxAdUrl.length ? t : (se.mWX.mWxAdUrl.forEach(i => {
                i.id != e || "1" == i.open && (t = i.unitid)
            }), t)
        }
        getVideoRewardArr() {
            let e = [];
            return se.mWX.mOnOff.forEach(t => {
                "of_v_reward" != t.key || (e = String(t.param).split(",").map(Number))
            }), e
        }
        getVideoRewardByCount(e) {
            let t = 0,
                i = se.mWX.getVideoRewardArr();
            return t = e < i.length ? i[e] : i[i.length - 1]
        }
        getOnOffParamByKey(e) {
            let t = "{}";
            for (let i = 0; i < se.mWX.mOnOff.length; i++)
                if (se.mWX.mOnOff[i].key == e) {
                    t = se.mWX.mOnOff[i].param;
                    break
                }
            return t
        }
        getShareTimeByCount() {
            let e = se.mWX.getOnOffParamByKey("of_share_time");
            console.log("分享时间", e);
            let t = e.split(",");
            return se.mWX.mShareCount > 0 ? Number(t[t.length - 1]) / 1e3 : Number(t[0]) / 1e3
        }
        getRandomGames(e) {
            if (se.mWX.mGamesBox.length < e) return se.mWX.mGamesBox;
            for (var t = [].concat(se.mWX.mGamesBox), i = [], a = 0; a < e; a++) {
                var s = Math.floor(Math.random() * (1 - t.length) + t.length);
                let e = t[s - 1];
                i.push(e), t.splice(s - 1, 1)
            }
            return i
        }
        getStartAwardObject() {
            let e = null;
            if (0 == se.mWX.mStartAward.length) return null;
            let t = se.mWX.mStartAward[0].reward;
            return "" == JSON.parse(t).itemid ? null : e = JSON.parse(t)
        }
        getItemNameByItemId(e) {
            let t = "";
            for (let i = 0; i < se.mWX.mPropList.length; i++)
                if (se.mWX.mPropList[i].id == e) {
                    t = se.mWX.mPropList[i].name;
                    break
                }
            return t
        }
        getItemByItemId(e) {
            let t = "";
            for (let i = 0; i < se.mWX.mPropList.length; i++)
                if (se.mWX.mPropList[i].id == e) {
                    t = se.mWX.mPropList[i].name;
                    break
                }
            return t
        }
        initPassAwardData() {
            se.mWX.mPassAwardListData.splice(0, se.mWX.mPassAwardListData.length), se.mWX.mPropList.forEach(e => {
                "0" != e.gamebox && "2" == e.type && se.mWX.mPassAwardListData.push(e)
            })
        }
        getPassAwardDataByLevel(e) {
            let t = null;
            for (let i = 0; i < se.mWX.mPassAwardListData.length; i++) {
                if ("string" != typeof se.mWX.mPassAwardListData[i].other) return;
                let a = JSON.parse(se.mWX.mPassAwardListData[i].other);
                e == Number(a.num) && (t = se.mWX.mPassAwardListData[i])
            }
            return t
        }
        initUserMusicSoundOnOff() {
            0 != se.mWX.mUserData.length && se.mWX.mUserData.forEach(e => {
                e.key
            })
        }
        getStartRewardArr() {
            let e = 1;
            return se.mWX.mOnOff.forEach(t => {
                "of_start" != t.key || (e = Number(t.value))
            }), e
        }
        getDoubleCoinArr() {
            let e = 1;
            return se.mWX.mOnOff.forEach(t => {
                "of_coins_double" != t.key || (e = Number(t.value))
            }), e
        }
        GetBPUrl() {
            var e = "";
            if (null != ae.uo.mdtValues) return t = (e = ae.uo.mdtValues).split("?");
            se.mWX.mdtValues.forEach(t => {
                "dt_log_url" != t.key || (e = t.param)
            });
            var t = e.split("?");
            return console.log("获得埋点地址", t), t
        }
        indexBpTotle(e, t) {
            if (!window.wx) return;
            this.mHttpCall = new Q, this.mHttpCall.once(Laya.Event.COMPLETE, this, this.onHttpRequestError), t.uid = ae.uo.mWeUser.uid, t.is_new = ae.uo.mIsNewUser, t.session_id = ae.uo.loginSession, t.create_time = f.getCurrTime(), t.channel_id = ae.uo.channe_id, t.first_channel_id = ae.uo.first_channe_id, t.adid = ae.uo.adid, t.first_adid = ae.uo.first_adid;
            var i = {};
            i.keyname = e, i.uid = ae.uo.mWeUser.uid, i.clos = JSON.stringify(t);
            var a = this.GetBPUrl()[1].split("=");
            i.gameid = a[1];
            let s = this.GetBPUrl()[0] + "?" + d.getUrlParams(i, "maidian");
            console.log("埋点统计：", s), this.mHttpCall.send(s, null, "get", "text")
        }
    }
    class ee {
        constructor() {
            this.tip = null
        }
        version() {
            return "1.0.1"
        }
        loginBtnPos() {
            return 160
        }
        onBefore() {
            return !1
        }
        onShow() {}
        onReShow() {}
        onLogin(e, t) {
            return se.mWX = new $, se.mWX.mUID = t.uid, se.mWX.mLaunch = ae.uo.launch(), se.mWX.onLaunch(ae.uo.launch()), se.mWX.initReturn(), !0
        }
        onEnterGame(e, t, i) {
            console.log("123", e), console.log("234", t), console.log("345", i), null != se.mWX.mShareCallback && (S.is_exit = !0, "0" == se.mWX.getOnOffValueByKey("of_share_time") ? (se.mWX.mShareCallback(), se.mWX.mShareCallback = null) : f.getCurrTime() - se.mWX.mCallShareTime > se.mWX.getShareTimeByCount() ? (se.mWX.mShareCallback(), se.mWX.mShareCallback = null, se.mWX.mShareCount++, se.mWX.mCallShareTime = 0) : (null != se.mWX.mShareIsNoCallback && (se.mWX.mShareIsNoCallback(), se.mWX.mShareIsNoCallback = null), se.is_share && Laya.timer.once(200, this, () => {
                wx.showToast({
                    title: "分享到群生效",
                    icon: "none",
                    duration: 2e3,
                    false: e => {
                        console.log(e)
                    },
                    success: e => {
                        console.log(e)
                    }
                })
            })))
        }
        onHideGame() {}
    }
    ee.mIF = {
        wxinfo: {
            url: "1.0.1/diexr/wxinfo?",
            key: "1.0.1",
            tips: "报告微信信息接口"
        },
        login: {
            url: "1.0.1/diexr/login?",
            key: "1.0.1",
            tips: "登录服务"
        },
        lauch: {
            url: "1.0.1/diexr/lauch?",
            key: "1.0.1",
            tips: "登录服务"
        },
        userinfo: {
            url: "1.0.1/diexr/userinfo?",
            key: "1.0.1",
            tips: "更新用户信息"
        },
        getstages: {
            url: "1.0.1/diexr/getstage?",
            key: "1.0.1",
            tips: "获取关卡配置"
        }
    };
    class te {
        constructor() {
            this.hexcase = 0, this.b64pad = ""
        }
        hex_md5(e) {
            return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(e)))
        }
        b64_md5(e) {
            return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(e)))
        }
        any_md5(e, t) {
            return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(e)), t)
        }
        hex_hmac_md5(e, t) {
            return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)))
        }
        b64_hmac_md5(e, t) {
            return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)))
        }
        any_hmac_md5(e, t, i) {
            return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)), i)
        }
        md5_vm_test() {
            return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc").toLowerCase()
        }
        rstr_md5(e) {
            return this.binl2rstr(this.binl_md5(this.rstr2binl(e), 8 * e.length))
        }
        rstr_hmac_md5(e, t) {
            var i = this.rstr2binl(e);
            i.length > 16 && (i = this.binl_md5(i, 8 * e.length));
            for (var a = Array(16), s = Array(16), n = 0; n < 16; n++) a[n] = 909522486 ^ i[n], s[n] = 1549556828 ^ i[n];
            var o = this.binl_md5(a.concat(this.rstr2binl(t)), 512 + 8 * t.length);
            return this.binl2rstr(this.binl_md5(s.concat(o), 640))
        }
        rstr2hex(e) {
            try {
                this.hexcase
            } catch (e) {
                this.hexcase = 0
            }
            for (var t, i = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", a = "", s = 0; s < e.length; s++) t = e.charCodeAt(s), a += i.charAt(t >>> 4 & 15) + i.charAt(15 & t);
            return a
        }
        rstr2b64(e) {
            try {
                this.b64pad
            } catch (e) {
                this.b64pad = ""
            }
            for (var t = "", i = e.length, a = 0; a < i; a += 3)
                for (var s = e.charCodeAt(a) << 16 | (a + 1 < i ? e.charCodeAt(a + 1) << 8 : 0) | (a + 2 < i ? e.charCodeAt(a + 2) : 0), n = 0; n < 4; n++) 8 * a + 6 * n > 8 * e.length ? t += this.b64pad : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(s >>> 6 * (3 - n) & 63);
            return t
        }
        rstr2any(e, t) {
            var i, a, s, n, o, r = t.length,
                h = Array(Math.ceil(e.length / 2));
            for (i = 0; i < h.length; i++) h[i] = e.charCodeAt(2 * i) << 8 | e.charCodeAt(2 * i + 1);
            var l = Math.ceil(8 * e.length / (Math.log(t.length) / Math.log(2))),
                m = Array(l);
            for (a = 0; a < l; a++) {
                for (o = Array(), n = 0, i = 0; i < h.length; i++) n = (n << 16) + h[i], n -= (s = Math.floor(n / r)) * r, (o.length > 0 || s > 0) && (o[o.length] = s);
                m[a] = n, h = o
            }
            var d = "";
            for (i = m.length - 1; i >= 0; i--) d += t.charAt(m[i]);
            return d
        }
        str2rstr_utf8(e) {
            for (var t, i, a = "", s = -1; ++s < e.length;) t = e.charCodeAt(s), i = s + 1 < e.length ? e.charCodeAt(s + 1) : 0, 55296 <= t && t <= 56319 && 56320 <= i && i <= 57343 && (t = 65536 + ((1023 & t) << 10) + (1023 & i), s++), t <= 127 ? a += String.fromCharCode(t) : t <= 2047 ? a += String.fromCharCode(192 | t >>> 6 & 31, 128 | 63 & t) : t <= 65535 ? a += String.fromCharCode(224 | t >>> 12 & 15, 128 | t >>> 6 & 63, 128 | 63 & t) : t <= 2097151 && (a += String.fromCharCode(240 | t >>> 18 & 7, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63, 128 | 63 & t));
            return a
        }
        str2rstr_utf16le(e) {
            for (var t = "", i = 0; i < e.length; i++) t += String.fromCharCode(255 & e.charCodeAt(i), e.charCodeAt(i) >>> 8 & 255);
            return t
        }
        str2rstr_utf16be(e) {
            for (var t = "", i = 0; i < e.length; i++) t += String.fromCharCode(e.charCodeAt(i) >>> 8 & 255, 255 & e.charCodeAt(i));
            return t
        }
        rstr2binl(e) {
            for (var t = Array(e.length >> 2), i = 0; i < t.length; i++) t[i] = 0;
            for (i = 0; i < 8 * e.length; i += 8) t[i >> 5] |= (255 & e.charCodeAt(i / 8)) << i % 32;
            return t
        }
        binl2rstr(e) {
            for (var t = "", i = 0; i < 32 * e.length; i += 8) t += String.fromCharCode(e[i >> 5] >>> i % 32 & 255);
            return t
        }
        binl_md5(e, t) {
            e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
            for (var i = 1732584193, a = -271733879, s = -1732584194, n = 271733878, o = 0; o < e.length; o += 16) {
                var r = i,
                    h = a,
                    l = s,
                    m = n;
                i = this.md5_ff(i, a, s, n, e[o + 0], 7, -680876936), n = this.md5_ff(n, i, a, s, e[o + 1], 12, -389564586), s = this.md5_ff(s, n, i, a, e[o + 2], 17, 606105819), a = this.md5_ff(a, s, n, i, e[o + 3], 22, -1044525330), i = this.md5_ff(i, a, s, n, e[o + 4], 7, -176418897), n = this.md5_ff(n, i, a, s, e[o + 5], 12, 1200080426), s = this.md5_ff(s, n, i, a, e[o + 6], 17, -1473231341), a = this.md5_ff(a, s, n, i, e[o + 7], 22, -45705983), i = this.md5_ff(i, a, s, n, e[o + 8], 7, 1770035416), n = this.md5_ff(n, i, a, s, e[o + 9], 12, -1958414417), s = this.md5_ff(s, n, i, a, e[o + 10], 17, -42063), a = this.md5_ff(a, s, n, i, e[o + 11], 22, -1990404162), i = this.md5_ff(i, a, s, n, e[o + 12], 7, 1804603682), n = this.md5_ff(n, i, a, s, e[o + 13], 12, -40341101), s = this.md5_ff(s, n, i, a, e[o + 14], 17, -1502002290), a = this.md5_ff(a, s, n, i, e[o + 15], 22, 1236535329), i = this.md5_gg(i, a, s, n, e[o + 1], 5, -165796510), n = this.md5_gg(n, i, a, s, e[o + 6], 9, -1069501632), s = this.md5_gg(s, n, i, a, e[o + 11], 14, 643717713), a = this.md5_gg(a, s, n, i, e[o + 0], 20, -373897302), i = this.md5_gg(i, a, s, n, e[o + 5], 5, -701558691), n = this.md5_gg(n, i, a, s, e[o + 10], 9, 38016083), s = this.md5_gg(s, n, i, a, e[o + 15], 14, -660478335), a = this.md5_gg(a, s, n, i, e[o + 4], 20, -405537848), i = this.md5_gg(i, a, s, n, e[o + 9], 5, 568446438), n = this.md5_gg(n, i, a, s, e[o + 14], 9, -1019803690), s = this.md5_gg(s, n, i, a, e[o + 3], 14, -187363961), a = this.md5_gg(a, s, n, i, e[o + 8], 20, 1163531501), i = this.md5_gg(i, a, s, n, e[o + 13], 5, -1444681467), n = this.md5_gg(n, i, a, s, e[o + 2], 9, -51403784), s = this.md5_gg(s, n, i, a, e[o + 7], 14, 1735328473), a = this.md5_gg(a, s, n, i, e[o + 12], 20, -1926607734), i = this.md5_hh(i, a, s, n, e[o + 5], 4, -378558), n = this.md5_hh(n, i, a, s, e[o + 8], 11, -2022574463), s = this.md5_hh(s, n, i, a, e[o + 11], 16, 1839030562), a = this.md5_hh(a, s, n, i, e[o + 14], 23, -35309556), i = this.md5_hh(i, a, s, n, e[o + 1], 4, -1530992060), n = this.md5_hh(n, i, a, s, e[o + 4], 11, 1272893353), s = this.md5_hh(s, n, i, a, e[o + 7], 16, -155497632), a = this.md5_hh(a, s, n, i, e[o + 10], 23, -1094730640), i = this.md5_hh(i, a, s, n, e[o + 13], 4, 681279174), n = this.md5_hh(n, i, a, s, e[o + 0], 11, -358537222), s = this.md5_hh(s, n, i, a, e[o + 3], 16, -722521979), a = this.md5_hh(a, s, n, i, e[o + 6], 23, 76029189), i = this.md5_hh(i, a, s, n, e[o + 9], 4, -640364487), n = this.md5_hh(n, i, a, s, e[o + 12], 11, -421815835), s = this.md5_hh(s, n, i, a, e[o + 15], 16, 530742520), a = this.md5_hh(a, s, n, i, e[o + 2], 23, -995338651), i = this.md5_ii(i, a, s, n, e[o + 0], 6, -198630844), n = this.md5_ii(n, i, a, s, e[o + 7], 10, 1126891415), s = this.md5_ii(s, n, i, a, e[o + 14], 15, -1416354905), a = this.md5_ii(a, s, n, i, e[o + 5], 21, -57434055), i = this.md5_ii(i, a, s, n, e[o + 12], 6, 1700485571), n = this.md5_ii(n, i, a, s, e[o + 3], 10, -1894986606), s = this.md5_ii(s, n, i, a, e[o + 10], 15, -1051523), a = this.md5_ii(a, s, n, i, e[o + 1], 21, -2054922799), i = this.md5_ii(i, a, s, n, e[o + 8], 6, 1873313359), n = this.md5_ii(n, i, a, s, e[o + 15], 10, -30611744), s = this.md5_ii(s, n, i, a, e[o + 6], 15, -1560198380), a = this.md5_ii(a, s, n, i, e[o + 13], 21, 1309151649), i = this.md5_ii(i, a, s, n, e[o + 4], 6, -145523070), n = this.md5_ii(n, i, a, s, e[o + 11], 10, -1120210379), s = this.md5_ii(s, n, i, a, e[o + 2], 15, 718787259), a = this.md5_ii(a, s, n, i, e[o + 9], 21, -343485551), i = this.safe_add(i, r), a = this.safe_add(a, h), s = this.safe_add(s, l), n = this.safe_add(n, m)
            }
            return [i, a, s, n]
        }
        md5_cmn(e, t, i, a, s, n) {
            return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(t, e), this.safe_add(a, n)), s), i)
        }
        md5_ff(e, t, i, a, s, n, o) {
            return this.md5_cmn(t & i | ~t & a, e, t, s, n, o)
        }
        md5_gg(e, t, i, a, s, n, o) {
            return this.md5_cmn(t & a | i & ~a, e, t, s, n, o)
        }
        md5_hh(e, t, i, a, s, n, o) {
            return this.md5_cmn(t ^ i ^ a, e, t, s, n, o)
        }
        md5_ii(e, t, i, a, s, n, o) {
            return this.md5_cmn(i ^ (t | ~a), e, t, s, n, o)
        }
        safe_add(e, t) {
            var i = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (i >> 16) << 16 | 65535 & i
        }
        bit_rol(e, t) {
            return e << t | e >>> 32 - t
        }
    }
    class ie {
        static MD5(e) {
            return (new te).hex_md5(e)
        }
    }
    class ae {
        constructor() {
            this.version = "1.0.1", this.mLaunch = null, this.mWeUser = {}, this.mPhone = {}, this.mSDKVersion = "", this.iphoneX = !1, this.mCallBack = null, this.mHttpCall = null, this.mLoginType = 1, this.mShowLogo = !0, this.btnLogin = null, this.zOrder = 123, this.mFrist = !0, this.mInit = !1, this.mVideoAD = null, this.mNoVideo = !1, this.mIsNewUser = 0, this.option123 = null, this.loginSession = null, this.first_share_from = null, this.sigh_id = null, this.channe_id = "0", this.first_channe_id = "0", this.adid = "0", this.first_adid = "0", this.mdtValues = null, ae.uo = this, console.log("wxcore.uo = " + ae.uo), this.mCallBack = new ee
        }
        screenHeight() {
            return this.mPhone.screenHeight
        }
        IsXP() {
            return !!(Laya.Browser.onIOS && this.mPhone.screenWidth > 800)
        }
        wxVersion() {
            return this.mSDKVersion
        }
        getUser() {
            return this.mWeUser
        }
        getUserID() {
            return Number(this.mWeUser.uid)
        }
        phone() {
            return this.mPhone
        }
        launch() {
            return this.mLaunch
        }
        initWX(e = 1, t = !0, i = 0) {
            this.mPhone = wx.getSystemInfoSync(), console.log("进入core", this.mPhone), this.mPhone.model.indexOf("iPhone X") >= 0 && (this.iphoneX = !0), this.mSDKVersion = this.mPhone.SDKVersion;
            var a = wx.getLaunchOptionsSync();
            this.option123 = a.query;
            var s = {};
            if (s.query = a.query, s.scene = a.scene, s.shareTicket = a.shareTicket, s.isSticky = a.isSticky, null != s.query.scene)
                for (var n = decodeURIComponent(s.query.scene).split("&"), o = 0; o < n.length; o++) {
                    var r = n[o].split("=");
                    2 == r.length && (s.query[r[0]] = r[1])
                }
            this.mLaunch = s, this.mLoginType = e, this.mShowLogo = t, 1 == this.mCallBack.onBefore() && this.showLoading(), Laya.timer.callLater(this, this.check)
        }
        initWeb(e = 0) {
            1 == this.mCallBack.onBefore() && this.showLoading()
        }
        showLoading() {
            Laya.timer.callLater(this.mCallBack, this.mCallBack.onShow)
        }
        clear() {}
        showLoginBtn() {
            if (console.log("showLoginBtn"), null == this.btnLogin) {
                this.btnLogin = wx.createUserInfoButton({
                    type: "image",
                    withCredentials: !1,
                    image: "",
                    style: {
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0
                    }
                }), this.btnLogin.show(), console.log(this.btnLogin), this.btnLogin.onTap(function(e) {
                    void 0 !== e.userInfo ? (ae.uo.btnLogin.destroy(), ae.uo.initUser(e), ae.uo.btnLogin = null) : wx.showToast({
                        title: "游戏需要您授权头像和用户名信息!",
                        icon: "success",
                        image: "",
                        duration: 2e3
                    })
                })
            }
        }
        check() {
            wx.checkSession({
                success: function(e) {
                    console.log("checkSession ok"), ae.uo.login()
                },
                fail: function(e) {
                    console.log("checkSession fail"), wx.removeStorageSync("user"), ae.uo.login()
                }
            })
        }
        reLogin() {
            wx.removeStorageSync("user"), this.login()
        }
        login() {
            var e = !0,
                t = wx.getStorageSync("user");
            if ("object" == typeof t) {
                var i = t.openid;
                "" != i && null != i || (e = !1), ("" == t.uid || null == t.uid || Number(t.uid) < 1e4) && (e = !1)
            } else e = !1;
            e ? (ae.uo.mWeUser = t, ae.uo.checkCode("")) : wx.login({
                success: function(e) {
                    ae.uo.checkCode(e.code)
                },
                fail: function(e) {
                    console.log("login fail,try again"), Laya.timer.once(1e3, ae.uo, ae.uo.login)
                }
            })
        }
        checkCode(e) {
            console.log("开始登陆");
            var t = [];
            t.code = e, "" == e && (t.uid = ae.uo.mWeUser.uid), void 0 !== this.mLaunch.query.uid && (t.master = this.mLaunch.query.uid), void 0 !== this.mLaunch.query.agentid && (t.agentid = this.mLaunch.query.agentid), void 0 !== this.mLaunch.query.adid && (t.adid = this.mLaunch.query.adid), t.ver = this.mCallBack.version(), this.server(ee.mIF.login, t, function(e) {
                if (console.log("用户登录返回数据", e), 0 == e.code) {
                    if (ae.uo.mdtValues = e.dt_value, ae.uo.loginSession = f.getCurrTime(), null != ae.uo.mWeUser && ae.uo.mWeUser.uid == e.uid) {
                        if (ae.uo.mWeUser.openid != e.openid) return void Laya.timer.once(100, ae.uo, ae.uo.reLogin)
                    } else ae.uo.mWeUser = {}, ae.uo.mWeUser.openid = e.openid, ae.uo.mWeUser.uid = Number(e.uid);
                    let t = {};
                    se.mWX.indexBpTotle("app_open", t), 1 == ae.uo.mCallBack.onLogin(ae.uo.mWeUser, e) ? ae.uo.getUserInfo() : ae.uo.init()
                } else Laya.timer.once(1e3, ae.uo, ae.uo.reLogin)
            })
        }
        getUserInfo() {
            if (2 == this.mLoginType) return ae.uo.onEnter(null, this.mLaunch), void ae.uo.init();
            wx.getUserInfo({
                withCredentials: !1,
                lang: "zh_CN",
                success: function(e) {
                    console.log(e), ae.uo.initUser(e)
                },
                fail: function(e) {
                    console.log(e), ae.uo.mSDKVersion >= "2.0.1" ? (ae.uo.showLoginBtn(), ae.uo.mCallBack.onReShow()) : ae.uo.wxAuthorize()
                }
            })
        }
        wxAuthorize() {
            wx.authorize({
                scope: "scope.userInfo",
                success: function(e) {
                    ae.uo.getUserInfo()
                },
                fail: function(e) {
                    ae.uo.openSeting()
                }
            })
        }
        openSeting() {
            let e = this;
            wx.showModal({
                title: "提示",
                content: "游戏需要您授权头像和用户名信息",
                showCancel: !1,
                cancelText: "取消",
                confirmText: "确认",
                success: function(t) {
                    wx.openSetting({
                        success: function(e) {
                            0 == e.authSetting["scope.userInfo"] ? ae.uo.openSeting() : ae.uo.getUserInfo()
                        },
                        fail: function(t) {
                            e.openSeting()
                        }
                    })
                }
            })
        }
        initUser(e) {
            var t = 0,
                i = e.userInfo;
            console.log(i.avatarUrl, ae.uo.mWeUser.avatarUrl, ae.uo.mWeUser.nickName, i.nickName), ae.uo.mWeUser.nickName != i.nickName && (ae.uo.mWeUser.nickName = i.nickName, t = 1);
            var a = i.avatarUrl;
            "0" == a.charAt(a.length - 1) && "/" == a.charAt(a.length - 2) && (a = a.substr(0, a.length - 2), a += "/132"), ae.uo.mWeUser.avatarUrl != a && (ae.uo.mWeUser.avatarUrl = a, t = 1), ae.uo.mWeUser.gender = i.gender, ae.uo.mWeUser.province = i.province, ae.uo.mWeUser.city = i.city, ae.uo.mWeUser.country = i.country, 1 == t && ae.uo.updateUserInfo(), wx.setStorageSync("user", ae.uo.mWeUser), ae.uo.onEnter(null, this.mLaunch), ae.uo.init()
        }
        onEnter(e, t) {
            this.mCallBack.onEnterGame(this.mFrist, e, t), this.mFrist = !1
        }
        init() {
            0 == this.mInit && (se.mWX.displayGameClub(!0), wx.onShow(this.wxShow), wx.onHide(this.wxHide), this.mInit = !0)
        }
        wxShow(e) {
            console.log("默认隐藏"), ne.playBGM(12), console.log("达到"), console.log("进入:" + (new Date).getTime()), console.log(e);
            var t = {};
            if (t.query = e.query, t.scene = e.scene, t.shareTicket = e.shareTicket, t.isSticky = e.isSticky, null != t.query.scene)
                for (var i = decodeURIComponent(t.query.scene).split("&"), a = 0; a < i.length; a++) {
                    var s = i[a].split("=");
                    2 == s.length && (t.query[s[0]] = s[1])
                }
            if (1 == ae.uo.mFrist) return ae.uo.mLaunch = t, void ae.uo.getUserInfo();
            var n = ae.uo.mLaunch;
            ae.uo.mLaunch = t, ae.uo.onEnter(n, t)
        }
        wxHide() {
            ae.uo.mCallBack.onHideGame(), console.log("退出:" + (new Date).getTime())
        }
        updateUserInfo() {
            let e = {};
            e.uid = ae.uo.mWeUser.uid, e.name = y.EncodeURI(this.mWeUser.nickName), e.avatar = y.EncodeURI(this.mWeUser.avatarUrl), e.gender = ae.uo.mWeUser.gender, null != ae.uo.mWeUser.province && "" != ae.uo.mWeUser.province && (e.province = ae.uo.mWeUser.province), null != ae.uo.mWeUser.city && "" != ae.uo.mWeUser.city && (e.city = ae.uo.mWeUser.city), this.server(ee.mIF.userinfo, e, function(e) {
                console.log("updateUserInfo..ok")
            })
        }
        server(e, t, i, a = null) {
            this.mHttpCall = new Laya.HttpRequest, this.mHttpCall.once(Laya.Event.COMPLETE, this, function(e) {
                let t = null;
                t = "string" == typeof e ? d.getJSON(e) : d.getJSON(ae.uo.mHttpCall.data), null != i && i(t), ae.uo.mHttpCall = null
            }), this.mHttpCall.once(Laya.Event.ERROR, this, function(e) {
                null != a ? a() : ae.uo.onHttpRequestError(e)
            });
            let s = d.getServer() + e.url + d.getUrlParams(t, e.key);
            this.mHttpCall.send(s, null, "get", "text")
        }
        onHttpRequestError(e) {
            console.log("http协议发送失败", e), wx.hideLoading()
        }
        initVideoAD(e) {
            "" != e ? null == this.mVideoAD && (this.mVideoAD = wx.createRewardedVideoAd({
                adUnitId: e
            }), this.mVideoAD.load(), this.mVideoAD.onError(e => {
                console.log(e), ae.uo.mNoVideo = !0
            })) : this.mNoVideo = !0
        }
        haveVideo() {
            return null != this.mVideoAD && 1 != this.mNoVideo
        }
        loadingVideo(e) {
            return null == this.mVideoAD || 1 == ae.uo.mNoVideo ? (null != e && e(!1), !1) : (this.mVideoAD.load().then(() => {
                null != e && e(!0)
            }).catch(t => {
                console.log("没有拉到广告"), console.log(t.errMsg), null != e && e(!1)
            }), !0)
        }
        showVideoAD(e) {
            return null == this.mVideoAD || 1 == ae.uo.mNoVideo ? (null != e && e(!1), !1) : (ae.uo.mVideoAD.show(), this.mVideoAD.offClose(null), this.mVideoAD.onClose(t => {
                t && t.isEnded || void 0 === t ? null != e && e(!0) : null != e && e(!1)
            }), !0)
        }
    }
    ae.uo = null;
    class se {
        constructor() {}
        static subname(e, t) {
            return e.length > t && (e = e.substr(0, t) + "..."), e
        }
        static bigBoxButten() {}
        static onButten() {}
        static setMenuHeight() {
            var e = wx.getMenuButtonBoundingClientRect(),
                t = (e.height, e.top);
            e.left;
            se.applist_y = t * Laya.stage.height / ae.uo.mPhone.screenHeight
        }
        static fenFa() {
            B.Inst.initEvent(), Laya.Browser.onMiniGame && Laya.timer.callLater(this, () => {
                wx.postMessage({
                    type: "init",
                    width: Laya.stage.width,
                    height: Laya.stage.height
                }), Laya.Browser.window.sharedCanvas.width = Laya.stage.width, Laya.Browser.window.sharedCanvas.height = Laya.stage.height
            }), C.Inst.on(C.FENFA_GAMES_SHOW, this, (e, t) => {
                var i = {
                    game_show_list: e,
                    position_type: t
                };
                se.mWX.indexBpTotle("recom_show", i)
            }), C.Inst.on(C.FENFA_GAMES_CLICK_GAME, this, (e, t, i, a) => {
                console.log("跳转信息：", e), console.log("跳转游戏：", t), console.log("跳转状态：", i), console.log("跳转的是否是原游戏：", a);
                let s = e.jump_tag;
                "1" != e.banner_name && (s = e.banner_name), "friend_recom" != s && "friend_recom_push" != s || C.Inst.event(C.FRIEND_SHARE_GAMES_SHOW_OR_CLOSE);
                let n = {
                    game_show_list: e.showList,
                    position_type: s,
                    game_id: t.gameid,
                    is_success_direct: i,
                    jump_type: "game",
                    level: se.level_num,
                    gif_jump: a
                };
                se.mWX.indexBpTotle("recom_click", n)
            })
        }
        static checkTimeSlot() {
            var e = JSON.parse(se.mWX.getOnOffParamByKey("of_touch_mistake")).showTime;
            let t = (new Date).getHours();
            return console.log("5123123", t), e[0] <= t && t < e[1]
        }
        static day() {
            var e = new Date,
                t = [e.getFullYear(), e.getMonth(), e.getDate()];
            let i = se.mWX.getUserDataByKey("zs-20200723-yes_day_time");
            if ("" == i) se.mWX.setUserValue("zs-20200723-yes_day_time", JSON.stringify(t)), se.mWX.setUserValue("zs-20200723-touchNum", "0");
            else {
                let e = JSON.parse(i);
                if (3 == e.length) {
                    var a = !0;
                    e[0] != t[0] && (a = !1), e[1] != t[1] && (a = !1), e[2] != t[2] && (a = !1), 0 == a && (se.mWX.setUserValue("zs-20200723-yes_day_time", JSON.stringify(t)), se.mWX.setUserValue("zs-20200723-touchNum", "0"))
                }
            }
        }
    }
    se.is_first = !1, se.scoreview = null, se.rewardview = null, se.resultview = null, se.start_box_show = !0, se.shopui = null, se.level_num = 1, se.applist_y = 60, se.level_gold = !1, se.Shader_Creater = !1, se.moreGame_data = null, se.shop_skin = [1], se.soundPlay = !0, se.adUtil = null, se.wRankData = [], se.is_gamebox = !0, se.moregame = 0, se.is_share = !0, se.is_firstgame = !1, se.is_game = !1, se.BannerGamesShare = null, se.HotShare = null, se.FriendShare = null, se.FriendShareBtn = null, se.ResultGamesShare = null, se.box = null, se.img = null;
    class ne {
        static loadBatchRes(e) {
            for (var t = [], i = 0; i < e.length; i++) t.push(a.modelRootPath + "/" + e[i]);
            return t
        }
        static getRes(e) {
            var t = a.modelRootPath + "/" + e;
            return Laya.Loader.getRes(t)
        }
        static getCoinNum() {
            // return "" != se.mWX.getUserDataByKey("zs-20200723-coin") ?
            //  (s.allCoinNum = Number(se.mWX.getUserDataByKey("zs-20200723-coin")), 
            //  Number(se.mWX.getUserDataByKey("zs-20200723-coin"))) : 
            //  (s.allCoinNum = 0, 0)

            return s.allCoinNum = parseInt(localStorage.getItem("zs-20200723-coin", String(n))) || 0
        }
        static addCoinNum(e) {
            s.roundCoinNum = 0;
            let t = s.allCoinNum,
                i = e * a.coinProportion;
            s.roundCoinNum = i;
            let n = parseInt(t) + parseInt(i);
            localStorage.setItem("zs-20200723-coin", String(n)), s.allCoinNum = n
        }
        static getRoundId() {
            return se.mWX.getUserDataByKey("zs-20200723-roundid") || se.mWX.setUserValue("zs-20200723-roundid", "0001"),
                "" != se.mWX.getUserDataByKey("zs-20200723-roundid") ? se.mWX.getUserDataByKey("zs-20200723-roundid") : "0001"
        }
        static addRoundId() {
            let e = String(Number(this.getRoundId()) + 1);
            if (e.length < 4) {
                let t = 4 - e.length;
                for (let i = 0; i < t; i++) e = "0" + e
            }
            let t = ne.getRoundId();
            Number(t) == a.levelMax || se.mWX.setUserValue("zs-20200723-roundid", e)
        }
        static addUpRoundId() {
            let e = String(Number(this.getRoundId()) - 1);
            if (e.length < 4) {
                let t = 4 - e.length;
                for (let i = 0; i < t; i++) e = "0" + e
            }
            se.mWX.setUserValue("zs-20200723-roundid", e)
        }
        static addNextRoundId() {
            // if (window.wx) 
            return;
            // let e = String(Number(this.getRoundId()) + 1);
            // if (e.length < 4) {
            //     let t = 4 - e.length;
            //     for (let i = 0; i < t; i++) e = "0" + e
            // }
            // se.mWX.setUserValue("zs-20200723-roundid", e)
        }
        static getAllSkinID() {
            return localStorage.getItem("zs-20200723-allskinid") || localStorage.setItem("zs-20200723-allskinid", "1,2,3,4,5,6,7,8,9,10,11,12"), localStorage.getItem("zs-20200723-allskinid").split(",")
        }
        static addSkinId(e) {
            let t = localStorage.getItem("zs-20200723-allskinid") + e + ",";
            Laya.LocalStorage.setItem("zs-20200723-allskinid", t)
        }
        static addCurSkinId(e) {
            let t = e;
            se.mWX.setUserValue("zs-20200723-curskinid", t)
        }
        static getCurSkinId() {
            return "" != se.mWX.getUserDataByKey("zs-20200723-curskinid") ? se.mWX.getUserDataByKey("zs-20200723-curskinid") : 1
        }
        static setDeadPoint(e) {
            Laya.LocalStorage.setItem("zs-20200723-deadPoint", e)
        }
        static getDeadPoint() {
            if (!localStorage.getItem("zs-20200723-deadPoint")) return "";
            return localStorage.getItem("zs-20200723-deadPoint")
        }
        static setDelPointX(e) {
            Laya.LocalStorage.setItem("zs-20200723-delPointX", e)
        }
        static setDelPointZ(e) {
            Laya.LocalStorage.setItem("zs-20200723-delPointZ", e)
        }
        static setHighPointY(e) {
            Laya.LocalStorage.setItem("zs-20200723-highPointY", e)
        }
        static getDelPointX() {
            if (!localStorage.getItem("zs-20200723-delPointX")) return "";
            return localStorage.getItem("zs-20200723-delPointX")
        }
        static getDelPointZ() {
            if (!localStorage.getItem("zs-20200723-delPointZ")) return "";
            return localStorage.getItem("zs-20200723-delPointZ")
        }
        static getHighPointY() {
            if (!localStorage.getItem("zs-20200723-highPointY")) return "";
            return localStorage.getItem("zs-20200723-highPointY")
        }
        static getObjName(e, t) {
            let i = "";
            return 0 == t ? e == a.roadStraight ? i = a.road0 : e == a.roadCurved6L ? i = a.road6 : e == a.roadCurved6R ? i = a.road6_r : e == a.roadCurved12 ? i = a.road_12 : e == a.roadCurved15 ? i = a.road_15 : e == a.roadCurved18 ? i = a.road_18 : e == a.roadCurved30 ? i = a.road_30 : e == a.roadCurved45 ? i = a.road_45 : e == a.roadCurved100 && (i = a.road0) : 1 == t && (e == a.eleNone ? i = "" : e == a.eleJumpPointOne ? i = a.jumparea : e == a.eleJumpPointTwo ? i = a.jumparea : e == a.eleJumpPointThree ? i = a.jumparea : e == a.eleJumpPointFour ? i = a.jumparea : e == a.elePerson ? i = a.stand : e == a.eleWall ? i = a.wall : e == a.eleEmpty ? i = a.empty : e == a.eleBulges ? i = a.trap : e == a.eleGold ? i = a.coin : e == a.eleSpeedUp ? i = a.lightning : e == a.eleMagent ? i = a.magnet : e == a.eleHighWall && (i = a.wall)), i
        }
        static skinPersonPath(e) {
            let t = "";
            return e == a.standSkinId1 ? t = a.skinIdPath5 : e == a.standSkinId2 ? t = a.skinIdPath6 : e == a.standSkinId3 ? t = a.skinIdPath7 : e == a.standSkinId4 ? t = a.skinIdPath8 : e == a.standSkinId5 ? t = a.skinIdPath9 : e == a.standSkinId6 ? t = a.skinIdPath10 : e == a.standSkinId7 ? t = a.skinIdPath11 : e == a.standSkinId8 ? t = a.skinIdPath12 : e == a.standSkinId9 ? t = a.skinIdPath13 : e == a.standSkinId10 ? t = a.skinIdPath14 : e == a.standSkinId11 ? t = a.skinIdPath15 : e == a.standSkinId12 && (t = a.skinIdPath16), t
        }
        static skinJumpPath(e) {
            let t = "";
            return e == a.jumpPointSkin1 ? t = a.skinIdPath1 : e == a.jumpPointSkin2 ? t = a.skinIdPath2 : e == a.jumpPointSkin3 ? t = a.skinIdPath3 : e == a.jumpPointSkin4 && (t = a.skinIdPath4), t
        }
        static skinJumpNum(e) {
            let t = 1;
            return e == a.eleJumpPointOne ? t = a.jumpPointSkin1 : e == a.eleJumpPointTwo ? t = a.jumpPointSkin2 : e == a.eleJumpPointThree ? t = a.jumpPointSkin3 : e == a.eleJumpPointFour && (t = a.jumpPointSkin4), t
        }
        static playSound(e) {
            this._stopVoice || this._sound || (e == a.soundCoin ? this.innerPlaySound(e, a.pathCoin) : e == a.soundDieMan ? this.innerPlaySound(e, a.pathDieMan) : e == a.soundDieWoman ? this.innerPlaySound(e, a.pathDieWoman) : e == a.soundJump ? this.innerPlaySound(e, a.pathJump) : e == a.soundGoodJumpOne ? this.innerPlaySound(e, a.pathGoodJumpOne) : e == a.soundGoodJumpTwo ? this.innerPlaySound(e, a.pathGoodJumpTwo) : e == a.soundGoodJumpThree ? this.innerPlaySound(e, a.pathGoodJumpThree) : e == a.soundGoodJumpFour ? this.innerPlaySound(e, a.pathGoodJumpFour) : e == a.soundJumpLand ? this.innerPlaySound(e, a.pathJumpLand) : e == a.soundBadLand ? this.innerPlaySound(e, a.pathBadLand) : e == a.soundDieFall ? this.innerPlaySound(e, a.pathDieFall) : e == a.soundWin ? this.innerPlaySound(e, a.pathWin) : e == a.soundLose && this.innerPlaySound(e, a.pathLose))
        }
        static innerPlaySound(e, t) {
            // if (window.wx)
            //     if (1 == e) this.innerPlaySoundGold(t);
            //     else {
            //         if (!this.inneraudioSound.hasOwnProperty(e)) {
            //             let i = wx.createInnerAudioContext();
            //             i.src = t, this.inneraudioSound[e] = i
            //         }
            //         this.inneraudioSound[e].startTime = 0, this.inneraudioSound[e].play()
            //     } else 
            Laya.SoundManager.playSound(t, 1)
        }
        static innerPlaySoundGold(e) {
            if (this.is_play = !0, this.gold_num++, this.gold_num > 10 && (this.gold_num = 0), !this.inneraudioSoundGold.hasOwnProperty(this.gold_num)) {
                let t = wx.createInnerAudioContext();
                t.src = e, this.inneraudioSoundGold[this.gold_num] = t
            }
            this.inneraudioSoundGold[this.gold_num].startTime = 0, this.inneraudioSoundGold[this.gold_num].play()
        }
        static playBGM(e) {
            // Laya.SoundManager.playMusic(a.pathBGM, 0);
            console.log("播放音乐==========================================", a.pathBGM)
            this._stopVoice || this._music || e == a.soundBGM && window.WebAudioEngine.playMusic(a.pathBGM);
        }
        static stopBGM() {

        }
        static randomNumber(e, t) {
            return Math.floor(parseInt(Math.random() * (t - e + 1) + e, 10))
        }
    }
    ne._musicFlag = !1, ne._stopVoice = !1, ne._sound = !1, ne._music = !1, ne.inneraudioSound = [], ne.inneraudioSoundGold = [], ne.gold_num = 0, ne.is_play = !1, ne.inneraudioBGM = null;
    class oe extends Laya.Script3D {
        constructor() {
            super(), this._runnerIndex = [], this._dieModel = []
        }
        onTriggerEnter(e) {
            if ("runner" == this.owner.name && "wall" == e.owner.name) {
                let e = this.owner,
                    t = !0;
                for (let i = 0; i < this._dieModel.length; i++)
                    if (e == this._dieModel[i]) {
                        t = !1;
                        break
                    }
                t && (this._dieModel.push(e), ne.playSound(a.soundBadLand), this._gameUI.addChild(e), this._gameUI._runnerModel.pop(), this._gameUI.PlayAni(e, "daoback"), Laya.timer.clear(this._gameUI, this._gameUI.Jump), Laya.timer.clear(this._gameUI, this._gameUI.JumpDown), this._gameUI._runnerModel.length > 0 && (this._gameUI._runner = this._gameUI._runnerModel[this._gameUI._runnerModel.length - 1], this._gameUI.PlayAni(this._gameUI._runner, "jumpdown"), this._gameUI._controlState = 2, Laya.timer.clear(this._gameUI, this._gameUI.JumpDown), this._gameUI._JumpDownNums++, Laya.timer.frameLoop(1, this._gameUI, this._gameUI.JumpDown)), Laya.timer.once(500, this, () => {
                    this._gameUI.CleanTheModel(e)
                }))
            }
            if ("runner" == this.owner.name && "trap" == e.owner.name) {
                let e = this.owner,
                    t = !0;
                for (let i = 0; i < this._dieModel.length; i++)
                    if (e == this._dieModel[i]) {
                        t = !1;
                        break
                    }
                if (t && (this._dieModel.push(e), ne.playSound(a.soundBadLand), 3 != this._gameUI._controlState)) {
                    this._gameUI.addChild(e), this._gameUI._runnerModel.pop(), this._gameUI.PlayAni(e, "daofront"), e.getComponent(Laya.Rigidbody3D).isTrigger = !1, Laya.timer.clear(this._gameUI, this._gameUI.Jump), this._gameUI._runnerModel.length > 0 && (this._gameUI._runner = this._gameUI._runnerModel[this._gameUI._runnerModel.length - 1], this._gameUI.PlayAni(this._gameUI._runner, "jumpdown"), this._gameUI._controlState = 2, Laya.timer.frameLoop(1, this._gameUI, this._gameUI.JumpDown)), Laya.timer.once(500, this, () => {
                        this._gameUI.CleanTheModel(e)
                    })
                }
            }
            if ("runner" == this.owner.name && "empty" == e.owner.name) {
                let e = this.owner,
                    t = !0;
                for (let i = 0; i < this._dieModel.length; i++)
                    if (e == this._dieModel[i]) {
                        t = !1;
                        break
                    }
                if (t) {
                    this._dieModel.push(e), ne.playSound(a.soundDieFall), this._gameUI.addChild(e), this._gameUI._runnerModel.pop(), this._gameUI.PlayAni(e, "jumpdown"), e.getComponent(Laya.Rigidbody3D).isTrigger = !1, this._gameUI._runnerModel.length > 0 && (this._gameUI._runner = this._gameUI._runnerModel[this._gameUI._runnerModel.length - 1], this._gameUI.PlayAni(this._gameUI._runner, "jumpdown"), this._gameUI._controlState = 2, Laya.timer.frameLoop(1, this._gameUI, this._gameUI.JumpDown));
                    let t = .3,
                        i = {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        s = {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        n = new Laya.Vector3(0, -1.2, 0);
                    Laya.Tween.to(i, {
                        x: n.x,
                        y: n.y,
                        z: n.z,
                        update: new Laya.Handler(this, function() {
                            let t = new Laya.Vector3(i.x - s.x, i.y - s.y, i.z - s.z);
                            s.x = i.x, s.y = i.y, s.z = i.z, e && e.transform ? e.transform.translate(t, !1) : Laya.Tween.clearAll(i)
                        })
                    }, 1e3 * t, Laya.Ease.linearIn), Laya.timer.once(500 * t, this, () => {
                        this._gameUI.CleanTheModel(e)
                    })
                }
            }
            if ("firstrunner" == this.owner.name && "trap" == e.owner.name) {
                let t = this.owner,
                    i = e.owner;
                ne.setDelPointX(String(i.transform.position.x.toFixed(3))), ne.setDelPointZ(String(i.transform.position.z.toFixed(3))), ne.playSound(a.soundBadLand), this._gameUI.PlayAni(t, "daofront"), this._gameUI._runnerModel = [], Laya.timer.clear(this._gameUI, this._gameUI.Run), Laya.timer.clear(this._gameUI, this._gameUI.Jump), t.getComponent(Laya.Rigidbody3D).isTrigger = !1, this._gameUI._controlState = 3, ne.playSound(a.soundLose), Laya.timer.once(500, this, () => {
                    this._gameUI.CleanTheModel(t), this._gameUI._beginView.showRestart()
                })
            }
            if ("firstrunner" == this.owner.name && "wall" == e.owner.name) {
                let t = this.owner,
                    i = e.owner;
                ne.setDelPointX(String(i.transform.position.x.toFixed(3))), ne.setDelPointZ(String(i.transform.position.z.toFixed(3))), ne.playSound(a.soundBadLand), this._gameUI.PlayAni(t, "daoback"), this._gameUI._runnerModel = [], Laya.timer.clear(this._gameUI, this._gameUI.Run), Laya.timer.clear(this._gameUI, this._gameUI.Jump), Laya.timer.clear(this._gameUI, this._gameUI.JumpDown), t.getComponent(Laya.Rigidbody3D).isTrigger = !1, this._gameUI._controlState = 3, ne.playSound(a.soundLose), Laya.timer.once(500, this, () => {
                    this._gameUI.CleanTheModel(t), this._gameUI._beginView.showRestart()
                })
            }
            if ("firstrunner" == this.owner.name && "empty" == e.owner.name) {
                let t = this.owner;
                e.owner;
                ne.playSound(a.soundDieFall), this._gameUI.PlayAni(t, "jumpdown"), this._gameUI._runnerModel = [], this._gameUI._runnerSpeed = a.speed / 2, Laya.timer.clear(this._gameUI, this._gameUI.Jump), Laya.timer.clear(this._gameUI, this._gameUI.JumpDown), t.getComponent(Laya.Rigidbody3D).isTrigger = !1, this._gameUI._controlState = 3, ne.playSound(a.soundLose);
                let i = .3,
                    s = {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    n = {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    o = new Laya.Vector3(0, -1.2, 0);
                Laya.Tween.to(s, {
                    x: o.x,
                    y: o.y,
                    z: o.z,
                    update: new Laya.Handler(this, function() {
                        let e = new Laya.Vector3(s.x - n.x, s.y - n.y, s.z - n.z);
                        n.x = s.x, n.y = s.y, n.z = s.z, t && t.transform ? t.transform.translate(e, !1) : Laya.Tween.clearAll(s)
                    })
                }, 1e3 * i, Laya.Ease.linearIn), Laya.timer.once(500, this, () => {
                    Laya.timer.clear(this._gameUI, this._gameUI.Run), this._gameUI.CleanTheModel(t), this._gameUI._beginView.showRestart()
                })
            }
            if (("runner" == this.owner.name || "firstrunner" == this.owner.name) && "coin" == e.owner.name) {
                let t = e.owner;
                ne.playSound(a.soundCoin), t.parent.getChildByName("particle_coin").active = !0, t.active = !1, this._gameUI._beginView.setGold(a.coinProportion), this._gameUI.AddCoin(1)
            }
            if (("runner" == this.owner.name || "firstrunner" == this.owner.name) && "lightning" == e.owner.name) {
                let t = this.owner,
                    i = e.owner;
                ne.playSound(a.soundCoin), i.active = !1, this._gameUI._runnerSpeed = 2 * a.speed, this._gameUI._coinFlySpeed = 2 * a.coinFlySpeed;
                let s = this._gameUI._runnerModel[this._gameUI._runnerModel.length - 1].getComponent(Laya.Animator);
                s.speed = 2, t.getChildByName("speed").active = !0, this._gameUI.PlayAni(t.getChildByName("speed"), "play"), this._gameUI.setCameraScale(4, 1), Laya.timer.once(1e3 * a.speedUpTime, this, () => {
                    this._gameUI._runnerSpeed = a.speed, this._gameUI._coinFlySpeed = a.coinFlySpeed, t.getChildByName("speed").active = !1, s.speed = 1, this._gameUI.setCameraScale(4, 0)
                })
            }
            if (("runner" == this.owner.name || "firstrunner" == this.owner.name) && "magnet" == e.owner.name) {
                let t = this.owner,
                    i = e.owner;
                ne.playSound(a.soundCoin), t.getChildByName("magnet").active = !0, this._gameUI.PlayAni(t.getChildByName("magnet"), "play"), i.active = !1, this._gameUI._runnerState = 1, Laya.timer.frameLoop(1, this._gameUI, this._gameUI.magnetAttract), Laya.timer.once(1e3 * a.magnetTime, this, () => {
                    this._gameUI._runnerState = 0, t.getChildByName("magnet").active = !1
                })
            }
            if ("runner" != this.owner.name && "firstrunner" != this.owner.name || "jumparea" != e.owner.name || (this._gameUI._jumparea = e.owner), ("runner" == this.owner.name || "firstrunner" == this.owner.name) && "runnermodel" == e.owner.name) {
                let t = e.owner;
                if (0 == this._gameUI._sJumpFlag) {
                    let e = t.parent;
                    for (let t = 0; t < e.numChildren; t++) this._gameUI.PlayAni(e.getChildAt(t), "daoback")
                }
            }
            if (("runner" == this.owner.name || "firstrunner" == this.owner.name) && "house" == e.owner.name) {
                let e = this.owner;
                this._gameUI.PlayAni(e, "walk"), 0 == this._gameUI._firshFlag && (this._gameUI._firshFlag = 1, this._gameUI.setCameraReback(), this._gameUI.SuccessPass(), ne.playSound(a.soundWin))
            }
            if (("runner" == this.owner.name || "firstrunner" == this.owner.name) && "door" == e.owner.name) {
                let t = this.owner,
                    i = e.owner,
                    s = !0;
                for (let e = 0; e < this._runnerIndex.length; e++)
                    if (t == this._runnerIndex[e]) {
                        s = !1;
                        break
                    }
                s && (this._gameUI.PlayAni(i.parent, "open"), this._runnerIndex.push(t), Laya.timer.once(300, this, () => {
                    if (this._gameUI.PlayAni(i.parent, "none"), this._gameUI._scene.addChild(t), "firstrunner" == t.name) {
                        Laya.timer.clear(this._gameUI, this._gameUI.Run);
                        let e = new Laya.Vector3,
                            t = new Laya.Vector3;
                        if (this._gameUI._camera.transform.getForward(t), Laya.Vector3.scale(t, 8, t), Laya.Vector3.add(this._gameUI._camera.transform.position, t, e), null == this._gameUI._winCelebrate) {
                            this._gameUI._winCelebrate = Laya.Sprite3D.instantiate(Laya.Loader.getRes(a.modelRootPath + "/" + a.wincelebrate), this._gameUI._scene, !1, e);
                            let t = Laya.Sprite3D.instantiate(Laya.Loader.getRes(a.modelRootPath + "/" + a.wincelebrate), this._gameUI._scene, !1, e);
                            Laya.timer.once(1e3, this, () => {
                                this._gameUI._winCelebrate.destroy(), this._gameUI._winCelebrate = null, t.destroy()
                            })
                        }
                        Laya.timer.once(1e3, this, () => {
                            this._gameUI._beginView.showGameEnd()
                        })
                    } else this._gameUI.setCamera(0, .25, 0)
                }))
            }
        }
        onTriggerStay(e) {}
        onTriggerExit(e) {}
        onCollisionEnter(e) {}
        onCollisionStay(e) {}
        onCollisionExit(e) {}
        onUpdate() {}
        onEnable() {}
        onDisable() {}
    }
    class re extends e.GameSceneUI {
        constructor() {
            super(), this._scene = null, this._goldItems = new Array, this._controlState = 0, this._JumpState = 0, this._JumptmpY = 0, this._JumpDownNums = 0, this._jumparea = null, this._speedV3 = new Laya.Vector3, this._movePaths = new Array, this._runnerModel = new Array, this._standModel = new Array, this._jumpValue = 0, this._changeJumpCamera = !1, this._gravityA = 20, this._standModelA = 0, this._eleRoots = [], this._urlMap = "", this._urlRound = "", this._urlRPoint = "", this._mapDatas = null, this._skyColor = new Laya.Vector4, this._groundColor = new Laya.Vector4, this._sJumpFlag = 0, this._cameraFlag = 0, this._cameraPosY = 0, this._runnerEuler = new Laya.Vector3(0, 0, 0), this._eulerFlag = 0, this._eulerNum = 0, this._finishRoad = null, this._winCelebrate = null, this._firshFlag = 0, this._tmpEulerNum = 0, this._roadColor = new Laya.Vector4, this._soundInterval = 0, this._randomLevel = ["0004", "0008", "0001", "0007", "0032", "0037", "0035", "0021", "0027", "0023"], this._light = null, this._modelSpace = .45, this._moveIndex = 3, this._moveIndexMax = 0, this._camerEnlarge = new Laya.Vector3(.1, .18, .1), this._rotation2 = new Laya.Vector3(0, 180, 0), this._upVector3 = new Laya.Vector3(0, 1, 0), this._floorHigh = .04, this._jumpAni = ["one", "two", "three", "four"], this._runnerSpeed = 0, this._coinFlySpeed = 0, this._coinFlyArray = new Array, this._runnerState = 0, this._finishHigh = .04, this._cleanDataFlag = 0
        }
        onEnable() {
            this._eleRoots = [], this._runnerSpeed = a.speed, this._coinFlySpeed = a.coinFlySpeed, this._coinFlyArray = [], this._standModel = [], this._runnerModel = [], this.loadRoundConfig()
        }
        onSceneLoad(e) {
            this._scene = e, Laya.stage.addChild(this._scene), this.PreloadingRes()
        }
        PreloadingRes() {
            this.onPreLoadFinish(this._scene)
        }
        onPreLoadFinish(e) {
            let t = e.skyRenderer;
            t.mesh = Laya.SkyDome.instance;
            let i = new Laya.SkyProceduralMaterial;
            i.sunSize = .5, i.sunDisk = Laya.SkyProceduralMaterial.SUN_HIGH_QUALITY, i.skyTint = this._skyColor, i.groundTint = this._groundColor, t.material = i;
            let a = this._scene.getChildAt(0).getChildByName("Directional Light");
            a.shadowMode = Laya.ShadowMode.SoftLow, a.shadowDistance = 5,
                a.shadowResolution = 1024,
                a.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades,
                a.shadowNormalBias = 4, this._light = a, this.onLoadMap()
        }
        loadRoundConfig() {
            console.log("加载关卡数据！！！！！！！！");
            let e = ne.getRoundId(),
                t = Number(e);
            t > 40 && t < 51 ? e = this._randomLevel[t - 41] : e > 50 && (localStorage.setItem("zs-20200723-roundid", "0001"), e = ne.getRoundId()), this._urlRound = a.rmapCofigUrl + e + ".json", this._urlRPoint = a.rmapCofigUrl + e + "_runpoints.json", Laya.loader.load([this._urlRound, this._urlRPoint], Laya.Handler.create(this, this.onLoadRound), null, Laya.Loader.JSON)
        }
        onLoadRound() {
            this.onLoadedMovePoint();
            let e = Laya.Loader.getRes(this._urlRound);
            if (e) this._mapDatas = e, this.onLoadedMapConfig();
            else {
                localStorage.setItem("zs-20200723-roundid", "0001");
                let e = ne.getRoundId();
                console.log("加载关卡数据！！！！！！！！==========="), this._urlRound = a.rmapCofigUrl + e + ".json", Laya.loader.load(this._urlRound, Laya.Handler.create(this, function() {
                    let e = Laya.Loader.getRes(this._urlRound);
                    this._mapDatas = e, this.onLoadedMapConfig()
                }), null, Laya.Loader.JSON)
            }
        }
        onLoadedMapConfig() {
            this._urlMap = this._urlRound, Laya.loader.load(this._urlMap, Laya.Handler.create(this, this.onLoadedMap), null, Laya.Loader.JSON)
        }
        onLoadedMap() {
            if (this._scene) this.PreloadingRes();
            else {
                let e = Number(ne.getRoundId());
                e % 30 > 0 && e % 30 <= 10 ? (this._skyColor = new Laya.Vector4(1, 1, 1, 1), this._groundColor = new Laya.Vector4(0, 0, 0, 1), this._roadColor = new Laya.Vector4(.4125134, .8145763, .8490566, 1), Laya.Scene3D.load(a.modelRootPath + "/" + a.scene1, Laya.Handler.create(this, this.onSceneLoad))) : e % 30 > 10 && e % 30 <= 20 ? (this._skyColor = new Laya.Vector4(.2627451, .6666667, .8901961, 1), this._groundColor = new Laya.Vector4(0, 0, 0, 1), this._roadColor = new Laya.Vector4(.1009475, .5188679, .07587219, 1), Laya.Scene3D.load(a.modelRootPath + "/" + a.scene3, Laya.Handler.create(this, this.onSceneLoad))) : e % 30 > 20 && e % 30 <= 29 ? (this._skyColor = new Laya.Vector4(1, 1, 1, 1), this._groundColor = new Laya.Vector4(0, 0, 0, 1), this._roadColor = new Laya.Vector4(.5921569, .3686275, .02352941, 1), Laya.Scene3D.load(a.modelRootPath + "/" + a.scene2, Laya.Handler.create(this, this.onSceneLoad))) : e % 30 == 0 && (this._skyColor = new Laya.Vector4(1, 1, 1, 1), this._groundColor = new Laya.Vector4(0, 0, 0, 1), this._roadColor = new Laya.Vector4(.5921569, .3686275, .02352941, 1), Laya.Scene3D.load(a.modelRootPath + "/" + a.scene2, Laya.Handler.create(this, this.onSceneLoad)))
            }
        }
        onLoadedMovePoint() {
            let e = Laya.Loader.getRes(this._urlRPoint);
            if (e) {
                console.log("成功加载关卡数据"), this._moveInfos = e, this._moveIndexMax = this._moveInfos.length;
                for (let e = 0; e < this._moveInfos.length; e++) {
                    let t = this._moveInfos[e];
                    t.y ? (this._finishHigh = t.y, this._movePaths.push(new Laya.Vector3(Number(t.x), Number(t.y), Number(t.z)))) : this._movePaths.push(new Laya.Vector3(Number(t.x), 0, Number(t.z)))
                }
            }
        }
        onLoadMap() {
            this._jumpPointStandModelArray = new Array, this._jumpPointStandModelMap = {};
            let e = ne.getDeadPoint();
            for (let t = 0; t < this._mapDatas.length; t++) {
                let i = this._mapDatas[t],
                    s = ne.getObjName(i.g, 0),
                    n = Laya.Sprite3D.instantiate(Laya.Loader.getRes(a.modelRootPath + "/" + s), this._scene, !1, new Laya.Vector3(i.x, i.y, i.z));
                this._eleRoots.push(n), 0 != i.a && n.transform.rotate(new Laya.Vector3(0, 360 - i.a, 0), !1, !1);
                let o = n.getChildAt(0);
                o.meshRenderer.receiveShadow = !0;
                let r = new Laya.BlinnPhongMaterial;
                if (r.albedoColor = this._roadColor, o.meshRenderer.material = r, i.s) {
                    let t = ne.getObjName(i.s.st, 1);
                    if ("" == t);
                    else {
                        let r = 0;
                        t == a.coin ? i.s.sy && (r = i.s.sy * this._modelSpace) : t != a.magnet && t != a.lightning || i.s.sy && (r = i.s.sy * this._modelSpace);
                        let h = Laya.Sprite3D.instantiate(Laya.Loader.getRes(a.modelRootPath + "/" + t), n, !1, new Laya.Vector3(i.s.x, i.s.y + r, i.s.z));
                        if (this._eleRoots.push(h), i.s.a, s === a.road6_r && h.transform.rotate(new Laya.Vector3(0, 0, 180), !0, !1), t == a.jumparea) {
                            h.transform.rotate(new Laya.Vector3(0, 90, 0), !1, !1), null == this._jumparea && (this._jumparea = h), h.getChildAt(1).active = !1, h.getChildAt(2).active = !1, h.getChildAt(3).active = !1, h.getChildAt(4).active = !1, this.onChangeJumpSkin(h, ne.skinJumpNum(i.s.st));
                            let e = {};
                            e.jumpPoint = h, e.standModel = null, this._jumpPointStandModelArray.push(e)
                        } else if (t == a.coin) {
                            if (h.name = "coin", this._goldItems.push(h), h.getChildByName("particle_coin").active = !1, i.s.c && i.s.c > 1)
                                for (let e = 1; e < i.s.c; e++) {
                                    let s = this._modelSpace * e + r,
                                        o = Laya.Sprite3D.instantiate(Laya.Loader.getRes(a.modelRootPath + "/" + t), n, !1, new Laya.Vector3(i.s.x, i.s.y + s, i.s.z));
                                    this._eleRoots.push(o), this._goldItems.push(o), o.getChildByName("particle_coin").active = !1
                                }
                        } else if (t == a.lightning) h.name = "lightning";
                        else if (t == a.trap) {
                            h.name = "trap", e && "" != e && i.s.x.toFixed(3) == ne.getDelPointX() && i.s.z.toFixed(3) == ne.getDelPointZ() && (h.active = !1), h.getChildAt(0).meshRenderer.receiveShadow = !0
                        } else if (t == a.wall) {
                            if (h.name = "wall", e && "" != e && i.s.x.toFixed(3) == ne.getDelPointX() && i.s.z.toFixed(3) == ne.getDelPointZ() && (h.active = !1), h.getChildAt(0).meshRenderer.receiveShadow = !0, i.s.w && i.s.w > 1)
                                for (let e = 1; e < i.s.w; e++) {
                                    let o = this._modelSpace * e,
                                        r = null;
                                    r = Laya.Sprite3D.instantiate(Laya.Loader.getRes(a.modelRootPath + "/" + t), n, !1, new Laya.Vector3(i.s.x, i.s.y + o, i.s.z)), s === a.road6_r && r.transform.rotate(new Laya.Vector3(0, 0, 180), !0, !1), this._eleRoots.push(r), r.getChildAt(0).meshRenderer.receiveShadow = !0, h.active || (r.active = !1)
                                }
                        } else if (t == a.empty) h.name = "empty", o.meshRenderer.enable = !1;
                        else if (t == a.stand) {
                            h.name = "standmodel";
                            for (let e = 0; e < i.s.p; e++) {
                                let t = this.randomNumber(2, 5),
                                    s = "";
                                1 == t ? s = a.runner1 : 2 == t ? s = a.runner2 : 3 == t ? s = a.runner3 : 4 == t ? s = a.runner4 : 5 == t && (s = a.runner5);
                                let n = Laya.Sprite3D.instantiate(Laya.Loader.getRes(a.modelRootPath + "/" + s), h, !1, new Laya.Vector3(i.s.x, i.s.y + this._floorHigh + this._modelSpace * e, i.s.z));
                                n.name = "runnermodel", n.getChildByName("circle").active = !1, n.getChildByName("particle_circle").active = !1, n.getChildByName("magnet").active = !1, n.getChildByName("speed").active = !1, this._eleRoots.push(h), n.addComponent(oe)._gameUI = this, this.PlayAni(n, "stop"), n.getChildAt(1).skinnedMeshRenderer.castShadow = !0
                            }
                            null == this._stand && (this._stand = h), this._standModel.push(h);
                            for (let e = 0; e < this._jumpPointStandModelArray.length; e++) {
                                let t = this._jumpPointStandModelArray[e];
                                if (null == t.standModel) {
                                    t.standModel = h;
                                    break
                                }
                            }
                        }
                    }
                }
                this._mapDatas.length - 1 == t && (this._finishRoad = n)
            }
            this.CreateFinishHouse(), this._moveIndex = Number(e) + 2;
            let t = new Laya.Vector3(0, this._floorHigh, 1);
            if (e && "" != e && (t.x = this._movePaths[Number(e)].x, t.z = this._movePaths[Number(e)].z, this._movePaths[Number(e)].y > 0 && (t.y = this._movePaths[Number(e)].y + a.floorHigh, this._floorHigh = this._movePaths[Number(e)].y + a.floorHigh), this._movePaths[Number(e) + 1].y > 0 && (t.y = this._movePaths[Number(e) + 1].y + a.floorHigh, this._floorHigh = this._movePaths[Number(e) + 1].y + a.floorHigh), this._movePaths[Number(e) - 1].y > 0 && (t.y = this._movePaths[Number(e) - 1].y + a.floorHigh, this._floorHigh = this._movePaths[Number(e) - 1].y + a.floorHigh), ne.getHighPointY() && "" != ne.getHighPointY() && Number(ne.getHighPointY()) > this._floorHigh && (t.y = Number(ne.getHighPointY()), this._floorHigh = Number(ne.getHighPointY()))), this._moveModel = Laya.Sprite3D.instantiate(Laya.Loader.getRes(a.modelRootPath + "/" + a.movemodel), this._scene, !1, t), this._moveModel.name = "movemodel", this._eleRoots.push(this._moveModel), this._runermodel = this._moveModel.getChildByName("runermodel"), this._runermodel.name = "runermodel", this._runner = this._runermodel.getChildByName("firstrunner"), this._runner.name = "firstrunner", this._runner.getChildByName("circle").active = !1, this._runner.getChildByName("particle_circle").active = !1, this._runner.getChildByName("magnet").active = !1, this._runner.getChildByName("speed").active = !1, this.onChangePensonSkin(this._runner, ne.getCurSkinId()), this._runner.getChildAt(1).skinnedMeshRenderer.castShadow = !0, this._runner.addComponent(oe)._gameUI = this,
                this._camera = this._moveModel.getChildByName("CameraM").getChildAt(0),
                this._camera.clearFlag = Laya.BaseCamera.CLEARFLAG_SKY,
                this._camera.enableHDR = !1,
                this._cameraM = this._moveModel.getChildByName("CameraM"),
                this._runnerEuler = this._runermodel.transform.rotationEuler.clone(), this._runnerModel.push(this._runner), e && "" != e) {
                let t = new Laya.Vector3(this._movePaths[Number(e) + 2].x, this._runermodel.transform.position.y, this._movePaths[Number(e) + 2].z);
                this._runermodel.transform.lookAt(t, this._upVector3), this._runermodel.transform.rotate(this._rotation2, !1, !1), this._runermodel.transform.rotationEuler.y != this._runnerEuler.y && (this._eulerNum += this._runermodel.transform.rotationEuler.y - this._runnerEuler.y, this._runnerEuler = this._runermodel.transform.rotationEuler.clone()),
                    this._cameraM.transform.rotate(new Laya.Vector3(0, this._eulerNum, 0), !1, !1), this._eulerNum = 0
            }
            this._beginView = new Z, this._beginView.SetGameReference(this), Laya.stage.addChild(this._beginView), Laya.SoundManager.stopMusic(), Laya.timer.once(500, this, () => {
                ne.playBGM(a.soundBGM)
            })
        }
        addMouseEvent() {
            Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onMouseOut),
                Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown),
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp)
        }
        onMouseOut() {
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMove)
        }
        onMouseDown(e) {
            if (!se.is_game)
                if (0 == this._controlState) {
                    platform.getInstance().showInterstitial(() => {
                        this._controlState = 1, this.PlayCrossAni(this._runnerModel[this._runnerModel.length - 1], "run"), Laya.timer.frameLoop(1, this, this.Run);
                        let e = new Laya.Vector3;
                        this._camera.transform.getForward(e), this.setCamera(-e.x, 3 * -e.y, 3 * -e.z);
                    })
                } else if (1 == this._controlState)
                if (this._controlState = 2, 0 == this._JumpState && (this._JumpState = 1), null == this._jumparea) this._runnerModel[this._runnerModel.length - 1] && (this.PlayCrossAni(this._runnerModel[this._runnerModel.length - 1], "jump"), this._jumpValue = 6, Laya.timer.frameLoop(1, this, this.Jump));
                else {
                    let e = new Laya.Vector3(this._jumparea.transform.position.x, this._runermodel.transform.position.y, this._jumparea.transform.position.z);
                    if (this.CalculationLength(e, this._runermodel.transform.position) >= .3) ne.playSound(a.soundJump), this._runnerModel[this._runnerModel.length - 1] && (this.PlayCrossAni(this._runnerModel[this._runnerModel.length - 1], "jump"), this._jumpValue = 6, Laya.timer.frameLoop(1, this, this.Jump));
                    else {
                        Laya.timer.clear(this, this.Run);
                        for (let e = 0; e < this._jumpPointStandModelArray.length; e++) {
                            let t = this._jumpPointStandModelArray[e];
                            if (t.jumpPoint == this._jumparea) {
                                this._stand = t.standModel;
                                break
                            }
                        }
                        this._stand.numChildren - 1 == 0 ? ne.playSound(a.soundGoodJumpOne) : this._stand.numChildren - 1 == 1 ? ne.playSound(a.soundGoodJumpTwo) : this._stand.numChildren - 1 == 2 ? ne.playSound(a.soundGoodJumpThree) : this._stand.numChildren - 1 == 3 && ne.playSound(a.soundGoodJumpFour), this.PlayAni(this._jumparea, this._jumpAni[this._stand.numChildren - 1]), this.PlayCrossAni(this._runnerModel[this._runnerModel.length - 1], "jump");
                        let e = new Laya.Vector3(this._stand.transform.position.x, this._runermodel.transform.position.y, this._stand.transform.position.z),
                            t = Laya.Vector3.distance(e, this._runermodel.transform.position) / this._runnerSpeed,
                            i = this._modelSpace * this._stand.numChildren;
                        this._JumptmpY = (i + this._gravityA * Math.pow(t, 2) / 2) / t, Laya.timer.frameLoop(1, this, this.SJump), this._sJumpFlag = 1
                    }
                }
        }
        onMouseUp() {
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMove)
        }
        onMove() {}
        onClearEvent() {
            Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.onMouseOut), Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp)
        }
        Run() {
            let e = new Laya.Vector3;
            for (this._runermodel.transform.getForward(e), e.x = -e.x, e.y = 0, e.z = -e.z;;) {
                if (this._beginView.updataplace(this._moveIndexMax, this._moveIndex), this._moveIndexMax - 16 == this._moveIndex && (console.log("==============准备结束============="), this._controlState = 3), this._moveIndexMax == this._moveIndex) {
                    this._controlState = 3, Laya.timer.clear(this, this.Run);
                    for (let e = 0; e < this._runnerModel.length; e++) {
                        this._runnerModel[e]
                    }
                    return void this._beginView.showGameEnd()
                }
                let t = new Laya.Vector3(this._runermodel.transform.position.x, 0, this._runermodel.transform.position.z),
                    i = new Laya.Vector3(this._movePaths[this._moveIndex].x, 0, this._movePaths[this._moveIndex].z),
                    s = Laya.Vector3.distance(t, i),
                    n = new Laya.Vector3;
                Laya.Vector3.subtract(i, t, n);
                let o = Laya.Vector3.dot(n, e);
                if (!(s < .1 || o < 0)) break;
                this._movePaths[this._moveIndex].y > 0 && (this._cameraFlag = 1, this._cameraPosY = this._movePaths[this._moveIndex].y - this._floorHigh + a.floorHigh, this._floorHigh = a.floorHigh + this._movePaths[this._moveIndex].y), this._moveIndex += 1
            }
            let t = new Laya.Vector3(this._movePaths[this._moveIndex].x, this._runermodel.transform.position.y, this._movePaths[this._moveIndex].z);
            this.MoveTo(t, this._runermodel.transform.position)
        }
        Jump() {
            let e = this._floorHigh + (this._runnerModel.length * this._modelSpace - this._modelSpace),
                t = 0;
            1 == this._JumpState && (t = this._jumpValue * Laya.timer.delta / 1e3, this._jumpValue -= this._gravityA * Laya.timer.delta / 1e3, this._runermodel.transform.position.y + t < e && this._jumpValue < 0 ? (t = e - this._runermodel.transform.position.y, this._runermodel.transform.translate(new Laya.Vector3(0, t, 0), !1), this.PlayCrossAni(this._runnerModel[this._runnerModel.length - 1], "run"), this._JumpState = 0, this._jumpValue = 0, Laya.timer.clear(this, this.Jump), 3 != this._controlState && (this._controlState = 1), 1 == this._cameraFlag && (this._cameraFlag = 0, this.setCamera(0, this._cameraPosY, 0))) : this._runermodel.transform.translate(new Laya.Vector3(0, t, 0), !1))
        }
        SJump() {
            let e = new Laya.Vector3(this._stand.transform.position.x, this._runermodel.transform.position.y, this._stand.transform.position.z);
            this.JumpTo(e, this._runermodel.transform.position)
        }
        MoveTo(e, t) {
            let i = new Laya.Vector3;
            Laya.Vector3.subtract(e, t, i), Laya.Vector3.normalize(i, this._speedV3);
            let s = new Laya.Vector3;
            Laya.Vector3.scale(this._speedV3, Laya.timer.delta * this._runnerSpeed / 1e3, s), this._runermodel.transform.lookAt(e, this._upVector3), this._runermodel.transform.rotate(this._rotation2, !1, !1), this._runermodel.transform.rotationEuler.y != this._runnerEuler.y && (this._eulerNum += this._runermodel.transform.rotationEuler.y - this._runnerEuler.y, this._runnerEuler = this._runermodel.transform.rotationEuler.clone()), this._tmpEulerNum = this._eulerNum / 30, this._eulerNum >= .01 ? (this._cameraM.transform.rotate(new Laya.Vector3(0, this._tmpEulerNum, 0), !1, !1), this._eulerNum = this._eulerNum - this._tmpEulerNum) : this._eulerNum <= -.01 ? (this._cameraM.transform.rotate(new Laya.Vector3(0, this._tmpEulerNum, 0), !1, !1), this._eulerNum = this._eulerNum - this._tmpEulerNum) : (this._cameraM.transform.rotate(new Laya.Vector3(0, this._eulerNum, 0), !1, !1), this._eulerNum = 0), Laya.timer.delta > 500 && (Laya.SoundManager.stopMusic(), window.WebAudioEngine.stopMusic(), Laya.timer.once(500, this, () => {
                ne.playBGM(a.soundBGM)
            })), this._moveModel.transform.translate(s)
        }
        JumpTo(e, t) {
            let i = new Laya.Vector3;
            Laya.Vector3.subtract(e, t, i), Laya.Vector3.normalize(i, this._speedV3);
            let s = new Laya.Vector3;
            Laya.Vector3.scale(this._speedV3, Laya.timer.delta * this._runnerSpeed / 1e3, s);
            let n = new Laya.Vector3;
            this._runermodel.transform.getForward(n), this._runermodel.transform.lookAt(e, this._upVector3);
            let o = new Laya.Vector3;
            if (this._runermodel.transform.getForward(o), Laya.Vector3.dot(n, o) < 0) {
                let e = new Laya.Vector3;
                Laya.Vector3.add(this._runermodel.transform.position, n, e), this._runermodel.transform.lookAt(e, this._upVector3)
            }
            this._moveModel.transform.translate(s, !1);
            let r = 0,
                h = this._floorHigh + (this._runnerModel.length * this._modelSpace - this._modelSpace);
            if (h += this._stand.numChildren * this._modelSpace, 1 == this._JumpState) {
                if (r = this._JumptmpY * Laya.timer.delta / 1e3, this._JumptmpY -= this._gravityA * Laya.timer.delta / 1e3, this._runermodel.transform.position.y + r < h && this._JumptmpY < 0) {
                    r = h - this._runermodel.transform.position.y, this._runermodel.transform.translate(new Laya.Vector3(0, r, 0), !1), ne.playSound(a.soundJumpLand), this._JumpState = 0, this._JumptmpY = 0, this._changeJumpCamera = !1, Laya.timer.clear(this, this.SJump), 1 == this._runnerModel.length ? this.PlayCrossAni(this._runnerModel[this._runnerModel.length - 1], "pingheng") : this.PlayCrossAni(this._runnerModel[this._runnerModel.length - 1], "stand");
                    let e = this._runnerModel[this._runnerModel.length - 1].getChildByName("circle");
                    e.active = !0;
                    let t = this._runnerModel[this._runnerModel.length - 1].getChildByName("particle_circle");
                    t.active = !0, this.PlayAni(e, "circle"), Laya.timer.once(300, this, () => {
                        e.active = !1, t.active = !1
                    });
                    let i = new Array;
                    for (let e = this._stand.numChildren - 1; e >= 0; e--) {
                        let t = this._stand.getChildAt(e);
                        i.push(t)
                    }
                    let s = this._runnerModel[this._runnerModel.length - 1].transform.position.y;
                    for (let e = 0; e < i.length; e++) {
                        let t = s - this._modelSpace * (e + 1),
                            a = i[e];
                        this._runermodel.addChild(a), this._runnerModel.push(a);
                        let n = new Laya.Vector3(this._runnerModel[this._runnerModel.length - 1].transform.position.x, t, this._runnerModel[this._runnerModel.length - 1].transform.position.z);
                        a.transform.position = n, a.name = "runner", e == i.length - 1 ? (this._controlState = 1, this.PlayCrossAni(a, "run"), this._runner = a, Laya.timer.frameLoop(1, this, this.Run)) : 0 == e ? this.PlayCrossAni(a, "pingheng") : this.PlayCrossAni(a, "stand")
                    }
                    this._sJumpFlag = 0
                } else this._runermodel.transform.translate(new Laya.Vector3(0, r, 0), !1);
                if (!this._changeJumpCamera && this._stand.numChildren > 0) {
                    this._changeJumpCamera = !0;
                    let e = this._runnerModel[this._runnerModel.length - 1],
                        t = new Laya.Vector3,
                        i = new Laya.Vector3(e.transform.position.x, 0, e.transform.position.z);
                    Laya.Vector3.subtract(this._camera.transform.position, i, t), Laya.Vector3.normalize(t, t), this.setCamera(t.x * this._stand.numChildren / 2, t.y * this._stand.numChildren / 2, t.z * this._stand.numChildren / 2)
                }
            }
        }
        CalculationLength(e, t) {
            return Laya.Vector3.distance(t, e)
        }
        CalculationNearStandModel(e) {
            let t = e;
            for (let i = 0; i < this._standModel.length; i++)
                if (t.z < this._standModel[i].transform.position.z) {
                    this._stand = this._standModel[i];
                    let a = new Laya.Vector3(this._stand.transform.position.x, t.y, this._stand.transform.position.z);
                    this._standModelA = Number(this.CalculationLength(a, e).toFixed(2));
                    break
                }
        }
        PlayAni(e, t) {
            let i = e.getComponent(Laya.Animator);
            if (i) {
                if (i.play(t), "daoback" == t) {
                    0 == this._soundInterval && (this._soundInterval = 1, ne.playSound(a.soundDieMan), Laya.timer.once(200, this, () => {
                        this._soundInterval = 0
                    }));
                    let t = .5,
                        i = {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        s = {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        n = new Laya.Vector3(0, 0, 0);
                    e.transform.position.y - this._floorHigh > .4 ? (n = new Laya.Vector3(0, -.4, 0), t = 1) : e.transform.position.y - this._floorHigh > .8 ? (n = new Laya.Vector3(0, -.8, 0), t = 1.2) : e.transform.position.y - this._floorHigh > 1.2 ? (n = new Laya.Vector3(0, -.8, 0), t = 1.4) : e.transform.position.y - this._floorHigh > 1.6 && (n = new Laya.Vector3(0, -1.6, 0), t = 1.6), Laya.Tween.to(i, {
                        x: n.x,
                        y: n.y,
                        z: n.z,
                        update: new Laya.Handler(this, function() {
                            let t = new Laya.Vector3(i.x - s.x, i.y - s.y, i.z - s.z);
                            s.x = i.x, s.y = i.y, s.z = i.z, e && e.transform ? e.transform.translate(t, !1) : Laya.Tween.clearAll(i)
                        })
                    }, 1e3 * t, Laya.Ease.linearIn)
                } else "one" == t ? e.getChildAt(1).active = !0 : "two" == t ? e.getChildAt(2).active = !0 : "three" == t ? e.getChildAt(3).active = !0 : "four" == t && (e.getChildAt(4).active = !0);
                "daofront" == t && 0 == this._soundInterval && (this._soundInterval = 1, ne.playSound(a.soundDieMan), Laya.timer.once(200, this, () => {
                    this._soundInterval = 0
                }))
            }
        }
        PlayCrossAni(e, t) {
            let i = e.getComponent(Laya.Animator);
            i && i.crossFade(t, .2, 0)
        }
        setCamera(e, t, i) {
            let a = {
                    x: 0,
                    y: 0,
                    z: 0
                },
                s = {
                    x: 0,
                    y: 0,
                    z: 0
                },
                n = new Laya.Vector3(e, t, i);
            Laya.Tween.to(a, {
                x: n.x,
                y: n.y,
                z: n.z,
                update: new Laya.Handler(this, function() {
                    let e = new Laya.Vector3(a.x - s.x, a.y - s.y, a.z - s.z);
                    s.x = a.x, s.y = a.y, s.z = a.z, this._camera && this._camera.transform ? this._camera.transform.translate(e, !1) : Laya.Tween.clearAll(a)
                })
            }, 300, Laya.Ease.linearIn)
        }
        setCameraXYZ(e, t, i) {
            let a = {
                    x: 0,
                    y: 0,
                    z: 0
                },
                s = {
                    x: 0,
                    y: 0,
                    z: 0
                },
                n = new Laya.Vector3(e, t, i);
            Laya.Tween.to(a, {
                x: n.x,
                y: n.y,
                z: n.z,
                update: new Laya.Handler(this, function() {
                    let e = new Laya.Vector3(a.x - s.x, a.y - s.y, a.z - s.z);
                    s.x = a.x, s.y = a.y, s.z = a.z, this._cameraM && this._cameraM.transform ? this._cameraM.transform.translate(e, !1) : Laya.Tween.clearAll(a)
                })
            }, 300, Laya.Ease.linearIn)
        }
        setCameraScale(e, t) {
            if (this._runnerModel[this._runnerModel.length - 1]) {
                let i = this._runnerModel[this._runnerModel.length - 1],
                    a = new Laya.Vector3,
                    s = new Laya.Vector3(i.transform.position.x, 0, i.transform.position.z);
                Laya.Vector3.subtract(this._camera.transform.position, s, a), Laya.Vector3.normalize(a, a), 0 == t ? this.setCamera(-a.x * e / 2, -a.y * e / 2, -a.z * e / 2) : this.setCamera(a.x * e / 2, a.y * e / 2, a.z * e / 2)
            }
        }
        setCameraReback() {
            let e = this._runnerModel[this._runnerModel.length - 1],
                t = new Laya.Vector3,
                i = new Laya.Vector3(e.transform.position.x, 0, e.transform.position.z);
            Laya.Vector3.subtract(this._camera.transform.position, i, t), Laya.Vector3.normalize(t, t);
            let a = this._runnerModel.length;
            a >= 1 && (a -= 1), this.setCamera(-t.x * a / 2, -t.y * a / 2, -t.z * a / 2)
        }
        onGameRevive() {
            this.CleanData(), Laya.stage.addChild(new re), this._cleanDataFlag = 0
        }
        CleanData() {
            Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.onMouseOut), Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp), Laya.timer.clearAll(this), this.CleanModel(), this.destroy()
        }
        CleanModel() {
            for (let e = 0; e < this._runnerModel.length; e++) {
                this._runnerModel[e].destroy()
            }
            for (let e = 0; e < this._standModel.length; e++) {
                this._standModel[e].destroy()
            }
            for (let e = 0; e < this._eleRoots.length; e++) {
                this._eleRoots[e].destroy()
            }
        }
        CleanTheModel(e) {
            e.destroy()
        }
        randomNumber(e, t) {
            return Math.floor(parseInt(Math.random() * (t - e + 1) + e, 10))
        }
        ChanggeModelSort() {
            for (let e = 0; e < this._runnerModel.length; e++) {
                let t = this._runnerModel[e],
                    i = this._floorHigh + e * this._modelSpace;
                t.transform.position = new Laya.Vector3(t.transform.position.x, i, t.transform.position.z)
            }
        }
        JumpDown(e = 0) {
            let t = this._floorHigh + (this._runnerModel.length * this._modelSpace - this._modelSpace);
            if (this._runermodel.transform.position.y - .03 < t - e) {
                this._runermodel.transform.translate(new Laya.Vector3(0, 0 - (this._runermodel.transform.position.y - t), 0), !1), Laya.timer.clear(this, this.JumpDown), this._controlState = 1, this.PlayCrossAni(this._runnerModel[this._runnerModel.length - 1], "run");
                let e = this._runnerModel[this._runnerModel.length - 1],
                    i = new Laya.Vector3,
                    a = new Laya.Vector3(e.transform.position.x, 0, e.transform.position.z);
                Laya.Vector3.subtract(this._camera.transform.position, a, i), Laya.Vector3.normalize(i, i);
                let s = -i.y * this._JumpDownNums / 2;
                1 == this._cameraFlag && (this._cameraFlag = 0, s += this._cameraPosY), this.setCamera(-i.x * this._JumpDownNums / 2, s, -i.z * this._JumpDownNums / 2), this._JumpDownNums = 0
            } else this._runermodel.transform.translate(new Laya.Vector3(0, -.03, 0), !1)
        }
        magnetAttract() {
            if (1 == this._runnerState)
                for (let e = 0; e < this._goldItems.length; e++)
                    if (this._goldItems[e]) {
                        let t = this._goldItems[e],
                            i = new Laya.Vector3(t.transform.position.x, this._runermodel.transform.position.y, t.transform.position.z);
                        if (Number(this.CalculationLength(i, this._runermodel.transform.position)) <= a.magnetRange) {
                            let t = 0;
                            for (let i = 0; i < this._coinFlyArray.length; i++) this._goldItems[e] == this._coinFlyArray[i] && (t = 1);
                            0 == t && this._coinFlyArray.push(this._goldItems[e])
                        }
                    }
            let e = 0;
            for (let t = 0; t < this._coinFlyArray.length; t++)
                if (this._coinFlyArray[t]) {
                    e = 1;
                    let i = this._coinFlyArray[t],
                        s = new Laya.Vector3,
                        n = new Laya.Vector3;
                    Laya.Vector3.subtract(this._runermodel.transform.position, i.transform.position, s), Laya.Vector3.normalize(s, n);
                    let o = new Laya.Vector3;
                    Laya.Vector3.scale(n, Laya.timer.delta * a.coinFlySpeed / 1e3, o), i.transform.translate(o, !1)
                }
            0 == e && 0 == this._runnerState && (this._coinFlyArray = [], Laya.timer.clear(this, this.magnetAttract))
        }
        onChangeJumpSkin(e, t) {
            Laya.Texture2D.load(ne.skinJumpPath(t), Laya.Handler.create(this, function(t) {
                e.getChildAt(0).meshRenderer.material.albedoTexture = t
            }))
        }
        onChangePensonSkin(e, t) {
            Laya.Texture2D.load(ne.skinPersonPath(t), Laya.Handler.create(this, function(t) {
                e.getChildAt(1).skinnedMeshRenderer.material.albedoTexture = t
            }))
        }
        CreateFinishHouse() {
            for (let e = 0; e < 10; e++) {
                let t = this._modelSpace * e + this._finishHigh,
                    i = Laya.Sprite3D.instantiate(Laya.Loader.getRes(a.modelRootPath + "/" + a.finishpoint), this._finishRoad, !1, new Laya.Vector3(this._movePaths[this._moveIndexMax - 10 + e].x, t, this._movePaths[this._moveIndexMax - 10 + e].z));
                i.name = "finishpoint", i.getChildAt(0).getChildAt(1).meshRenderer.materials[0].albedoColor = new Laya.Vector4(this.randomNumber(0, 100) / 100, this.randomNumber(0, 100) / 100, this.randomNumber(0, 100) / 100, 1), this._eleRoots.push(i)
            }
        }
        AddCoin(e) {
            ne.addCoinNum(e)
        }
        SuccessPass() {
            ne.addRoundId()
        }
    }
    class he {
        constructor() {}
        static init() {
            var e = Laya.ClassUtils.regClass;
            e("script/GameUI.ts", re), e("script/LoadingUI.ts", P), e("script/GameBegin.ts", Z)
        }
    }
    he.width = 750, he.height = 1334, he.scaleMode = "exactfit", he.screenMode = "none", he.alignV = "middle", he.alignH = "center",
        he.startScene = "LoadingScene.scene", he.sceneRoot = "", he.debug = !1, he.stat = !1, he.physicsDebug = !1, he.exportSceneToJson = !0, he.init();
    new class {
        constructor() {
            this.data1 = !1, this.data2 = !1,
                Config.useRetinalCanvas = false,
                window.Laya3D ? Laya3D.init(he.width, he.height) :
                Laya.init(he.width, he.height, Laya.WebGL);
            var yad = new Laya.Image();
            // yad.scale(0.8, 0.8);
            yad.skin = "res/yad.png";
            yad.centerX = 0;
            yad.bottom = 0;
            yad.zOrder = 100000;
            Laya.stage.addChild(yad);
            window.yad = yad;
            // AudioEngineInstace.playMusic(a.pathBGM);
            if (Laya.LocalStorage.getItem("Tower-Run-Online-zs-music")) {
                ne._music = JSON.parse(Laya.LocalStorage.getItem("Tower-Run-Online-zs-music"));
                if (ne._music) {
                    window.WebAudioEngine.stopMusic();
                } else {
                    window.WebAudioEngine.playMusic(a.pathBGM);
                }
            } else {
                //注释了这里
                // window.WebAudioEngine.stopMusic();
                ne._music = false;
            }
            if (Laya.LocalStorage.getItem("Tower-Run-Online-zs-sound")) {
                ne._sound = Laya.SoundManager.soundMuted = JSON.parse(Laya.LocalStorage.getItem("Tower-Run-Online-zs-sound"));
            } else {
                ne._sound = Laya.SoundManager.soundMuted = false;
            }

            Laya.Physics && Laya.Physics.enable(),
                Laya.DebugPanel && Laya.DebugPanel.enable(),
                Laya.stage.scaleMode = he.scaleMode, Laya.stage.screenMode = he.screenMode,
                Laya.stage.alignV = he.alignV, Laya.stage.alignH = he.alignH,
                Laya.URL.exportSceneToJson = he.exportSceneToJson,
                (he.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), he.physicsDebug &&
                Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), he.stat && Laya.Stat.show(),
                Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded),
                    Laya.ResourceVersion.FILENAME_VERSION);
            // Laya.stage.on(Laya.Event.RESIZE, this, this.resizeView);//zs
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded))
        }
        onConfigLoaded() {
            Laya.loader.load(["sound/bgm.mp3"], Laya.Handler.create(this, this.showLoad));
        }
        // resizeView() {
        // Laya.stage.pivot(H.width / 2, H.height / 2);
        // Laya.stage.pos(Laya.Browser.width / 2, Laya.Browser.height / 2);
        // }
        showLoad() {
            var e = new Laya.Image;
            e.skin = "ui/bg.jpg", e.height = Laya.stage.height, Laya.stage.addChild(e), he.startScene && Laya.Scene.open(he.startScene);
        }
    }
}();