const { insertManyPelis, getAllPelis, getPeliById, getPelisByYear, getPelisByRate } = require("../controllers/pelis");


const pelisRouter = require("express").Router()

pelisRouter.post("/inyectar", insertManyPelis)
pelisRouter.get("/:id", getPeliById)
pelisRouter.get("/rate/:rateParsed",getPelisByRate)
pelisRouter.get("/year/:year", getPelisByYear)
pelisRouter.get("", getAllPelis)

module.exports = pelisRouter;