import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MerchSchema = new Schema({
    url: String,
    product_name: String,
    type: String,
    price: String
})

//convertir modelo

const PokeWebBD = mongoose.model('pokewebs', MerchSchema);
export default PokeWebBD;