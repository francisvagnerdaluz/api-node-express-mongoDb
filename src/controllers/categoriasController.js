import categorias from "../models/Categoria.js";

class CategoriaController {

  static listarCategorias = (req, res) => {
    categorias.find((err, categorias) => {
      res.status(200).json(categorias)
  })
  }

  static listarCategoriaPorId = (req, res) => {
    const id = req.params.id;

    categorias.findById(id, (err, categorias) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id da Categoria não localizado.`})
      } else {
        res.status(200).send(categorias);
      }
    })
  }

  static cadastrarCategoria = (req, res) => {
    let categoria = new categorias(req.body);

    categorias.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar Categorira.`})
      } else {
        res.status(201).send(categoria.toJSON())
      }
    })
  }

  static atualizarCategoria = (req, res) => {
    const id = req.params.id;

    categorias.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Catgoria atualizada com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirCategoria = (req, res) => {
    const id = req.params.id;

    categorias.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Categoria removida com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

}

export default CategoriaController