const express = require("express");
const User = require("./User")
const Company = require("./Company")
const app = express();
const port = 8000;

// get new user
app.get("/api/users/new", (req, res) => {
    res.json({ user: new User });
});
//  get new company
app.get("/api/companies/new", (req, res) => {
    res.json({ company: new Company });
});
// get company and user
app.get("/api/user/company", (req, res) => {
    res.json({ 
        user: new User,
        company: new Company 
    });
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );