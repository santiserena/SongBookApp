import { View, Text, Button } from "react-native-web";

export default function Creator() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        onPress={() => navigation.navigate("My Songbook")}
        title="Go back to my song book"
      />
      <Text>soy el Creator</Text>
    </View>
  );
}
