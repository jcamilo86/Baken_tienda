const Ropa = require("../models/ropa");

const getRopaByTipo = async (req, res) => {
  try {
    const tipo = req.query.tipo;
    console.log(tipo)
    const ropas = await Ropa.find({ tipo });
    res.json({ ropas });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};







module.exports = { getRopaByTipo };
