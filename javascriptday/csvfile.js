const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: 'data.csv',
    header: [
        {id: 'name', title: 'Name'},
        {id: 'age', title: 'Age'},
        {id: 'city', title: 'City'}
    ]
});

const records = [
    {name: 'John Doe', age: 30, city: 'New York'},
    {name: 'Jane Smith', age: 25, city: 'Los Angeles'}
];

csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
        console.log('CSV file written successfully');
    });
