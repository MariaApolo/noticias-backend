const express = require('express');
const { to, ReE, ReS, ReSCache } = require('../services/util.service')

const { Output } = require('../db'); //obtengo modelo output
const { Etiqueta } = require('../db');
const { Comment } = require('../db');



module.exports = {
    async getOutputs(req, res) {

        try{
        const outputs = await Output.findAll({ where: {status: 1}});
        res.json(outputs);
        }
        catch (error) {
            return ReE(res, error, 400, "400", "getOutputs")
        }

},

    async createOutput(req,res) {
        try{
        const output = await Output.create(req.body);
        res.json(output);
        }
        catch (error) {
            return ReE(res, error, 400, "400", "CreateOutput")
        }

    },

    async createEtiqueta(req,res) {
        try{
        const etiqueta = await Etiqueta.create(req.body);
        res.json(etiqueta);
        }
        catch (error) {
            return ReE(res, error, 400, "400", "CreateEtiqueta");
        }

    },

    async createComment(req,res) {
        try{
        const comment = await Comment.create(req.body);
        res.json(comment);
        }
        catch (error) {
            return ReE(res, error, 400, "400", "CreateComment");
        }

    },

}