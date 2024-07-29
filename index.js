const express = require('express');
const app = express();
const port = 7000;

app.use(express.urlencoded({ extended: true }));


let employees = [
    { id: 1, name: 'John Doe', position: 'Software Developer' },
    { id: 2, name: 'Jane Smith', position: 'HR Manager' }
];
app.use(express.json());

app.get('/', (req, res) => {
    res.json(employees);
});

app.post('/api/employees', (req, res) => {
    const { name, position } = req.body;
    const id = employees.length + 1;
    const newEmployee = { id, name, position };
    employees.push(newEmployee);
    res.status(201).json(newEmployee);
});

app.put('/api/employees/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, position } = req.body;
    employees = employees.map(employee => 
        employee.id === id ? { id, name, position } : employee
    );
    res.json(employees.find(employee => employee.id === id));
});

app.delete('/api/employees/:id', (req, res) => {
    const id = parseInt(req.params.id);
    employees = employees.filter(employee => employee.id !== id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

