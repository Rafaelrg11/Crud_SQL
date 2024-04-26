
const express = require('express');
const app = express();
const PORT = 1111;
const rutas = require('./routes/rutas');
const paises = require('./routes/paises')


app.get("/ping", (req, res) => {
  res.send("Tamos corriendo en Localhost");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/pong", rutas);

app.use("/ting", paises);

// app.get("/post", async (req, res) => {
//   const [rows] = await connection.query("SELECT 1 + 1 AS solution");//   res.send(rows[0]);
// });

// var usuarios = {};

// usuarios.getUsuarios = function () {
//   if (connection) {
//     connection.query('SELECT * FROM usuarios', function (error, rows) {
//       if (error) {
//         throw error;
//       }
//       else {
//         return rows;
//       }
//     });
//   }
// }

// usuarios.getUsuarioById = function (id, callback) {
//   if (connection) {
//     var sql = 'SELECT * FROM usuarios WHERE id = ' + connection.escape(id);
//     connection.query(sql, function (error, row) {
//       if (error) {
//         throw error;
//       }
//       else {
//         callback(null, row);
//       }
//     });
//   }
// }

// usuarios.insertUsuario = function (usuarioData, callback) {
//   if (connection) {
//     connection.query('INSERT INTO usuarios SET ?', usuarioData, function (error, result) {
//       if (error) {


//         throw error;
//       }
//       else {
//         callback(null, result.insertId);
//       }
//     });
//   }
// }

app.listen(PORT, () => {
  console.log(`http:localhost:${PORT}`);
});

// INSERT INTO users (username, password, name) VALUES (?, ?, ?);