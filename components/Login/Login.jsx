import { Text, TextInput, Button, ScrollView } from "react-native";

export default function Login({ navigation }) {
  const verify = () => {
    console.log("verificoo");
  };

  return (
    <ScrollView>
      <Text>{"\n\n\n\n\n"}</Text>
      <Text>Welcome!</Text>
      <Text>Email:</Text>
      <TextInput
        style={{ borderWidth: 1 }}
        onChangeText={(ev) => handleChange(ev)}
      />
      <Text>Password:</Text>
      <TextInput
        style={{ borderWidth: 1 }}
        onChangeText={(ev) => handleChange(ev)}
      />
      <Button onPress={() => verify()} title="Continue" />

      <Text>{"\n"}</Text>

      <Text>No account? Sign up!</Text>
      <Button
        onPress={() => navigation.navigate("Register")}
        title="Sign up!"
      />
    </ScrollView>
  );
}

