import { useEffect, useState } from "react";
import reactNativeAxios from "react-native-axios";
import { API_KEY } from "@env";
import { ScrollView, Text, StyleSheet, View, FlatList, Button, TextInput } from "react-native";
import data from "../../demoApi";

export default function Creator2({ route }) {
  const [lyrics, setLyrics] = useState([]); 
  const [selectionPoint, setSelectionPoint] = useState (false)
  const [inputChord,setInputChord] = useState ('')

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
    while (ly.includes("\n")) {
      ly = ly.replace("\n", " /n ");
    } 
    
    let lyricsArray = ly.split(' ')
    lyricsArray=lyricsArray.slice(0,lyricsArray.length-2);
    
    lyricsArray = lyricsArray.map((el) => ({ word: el, chords: "D-" }));
    
    setLyrics(lyricsArray)
    //setLyrics(data.result.lyrics)
  },[]);

  const selectionOfElementToChange = (el, index) => {
    console.log('cambiar', el, 'index->', index);
    setSelectionPoint(index)
  }

  const chordToAdd = (el, index) => {
    console.log("elemento-> ", el, "ubicacion->", index, "acorde->", inputChord);

   
    // HACER AQUI EL CAMBIO EN LYRICS







    setSelectionPoint(false);
  };

  return (
    <ScrollView>
      <View style={{ borderWidth: 1, width: "100%" }}>
        <Text style={{ fontSize: 40 }}>1 - 2 - 3 - 4</Text>
      </View>

      <br />
      <View style={styles.container}>
        {lyrics?.map((el, index) => (
          <View key={index}>
            {el.word === "/n" ? (
              /* page breaks and line spacing */
              <View style={{ /* borderWidth: 1, */ width: 10000 }}></View>
            ) : (
              <View
                style={{
                  borderWidth: 1,
                  height: 60,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {selectionPoint === index ? (
                  <View>
                    <TextInput
                      onChangeText={(ev) => setInputChord(ev)}
                      style={{ borderWidth: 1, backgroundColor: "white" }}
                      placeholder="Write here.."
                    />
                    
                      <Button
                        onPress={() => chordToAdd(el, index)}
                        title="Add"
                        color="orange"
                      />
                      <Button
                        onPress={() => setSelectionPoint(false)}
                        title="Cancel"
                        color="orange"
                      />
                    
                  </View>
                ) : (
                  <Text>{el.chords}</Text>
                )}
                <Button
                  onPress={() => selectionOfElementToChange(el, index)}
                  title={el.word}
                  style={{ fontSize: 18 }}
                />
              </View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})