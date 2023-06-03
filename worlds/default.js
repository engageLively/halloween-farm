export function init(Constants) {
    Constants.AvatarNames = ["newwhite",   "queenofhearts", "cheshirecat", "alice"];

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
        "avatarEvents.js", "canvasPawn.js", "csmLights.js", 'jumpWorld.js', 'synchronousLoad.js'
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
            card: {
                behaviorModules: [ "Light" ],
                dataLocation: "3x-8isHU-R632G4V8vc8lUY7rfjLk5ImtjubwyEyD3H8EAwMCAtCV1ceERQdC1YNC1YbChcJDR0MVhEXVw1XFhE3CjM-Tk1KEDY_LRYrSggWDDNOPCkqSjEJSlcbFxVWDRQMEQsRFVYUERYcGVYaHQoWGQocVhURGwoXDh0KCx1XEAEODj0pHTs0FAsZCAwIQEATM007KD8UQT81QD42LxQ3SU0-GyABHwgzLVccGQwZVw0AGU0oSU4tQU4rFUsQLQ8OGjABIBUoAAoSKCcbQR0NDgEaGysULBpBSDU",
                dataType: "exr",
                fileName: "/abandoned_parking_4k.jpg",
                layers: [ "light" ],
                name: "light",
                type: "lighting"
            }
        },
        {
            card:{
                name: "canvas",
                translation: [30, -0.318, -30],
                rotation: [0, 0, 0],
                scale: [3, 3, 3],
                type: "2d",
                textureType: "canvas",
                textureWidth: 1024,
                textureHeight: 768,
                width: 1,
                height: 0.75,
                // color: 0xffffff,
                depth: 0.05,
                cornerRadius: 0.1,
                jumpCheckInterval: 50,
                    jumpDistance: 1,
                    translationAfterJump: [-49, -0.01, 123.46],
                    targetURL: "https://engagelively.github.io/bay-portal-3D",
                behaviorModules: ["CanvasPawn", "JumpWorld"]
            }
        },
        {
            "card": {
                "animationClipIndex": 0,
                "animationStartTime": 205923,
                "dataLocation": "3I9ws-YzXBN5XkrHrcpPE998O7P7PxzQypjK-PeCJeRAIT09OTpzZmYvICUsOmc8OmcqOyY4PCw9ZyAmZjxmJyAGOwIPf3x7IQcOHCcaezknPQJ_DRgbewA4e2YqJiRnPCU9IDogJGclICctKGcrLDsnKDstZyQgKjsmPyw7OixmPTBwLSsnHg4mDXx7IShwGQsoMSoqHH9wfxsvA3ghOz5_IR0CPSAGMwsfOmYtKD0oZhovAQU_Kg56DAwoBj8tCCN9IzsDPQUqERZxJwh5DAp9E34HOQd_GT4uGDo",
                "dataScale": [
                    0.015374940624041978,
                    0.015374940624041978,
                    0.015374940624041978
                ],
                "fileName": "/House6 from 3DS to Blender baked.glb",
                "layers": [
                    "pointer"
                ],
                "modelType": "glb",
                "name": "/House6 from 3DS to Blender baked.glb",
                "rotation": [
                    0,
                    0.20034185022003698,
                    0,
                    0.9797260551043911
                ],
                "scale": [
                    83.15339788860852,
                    83.15339788860852,
                    83.15339788860852
                ],
                "shadow": true,
                "singleSided": true,
                "translation": [
                    2.9885875282899654,
                    -1.2167490146465794,
                    -32.12252575130215
                ],
                "type": "3d"
            },
            "id": "0003"
        }
        /* {
            "card": {
                "animationClipIndex": 0,
                "animationStartTime": 11755,
                "dataLocation": "3wXoR-CtxVcsQ7RU3am0aEvQ0l_AQMzRPQUnPWIWLy58HwMDBwRNWFgRHhsSBFkCBFkUBRgGAhIDWR4YWAJYGR44BTwxQUJFHzkwIhkkRQcZAzxBMyYlRT4GRVgUGBpZAhsDHgQeGlkbHhkTFlkVEgUZFgUTWRoeFAUYARIFBBJYHTJAPzA-RREjQgc5ERg8HAUhJUFHRg9AHDUgBjEcBg8lRwMSGgUYRThHBFgTFgMWWCg-AT0RGQRAG0A6Hh4OOSJHGkQODxADA1paTyg6OjhBIEMeFB4cMEMtGQQ",
                "dataScale": [
                    0.00046809848531158255,
                    0.00046809848531158255,
                    0.00046809848531158255
                ],
                "fileName": "/cartoon_halloween_farm (1).glb",
                "layers": [
                    "pointer"
                ],
                "modelType": "glb",
                "name": "/cartoon_halloween_farm (1).glb",
                "rotation": [
                    0,
                    0,
                    0,
                    1
                ],
                "shadow": true,
                "singleSided": true,
                "translation": [
                    0,
                    0,
                    -6
                ],
                "type": "3d"
            },
            "id": "0004"
        } */
        /* {
            card: {
                animationClipIndex: 0,
                animationStartTime: 132809,
                // "dataLocation": "33Bd6InSNRh-9L8KxPSj03a_vTNCY-SPGWZtB6gKa2HgW0dHQ0AJHBxVWl9WQB1GQB1QQVxCRlZHHVpcHEYcXVp8QXh1BQYBW310Zl1gAUNdR3gFd2JhAXpCARxQXF4dRl9HWkBaXh1fWl1XUh1RVkFdUkFXHV5aUEFcRVZBQFYcW0pFRXZiVnB_X0BSQ0dDCwtYeAZwY3RfCnR-C3V9ZF98AgZ1UGtKVEN4ZhxXUkdSHF1Dfn9pBlVSa35DQwFGS1lHd18CY0YKC2tUS1lpW3xif0ZiC1tiHmwAAwc",

                // dataLocation: "33Bd6InSNRh-9L8KxPSj03a_vTNCY-SPGWZtB6gKa2HgW0dHQ0AJHBxVWl9WQB1GQB1QQVxCRlZHHVpcHEYcXVp8QXh1BQYBW310Zl1gAUNdR3gFd2JhAXpCARxQXF4dRl9HWkBaXh1fWl1XUh1RVkFdUkFXHV5aUEFcRVZBQFYcW0pFRXZiVnB_X0BSQ0dDCwtYeAZwY3RfCnR-C3V9ZF98AgZ1UGtKVEN4ZhxXUkdSHF1Dfn9pBlVSa35DQwFGS1lHd18CY0YKC2tUS1lpW3xif0ZiC1tiHmwAAwc",
                dataScale: [ 0.00046809848531158255, 0.00046809848531158255, 0.00046809848531158255 ],
                fileName: "/new_halloween_farm.glb",
                // dataLocation: "assets/models/new_halloween_farm.glb",
                // filename: "assets/models/cartoon_halloween_farm.glb",
                dataLocation: "3NkVHuGVtCrC1ovWX_Y-pFZGBqNpkcs-h3PqcMaCoTogJjo6Pj10YWEoJyIrPWA7PWAtPCE_Oys6YCchYTthNBs6OR4BNAg7AR1_BScpAxQne313NggKCXZ-fGEnIWAtPCE_Oys6YCMnLTwhOCs8PStgIiEtLyIqKzgqKygvOyI6YR4WDBEbFAgLGXoiIj87eAB8GAcPNCB6Hn53LCwLJz52GHkJKhoce38NHylhKi86L2EoIxkqHjQsAxw6YwQcfAMkAiw2fhgeHn4tJ3s5fxsIBjk8KHYFeh0RCH0L",
                layers: [ "pointer" ],
                modelType: "glb",
                name: "/cartoon_halloween_farm.glb",
                rotation: [ 0, 0, 0, 1 ],
                scale: [ 37.26279284058949, 37.26279284058949, 37.26279284058949 ],
                shadow: true,
                singleSided: true,
                translation: [ 48.618503957371594, -1.13928128352862, -6 ],
                loadSynchronous: true,
                loadSynchronously: true,
                type: "3d"
            },
        }
            /* "card": {
                "animationClipIndex": 0,
                "animationStartTime": 132809,
                "dataLocation": "33Bd6InSNRh-9L8KxPSj03a_vTNCY-SPGWZtB6gKa2HgW0dHQ0AJHBxVWl9WQB1GQB1QQVxCRlZHHVpcHEYcXVp8QXh1BQYBW310Zl1gAUNdR3gFd2JhAXpCARxQXF4dRl9HWkBaXh1fWl1XUh1RVkFdUkFXHV5aUEFcRVZBQFYcW0pFRXZiVnB_X0BSQ0dDCwtYeAZwY3RfCnR-C3V9ZF98AgZ1UGtKVEN4ZhxXUkdSHF1Dfn9pBlVSa35DQwFGS1lHd18CY0YKC2tUS1lpW3xif0ZiC1tiHmwAAwc",
                "dataScale": [
                    0.00046809848531158255,
                    0.00046809848531158255,
                    0.00046809848531158255
                ],
                "fileName": "/cartoon_halloween_farm.glb",
                "layers": [
                    "pointer"
                ],
                "modelType": "glb",
                "name": "/cartoon_halloween_farm.glb",
                "rotation": [
                    0,
                    0,
                    0,
                    1
                ],
                "scale": [
                    37.26279284058949,
                    37.26279284058949,
                    37.26279284058949
                ],
                "shadow": true,
                "singleSided": true,
                "translation": [
                    48.618503957371594,
                    -1.13928128352862,
                    -6
                ],
                "type": "3d"
            }
        } */
    ]
}
