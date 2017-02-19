export class Dynamo {
  constructor(init = {}) {
    this.state = init;
    this.listeners = [];
    this.debug = false;
    this.connected = null;
  }
  debugMode() {
    this.debug = true;
  }
  get() {
    return this.state;
  }
  set(change) {
  	Object.assign(this.state, change)
    this.connected.setState(this.state)
    if (this.debug) console.log(this.state);
  }
  connect(ref) {
    this.connected = ref;
    ref.state = this.get()
  }
}
export default function (obj) {
  return new Dynamo(obj);
}
