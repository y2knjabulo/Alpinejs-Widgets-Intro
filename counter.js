function initCounter() {
    return {
      counter: 0,
      maxCounter: 10,
      decrement() {
        this.counter = Math.max(0, this.counter - 1);
      },
      increment() {
        this.counter = Math.min(this.maxCounter, this.counter + 1);
      },
      reset() {
        this.counter = 0;
      }
    };
  }
  
  // Activate Alpine.js
  Alpine.data('counter', Counter);
  
  // Initialize Alpine.js components
  Alpine.data.start();
  
