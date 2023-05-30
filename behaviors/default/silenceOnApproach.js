// silenceOnApproach
// Copyright 2023 Ultisim and engageLively
// Croquet Microverse
// stop sound when an  avatar approaches


class SilenceOnApproachPawn {

    setup() {
        this.musicPlaying  = true; // start with no one around

        this.future(1000).step();
        // this.addEventListener('pointerDown', 'showDistance')
    }

    reset() {
        this.translateTo(this._cardData.translationBeforeJump)
        this.future(this.animationCheckInterval).step()

    }

   

    _distanceSquare(avatar) {
        const xDist = avatar.translation[0] - this.translation[0]
        const zDist = avatar.translation[2] - this.translation[2]
        return xDist*xDist + zDist*zDist

    }

    // used for debugging only

    _showDistance() {
        const avatars = this._avatars();
        const dist = avatars.map(av => this._distanceSquare(av));
        console.log(`Distance is ${dist}`)
        return;

    }

    // get all of the avatars

    _avatars() {

        const cards = this.actor.queryCards();
        if (cards.length == 0) {
            console.log("In AnimateOnApproach: no cards found")
            return []
        }
        const avatars = cards.filter(a => a.playerId)
        if (avatars.length == 0) {
            console.log(`In AnimateOnApproach: ${cards.length} cards found, but no avatars}`)
        }
        return avatars;

    }

    step() {
        const avatars = this._avatars();
        if (avatars.length > 0) {
            const distances = avatars.map(avatar => this._distanceSquare(avatar))
            const minDistance = distances.slice(1).reduce((prev, cur) => Math.min(prev, cur), distances[0])
            // console.log(minDistance)
            if (minDistance > 20){
                if (this.musicPlaying){
                    this.publish("global", "stopMusic");
                    this.musicPlaying = false;
                    console.log("Publishing to (global, stopMusic)")
                }
            } else {
                if (!this.musicPlaying){
                    this.publish("global", "startMusic");
                    console.log("Publishing to (global, startMusic)")
                    this.musicPlaying = true;
                }
            }

            
        } else {
            this.publish("global", "stopMusic");
            this.musicPlaying = false;
        }
        this.future(20).step()
    }

   

   
    teardown() {
        
    }
}

export default {
    modules: [
        {
            name: "SilenceOnApproach",
            pawnBehaviors: [SilenceOnApproachPawn],
        }
    ]
}
