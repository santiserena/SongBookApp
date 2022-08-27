import { ScrollView, Text, Button } from "react-native";

export default function ManuallyCreator({ navigation }) {
  return (
    <ScrollView>
      <Button onPress={() => navigation.navigate("Creator")} title="Go back" />
      <Text style={{ fontSize: 42 }}>(1) - 2 - 3 - 4</Text>
      <Text>Escribir letra..</Text>

      {/* VER COMO PASAR LYRICS A CREATOR 2 */}
      {/*  <Button onPress={() => navigation.navigate("Creator2")} title="Next" /> */}
    </ScrollView>
  );
}
