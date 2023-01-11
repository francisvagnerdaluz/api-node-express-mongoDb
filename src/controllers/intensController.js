import itens from "../models/Item.js";

class ItensController {

  static listarItens = (req, res) => {
    itens.find()
      .populate('autor')
      .exec((err, livros) => {
        res.status(200).json(livros)
  })
  }

  static listarItemPorId = (req, res) => {
    const id = req.params.id;

    livros.findById(id)
      .populate('autor', 'nome')
      .exec((err, livros) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id do livro não localizado.`})
      } else {
        res.status(200).send(livros);
      }
    })
  }

  static cadastrarItem = (req, res) => {
    let livro = new livros(req.body);

    livro.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
      } else {
        res.status(201).send(livro.toJSON())
      }
    })
  }

  static atualizarItem = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Livro atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirItem = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Livro removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }
}

export default ItensController