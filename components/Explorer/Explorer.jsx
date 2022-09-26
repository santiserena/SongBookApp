import { useEffect, useState } from "react";
import { ScrollView, Text, Image, Button, Alert } from "react-native";
import axios from "react-native-axios";
import { useSelector } from "react-redux";

export default function Explorer() {

  const [exploreArray, setExploreArray] = useState([]);
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

  return (
    <ScrollView>
      <Text>{"\n\n\n"}</Text>
      <Text>Song explorer:</Text>
      <Text>{"\n\n"}</Text>

      {exploreArray?.map((el) => (
        <Text key={el.id}>
          Song: {el.name}
          {"\n"}
          Album: {el.album}
          {"\n"}
          Chart creator: {el.chartCreator}
          {"\n"}
          <Button
            onPress={() => navigation.navigate("")}   /* ACA VA EL NVO SCREEN Q MUESTRA CANCION */
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
