import express from 'express';

const users = [
    'Lucas',
    'Melo',
    "caio"
];

const app = express();

app.get('/users', (req, res) => {
    const search = String(req.query.search);
    const filteredUsers = users.filter(user => user.includes(search))
    return res.json(users);
});

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    return res.json(users[id]);
});

app.post('/users', (req, res) => {
    const user = {
        name: 'Lucas',
        email: 'oliveiramelo1996@gmail.com'
    };
    return res.json(user);
});

app.listen(3333);