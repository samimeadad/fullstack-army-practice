const main = () => {
    const num = [ 23, 34, 123, 45, 567, 213, 4, 232, 56, 3 ];
    const len = num.length;

    const even = num.filter( n => n % 2 === 0 );
    const odd = num.filter( n => n % 2 != 0 );

    console.log( even );
    console.log( odd );

    for ( let i = 0; i < num.length; i++ ) {
        if ( num[ i ] % 2 !== 0 ) {
            console.log( num[ i ] );
        }
    }
}
main();