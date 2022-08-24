import { useEffect, useState } from "react";
import reactNativeAxios from "react-native-axios";
import { API_KEY } from "@env";
import { ScrollView, Text, StyleSheet, View, Button, TextInput } from "react-native";


export default function Creator2({ route, navigation }) {
  const [lyrics, setLyrics] = useState([]);
  const [selectionPoint, setSelectionPoint] = useState(false);
  const [inputChord, setInputChord] = useState("");
  const [backScreen, setBackScreen] = useState( null )

  useEffect(() => {

      setBackScreen (route.params.manuallyEnteredSongLyrics? 'LyricsManually': 'Creator')
      
      function chartMaker(lyricText) {
        let ly = lyricText;
        while (ly.includes("\r")) {
          ly = ly.replace("\r", "");
        }
        while (ly.includes("\n")) {
          ly = ly.replace("\n", " /n ");
        }
        let lyricsArray = ly.split(" ");
        lyricsArray = lyricsArray.slice(0, lyricsArray.length - 2);
        lyricsArray = lyricsArray.map((el) => ({ word: el, chords: "" }));

        setLyrics(lyricsArray);
      }

      if (route.params.manuallyEnteredSongLyrics) {
        chartMaker(route.params.manuallyEnteredSongLyrics);
      } else {
        reactNativeAxios
          .get(
            `https://api.happi.dev/v1/music/artists/${route.params.id_artist}/albums/${route.params.id_album}/tracks/${route.params.id_track}/lyrics?apikey=${API_KEY}`
          )
          .then((result) => {
            chartMaker(result.data.result.lyrics);
          })
          .catch((e) => console.log(e));
      }

  }, [route]);

  const selectionOfElementToChange = (index) => {
    setSelectionPoint(index);
  };

  const chordToAdd = (index) => {
    // here is the chord change
    lyrics[index].chords = inputChord;
    setSelectionPoint(false);
  };

  const next = () =>{
    console.log('paso info nomas');
    navigation.navigate("Creator3");
  }

  return (
    <ScrollView>
      <Button
        onPress={() => {
          setLyrics([]);
          navigation.goBack();
        }}
        title="Go back"
      />

      <View style={{ borderWidth: 1, width: "100%" }}>
        <Text style={{ fontSize: 40 }}>1 - (2) - 3 - 4</Text>
        <Text style={{ fontSize: 25 }}>{route.params.song}</Text>
        {/* MOSTRAR SOLO SI EL ALBUM EXISTE!!!!!!!!! */}
        <Text style={{ fontSize: 15 }}>
          {route.params.artist} / Album: {route.params.album}
        </Text>
      </View>

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
                      onPress={() => chordToAdd(index)}
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
                  onPress={() => selectionOfElementToChange(index)}
                  title={el.word}
                  style={{ fontSize: 18 }}
                />
              </View>
            )}
          </View>
        ))}
      </View>

      <Button onPress={() => next()} title="Next" />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});