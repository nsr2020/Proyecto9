const mongoose = require("mongoose")


const peliSchema = mongoose.Schema(
    {
        img:{type:String, required:true},
        title:{type:String, required: true},
        year:{type:Number, required: true},
        rateParsed: {type:Number, required:false}
    },
    {
        timestamps: true,
        collection:"pelis"
    }
)

const Peli = mongoose.model("pelis", peliSchema, "pelis")

module.exports = Peli;
