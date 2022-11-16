const arr = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
    { id: 4, value: 40 },
    { id: 5, value: 50 }
];

console.log( arr );

const index = arr.findIndex( value => {
    return value.id === 4;
} );

arr[ index ].value = 400;

console.log( arr );