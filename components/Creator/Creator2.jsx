import { useEffect, useState } from "react";
import reactNativeAxios from "react-native-axios";
import { API_KEY } from "@env";
import { ScrollView, Text } from "react-native";
import data from "../../demoApi";

export default function Creator2({ route }) {
  const [lyrics, setLyrics] = useState([]); 

/* ESTO PONE EN Lyrics la letra de la cancion */
/*   useEffect(() => {
    reactNativeAxios
      .get(
        `https://api.happi.dev/v1/music/artists/${route.params.id_artist}/albums/${route.params.id_album}/tracks/${route.params.id_track}/lyrics?apikey=${API_KEY}`
      )
      //In each array element I will have a row
      .then((result) => setLyrics(result.data.result.lyrics))
      .catch((e) => console.log(e));
  }, []); */

  //console.log( `https://api.happi.dev/v1/music/artists/${route.params.id_artist}/albums/${route.params.id_album}/tracks/${route.params.id_track}/lyrics?apikey=${API_KEY}`);
  
  useEffect(()=>{
    //cdo funcione posta tengo q agregar el RESULT.. quedaria (result.data.result.lyrics)

    console.log('esta es la data ficticia->\n\n ',data.result.lyrics);

    let ly = data.result.lyrics;

    while (ly.includes("\r")) {
      ly = ly.replace("\r", "");
    }
    
    let lyricsArray = ly.split(' ') 

    console.log('asi va quedando->\n', lyricsArray  );
    setLyrics(lyricsArray)
    //setLyrics(data.result.lyrics)
  },[]);

  return (
    <ScrollView>
      <Text>{lyrics}</Text>


    </ScrollView>
  );
}
