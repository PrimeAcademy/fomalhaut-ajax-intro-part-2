let cars = [ 
    'Chevelle',
    'Datsun 500',
    'Pinto',
    'Tesla Model S',
    'PT Cruiser',
    'Duck boat',
    'Corvette Stingray',
    'Hotwheels',
    'Winnebago',
    'Focus',
    'Camry',
    'Corolla',
    'Lambo'
];

let gimmeACar = function(){
    let rando = Math.floor( Math.random() * cars.length );
    console.log( 'in gimmeACar:', cars[ rando ] );
    return cars[ rando ];
};

module.exports = { randomCar: gimmeACar };

