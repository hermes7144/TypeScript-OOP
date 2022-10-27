class Counter {
  counter = 0;
  increase = () => {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase();
const caller = counter.increase.bind(counter);
//const caller = counter.increase.bind(counter);
caller();

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run();
