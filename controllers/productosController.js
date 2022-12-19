const Productos = require("../models/Productos");

exports.obtenerProductosHome = async (req, res) => {
    try{
        const productos = await Productos.find();

        res.json({ categoria});

    }catch(error){
        console.log(error);
    }
};
exports.obtenerProducto = async (req, res) => {
    const { id } = req.params
    const producto = await Productos.find().where("categoriaId").equals(id);
    res.json(producto);
};
exports.crearProducto = async (req, res) => {
    try{
        const producto = new Productos(req.body);

        producto.save();
        res.json(producto);
    }catch(error){
        console.log(error);
    }
    
};
exports.actualizarProducto = async (req, res) => {
    res.status(404).json({msg:"actualizar producto"});
};

exports.borrarProducto = async (req, res) => {
    res.status(404).json({msg:"borrar producto"});
};
