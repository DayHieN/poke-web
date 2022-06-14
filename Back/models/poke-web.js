import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MerchSchema = new Schema({
    url: String,
    name: String,
    type: String,
    price: String
})

//convertir modelo

const PokeWebBD = mongoose.model('Poke-web', MerchSchema);
export default PokeWebBD;