import { Text, TextInput, Button, ScrollView, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "react-native-axios";




export default function MySongBook({ navigation }) {
  const [find, setFind] = useState("");
  const [songBookArray, setSongBookArray] = useState([]);

  let userMail = useSelector((state) => state.mail);

  //DEBE RECARGARSE LUEGO DE AGRAGAR UNA CAMCION. IDEM EN EL EXPLORER
  useEffect(() => {
    axios
    .get(`http://192.168.0.81:3001/songbook/${userMail}`)
    .then((result) => setSongBookArray(result.data))
    .catch((e) => console.log(e));
    //console.log('ENTRE AL USE EFFECT');
  }, []);


  const onChangeText = (ev) => {
    setFind(ev);
  };

  const search = () => {
    console.log("luego buscare en mi cancionero->", find);
  };

  return (
    <ScrollView>
      {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}> */}
      <Text>{"\n"}</Text>
      <Button
        onPress={() => navigation.navigate("CreationScreens")}
        title="+ (Add new song)"
      />

      <Text>{"\n\n\n"}</Text>

      <Text>Welcome: {userMail}</Text>

      <Text>MY SONG BOOK:</Text>
      {/* <br /> */}
      <TextInput
        onChangeText={(ev) => onChangeText(ev)}
        placeholder="write.."
      />
      <Button onPress={() => search()} title="Search by artist or song name" />

      <Text>{"\n\n"}</Text>

      {songBookArray?.map((el) => (
        <Text key={el.id}>
          Song: {el.name}
          {"\n"}
          Album: {el.album}
          {"\n"}
          <Button
            onPress={() => navigation.navigate("")}   /* ACA VA EL NVO SCREEN Q MUESTRA CANCION */
            title="Open"
          />
          {"\n"}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})