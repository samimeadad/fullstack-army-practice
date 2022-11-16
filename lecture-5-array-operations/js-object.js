const microphone = {
    brand: 'BoAt',
    indicator: true,
    price: 8000,
    color: 'Black',

    startRecording: () => {
        console.log( 'recording started' );
    },

    stopRecording: () => {
        console.log( 'recording stopped' );
    },

    toString: () => {
        return this.brand;
    }
}


console.log( microphone );

const myObject = new Object();
myObject.brand = 'BoAt';
myObject.indicator = true;
myObject.price = 8000;
myObject.color = 'Black';

console.log( myObject );
console.log( 'My Object = ' + microphone.toString );