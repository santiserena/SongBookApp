const { Router } = require('express');
const axios = require ('axios');  //ss
const {Users, Songs} = require ('../db'); //ss

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//GIVE ARRAY WITH ALL USERS
router.get("/users", async (req, res, next) => {
  try {
    let usersArray = await Users.findAll({
        include: Songs
    });
    if (usersArray) res.send(usersArray)
    else res.send('there are no users yet') 
  } catch (error) {
    next(error);
  }
});

//GIVE ARRAY WITH ALL SONGS
router.get("/charts", async (req, res, next) => {
    try {
      let songsArray = await Songs.findAll();
      if (songsArray) res.send(songsArray)
      else res.send('there are no songs yet') 
    } catch (error) {
      next(error);
    }
  });

//GIVE ARRAY WITH SONGBOOK!!!!!!!!!!!!!!!  

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
            //CONTROLAR QUE CDO SE MANDA ALGUNOS NOMBRES VIENEN DISTINTOS!!
            let song = await Songs.create({
                name: name,
                album: album,
                artist: artist,
                chartCreator: chartCreator,
                lyrics: lyrics,
                lyricsAndChords: lyricsAndChords,
                share: share,
                image: image
            })

            //link song with creator     
            await us.addSongs (song)
            
            res.send ('chart created')
        }
        else res.send ('user not found')
     
    } catch (error) {
        next(error);
    }
})


module.exports = router;
