const axios = require('axios');
const knex = require('../databaseKnex/index')

module.exports = {
    
    /* simpleMessage (req , res ){
        res.status(200).json({ message: 'hello world !!' })
    },*/
    
    async agendar(req, res){
        var animal = req.body.animal
        var tamanho = req.body.tamanho
        var dono = req.body.dono
        var servico = req.body.servico
        var periodo = req.body.periodo
        var data = req.body.data
        try{
            await knex('petshopp').insert({animal:animal, tamanho:tamanho, dono:dono, servico:servico, periodo:periodo, data:data})
            return  res.status(200).json(response.data)
        }
        catch (err){
            return res.status(400).json({ erro: err})
        }
    },

    async verificar(req, res){
        var periodo = req.body.periodo
        var data = req.body.data
        var servico = req.body.servico

        try{
            disponibilidade = await knex('petshopp').where({servico:servico,data:data,periodo:periodo})
            //console.log(disponibilidade.length)
            if(disponibilidade.length === 0){
                return res.status(200).json({available: true})
            }
            else{
                return res.status(200).json({available: false})
            }
        }
        catch (err){
            return res.status(400).json({ erro: err })
        }
    }
    
}
/*async consultar(req,res){
    var cep = req.params.cep;
   //var cepInsert = req.body.cep
    console.log(typeof cep)
    //console.log(cepInsert)
    try{
        await knex('cep').insert({numberCep:cep})
        console.log(cep)
        var response = await axios.get("https://viacep.com.br/ws/"+cep+"/json")
        
        console.log(response)
        //
        
        return res.status(200).json(response.data)
    }
    catch (err) {
        return res.status(400).json({ erro: err })
    }

}
// Dependences
const Joi = require('joi');

// POST - create a new pet
app.post('/api/pets', (req, res) => {
    // Validating
    const schema = Joi.object({
        nome: Joi.string().min(2).required(),
        dono: Joi.string().min(3).required()
    })

    const {error} = schema.validate(req.body);
    if (error) return res.status(400).send(error.detail[0].message);

    // Creating new pet
    const pet = {
        id: pets[pets.length-1].id + 1,
        nome: req.body.nome,
        dono: req.body.dono
    }

    // Inserting and returning
    pets.push(pet);
    res.send(pet);
})*/