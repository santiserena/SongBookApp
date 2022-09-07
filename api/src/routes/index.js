const { Router } = require('express');
const axios = require ('axios');  //ss
const {Users, Songs} = require ('../db'); //ss

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// USER CREATOR
router.post("/createuser", async (req, res, next) => {
  try {
    const {email, userName, personalPhoto} = req.body

    let user = await Users.create ({
        email: email,
        userName: userName,
        personalPhoto: personalPhoto
    })
    
    res.send('user created');
  } catch (error) {
    next(error);
  }

  /*
  EXAMPLE:
  {
  "email": "aaa@hootmail.com",
  "userName": "san",
  "personalPhoto": "adadada"
} */

});

// CHART CREATOR
router.post ('/createchart', async (req, res, next) => {
    try {       
        
        const {name, album, artist, chartCreator, lyrics, lyricsAndChords, share, image} = req.body;

        let us = await Users.findOne({
            where: {email: chartCreator}
        })
        
        if (us) {
            
        //crear registro de cancion y vincularla al user     
            res.send (us.email)
        }
        res.send ('user not found')
       /*  
            
            if(temperaments){
                for (let e of temperaments) {
                    let foundElement = await Temper.findOne({
                        where:{name: e}
                    });
                    
                   await dogCreate.addTemper (foundElement.id)
                }
                
                res.send ('Breed added'); 
            }
            else res.send ('Breed added without temperaments') 
        }
        else res.send ('The breed is already registered')  */
    } catch (error) {
        next(error);
    }
})

module.exports = router;
