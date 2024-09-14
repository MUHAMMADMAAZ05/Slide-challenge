const car={
    make: "BRV Hetec",
    model: "BRV 2",
    year:  2023,
    colour: ["red","blue","White","Black"],
    hybrid: true,
    drive: function(){
        console.log("The car has been started")
    },
    stop: function(){
        console.log("The car has been stopped")
    },
};

console.log(car.make)
console.log(car.colour[0])
car.drive()
car.stop()