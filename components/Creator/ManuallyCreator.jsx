import { useState } from "react";
import { ScrollView, Text, Button, TextInput } from "react-native";

export default function ManuallyCreator({ navigation }) {

  const [lyrics, setLyrics] = useState('');

  const next = () => {
    navigation.navigate("Creator2", {
      song: "nombre de cancion",
      artist: "nombre de artista",
      album: "nombre de album",
      manuallyEnteredSongLyrics: `${lyrics} to erase`
    });
  };

  return (
    <ScrollView>
      <Button onPress={() => navigation.navigate("Creator")} title="Go back" />
      <Text style={{ fontSize: 42 }}>(1) - 2 - 3 - 4</Text>

      {/* AGREGAR INPUTS PARA: song, artist, album y control q haya algo escrito */}

      <Text>Here you can write the lyrics:{"\n\n"}</Text>

      <TextInput
        style={{ borderWidth: 1 }}
        multiline={true}
        numberOfLines={15}
        onChangeText={(ev) => setLyrics(ev)}
      />

      <Text>{"\n\n"}</Text>

      <Button onPress={() => next()} title="Next">
        <Text>Next -boton- revisar que no sea un string vacio </Text>
      </Button>
    </ScrollView>
  );
}
