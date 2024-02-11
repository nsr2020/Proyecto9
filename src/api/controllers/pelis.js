const Peli = require("../models/pelis");
const pelis = require("../../../pelis.json")

const insertManyPelis = async (req, res, next) =>{
    try {
        await Peli.insertMany(pelis.results)
        return res.status(201).json("Todas las pelis subidas a las BBDD")
        
    } catch (error) {
        return res.status(400).json(error);
    }
}

const getAllPelis = async (req, res, next) =>{
    try {

        const allPelis = await Peli.find()
        return res.status(200).json(allPelis)
        
    } catch (error) {
        return res.status(400).json(error)
    }
}

const getPeliById = async ( req, res, next) =>{
    try {
        const {id} = req.params;
        const peliById = await Peli.findById(id)
        return res.status(200).json(peliById)
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}

const getPelisByYear = async ( req, res, next) =>{
    try {
        const {year} = req.params;
        const pelis = await Peli.find({year:{$lte:year}})
        return res.status(200).json(pelis)
        
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}

const getPelisByRate = async (req, res, next) =>{
    try {
        const {rateParsed} = req.params;
        console.log(rateParsed);
        const pelis = await Peli.find({rateParsed:{$lte:rateParsed}})
        return res.status(200).json(pelis)
        
    } catch (error) {
        return res.status(400).json("Error en la solicitud");
    }
}


module.exports = {insertManyPelis, getAllPelis, getPeliById, getPelisByYear, getPelisByRate}
