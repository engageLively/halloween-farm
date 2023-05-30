    // Copyright 2022 by Ultisim and engageLively.  All rights reserved

    
    export function init(Constants) {
        Constants.AvatarNames = ["newwhite",  "marchhare", "queenofhearts", "cheshirecat", "alice"];
    
        /* Alternatively, you can specify a card spec for an avatar,
           instead of a string for the partical file name, to create your own avatar.
           You can add behaviorModules here. Also, if the system detects a behavior module
           named AvatarEventHandler, that is automatically installed to the avatar.
            {
                type: "3d",
                modelType: "glb",
                name: "rabbit",
                dataLocation: "./assets/avatars/newwhite.zip",
                dataRotation: [0, Math.PI, 0],
                dataScale: [0.3, 0.3, 0.3],
            }
        */
    
        Constants.ExcludedSystemBehaviorModules = ["avatarEvents.js"];
        Constants.UserBehaviorDirectory = "behaviors/default";
        Constants.UserBehaviorModules = [
            "avatarEvents.js", "csmLights.js", 'halloweenLights.js', 'jumpWorld.js', 'spideyJumpOnApproach.js', 'synchronousLoad.js', 'urlLink.js'
        ];
    
        Constants.DefaultCards = [
            {
                card: {
                    name:"world model",
                    layers: ["walk"],
                    type: "3d",
                    singleSided: true,
                    shadow: true,
                    translation:[0, -1.7, 0],
                    placeholder: true,
                    placeholderSize: [400, 0.1, 400],
                    placeholderColor: 0x808080,
                    placeholderOffset: [0, 0, 0],
                    // behaviorModules: ['LoadCards']
                    behaviorModules: ['SynchronousCardLoader']
                }
            },
            {
                /* card: {
                    behaviorModules: [ "Light" ],
                    dataLocation: "3x-8isHU-R632G4V8vc8lUY7rfjLk5ImtjubwyEyD3H8EAwMCAtCV1ceERQdC1YNC1YbChcJDR0MVhEXVw1XFhE3CjM-Tk1KEDY_LRYrSggWDDNOPCkqSjEJSlcbFxVWDRQMEQsRFVYUERYcGVYaHQoWGQocVhURGwoXDh0KCx1XEAEODj0pHTs0FAsZCAwIQEATM007KD8UQT81QD42LxQ3SU0-GyABHwgzLVccGQwZVw0AGU0oSU4tQU4rFUsQLQ8OGjABIBUoAAoSKCcbQR0NDgEaGysULBpBSDU", dataType: "exr",
                    fileName: "/abandoned_parking_4k.jpg",
                    layers: [ "light" ],
                    name: "light",
                    type: "lighting",
                    dataType: "jpg"
                } */
                card: {
                    name: "light",
                    layers: ["light"],
                    type: "lighting",
                    behaviorModules: ["Light"],
                    dataLocation: "3OF2-s4U1ZOJduGATmLEIXo1iTkQHd5ZBknKgL5SvqpQJzs7Pzx1YGApJiMqPGE6PGEsPSA-Oio7YSYgYDpgCCsZLTYjBjwOJB4sDRcrfAg3Ljk2OBoEGBYWfWAmIGEsPSA-Oio7YSImLD0gOSo9PCpgPwB9AAIIISx8YiYneScqKyQaIisNLHkaGT8YKg56JQwQfHstPiNiGQ49e2ArLjsuYCMBPgMiCQt3OQskGhcleSp9HQIIfXseHgo7EAo9CB48FRwpegsCLH4OIwY",
                    fileName: "/abandoned_parking_4k.jpg",
                    dataType: "jpg",
                }
            },
            {
                card: {
                    animationClipIndex:0,
                    animationStartTime: 4365797,
                    animationProximateDistance: 50,
                    animationCheckInterval: 20,
                    animationProximateAnimationClip: 12,
                    animationDistantAnimationClip: 4,
                    behaviorModules: ['SpideyJumpOnApproach'],
                    delayAfterJump: 1000,
                    name: '/spiderman-rigged.glb',
                    fileName: '/spiderman-rigged.glb',
                    dataLocation: "3nkvssiWbp4Kp3XVeZZoG39fIaYeDr7K0gMYQqBjPja4BhoaHh1UQUEIBwILHUAbHUANHAEfGwsaQAcBQRtBAAchHCUoWFtcBiApOwA9XB4AGiVYKj88XCcfXEENAQNAGwIaBx0HA0ACBwAKD0AMCxwADxwKQAMHDRwBGAscHQtBBVsmDDxaFzQhAyEoXxgpIzsUGjYJJF8_Pj1aHgMLNAk7Vg9aLF8oXBknI0EKDxoPQSocXgsgACUkFiIdWzEaNiEWWwAkMQ1YCiUUASkGNhgiKgQ3L1kKLwhdFB0",
                    dataScale: [226, 226, 226],
                    layers: ['pointer'],
                    modelType: 'glb',
                    rotation:  [-0.007537241996760254, 0.23213362494298506, 0.04412154985861157, 0.9716534665157047],
                    scale: [0.5, 0.5, 0.5],
                    shadow: true,
                    singleSided: true,
                    translation:[0.14, -1.48, -11],
                    translationBeforeJump: [0.14, -1.48, -11],
                    translationAfterJump: [0.14, -1.48, -6],
                    type: '3d'
                }
            },
            {
                card: {
                    cornerRadius: 0.02,
                    loadSynchonously: true,
                    behaviorModules: ["URLLink"],
                    cardURL: "https://www.target.com/p/marvel-spider-man-legends-series-peter-b-parker-action-figure/-/A-87012329",
                    fileName: "/amazing-spider-man-2-spider-strike-shock-surge-spider-man-package.jpg",
                    fullBright: true,
                    layers: ["pointer"],
                    modelType: "img",
                    name: "/amazing-spider-man-2-spider-strike-shock-surge-spider-man-package.jpg",
                    rotation: [0, 0, 0],
                    scale: [2.55, 2.55, 2.55],
                    shadow: true,
                    singleSided: true,
                    textureLocation: "3c7YYZ7SeumAdf-9ifGiTssSRECTvVMNVx4Cf2ly3zO0CxcXExBZTEwFCg8GEE0WEE0AEQwSFgYXTQoMTBZMDQosESglVVZRCy0kNg0wURMNFyhVJzIxUSoSUUwADA5NFg8XChAKDk0PCg0HAk0BBhENAhEHTQ4KABEMFQYREAZMUxRWMlQ0AgArThQqIDA0EyxaBlEpIRQSCyQrETMIW1sOJ1cXPFEuFCklLkwHAhcCTAoqVVJRJVoLJwgpVCkFLQ00LTNbMA0xFAsFCREQMgAMG1YXThQwGzQlOQQ",
                    textureType: "image",
                    translation: [0.198, -0.150, -11.829],
                    type: "2d"
                }
            },
            {
                card:{
                    cornerRadius: 0.02,
                    fileName: "Summer-Poster.png",
                    fullBright: true,
                    layers: ["pointer"],
                    modelType: "img",
                    name: "Summer-Poster.png",
                    rotation: [0, 0.716, 0, 0.6981],
                    scale: [2.5, 2.5, 2.5],
                    shadow: true,
                    singleSided: true,
                    textureLocation: "3zBGBoV5_7sTaiScM6gFg0eroehvjbfx_pcWuE3F8ReMEg4OCglAVVUcExYfCVQPCVQZCBULDx8OVBMVVQ9VFBM1CDE8TE9IEjQ9LxQpSAoUDjFMPisoSDMLSFUZFRdUDxYOEwkTF1QWExQeG1QYHwgUGwgeVBcTGQgVDB8ICR9VK00dHCIOFSIKAkkYDj5KGzNCTkNPKTgeTB0rNik5L0ggERwVTyJJMwMlQlUeGw4bVQI8FU8VKSgROBcqT1ciCjQcDEkOMABJSTsrE0wuAjMbVxs4Lk8dGCgRLy8",
                    textureType: "image",
                    translation: [-3.065, -0.077, -3.170],
                    type: "2d"
                }
            },
            {
                card: {
                    cornerRadius: 0.02,
                    fileName: "Christmas-Poster.png",
                    fullBright: true,
                    layers: ["pointer"],
                    modelType: "img",
                    name: "Christmas-Poster.png",
                    rotation: [ 0, 0.7169193325656005, 0, 0.6971561307151314 ],
                    scale: [ 2.4606951592912805, 2.4606951592912805, 2.4606951592912805 ],
                    shadow: true,
                    singleSided: true,
                    textureLocation: "3C7pLwmb9qZ1NFKCbS9kisDowpe_bBG-_9Dh5qgOWzfYKzc3MzB5bGwlKi8mMG02MG0gMSwyNiY3bSosbDZsLSoMMQgFdXZxKw0EFi0QcTMtNwh1BxIRcQoycWwgLC5tNi83KjAqLm0vKi0nIm0hJjEtIjEnbS4qIDEsNSYxMCZsEnQkJRs3LBszO3AhNwdzIgp7d3p2EAEndSQSDxAAFnEZKCUsdhtwCjoce2wnIjcibAZzCDIpFC0tKgg5GhEIDRQqcBIWBjkhMBsXCQsaegcWLXo5DAglMS5ydw4",
                    textureType: "image",
                    translation: [ -3.0721572699924904, -0.08272829946079074, -5.4040367730392065 ],
                    type: "2d"
                }
            },
            {
                card:{
                    cornerRadius: 0.02,
                    fileName: "Easter-Shop.png",
                    fullBright: true,
                    layers: ["pointer"],
                    modelType: "img",
                    name: "Easter-Shop.png",
                    rotation: [ 0, 0.7233056828849171, 0, 0.6905279785109244 ],
                    scale: [ 2.317523620026597, 2.317523620026597, 2.317523620026597 ],
                    shadow: true,
                    singleSided: true,
                    textureLocation: "3PdMexo-NDIIXeyQWJmeWw4CfGshwkbDtFeAnUKSaKx8OCQkICNqf382OTw1I34lI34zIj8hJTUkfjk_fyV_PjkfIhsWZmViOB4XBT4DYiA-JBtmFAECYhkhYn8zPz1-JTwkOSM5PX48OT40MX4yNSI-MSI0fj05MyI_JjUiIzV_AWc3NggkPwggKGMyJBRgMRloZGllAxI0ZjcBHAMTBWIKOzY_ZQhjGSkPaH80MSQxfxplGDlnGmABMwISAWIAYCgYITkzCjsZNTUCaR0fYSooZyNhNGEXGQAJFSc",
                    textureType: "image",
                    translation: [ -2.851343872884487, -0.0788790762013043, -9.72582261375631 ],
                    type: "2d"
                }
            },
            {
                card:{
                    jumpCheckInterval: 20,
                    jumpDistance: 1,
                    translationAfterJump: [-49, -0.01, 123.46],
                    targetURL: "https://lin564.github.io/playground/?q=iumpzdabw0#pw=HuTXLIZY72VpemmSharYQg",
                    cornerRadius: 0.02,
                    fileName: "HALLOWEEN.png",
                    fullBright: true,
                    layers: ["pointer"],
                    behaviorModules: [ "JumpWorld" ],
                    reuseTab: true,
                    replaceWorldTargetURL: "https://lin564.github.io/playground/?q=iumpzdabw0#pw=HuTXLIZY72VpemmSharYQg",
                    modelType: "img",
                    name: "HALLOWEEN.png",
                    rotation: [ -0.006172937025203263, 0.7140564262199253, 0.0066314685051929246, 0.7000295269829524 ],
                    scale: [ 2.3952757596782663, 2.3952757596782663, 2.3952757596782663 ],
                    shadow: true,
                    singleSided: true,
                    textureLocation: "3YRRea1Kjzl1bhpnaZg5VRtrrXd2rs0LWS7HIKP4qO9EMS0tKSpjdnY_MDU8KncsKnc6KzYoLDwtdzA2dix2NzAWKxIfb2xrMRceDDcKayk3LRJvHQgLaxAoa3Y6NjR3LDUtMCowNHc1MDc9OHc7PCs3OCs9dzQwOis2LzwrKjx2CG4-PwEtNgEpIWo7LR1pOBBhbWBsChs9bz4IFQoaDGsDMj82bAFqECAGYXY9OC04dh50EQ8-DwAObAYJLBA7Gho4NjUzbBwQGBcbGioPbTMOdBhtCj49ND41FG0",
                    textureType: "image",
                    translation: [ -3.03272575349611, -0.08585621639460206, -7.623500014301507 ],
                    type: "2d"
                }
            },
            {
                card: {
                    dataLocation: "3osaNvZ4wYTwHpRDt10uB6XnJUad8ozLG3ktK1TgVEX8BxsbHxxVQEAJBgMKHEEaHEEMHQAeGgobQQYAQBpAAQYgHSQpWVpdByEoOgE8XR8BGyRZKz49XSYeXUAMAAJBGgMbBhwGAkEDBgELDkENCh0BDh0LQQIGDB0AGQodHApABFonDT1bFjUgAiApXhkoIjoVGzcIJV4-PzxbHwIKNQg6Vw5bLV4pXRgmIkALDhsOQCI4NRkKJR8GPiAnJwk3Hi0aPgk3K10JWCEaPg02NwkHBTwXCDkpIjkgDRw",
                    dataScale: [ 0.06388637900599145, 0.06388637900599145, 0.06388637900599145 ],
                    fileName: "/Untitled.glb",
                    loadSynchonously: true,
                    layers: ["pointer"],
                    modelType: "glb",
                    name: "/Untitled.glb",
                    rotation: [ 0, -0.005115640668392818, 0, -0.9999869150246674 ],
                    scale: [ 10.131048105501707, 10.131048105501707, 10.131048105501707 ],
                    shadow: true,
                    singleSided: true,
                    translation: [ 1.6140875098667018, -1.6408487161911678, -16.0302585355405 ], type: "3d"
                }
            }
        ];
    }
    
