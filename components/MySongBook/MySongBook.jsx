import { Text, TextInput, Button, ScrollView, StyleSheet, Alert } from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "react-native-axios";


export default function MySongBook({ route, navigation }) {

  const [find, setFind] = useState("");
  const [songBookArray, setSongBookArray] = useState([]);
  const [filterClear, setFilterClear] = useState(true);

  let userMail = useSelector((state) => state.mail);
  let updateNewAddedSond = useSelector ( (state) => state.updateNewSongs)
  
  useEffect(() => {
    if (filterClear === false) {
      setFilterClear(true);
      setFind("");
    }
    
    axios
      .get(`http://192.168.0.81:3001/songbook/${userMail}`)
      .then((result) => setSongBookArray(result.data))
      .catch((e) => console.log(e));
  }, [route.params]); //to reload when a song is added


  const onChangeText = (ev) => {
    setFind(ev);
  };

  const search = () => {
    console.log("luego buscare en mi cancionero->", find);
    //load all the info
    axios
      .get(`http://192.168.0.81:3001/songbook/${userMail}`)
      .then((result) =>
        setSongBookArray(
          result.data.filter(
            (el) =>
              el.name.toLowerCase().includes(find.toLowerCase()) ||
              el.artist.toLowerCase().includes(find.toLowerCase()) ||
              el.lyrics.toLowerCase().includes(find.toLowerCase())
          )
        )
      )
      .catch((e) => console.log(e));

      if (find !== '') setFilterClear(false)
  };

  const getAllSongs = () => {

    axios
    .get(`http://192.168.0.81:3001/songbook/${userMail}`)
    .then((result) =>
      setSongBookArray(result.data)
    )
    .catch((e) => console.log(e));
    //cleaning
    setFind('')
    setFilterClear(true)
  }

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

      <Text>porfaaaa{route.params?.info}</Text>
     

      
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
        value = {find}
        />
      <Button onPress={() => search()} title="Search by artist, song name or lyrics" />

        {!filterClear? <Button
          onPress={() => getAllSongs()}
          title="Show all songs"
        /> : null}

      <Text>{"\n\n"}</Text>

      {songBookArray?.length === 0 ? <Text>No matches or songs uploaded yet</Text> : null}

      {songBookArray?.map((el) => (
        <Text key={el.id}>
          Song: {el.name}
          {"\n"}
          Artist: {el.artist}
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