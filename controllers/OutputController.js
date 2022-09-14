const express = require('express');
const { to, ReE, ReS, ReSCache } = require('../services/util.service')

const { Output } = require('../db'); //obtengo modelo output
const { Etiqueta } = require('../db');



module.exports = {
    async getOutputs(req, res) {

        try{
        const outputs = await Output.findAll();
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

}