class SynchronousCardLoaderPawn {
    setup() {
        this.subscribe(this.sessionId, "synchronousLoadCardsStarted", "synchronousLoadCardsStarted");
        this.subscribe(this.sessionId, "allSynchronousCardsLoaded", "allSynchronousCardsLoaded");

        let viewRoot = Microverse.getViewRoot();
        if (viewRoot.notLoadedSynchronousCards) {
            this.publish(this.sessionId, "synchronousLoadCardsStarted");
        }

        this.coverInPlace = true;
        this.future(5000).allSynchronousCardsLoaded();
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
        this.canvas = document.createElement('canvas');
        this.canvas.style.width="100%"
        this.canvas.style.height="100%";
        this.canvas.style.backgroundColor = "#000000";
        initialCoverDiv.appendChild(this.canvas)
        this.angle = 0;
        this.future(20).canvasStep()

       /*  this.spinner = document.createElement("video");
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
        this.spinner.play().then(_ => 'video play started').catch(_ => 'Error playing video') */
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
    _drawSpiral(angle) {
        const colors = ['red', 'green', 'blue'];
        let ctx = this.canvas.getContext("2d");
        ctx.fillStyle = 'black';
        ctx.fillRect( 0, 0, this.canvas.width, this.canvas.height );
        for (let i = 0; i < 5* this.canvas.height; i++) {
            const color = colors[i % colors.length];
            const theta = 0.1 * i + angle;
            const r = 0.1 * i;
            let x = r * Math.cos(theta) + this.canvas.width/2;
            let y = r  * Math.sin(theta) + this.canvas.height/2;
            ctx.beginPath();
            ctx.moveTo(x + 1, y);
            ctx.arc(x, y, 1, 0, 2 * Math.PI);
            ctx.fillStyle = ctx.strokeStyle = color;
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
            
        }

    }

    canvasStep() {
        if (this.canvas) {
            this._drawSpiral(this.angle)
            this.angle += 0.1; // rad, about 5 degrees
            this.future(20).canvasStep();
        }
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
