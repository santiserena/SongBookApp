import { useState } from "react";
import axios from "react-native-axios";
import {API_KEY} from "@env"
import { Image, ScrollView, View, Text, Button, TextInput, ActivityIndicator, TouchableOpacity, Alert } from "react-native";

export default function LyricsSelect({ navigation }) {
  const [toSearch, setToSearch] = useState("");
  const [found, setFound] = useState([]);

  const search = async () => {
    if (!toSearch) {
      
      Alert.alert("Please,", "Write the name of a song. You can add the artist too", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      
      ]);
      console.log(
        "ALERTA! write the name of a song. You can add the artist too"
      );
    } else {
      try {
        let urlMaker = toSearch.split(" ");
        urlMaker = urlMaker.join("%20");
        urlMaker = `https://api.happi.dev/v1/music?q=${urlMaker}&limit=&apikey=${API_KEY}&type=:type&lyrics=1`;

        let res = await axios.get(urlMaker);
        if (res.data.success && res.data.length) setFound(res.data.result);
        else {
          
          Alert.alert("No matches found", "Try some different way", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);

          console.log("ALERTA! No matches found")
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ScrollView /* style={{ flex: 1, justifyContent: "center", alignItems: "center" }} */
    >
      <Button
        onPress={() => navigation.navigate("My Songbook")}
        title="Go back to my song book"
      />
      {/* <ActivityIndicator size='large'/> */}

      <Text style={{ fontSize: 42 }}>(1) - 2 - 3</Text>

      <Text>First, look up the lyrics of a song by its name. You can also add the name of the artist:</Text>
      <TextInput
        onChangeText={(ev) => setToSearch(ev)}
        placeholder="Billie Jean Michael Jackson"
        style={{borderWidth:1}}
      />
      <Button onPress={() => search()} title="See results" />
      {/* <br /> */}
      <Button onPress={() => navigation.navigate("LyricsManually")} title="Click here if you prefer to write it manually" />

      {/* <br /> */}
      {found?.map((el, index) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Creator2", {
              id_artist: el.id_artist,
              id_album: el.id_album,
              id_track: el.id_track,
              song: el.track,
              artist: el.artist,
              album: el.album,
              image: el.cover
         //     justLyrics:
            })
          }
          key={index}
        >
          <View>
            <Text style={{ fontSize: 25 }}>{el.track}</Text>
            <Text style={{ fontSize: 15 }}>{el.artist} / Album: {el.album}</Text>

            <Image
              source={{ uri: `${el.cover}?apikey=${API_KEY}` }}
              style={{ width: 400, height: 400 }}
            />

            {/* <br /> */}
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
