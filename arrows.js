var a = [1, 2, 3, 4, 5, 6, 8];

var test1 = {
	run: function () {
		console.log('test1');
		var b = a.map((v, i) => v + i);
		console.log(b);
		console.log('\n');
	}
};

var test2 = {
	run: function () {
		console.log('test2');
		var c = [];
		a.map((v, i) => {
			c[i] = v;
		});
		console.log(c);
		console.log('\n');
	}
};

var test3 = {
	d: 'rube',
	run: function () {
		console.log('test3');
		a.map(v => {
			console.log(this.d + 'v');
		});
	}
};

test1.run();
test2.run();
test3.run();