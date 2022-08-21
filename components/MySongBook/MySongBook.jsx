import { View, Text, TextInput, Button, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";






export default function MySongBook({ navigation }) {
  const [find, setFind] = useState("");

  const onChangeText = (ev) => {
    setFind(ev);
  };

  const search = () => {
    console.log("luego buscare en mi cancionero->", find);
  };

  return (
    <ScrollView>
      {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}> */}
      <Button
        onPress={() => navigation.navigate("Creator")}
        title="+ (Add new song)"
      />
      {/* <br /> */}

      <Text>{"\n\n\n"}</Text>
      

      <Text>MY SONG BOOK:</Text>
      {/* <br /> */}
      <TextInput
        onChangeText={(ev) => onChangeText(ev)}
        placeholder="write.."
      />
      <Button onPress={() => search()} title="Search by artist or song name" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})