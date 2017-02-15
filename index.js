export class Dynamo {

  constructor() {
    this.state = {};
    this.listeners = [];
    this.debug = false;
  }

  debugMode() {
    this.debug = true;
  }

  getState() {
    return this.state;
  }

  dispatch(change) {
  	Object.assign(this.state, change)
  	for (let i = 0; i < this.listeners.length; i++) {
  		this.listeners[i]();
  	}
    if (this.debug) console.log(this.state);
  }

  subscribe(listener) {
  	this.listeners.push(listener)
  }

  unsubscribe() {
  	this.listeners.splice(1, this.listeners.length);
  }
}

var Instance = new Dynamo()

export default Instance;
