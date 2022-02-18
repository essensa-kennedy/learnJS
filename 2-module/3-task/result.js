let calculator = {

	read: function read(a, b) {
		this.a = a, this.b = b
	  return
	},

	sum: function () { 
		return (this.a + this.b)
	},

	mul: function () { 
		return (this.a * this.b)
	},
 };


 calculator.read(3, 5);
// console.log(calculator.a)
 console.log(calculator.sum()); // 8
 console.log(calculator.mul()); // 15


