const students = [
    student1 = {
        firstName: 'Sami',
        lastName: 'Meadad',
        email: 'sami.meadad@gmail.com',
        age: 42,
        isPresent: true
    },
    student2 = {
        firstName: 'Tasnuva',
        lastName: 'Kawsar',
        email: 'tasnuva.kawsar@gmail.com',
        age: 42,
        isPresent: false
    },
    student3 = {
        firstName: 'Aarishamma',
        lastName: 'Pakhi',
        email: 'aarishamma@gmail.com',
        age: 2,
        isPresent: true
    },
    student4 = {
        firstName: 'Aarasah',
        lastName: 'Kannasha',
        email: 'aarash@gmail.com',
        age: 7,
        isPresent: true
    }
]

const sendEmail = ( email ) => {
    console.log( "Sending email to", email );
}

const main = () => {
    for ( const student of students ) {
        sendEmail( student.email );
    }
}

main();