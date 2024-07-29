const express = require('express');
const app = express();
const port = 5000;



let employees = [
    {   id: 1, 
        name: 'John Doe',
        position: 'Software Developer'
     },

    {   id: 2,
        name: 'Jane Smith', 
        position: 'HR Manager' 
    }
];



app.get('/api/employees', (req, res) => {
    res.json(employees);
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


