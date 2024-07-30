const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: './data.csv',
    header: [
        {id: 'sn', title: 'SN'},
        {id: 'contract no', title: 'Contract No.'},
        {id: 'buyer', title: 'Buyer'},
        {id: 'seller', title: 'Seller'},
        {id: 'quantity', title: 'Quantity'},
        {id: 'rate', title: 'Rate'},
        {id: 'amount', title: 'Amount'}
    ]
});

const records = [
    {sn: "1", 'contract no':'2024073004000020', buyer:'59', seller:'33', quantity:'50', rate:'690.00', amount:'34,500.00' },
  
];

csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
        console.log('CSV file written successfully');
    });
