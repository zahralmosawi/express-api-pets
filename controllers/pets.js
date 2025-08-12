const Pet = require('../models/pet')

async function createPet(req, res){
    console.log('lalala')
    try{
        const createdPet = await Pet.create()
    }catch(error){
        console.log(error)
    }
}
module.exports = {
    createPet
}