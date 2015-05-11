var test1 = {
  run() {
    {
      let x;
      {
        // okay, block scoped name
        const x = "sneaky";
        // error, const
        //x = "foo";
      }
      // error, already declared in block
      //let x = "inner";
    }
  }
};

test1.run();