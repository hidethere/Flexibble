import prisma from "../../prisma/prisma"
const bcrypt = require("bcrypt")


module.exports = {
    //----------------------------Register-------------------------------------------

    Register: async(req, res) => {
        const { name, email, password, description } = req.body

        try{

            const  newUser = await prisma.user.create({
                data: {
                    name,
                    email,
                    password,
                    description
                }
            })

            res
                .status(200)
                .send({ newUser, Success: true })

        } catch(err){
            res
            .status(400)
            .send({ error: err, Success: false })

        } finally{
            async() => {
                prisma.$disconnect()
            }
        }

    }


}