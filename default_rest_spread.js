var test1 = {
	run: function () {
		var f = function (x, y = 12) {
			console.log('test1:' + (x + y));
		};
		f(1);				//13
	}
};

var test2 = {
	run: function () {
		var f = function (x, ...y) {
			console.log('test2:' + (x + y[0] + y[1]));
		};
		f(1, 2, 3)			  //6
	}
};

var test3 = {
	run: function (x, y, z) {
		var f = function (x, y, z) {
			console.log('test3:' + (x + y + z));
		};
		f(...[1, 2, 4]);		//7
	}
};

test1.run();
test2.run();
test3.run();

