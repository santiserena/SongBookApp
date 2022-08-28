import { Button, ScrollView, Text } from "react-native";

export default function Creator3({route, navigation}) {
  

// LUEGO SACAR PORQUE IMPRIME UN CHOCLO SINO!
// console.log('info recibida->', route.params);

    const goback = () => {
      navigation.goBack();
    }; 

    console.log(route.params);

    return (
      <ScrollView>
        <Button
          onPress={() => {goback()}}
          title="Go back"
        />
        <Text style={{ fontSize: 40 }}>1 - 2 - (3)</Text>

        <Text>Agregar info extra de la cancion: foto si no hay, si quiere compartir, vista preliminar de letra con acordes </Text>
      </ScrollView>
    );
}
