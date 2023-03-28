// const { users } = require("./src/database/db");
// const { v4: uuid } = require("uuid");

const getUsuario = async (req, res) => {
    try{const usuarios = await Usuario.find({})
    res.json({ usuarios })}
    catch
    (error){res.staus(500).json({msg:"un erros obtendien usuario"})}}
    

   const createUse = (req, res) => {
        const { name, curso } = req.body;
        const user = {
          id: uuid(),
          name,
          curso,
        };
        users.push(user);
        return res.json({
          ok: true,
          msg: "usuarios agregado",
          data: users,
        });
      };


  const createUser = (req, res) => {
        const { id } = req.params;
        const { name, curso } = req.body;
      
        const user = users.find((user) => user.id === id);
      
        user.name = name;
        user.curso = curso;
      
        return res.json({
          ok: true,
          msg: "usuario Actualizado",
          data: user,
        });
      };

      const updateUser = (req, res) => {
        const { id } = req.params;
      
        const user = users.find((user) => user.id === id);
      
        users.splice(user.indexOf(user), 1);
        return res.json({
          ok: true,
          msg: "usuarios eliminado",
          data: users,
        });
      };
    

    module.exports = { getUsuario,createUse,createUser,updateUser}