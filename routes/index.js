var express = require('express');
var router = express.Router();
const db = require("../db");

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const resultado = await db.find(); 
    res.render('index', { title: 'Cadastramento de usuário', resultado: resultado });
  } catch (err) {
    next(err);
  }
});

/* POST salvar dados */
router.post("/salvar", async (req, res) => {
  try {
    const customer = req.body;
    const result = await db.inserir(customer);
    console.log(result);
    res.redirect('/'); 
  } catch (err) {
    res.status(500).send("Erro ao salvar os dados");
  }
});

/* POST deletar dados */
router.post("/delete", async (req, res) => {
  try {
    const id = req.body.id; 
    const result = await db.remover(id); 
    console.log(result);
    res.redirect('/'); 
  } catch (err) {
    res.status(500).send("Erro ao remover os dados");
  }
});

router.post("/edit", async (req, res) => {
  try {
    const id = req.body.id;
    const usuario = req.body.usuario;
    const idade = req.body.idade;
    const email = req.body.email;
    const result = await db.atualizar(id, usuario, idade, email);
    console.log(result);
    res.redirect('/'); 
  } catch (err) {
    res.status(500).send("Erro ao atualizar os dados");
  }
});

module.exports = router;
