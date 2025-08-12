const Pet = require('../models/pet')

async function createPet(req, res){
    console.log('lalala')
    try{
        console.log(req.body)
        const createdPet = await Pet.create(req.body)
        res.status(201).json(createPet)
    }catch(error){
        console.log(error)
        res.status(500).json({error: error.message})
    }
}

async function petIndex(req, res){
    try{
        const allPets = await Pet.find()
        if(allPets.length){
          res.status(200).json(allPets)  
        }else{
            res.sendStatus(204)
        }
        
    }catch(error){
        console.log(error)
    }
}

async function petDetail(req, res){
    try{
        const pet = await Pet.findById(req.params.id)
        if (pet){
            res.status(200).json(pet)   
        }else{
            res.sendStatus(404)
        }
        
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

async function deletePet(req, res){
    try{
        const deletedPet = await Pet.findByIdAndDelete(req.params.id)
        if(pet){
          res.status(200).json(deletedPet)  
        }else{
            res.sendStatus(404)
        }
        
    }catch(error){
        res.status(404).json({error: error.message})
        res.status(500).json({error: error.message})
    }
}

async function updatePet(req, res){
    try{
        const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatePet)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}


module.exports = {
    createPet,
    petIndex, 
    petDetail,
    deletePet,
    updatePet
}