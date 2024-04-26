const connection = require('../conection.js');
const express = require("express");
const { Router } = require('express');

const routerRutes = Router();

routerRutes.get("/obtenerUsuarios", async (req, res) => {
    try {
        const [results, fields] = await connection.execute(
            'SELECT username, name FROM users');
        res.status(200).json(results);
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.status(500).json({ error: "Error al obtener usuarios" });
    }
});

routerRutes.post("/guardarUsuario", async (req, res) => {
    try {
        const { username, password, name } = req.body;
        const sql = `INSERT INTO users (username, password, name) 
        VALUES ('${username}','${password}','${name}')`;
        if (username == undefined || password == undefined || name == undefined) {
            res.status(400).json({ data: "Datos faltantes" });
        };

        const [result, fields] = await connection.execute(sql);
        res.status(201).json({ data: "Usuario guardado exitosamente" });

    } catch (error) {
        res.status(400).json({ error: "Error al guardar usuario" });
    };
});


routerRutes.delete("/borrarUsuario/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const sql = `DELETE FROM users WHERE id = ${id}`;
        if (id == undefined) {
            res.status(400).json({ Data: "Por favor proporcione el id" })
        }
        const [result, fields] = await connection.execute(sql);
        res.status(200).json({ data: "Usuario eliminado exitosamente" });

    } catch (error) {
        res.status(400).json({ error: "Error al eliminar usuario" });
    }
});

routerRutes.put("/updateUsuario/:id", async (req, res) => {
    try {
        const { id_pais_user, username, password, name } = req.body;
        const { id } = req.params
        const sql = `UPDATE users SET id_pais_user = '${id_pais_user}', username = '${username}', password = '${password}',
    name = '${name}' WHERE id = ${id}`;
        if (username == undefined || password == undefined || name == undefined || id == undefined || id_pais_user == undefined) {
            res.status(400).json({ Data: "Por favor proporcione los datos a actualizar" });
        };
        const [result, fields] = await connection.execute(sql);
        res.status(200).json({ data: "Usuario actualizado exitosamente" });
    } catch (error) {
        res.status(400).json({ error: `Error al actualizar el usuario, ${error}` });
    }
});



module.exports = routerRutes;
// export default routerRutes;
