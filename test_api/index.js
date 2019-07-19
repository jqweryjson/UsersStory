var express = require('express');
var session = require('express-session');
var cors = require('cors');
var fs = require('fs');
var bodyParser = require('body-parser');
var _ = require('lodash');

var data = JSON.parse(fs.readFileSync('./test.json'));

var users = JSON.parse(fs.readFileSync('./users.json')).users;

var app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
// app.options('http://localhost:3000/', cors());
app.use(bodyParser.json());

app.use(session({
    secret: 'digitalwand',
    resave: true,
    saveUninitialized: true,
}));

var checkUser = function(login, password) {
    return _.find(users, function (o) {
        return o.password == password && o.login == login;
    });;
}

var getUserById = function(id) {
    return _.find(users, function(o) {
        return o.id == id;
    });
}

var getUserByLogin = function(login) {
    return _.find(users, function(o) {
        return o.login == login;
    });
}

var editUser = function(id, data) {
    users.colorsArray = _.forEach(users.colorsArray, function(value) {
        if (value.id == id ){
            value = data;
        }
    })
} 

app.get('/users', function(req, res) {
    res.send(data);
});

app.post('/login', function(req, res) {
    if (!req.body.login || !req.body.password) {
        res.sendStatus(401);
    } else {
        var user = checkUser(req.body.login, req.body.password);
        if (user) {
            req.session.login = user.login;
            req.session.role = user.role;
            req.session.userId = user.id;
            res.sendStatus(200);
        } else {
            res.sendStatus(404)
        }
    }
});

app.post('/logout', function(req, res) {
    req.session.destroy();
    res.sendStatus(200);
});

app.get('/currentUser', function(req, res) {
    res.send(getUserByLogin(req.query.login));
    // console.log(req.session);
    // if (req.session.id && req.session.userId) {
    //     res.send(getUserById(req.session.userId))
    // } else {
    //     res.sendStatus(401);
    // }
});

app.put('/editUser', function(req,res) {
    if (req.query.id) {
        editUser(id, req.body);
        console.log(users);
        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }
});

app.listen(8888, function() {
    console.log('server runned on 8888 port');
});
