// 1st Way
// Declaring object literal
// Specific person object is created by curly braces.
// And inernal properties & methods seperated by comma
// say_name here is method
var Todd = {
	name:'Todd',
	say_name: function(){console.log('Todd')}
}
Todd.say_name();

// 2nd Way -- To create Bunch of people
// Make a function to invoke with name as parameter
// NewPerson  -- N indicates Object Constructor
// Whenever this function is invoked it returns similar kind of above one called object
function Newperson(name){
	return {
		name: name,
		say_name: function(){console.log(name);}
	}
}
// create couple of people with the above function invoking
var Jay = Newperson('jay')
var teju = Newperson('teju')
Jay.say_name()
teju.say_name()

// 3rd Way --- using newkeywords 'new' & 'this'
function Person(name){
	// console.log(this)
	this.name = name;
	this.say_name = function(){console.log(name);};
}
var Karthik = new Person("karthik");
Karthik.say_name()