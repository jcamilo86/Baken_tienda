const Ropa = require("../models/ropa");

const getRopaByTipo = async (req, res) => {
  try {
    const tipo = req.query.tipo;
    console.log(tipo);
    const ropas = await Ropa.find({ tipo });
    res.json({ ropas });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createRopa = async (req, res) => {
  const { nombre, talla, tipo, color, sexo, precio } = req.body;
  try {
    const nuevaRopa = await Ropa.create({
      nombre,
      talla,
      tipo,
      color,
      sexo,
      precio
    });
    res.json(nuevaRopa);
  } catch (error) {
    res.status(500).json({
      msg: "Error alguar info de ropa",
    });
  }
};

const updateRopa = async (req,res)=>{
  try{
  const id = req.params.id;
  const updatedRopa = await Ropa.findByIdAndUpdate(id,{
    nombre,
    talla,
    tipo,
    color,
    sexo,
    precio

  },{new:true})
  res.json(updatedRopa);
} catch (error) {
  res.status(500).json({
    msg: "Error al actulizar la ropa",
  });
}
  
}


module.exports = { getRopaByTipo, createRopa, updateRopa };
