const EventEmitter = require("events");

const customEvent = new EventEmitter();

// on("eventName", listenerFun) => create an event
// emit("eventName", argument) => execute the created event

customEvent.on("message", (message) => {
  console.log("Hello " + message);
});

customEvent.emit("message", "John");
