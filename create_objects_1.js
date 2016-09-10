// Each vehicle should have a makeNoise method
// Using the constructor, create a Bike
// Redefine the Bike’s makeNoise method to print “ring ring!”
// Create a Sedan
// Redefine the Sedan’s makeNoise method to print “Honk Honk!”
// Using the constructor, create a Bus
// Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count​

function VehicleConstructor(name,num_wheels,num_passengers){
	var vehicle = {};
	vehicle.name = name;
	vehicle.num_wheels = num_wheels;
	vehicle.num_passengers = num_passengers;
	vehicle.makeNoise = function(){
		console.log("Make Noise " + vehicle.name);
	}
	return vehicle;
}
// Create Bike
var Bike = VehicleConstructor("Bike",2,2);
console.log(Bike)
Bike.makeNoise = function(){
	console.log("Ring ring!");
}
Bike.makeNoise();

// Create Sedan
var Sedan = VehicleConstructor("Sedan",4,4);
console.log(Sedan)
Sedan.makeNoise = function(){
	console.log("Honk Honk!");
}
Sedan.makeNoise();

// Create Bus
var Bus = VehicleConstructor("Bus",6,4);
console.log(Bus)
Bus.pass_count = function(){this.num_passengers++};
Bus.pass_count();
console.log(Bus.num_passengers);
Bus.pass_count();
console.log(Bus.num_passengers);