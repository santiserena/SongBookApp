import { useEffect, useState } from "react";
import { ScrollView, Text, Image, Button, Alert, TextInput } from "react-native";
import axios from "react-native-axios";
import { useSelector } from "react-redux";

export default function Explorer({navigation}) {

  const [exploreArray, setExploreArray] = useState([]);
  const [find, setFind] = useState("");
  let userMail = useSelector((state) => state.mail);
  console.log('user mail--->', userMail);

  useEffect(() => {
    
    axios 
      .get(`http://192.168.0.81:3001/explore/${userMail}`)
      .then((result) => setExploreArray(result.data))
      .catch((e) => console.log(e))
  }, []);

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
            setExploreArray(exploreArray.filter ( el => el.id !== id))
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

  const onChangeText = (ev) => {
    setFind(ev);
  };

  const search = () => {
    console.log("luego buscare en mi cancionero->", find);
    //load all the info
    axios
      .get(`http://192.168.0.81:3001/explore/${userMail}`)
      .then((result) =>
        setExploreArray(
          result.data.filter(
            (el) =>
              el.name.toLowerCase().includes(find.toLowerCase()) ||
              el.artist.toLowerCase().includes(find.toLowerCase()) ||
              el.lyrics.toLowerCase().includes(find.toLowerCase())
          )
        )
      )
      .catch((e) => console.log(e));
  };

  return (
    <ScrollView>
      <Text>{"\n\n\n"}</Text>
      <Text>Song explorer:</Text>
      <Text>{"\n\n"}</Text>

      <TextInput
        onChangeText={(ev) => onChangeText(ev)}
        placeholder="write.."
      />
      <Button onPress={() => search()} title="Search by artist, song name or lyrics" />

      {exploreArray?.map((el) => (
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

     {/*  <Image
        source={{ uri: "https://source.unsplash.com/user/c_v_r" }}
        style={{ width: 400, height: 400 }}
      /> */}
    </ScrollView>
  );
}
