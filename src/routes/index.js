import express from "express";
import itens from "./itensRoutes.js"
import categorias from "./categoriasRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Tiuto"})
  })

  app.use(
    express.json(),
    itens,
    categorias
  )
}

export default routes