let V = require('./Vector.js')
  , Rectangle = require('./Rectangle.js');

class Hitbox {
  constructor(hitboxconf) {
    this.hitboxes = [];
    for (let i = 0; i < hitboxconf.length; i++) {
      this.hitboxes.push(new Rectangle(hitboxconf[i]));
    }

    this.collisionBox = this.getCollisionBox();
  }

  checkCollision(origin, eOrigin, eHitbox) {
    if (this.collisionBox.checkCollision(origin, eOrigin, eHitbox.collisionBox)) {
      for (let i = 0; i < this.hitboxes.length; i++) {
        let hitboxes = this.hitboxes[i];

        for (let o = 0; o < eHitbox.hitboxes.length; o++) {

          if (hitboxes.checkCollision(origin, eOrigin, eHitbox.hitboxes[o])) {
            return true;
            console.log(entity.velocity);
          }
        }
      }
    }
    return false;
  }

  getCollisionBox() {
    let max = new V(0, 0);

    for (let i = 0; i < this.hitboxes.length; i++) {
      let hitbox = this.hitboxes[i];

      max = max.biggest(hitbox.min.add(hitbox.max));
    }

    let min = new V(max.x, max.y);

    for (let i = 0; i < this.hitboxes.length; i++) {
      min = min.smalest(this.hitboxes[i].min);
    }

    return new Rectangle({min, max});
  }
}

module.exports = Hitbox;
