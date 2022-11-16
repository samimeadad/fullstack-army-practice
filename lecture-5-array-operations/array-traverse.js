const numbers = [ 3, 16, 23, 112, 45, 78, 89, 25, 8, 65 ];

numbers.forEach( ( _, index, arr ) => {
    //console.log( value, index, arr );
    if ( arr[ index ] % 2 === 0 ) {
        console.log( arr[ index ] );
    }
} );

let sum = 0;

// for ( let i = 0; i < numbers.length; i++ ) {
//     sum += numbers[ i ];
// }

// console.log( 'Sum = ', sum );

numbers.forEach( ( value ) => {
    sum += value;
} );

console.log( 'Sum =', sum );
console.log( 'Average =', ( sum / numbers.length ) );