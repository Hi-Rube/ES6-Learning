class TV {
	show(name){
		console.log(name);
	}
}

class HairTV extends TV{
	constructor(name){
		super();
		this.name = name;
	}
	show(){
		super.show(this.name);
	}
	static getMessage(){
		return 'hairTV';
	}
	static getInstance(name){
		return new HairTV(name);
	}
}

var hairTV = HairTV.getInstance('RUBE');
hairTV.show();
console.log(HairTV.getMessage());

