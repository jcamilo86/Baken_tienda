const express = require('express')
const router = express.Router()
const {getUsuario,createUse,createUser,updateUser}=require ("../controllers/user.controller")

//READ
app.get("/traer",getUsuario)
 
  //CREATE
app.post("/",) 

// (req, res) => {
//     const { name, curso } = req.body;
//     const user = {
//       id: uuid(),
//       name,
//       curso,
//     };
//     users.push(user);
//     return res.json({
//       ok: true,
//       msg: "usuarios agregado",
//       data: users,
//     });
//   });

  //UPDATE
app.put("/:id",)
// (req, res) => {
//     const { id } = req.params;
//     const { name, curso } = req.body;
  
//     const user = users.find((user) => user.id === id);
  
//     user.name = name;
//     user.curso = curso;
  
//     return res.json({
//       ok: true,
//       msg: "usuario Actualizado",
//       data: user,
//     });
//   });

  //DELETE
app.post("/",) 
// (req, res) => {
//     const { id } = req.params;
  
//     const user = users.find((user) => user.id === id);
  
//     users.splice(user.indexOf(user), 1);
//     return res.json({
//       ok: true,
//       msg: "usuarios eliminado",
//       data: users,
//     });
//   });
  module.exports = router



