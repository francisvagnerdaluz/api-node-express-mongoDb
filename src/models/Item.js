import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    id: {type: String},
    descricao: {type: String, required: true},
    preco: {type: mongoose.Schema.Types.ObjectId, ref: 'preco', required: true},
    foto: {type: String, required: true},
  }
);

const itens= mongoose.model('itens', itemSchema);

export default itens;