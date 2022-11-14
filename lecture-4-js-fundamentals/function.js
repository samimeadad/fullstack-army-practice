const randomNumberGenerator = ( range ) => {
    const randomNumber = Math.round( Math.random() * range );
    return randomNumber;
}

const main = () => {
    const myRandomNumber = randomNumberGenerator( 100 );
    console.log( myRandomNumber );
}

main();