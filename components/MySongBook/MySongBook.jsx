import { View, Text, TextInput, Button, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";



export default function MySongBook({ navigation }) {

  const prueba = [
    { word: "she", chord: "" },
    { word: "was", chord: "Bm7b5" },
    { word: "more", chord: "G7" },
    { word: "like", chord: "" },
    { word: "a", chord: "Cmaj7" },
    { word: "beauty", chord: "" },
    { word: "queen", chord: "Cmaj7" },
  ];

  const [find, setFind] = useState("");
  
  const onChangeText = (ev) => {
    setFind(ev);
  };
  
  const search = () => {
    console.log("luego buscare en mi cancionero->", find);
  };
  
  return (
    <ScrollView>
      <View style={styles.container}>
        {prueba.map((el, index) => (
         
            <View key = {index} style={{ borderWidth: 1, width: 150, height: 150, display:"flex", justifyContent:'flex-end' }}>
              <Text style={{ fontSize: 42}}>{el.chord}</Text>
              <Text style={{ fontSize: 42 }}>{el.word}</Text>
            </View>
          
        ))}
      </View>
      {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}> */}
      <Button onPress={() => navigation.navigate("Creator")} title="+" />
      <br />
      <br />

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