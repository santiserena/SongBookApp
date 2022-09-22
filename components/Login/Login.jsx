import { useState } from "react";
import { Text, TextInput, Button, ScrollView } from "react-native";
import { useDispatch } from "react-redux";

export default function Login({ navigation }) {

  const [loguinData, setLoginData] = useState ({
    mail: '',
    password: ''
  })

 // const dispatch = useDispatch()
//hacer action que renueve estado global mail 

  const verify = () => {
    console.log("verificoo", loguinData);
    //verificar
    //MANDAT ACTION CON MAIL A REDUCER
  };

  return (
    <ScrollView>
      <Text>{"\n\n\n\n\n"}</Text>
      <Text>Welcome!</Text>
      <Text>Email:</Text>
      <TextInput
        style={{ borderWidth: 1 }}
        onChangeText={(ev) => setLoginData({ ...loguinData, mail: ev })}
      />
      <Text>Password:</Text>
      <TextInput
        style={{ borderWidth: 1 }}
        onChangeText={(ev) => setLoginData({ ...loguinData, password: ev })}
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

