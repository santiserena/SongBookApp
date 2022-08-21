import { ScrollView, Text, Button, TouchableOpacity } from "react-native";

export default function ManuallyCreator({ navigation }) {
  return (
    <ScrollView>
      <Button onPress={() => navigation.navigate("Creator")} title="Go back" />
      <Text style={{ fontSize: 42 }}>(1) - 2 - 3 - 4</Text>
      <Text>Escribir letra..</Text>

      {/* AGREGAR DOS PALABRAS AL FINAL Q SE BORRARAN SOLAS */}

      <Button
          onPress={() =>
            navigation.navigate("Creator2", {
              song: 'nombre de cancion',
              artist: 'nombre de artista',
              album: 'nombre de album',
              manuallyEnteredSongLyrics: 'soy toda la letra de la cancion ME BORRO'
            })
          }
          title='Next'
          
        >
          <Text>Next -boton- revisar que no sea un string vacio </Text>
        </Button>

      {/*  <Button onPress={() => navigation.navigate("Creator2")} title="Next" /> */}
    </ScrollView>
  );
}
