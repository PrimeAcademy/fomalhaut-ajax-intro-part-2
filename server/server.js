const express = require( 'express' );
const app = express();
const port = 6541;

let cars = [ 'Chevelle', 'Datsun 500', 'Pinto', 'Tesla Model S', 'PT Cruiser', 'Waterboat car thing' ];

app.use( express.static( 'server/public' ) );

app.listen( port, function(){
    console.log( 'server up on:', port );
});

app.get( '/cars', function( req, res ){
    console.log( '/cars get hit' );
    res.send( cars );
}); //end get /cars