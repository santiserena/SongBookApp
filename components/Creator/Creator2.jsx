import { useEffect, useState } from "react";
import reactNativeAxios from "react-native-axios";
import { API_KEY } from "@env";
import { ScrollView, Text } from "react-native";

export default function Creator2({ route }) {
  const [lyrics, setLyrics] = useState();

  useEffect(() => {
    reactNativeAxios
      .get(
        `https://api.happi.dev/v1/music/artists/${route.params.id_artist}/albums/${route.params.id_album}/tracks/${route.params.id_track}/lyrics?apikey=${API_KEY}`
      )
      .then((result) => setLyrics(result.data.result.lyrics))
      .catch((e) => console.log(e));
  }, []);

  return (
    <ScrollView>
      <Text style={{ fontSize: 42 }}>1 - (2) - 3 - 4</Text>
      <br />
      <Text>{lyrics}</Text>
    </ScrollView>
  );
}
