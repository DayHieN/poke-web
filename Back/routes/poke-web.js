import express from 'express';
const router = express.Router();

//importar modelo

import PokeWebBD from '../models/poke-web';

//get
router.get('/buscar', async (req, res) => {
    try {

        const pokeWeb = await PokeWebBD.find();
        res.json(pokeWeb);

    } catch (error) {
        return res.status(400).json({
            msg: 'error',
            error
        })
    }

});

//exportar la config de express
module.exports = router;