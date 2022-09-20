import { useState } from "react";
import { Alert, Button, ScrollView, Text } from "react-native";
import {Picker} from '@react-native-picker/picker';
import axios from "react-native-axios";


export default function Creator3({ route, navigation }) {
  const [shareMusicTable, setShareMusicTable] = useState(true);
  const [allInfo, setAllInfo] = useState({ ...route.params, share: true });

  const goback = () => {
    navigation.goBack();
  };

  const saveSong = async () => {
    try {
      let toSend = {...allInfo, chartCreator: 'mmail@harcodeadoo.com'} //luego el mail ponerlo en el set state
    
      let result = await axios.post ('http://192.168.0.81:3001/createchart', toSend )

      if (result.data === "chart created") {
        console.log("Song added successfully!");
        Alert.alert(allInfo.songName, "Song added successfully!", [
          { text: "OK", onPress: () => {
            console.log("OK Pressed") 
            navigation.popToTop();
            navigation.navigate("My Songbook");
        }},
        ]);


      } else {
        console.log("Not added ->", result.data);
        Alert.alert("Something went wrong!", result.data, [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      }
      
    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <ScrollView>
      <Button
        onPress={() => {
          goback();
        }}
        title="Go back"
      />

      <Text style={{ fontSize: 40 }}>1 - 2 - (3)</Text>

      <Text>Would you like to share this music chart with other users?</Text>
      <Picker
        selectedValue={shareMusicTable}
        onValueChange={(val) => {
          setShareMusicTable(val);
          setAllInfo({ ...allInfo, share: val === "yes" ? true : false });
        }}
      >
        {/* This Value seems always to work just with strings (Eg.. don´t do value={true}) */}
        <Picker.Item label="Yes" value="yes" />
        <Picker.Item label="No" value="no" />
      </Picker>

      <Text>
        {"\n"}Agregar foto si quiere. vista preliminar de letra con acordes{" "}
      </Text>

      <Button
        onPress={() => {
          saveSong();
        }}
        title="Save song!"
      />
    </ScrollView>
  );
}
