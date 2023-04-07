const Orden = require("../models/orden");
const Ropa = require("../models/ropa");

const createOrden = async (req, res) => {
  const userId = req.user.id;
  const producto = req.body;
  if (!producto.productoId) {
    return res
      .status(400)
      .json({ msg: "El producto debe tener un productoId." });
  }

  try {
    const orden = await Orden.findOne({ user: userId, estado: "nuevo" });
    if (orden) {
      const payload = { $set: {} };
      const productoIndex = orden.productos.findIndex(
        (prod) => prod?.productoId === producto.productoId
      );
      if (productoIndex > -1) {
        if (producto.cantidad > 0) {
          payload.$set[`productos.${productoIndex}.cantidad`] =
            producto.cantidad;
        } else {
          payload.$pull = { productos: { productoId: producto.productoId } };
        }
      } else {
        payload.$push = { productos: producto };
      }
      await Orden.updateOne({ user: userId }, payload);
    } else {
      await Orden.create({
        user: userId,
        productos: [producto],
        estado: "nuevo",
      });
    }
    res.json({ ok: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = { createOrden };
