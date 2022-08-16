import { useEffect, useState } from "react";
import reactNativeAxios from "react-native-axios";
import { API_KEY } from "@env";
import { ScrollView } from "react-native";

export default function Creator2({ route }) {
  const [lyrics, setLyrics] = useState([]);

  useEffect(() => {
    reactNativeAxios
      .get(
        `https://api.happi.dev/v1/music/artists/${route.params.id_artist}/albums/${route.params.id_album}/tracks/${route.params.id_track}/lyrics?apikey=${API_KEY}`
      )
      //In each array element I will have a row
      .then((result) => setLyrics((result.data.result.lyrics).split("\n")))
      .catch((e) => console.log(e));
  }, []);

  console.log( `https://api.happi.dev/v1/music/artists/${route.params.id_artist}/albums/${route.params.id_album}/tracks/${route.params.id_track}/lyrics?apikey=${API_KEY}`);
  console.log('ssss\nss');
  console.log(lyrics);

  return (
    <ScrollView>

   {/*    <Text style={{ fontSize: 42 }}>1 - (2) - 3 - 4</Text>
      <br />
      {lyrics?.map((el, index) => (
        <ScrollView key={index}>
          {el?.length !== 0 ? (
            <TextInput
              onChangeText={(ev) => console.log("hola")}
              placeholder="write chords"
            />
          ) : null}

          <Text>{el}</Text>
        </ScrollView>
      ))} */}
    </ScrollView>
  );
}
