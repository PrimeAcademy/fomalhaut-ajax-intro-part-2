const express = require( 'express' );
const app = express();
const port = 6541;

let cars = [ 'Chevelle',
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

app.use( express.static( 'server/public' ) );

app.listen( port, function(){
    console.log( 'server up on:', port );
});

app.get( '/cars', function( req, res ){
    console.log( '/cars get hit' );
    res.send( gimmeACar() );
}); //end get /cars