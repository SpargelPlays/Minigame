class V {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  add(v) {
    return new V(Math.round((v.x + this.x) * 10) / 10, Math.round((v.y + this.y) * 10) / 10);
  }

  subtract(v) {
    return new V(this.x - v.x, this.y - v.y);
  }

  scale(s) {
    return new V(Math.round((this.x * s) * 10) / 10 , Math.round((this.y * s) * 10) / 10);
  }

  dot(v) {
    return (this.x * v.x + this.y * v.y);
  }

  cross(v) {
    return (this.x * v.y - this.y * v.x);
  }

  smalest(v) {
    let x = this.x < v.x ? this.x : v.x
      , y = this.y < v.y ? this.y : v.y;
    return new V(x, y);
  }

  biggest(v) {
    let x = this.x > v.x ? this.x : v.x
      , y = this.y > v.y ? this.y : v.y;
    return new V(x, y);
  }

  rotate(angle, vector) {
    let x = this.x - vector.x;
    let y = this.y - vector.y;

    let x_prime = vector.x + ((x * Math.cos(angle)) - (y * Math.sin(angle)));
    let y_prime = vector.y + ((x * Math.sin(angle)) + (y * Math.cos(angle)));

    return new V(x_prime, y_prime);
  }
}
