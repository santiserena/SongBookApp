import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";

export default function MySongBook({ navigation }) {
  const [find, setFind] = useState("");

  const onChangeText = (ev) => {
    setFind(ev);
  };

  const search = () => {
    console.log("soy el estado", find);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button onPress={() => navigation.navigate("Creator")} title="+" />
      <br />
      <br />

      <TextInput
        onChangeText={(ev) => onChangeText(ev)}
        placeholder="write.."
      />
      <Button onPress={() => search()} title="Search by artist or song name" />

      <Text>
        <h1>List:</h1>
        -aaaaaa <br />
        -bbbbbb <br />
        -cccccc
      </Text>
    </View>
  );
}
