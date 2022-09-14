const express = require('express');
const { to, ReE, ReS, ReSCache } = require('../services/util.service')

//const { Output } = require('../db'); //obtengo modelo output
//const { Etiqueta } = require('../db');
const { User } = require('../db');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const { use } = require('../routes/api');
const moment = require('moment');
const jwt = require('jsonwebtoken');




module.exports = {

    async register(req,res) {
        try{
            req.body.pass = bcrypt.hashSync(req.body.pass, 10);
            const user = await User.create(req.body);
            res.json(user);
        }
        catch (error) {
            return ReE(res, error, 400, "400", "Register")
        }

    },

    async login(req, res){
        try{
            //req.body.pass = bcrypt.hashSync(req.body.pass, 10);
            const user = await User.findOne({ where: {email: req.body.email}});
            
            if(user){

                const equal = bcrypt.compareSync(req.body.pass, user.pass);
                if(equal){

                    const token = jwt.sign(JSON.stringify(user), "ETIQUETADOR");
                    res.json({token});
                }
                else{
                    return res.json('Usuario y/o clave incorrectos');
                }

            }
            else{
                return res.json('Usuario y/o clave incorrectos');
            }
        }
        catch (error) {
            return ReE(res, error, 400, "400", "Login")
        }

    },






}