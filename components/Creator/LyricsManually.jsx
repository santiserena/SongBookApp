import { useState } from "react";
import { ScrollView, Text, Button, TextInput, Alert } from "react-native";

export default function LyricsManually({ navigation }) {

  const [lyrics, setLyrics] = useState('');
  const [songObject, setSongObject] = useState({})

  const handleChange = (ev, nam) =>{
    console.log('pongo:', ev);
    setSongObject({
      ...songObject,
      [nam] : ev
    })
  }

  const next = () => {

    if (songObject.song && songObject.artist && lyrics) {

      navigation.navigate("Creator2", {
        ...songObject,
        manuallyEnteredSongLyrics: `${lyrics} to erase`,
      });
      
    } else {

      Alert.alert("Please,", "Complete the required fields", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
       /*  {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        }, */
      ]);

      console.log("complete the required fields");
    }
  };

  return (
    <ScrollView>
      <Button onPress={() => navigation.goBack()} title="Go back" />
      <Text style={{ fontSize: 42 }}>(1) - 2 - 3 - 4</Text>

      <Text>Here you can write the lyrics:{"\n\n"}</Text>

      <TextInput
        style={{ borderWidth: 1 }}
        onChangeText={(ev) => handleChange(ev, "song")}
        placeholder="Song *"
      />

      <TextInput
        label
        style={{ borderWidth: 1 }}
        onChangeText={(ev) => handleChange(ev, "artist")}
        placeholder="Artist *"
      />

      <TextInput
        style={{ borderWidth: 1 }}
        onChangeText={(ev) => handleChange(ev, "album")}
        placeholder="Album"
      />

      <TextInput
        style={{ borderWidth: 1 }}
        multiline={true}
        numberOfLines={15}
        onChangeText={(ev) => setLyrics(ev)}
        placeholder="Write the lyrics *"
      />

      <Text>{"\n\n"}</Text>

      <Button onPress={() => next()} title="Next">
        <Text>Next -boton- revisar que no sea un string vacio </Text>
      </Button>

      <Text>cancion: {songObject.song}</Text>
      <Text>artist: {songObject.artist}</Text>
      <Text>letra: {lyrics}</Text>

    </ScrollView>
  );
}
