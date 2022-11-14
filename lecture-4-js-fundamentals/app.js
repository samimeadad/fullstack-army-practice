const names = [ "Sami", "Farmee", "Aarishamma", "Aarash" ];
let index = 0;
let singleName = names[ index ];

const printName = () => {
    singleName = names[ index++ ];
    console.log( singleName, singleName.length );

    if ( index === names.length ) {
        index = 0;
    }
}

setInterval( printName, 1000 );