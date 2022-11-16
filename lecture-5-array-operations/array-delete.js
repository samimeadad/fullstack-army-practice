const arr1 = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
    { id: 4, value: 40 },
    { id: 5, value: 50 }
];

console.log( arr1 );

const index = arr1.findIndex( item => item.id === 4 );
const arr2 = arr1.splice( index, 1 );

console.log( arr2 );
console.log( arr1 );


const arr3 = [
    { id: 1, value: 60 },
    { id: 2, value: 70 },
    { id: 3, value: 80 },
    { id: 4, value: 90 },
    { id: 5, value: 100 }
];

const arr4 = arr3.filter( item => item.id !== 4 );
console.log( arr3 );
console.log( arr4 );