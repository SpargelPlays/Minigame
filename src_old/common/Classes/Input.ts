import Game from "./Game";
import Communicator from "./Communicator";
import Entity from "./Entity";
import V from "./Vector";
/**
 * Input for user inputs.
 * Communicator for communicating to WebSocket
 */
class Input {
  game: Game
  communicator: Communicator;
  keys: any;

  constructor(game, communicator) {
    this.game = game;
    this.communicator = communicator;



    this.keys = {
      w: false,
      a: false,
      s: false,
      d: false,
      ArrowUp: false,
      ArrowLeft: false,
      ArrowDown: false,
      ArrowRigth: false,
    }
    // console.log(communicator);

    let keys = this.keys;

    window.addEventListener('keydown', (e) => {
      // console.log(this.communicator);
      if (this.keys.hasOwnProperty(e.key)) {
        this.keys[e.key] = true;
        this.communicator.player.force = this.direction();

        this.communicator.sendInput({action: "force",  params: this.direction()});
        e.preventDefault();
      }
    });

    window.addEventListener('keyup', (e) => {
      if (this.keys.hasOwnProperty(e.key)) {
        this.keys[e.key] = false;
        this.communicator.player.force = this.direction();

        this.communicator.sendInput({action: "force",  params: this.direction()});
        e.preventDefault();
      }
    });
  }

  direction() {
    let v = new V(0, 0);
    if (this.keys.w) {
      v.y-- ;
    }
    if (this.keys.a) {
      v.x--;
    }
    if (this.keys.s) {
      v.y++;
    }
    if (this.keys.d) {
      v.x++;
    }
    return v;
  }
}
export default Input;
