const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000 ;

app.use(cors());
app.use(express.json());

const users = [
    {"id" : "0", "name" : "Shakib", "email" : "shakib@gmail.com", "phone" : "1234566"},
    {"id" : "1", "name" : "Shuvo", "email" : "Shuvo@gmail.com", "phone" : "1234566"},
    {"id" : "2", "name" : "Rohsan", "email" : "Rohsan@gmail.com", "phone" : "1234566"},
    {"id" : "3", "name" : "Amit", "email" : "Amit@gmail.com", "phone" : "1234566"},
    {"id" : "4", "name" : "Avi", "email" : "Avi@gmail.com", "phone" : "1234566"},
    {"id" : "5", "name" : "Siam", "email" : "Siam@gmail.com", "phone" : "1234566"},
    {"id" : "6", "name" : "Alal", "email" : "Alal@gmail.com", "phone" : "1234566"},
    {"id" : "7", "name" : "Dulal", "email" : "Dulal@gmail.com", "phone" : "1234566"}
]

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
})



app.get('/users', (req, res) => {
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
});


// dynamic api
app.get('/users/:id', (req,res) => {
    const id = req.params.id;
    const user = users[id];
    
    res.send(user)
})

app.listen(port, () => {
    console.log('listening from port', port);
});