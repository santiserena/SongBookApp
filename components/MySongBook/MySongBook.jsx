import { Text, TextInput, Button, ScrollView, StyleSheet, Alert } from "react-native";
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

  async function erase(id) {

    Alert.alert(
      "Are you sure you want to delete this song?",
      "Once done, you can't go back",
      [
        {
          text: "Yes",
          onPress: async () => {
            console.log("OK Pressed");
            let result = (await axios.delete(`http://192.168.0.81:3001/erase/${id}`)).data;
            console.log("Result-->", result);
            //IMITAR EN EXPLORE!!!!!!!!!!!!!!!!!
            setSongBookArray(songBookArray.filter ( el => el.id !== id))
            
          },
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ]
    );
  }



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
          Chart creator: {el.chartCreator}
          {"\n"}
          <Button
            onPress={() => navigation.navigate("PlaySong", {el})}   
            title="Open"
          />
          {"\n"}
          <Button
            onPress={()=>erase(el.id)}   
            title="Delete"
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