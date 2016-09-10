// Create a vehicleConstructor that takes in the name, number of wheels, and number of passengers
// Each vehicle should have a makeNoise method
// Using the constructor, create a Bike
// redefine the Bike’s makeNoise method to print “ring ring!”
// Using the constructor, create a Sedan
// redefine the Sedan’s makeNoise method to print “Honk Honk!”
// Using the constructor, create a Bus
// Give the bus a pickUpPassengers method that takes in the number of passengers to pick up and adds them to the passenger count 
// Then make the following modifications:

// Have the Vehicle constructor also take in a “speed”
// Store the speed as an attribute
// Create a private variable called distance_travelled that starts at 0
// Create a private method called updateDistanceTravelled that increments distance travelled by speed
// Add a method to the Vehicle called “move” that calls updateDistanceTravelled and then makeNoise
// Add a method called checkMiles that console.logs the distance_travelled

function VehicleConstructor(name,num_wheels,num_passengers,speed){
	var self = this;
	this.name = name;
	this.num_wheels = num_wheels;
	this.num_passengers = num_passengers;
	this.speed = speed;
	this.makeNoise = function(){console.log("make noise " + this.name)};
	var distance_travelled  = 0;
	this.updateDistanceTravelled = function(){distance_travelled+=this.speed;};
	this.move = function(){this.updateDistanceTravelled();this.makeNoise();this.checkMiles()};
	this.checkMiles = function(){console.log("Distance Travelled:",distance_travelled)};

}
// Create Bike
var Bike = new VehicleConstructor("Bike",2,2,100);
Bike.makeNoise = function(){console.log("Ring ring!")};
Bike.move();
Bike.move();
console.log('++++++++')

// Create Sedan
var Sedan = new VehicleConstructor("Sedan",4,4,120);
Sedan.makeNoise = function(){console.log("Honk Honk!")};
Sedan.move();
Sedan.move();
console.log('++++++++')

// Create Bus
var Bus = new VehicleConstructor("Bus",6,4,80);
Bus.pass_count = function(){this.num_passengers++};
console.log("no.of passengers " + Bus.num_passengers);
Bus.pass_count();
console.log("no.of passengers " + Bus.num_passengers);
Bus.pass_count();
console.log("no.of passengers " + Bus.num_passengers);
Bus.move();
Bus.move();
console.log('++++++++')