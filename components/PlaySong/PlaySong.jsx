import { View, Text, ScrollView, StyleSheet, Button } from "react-native";

export default function PlaySong({ navigation, route }) {

  return (
    <ScrollView>
      <Text>{'\n\n'}</Text>
      
      <Button
        onPress={() => {
          navigation.navigate('My Songbook');
        }}
        title="Go home"
      />

      <Text>{route.params.el.name}</Text>
      <Text>{route.params.el.artist}</Text>
      <Text>{'\n\n'}</Text>


      <View style={styles.container}>
        {route.params.el.lyricsAndChords?.map((el, index) => (
          <View key={index}>
            {el.word === "/n" ? (

              <View style={{ width: 10000 }}></View>
            ) : (
              <View
                style={{
                  /* borderWidth: 1, */
                  height: 40,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >

               <Text style={{
                  color: "red"
                }}>{el.chords}</Text>
               <Text>{el.word} </Text>
               
              </View>
            )}
          </View>
        ))}
      </View>

      <Button
        onPress={() => {
          navigation.navigate('My Songbook');
        }}
        title="Go home"
      />

 </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});