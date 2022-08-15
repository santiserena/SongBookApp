import { useState } from "react";
import axios from "react-native-axios";
//import { View, Text, Button, TextInput, ActivityIndicator } from "react-native-web";
import {API_KEY} from "@env"
import { Image, ScrollView, View, Text, Button, TextInput, ActivityIndicator } from "react-native";


export default function Creator() {
  const [toSearch, setToSearch] = useState("");
  const [found, setFound] = useState([]);

  const search = async () => {
    let urlMaker = toSearch.split(" ");
    urlMaker = urlMaker.join("%20");
    urlMaker = `https://api.happi.dev/v1/music?q=${urlMaker}&limit=&apikey=${API_KEY}&type=:type&lyrics=1`;

    let res = await axios.get(urlMaker);
    if (res.data.success) setFound(res.data.result);
  };

  return (
    <ScrollView /* style={{ flex: 1, justifyContent: "center", alignItems: "center" }} */
    >
      <Button
        onPress={() => navigation.navigate("My Songbook")}
        title="Go back to my song book"
      />
      {/* <ActivityIndicator size='large'/> */}

      <Text>First, search the song. You can add the artist too</Text>
      <TextInput
        onChangeText={(ev) => setToSearch(ev)}
        placeholder="michael jackson"
      />
      <Button onPress={() => search()} title="See results" />

      <Text>LISTA:</Text>
      <br />
      {found?.map((el, index) => (
        <View key={index}>
          <Text>Artist: {el.artist}</Text>
          <Text>Song: {el.track}</Text>
          <Text>Album: {el.album}</Text>
          <Image
            source={{ uri: `${el.cover}?apikey=${API_KEY}` }}
            style={{ width: 400, height: 400 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}
