const connection = require('../conection.js');
const express = require("express");
const { Router } = require('express'); 

const routerRutes = Router();

routerRutes.post("/guardarPais", async (req, res) => {
    try {
        const { country } = req.body;
        const sql = `INSERT INTO pais_de_origen (País) 
        VALUES ('${country}')`;
        if (country == undefined) {
            res.status(400).json({ data: "País faltantes" });
        };

        const [result, fields] = await connection.execute(sql);
        res.status(201).json({ data: "País guardado exitosamente" });

    } catch (error) {
        res.status(400).json({ error: "Error al guardar País" });
    };
});




module.exports = routerRutes;