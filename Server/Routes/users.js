const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const model = require("../models/User.js")

process.env.SECRET_KEY = 'secret';

//REGISTERS
users.post('/register', (req, res)=>{
    const today = new Date();
    //khoi tao du lieu
    const data = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        password : req.body.password,
        created: today
    }
    model.findOne({
        //kiem tra xem trong csdl da ton tai user chua
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        //neu chua ton tai thi tao moi
        if(!user){
            const hash = bcrypt.hashSync(data.password, 10);
            data.password = hash;
            //thuc hien tao user tu du lieu nhan duoc vaf insert vao db
            model.create(data)
                .then(result => {
                    //tra ve token sau dang ky
                    let token = jwt.sign(result.dataValues, process.env.SECRET_KEY, {
                        expiresIn : 1440
                    })
                    res.json({token : token})
                })
                .catch(err => {
                    res.send('error: ' + err)
                })

        }
        else{
            res.json({error: 'User already exist'})
        }
    })
    .catch(err => {
        res.send("err: " + err)
    })
})

//LOGIN
users.post('/login', (req, res) => {
    model.findOne({
        //kiem tra xem da ton tai user chua
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        //kiem tra password
        if(bcrypt.compareSync(req.body.password, user.password)){
            //tao token
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                expiresIn: 1440
            })
            res.json({token: token})
        }
        else{
            res.send("user do not exist")
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
    
})

module.exports = users