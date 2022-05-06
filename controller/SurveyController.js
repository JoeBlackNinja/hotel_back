const client = require('../models').survey;
const emailSend = require('../utilities/email');

const surveyCreate = async (req,res) => {
    try {   
        const {
            id_client_fk,
            date,
            satisfaction,
            cleaning,
            security,
            facilities,
            wifi,
            score,
            why,
            comments,
            email
        } = req.body;

        const resSurveyCreate = await client.create({
            id_client_fk:id_client_fk,
            date:date,
            satisfaction:satisfaction,
            cleaning:cleaning,
            security:security,
            facilities:facilities,
            wifi:wifi,
            score:score,
            why:why,
            comments:comments
        });

        const correo = await emailSend(email, resSurveyCreate.dataValues.id);

        return res.status(200).json("Thank for answer this survey."+  
                                    "You could enjoy to 10% of discount in the next visit, "+
                                    "only you need to show the number that we send you in an email.");
    } catch (error) {

        
    }
}

module.exports = {surveyCreate};