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

  getState() {
    return this.state;
  }

  dispatch(change) {
  	Object.assign(this.state, change)
    this.connected.setState(this.state)
    if (this.debug) console.log(this.state);
  }

  connect(ref) {
    this.connected = ref;
    ref.state = this.getState()
  }
}

export default function (obj) {
  return new Dynamo(obj);
}
