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
        "avatarEvents.js", "csmLights.js", 'synchronousLoad.js'
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
            card: {
                animationClipIndex: 0,
                animationStartTime: 132809,
                // dataLocation: "33Bd6InSNRh-9L8KxPSj03a_vTNCY-SPGWZtB6gKa2HgW0dHQ0AJHBxVWl9WQB1GQB1QQVxCRlZHHVpcHEYcXVp8QXh1BQYBW310Zl1gAUNdR3gFd2JhAXpCARxQXF4dRl9HWkBaXh1fWl1XUh1RVkFdUkFXHV5aUEFcRVZBQFYcW0pFRXZiVnB_X0BSQ0dDCwtYeAZwY3RfCnR-C3V9ZF98AgZ1UGtKVEN4ZhxXUkdSHF1Dfn9pBlVSa35DQwFGS1lHd18CY0YKC2tUS1lpW3xif0ZiC1tiHmwAAwc",
                dataScale: [ 0.00046809848531158255, 0.00046809848531158255, 0.00046809848531158255 ],
                // fileName: "/cartoon_halloween_farm.glb",
                dataLocation: "assets/models/new_halloween_farm.glb",
                filename: "assets/models/new_halloween_farm.glb",
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
    ]
}
