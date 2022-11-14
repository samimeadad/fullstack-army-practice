const numbers = [ 3, 5, 23, 12, 45, 1, 89, 25, 78, 65 ];

let sum = 0;

// for ( let i = 0; i < numbers.length; i++ ) {
//     sum += numbers[ i ];
// }

// console.log( 'Sum = ', sum );

numbers.forEach( number => {
    sum += number;
} );

console.log( 'Sum =', sum );
console.log( 'Average =', ( sum / numbers.length ) );