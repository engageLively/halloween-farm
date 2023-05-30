class SynchronousCardLoaderPawn {
    setup() {
        this.subscribe(this.sessionId, "synchronousLoadCardsStarted", "synchronousLoadCardsStarted");
        this.subscribe(this.sessionId, "allSynchronousCardsLoaded", "allSynchronousCardsLoaded");

        let viewRoot = Microverse.getViewRoot();
        if (viewRoot.notLoadedSynchronousCards) {
            this.publish(this.sessionId, "synchronousLoadCardsStarted");
        }

        this.coverInPlace = true;
        this.future(10000).allSynchronousCardsLoaded();
    }

    synchronousLoadCardsStarted() {
        console.log("synchronousLoadCardsStarted");
        let initialCoverDiv = document.createElement("div");
        initialCoverDiv.id = "croquet_spinnerOverlay";
        initialCoverDiv.style.position = "fixed";
        initialCoverDiv.style.width = "100%";
        initialCoverDiv.style.height = "100%";
        initialCoverDiv.style.zIndex = 2000;
        initialCoverDiv.style.backgroundColor = "#000000";
        initialCoverDiv.style.opacity = "0.95";
        window.initialCoverDiv = initialCoverDiv;
        document.body.appendChild(initialCoverDiv);

        this.spinner = document.createElement("video");
        this.spinner.id = "croquet_loader";
        // this.spinner.innerText = "Catching up...";
        this.spinner.setAttribute('autoplay', 'true');
        this.spinner.style.width="100%"
        this.spinner.style.height="100%";
        this.spinner.style.backgroundColor = "#000000";
        this.video = document.createElement("source");
        this.video.setAttribute('src', 'https://matt.engagelively.com/assets/kaleidoscope-art-17141.mp4');
        this.video.setAttribute('type', 'video/mp4');
        this.video.id = "loader_video";
        this.spinner.appendChild(this.video);

        initialCoverDiv.appendChild(this.spinner);
        this.spinner.play().then(_ => 'video play started').catch(_ => 'Error playing video')
        Microverse.sendToShell("hud", {joystick: false, fullscreen: false});
    }

    allSynchronousCardsLoaded() {
        if (!this.coverInPlace) {
            return;
        }
        this.coverInPlace = false;
        console.log("allSynnchronousCardsLoaded");
        if (window.initialCoverDiv) {
            window.initialCoverDiv.style.transition = "opacity 1s";
            window.initialCoverDiv.style.opacity = 0;
            if (this.spinner) {
                this.spinner.remove();
                delete this.spinner;
            }
            window.setTimeout(() => {
                if (window.initialCoverDiv) {
                    window.initialCoverDiv.remove();
                    delete window.initialCoverDiv;
                }
            }, 1000);
        }
        Microverse.sendToShell("hud", {joystick: true, fullscreen: true});
        let setButtons = (display) => {
            ["homeBtn", "worldMenuBtn"].forEach((n) => {
                let btn = document.querySelector("#" + n);
                if (btn) {
                    btn.style.display = display;
                }
            });
        };
        setButtons("flex");
    }
}

export default {
    modules: [
        {
            name: "SynchronousCardLoader",
            pawnBehaviors: [SynchronousCardLoaderPawn]
        }
    ]
}
