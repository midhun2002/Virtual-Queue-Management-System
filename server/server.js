const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Task = require('./Tasks')
const app = express()
const { auth } = require("express-openid-connect");
app.use(express.json())
app.use(cors())
require("dotenv").config()
const url = 'mongodb+srv://rogon_96:Midhunreddy134%40@cluster0.5mckx.mongodb.net/test';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => app.listen(process.env.PORT || 8001, () => console.log("Listening")))
    .catch(err => console.log(err))


app.use(
    auth({
        issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
        baseURL: process.env.BASE_URL,
        clientID: process.env.AUTH0_CLIENT_ID,
        secret: process.env.SESSION_SECRET,
        authRequired: false,
        auth0Logout: true,
    })
);

app.use((req, res, next) => {
    res.locals.isAuthenticated = req.oidc.isAuthenticated();
    next();
});
app.get('/posts', (req, res) => {
    Task.find()
        .then(result => res.send(result))
        .catch(err => console.log(err))
})
app.post('/posts', (req, res) => {
    console.log(req.body)
    const task = new Task({
        Title: req.body.Title,
        Tag: req.body.Tag,
        Description: req.body.Content
    })
    blog.save()
        .then(result => res.send(result))
        .catch(err => console.log(err))
})
app.get('/posts/:id', (req, res) => {
    Blog.findById({ _id: req.params.id })
        .then(result => res.send(result))
        .catch(err => console.log(err))
})

