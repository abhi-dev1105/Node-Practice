const eventemitter = require("events");
const emitter = new eventemitter();
emitter.on("order-pizza",(size,toppings)=>{
  console.log(`order recieved baking ${size} pizza with ${toppings}`);
});
emitter.on("order-pizza", (size)=>{
  console.log(`serving ${size} pizza with ${size} drink`);
});

emitter.emit("order-pizza","large","mushrooms");
emitter.emit("order-pizza","small","mushrooms");
