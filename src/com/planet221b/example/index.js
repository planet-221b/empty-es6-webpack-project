import Position from "./Position";

class App {
  position = new Position();

  consolePosition() {
    console.warn(this.position);
  }
}

window.app = new App();
window.app.consolePosition();
