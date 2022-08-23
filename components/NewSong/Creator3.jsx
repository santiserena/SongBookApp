import { Button, ScrollView, Text } from "react-native";

export default function Creator3({route, navigation}) {
  
console.log('soy el creator4 ->',route.params);

    const goback = () => {
      
      console.log('tiene que recibir album:',route.params.id_album);
        navigation.navigate("Creator2", {
            id_artist:route.params.id_artist,
            id_album:route.params.id_album,
            id_track:route.params.id_track,
            manuallyEnteredSongLyrics: route.params.id_track? null: 'la la lara'
      });
    }; 


    return (
      <ScrollView>
        <Button
          onPress={() => {goback()}}
          title="Go back"
        />



        <Text style={{ fontSize: 40 }}>1 - 2 - (3) - 4</Text>
        <Text>creator3</Text>
      </ScrollView>
    );
}
