let i = 1;
for ( ; ; ) {
    if ( i % 2 !== 0 ) {
        console.log( i );
    }
    i++;
    if ( i === 101 ) {
        break;
    }
}