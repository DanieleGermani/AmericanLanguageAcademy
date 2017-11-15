const express = require('express');
const router = express.Router();

const Camara = require('../models/cameras');

router.get('/camaras', (req, res) => {
    Camara.find({}, (err, camaras) => {
        return res.json(camaras);
    });
});

router.post('/camaras', (req, res) => {
    delete req.body._id;
    Camara.create(req.body, (err, camara) => {
        if (err)  {
            res.json(err);
        }
        else return res.json(camara);
    });
});

router.delete('/camaras/:id', (req, res) => {
    Camara.deleteOne({_id: req.params.id}, (err, data) => {
        if (err) {
            res.json(err);
        } else {
            res.json(true);
        }
    });
});

router.put('/camaras/:id', (req, res) => {
    Camara.update({_id:req.params.id}, req.body, (err, camara) => {
        if (err) {
            res.json(err);
        } else {
            res.json(true);
        }
    });
});

module.exports = router;
