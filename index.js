const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

var users = [
    {id:1, name:'Demo'},
    {id:2, name:'Hello'}
]


app.get('/', (req, res) => res.render('index', {title: 'Hey', message: 'Hello Cuong!' }));
app.get('/users', (req, res) => res.render('users/index', { users } ));

app.get('/users/search', (req,res) => {
    let valueQuery = req.query.q;
    let matchedUsers = users.filter(item => item.name.indexOf(valueQuery) !== -1);
    res.render('users/index', {
        users : matchedUsers
    });
} );
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));