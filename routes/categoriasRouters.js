const express = require("express");
const router = express.Router();
const authMidd = require("../middleware/authMidd");
const categoriasController = require("../controllers/categoriasController");

router.get("/home", categoriasController.obtenerCategoriaHome );
router.get("/", authMidd, categoriasController.obtenerCategoria );
router.get("/:id", authMidd, categoriasController.obtenerCategoriaId );
router.post("/", authMidd, categoriasController.crearCategoria);
router.put("/:id", authMidd, categoriasController.actualizarCategoria);
router.delete("/:id", authMidd, categoriasController.borrarCategoria);

//definir rutas
module.exports = router; 