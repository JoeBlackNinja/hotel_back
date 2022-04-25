const usuario = require('../models').client;
const emailSending = require('../utilities/email');

const token_jwt = require('../utilities/webtoken');

module.exports = {
    createUsuario(req,res){
        const {email, pass} = req.body;
        return usuario.create({
            email : email, 
            pass : pass
        })
        .then(usuario => res.status(200), emailSending(email, pass, res))
        .catch(error => res.status(400));
    },


    list(_, res)
    {
        return usuario.findAll({}).then(usuario => res.status(200).send(usuario))
                                .catch(error => res.status(400).send(error));
    },

    findUser(req,res)
    {
        return usuario.findOne({
            where: {
                email: req.params.email,
                pass: req.params.pass
            }
        }).then(usuario => res.status(200).send())
            .catch(error => res.status(400).send(error));
    }
}