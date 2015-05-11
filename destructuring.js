var test1 = {
	run() {
		console.log('test1');
		var [a, , b] = [1, 2, 3];
		console.log(a, b);
	}
};

class Test {
	getName() {
		console.log('rube');
	}
	static getInstance() {
		return new Test();
	}
}

var test2 = {
	run() {
		console.log('test2');
		var {getName: test } = Test.getInstance();
		var {getName } = Test.getInstance();
		Test.getInstance().getName();
		test();
		getName();
	}
}

test1.run();
test2.run();