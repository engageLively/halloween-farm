// https://croquet.io
// info@croquet.io

class JumpWorldActor {

    setup() {
        console.log('Setup for JumpWorldActor called')
        this.future(1000).step();
        this.lastPosition = undefined;
    }



    _distanceSquare(avatar) {
        const xDist = avatar.translation[0] - this.translation[0]
        const zDist = avatar.translation[2] - this.translation[2]
        return xDist*xDist + zDist*zDist

    }

    _avatars() {
        const cards = this.queryCards();
        const avatars = cards.filter(a => a.playerId)
        return avatars;
    }

    _showPositions() {
        const pos = this._avatars()[0].translation;
        if (this.lastposition && pos == this.lastposition) {
            return;
        }
        this.lastPosition = pos;
        console.log(pos)
    }

    step() {
        const avatars = this._avatars();
        // this._showPositions();
        const jumpAvatars = avatars.filter(avatar => this._distanceSquare(avatar) <= this._cardData.jumpDistance);
        if (jumpAvatars.length > 0) {
            
            jumpAvatars.forEach(avatar => this.publish('global', 'jumpToTargetWorld', {viewId: avatar.playerId, targetURL: this._cardData.targetURL}));
        } else {
            this.future(this._cardData.jumpCheckInterval).step()
        }
        
    }

}

export default {
    modules: [
        {
            name: "JumpWorld",
            actorBehaviors: [JumpWorldActor]
        },
    ]
}