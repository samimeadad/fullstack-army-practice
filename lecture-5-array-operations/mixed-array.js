const a = [ undefined, 1, 2, 'Army', 3, true, 4, null, false, true, 5, 'sami', 6, 7, 'farmee', 8, null ];

console.log( "Original Array: \n", a );

for ( let i = a.length - 1; i >= 0; i-- ) {
    if ( !a[ i ] || typeof ( a[ i ] ) !== "number" ) {
        count = 0;
        for ( let j = i; j < a.length; j++ ) {
            a[ j ] = a[ j + 1 ];
            if ( a[ j ] === undefined ) {
                a.length--;
            }
        }
    }
}
// a.length -= count;
console.log( "Array with all numbers: \n", a );