import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    res.json([
        'Lucas',
        'Melo',
        "caio"
    ]);
});

app.post('/users', (req, res) => {
    const user = {
        name: 'Lucas',
        email: 'oliveiramelo1996@gmail.com'
    };
    res.json(user);
});

app.listen(3333);