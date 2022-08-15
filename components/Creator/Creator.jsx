import { useState } from "react";
import axios from "react-native-axios";
import { View, Text, Button, TextInput, ActivityIndicator } from "react-native-web";
import {API_KEY} from "@env"


export default function Creator() {
  const [toSearch, setToSearch] = useState("");

  const search = async () => {
    let res = await axios.get(
      `https://api.happi.dev/v1/music?q=Get%20Lucky&limit=&apikey=${API_KEY}&type=:type&lyrics=1`
    );
    console.log("soy el buscador", res.data);
  };

  return (
    
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        onPress={() => navigation.navigate("My Songbook")}
        title="Go back to my song book"
      />
      {/* <ActivityIndicator size='large'/> */}

      <Text>First, search by name or artist, the lyrics of a song:</Text>
      <TextInput
        onChangeText={(ev) => setToSearch(ev)}
        placeholder="michael jackson"
      />
      <Button onPress={() => search()} title="See results" />
    </View>
  );
}
