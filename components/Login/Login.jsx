import { useState } from "react";
import { Text, TextInput, Button, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { getUserMail } from "../../redux/actions";

export default function Login({ navigation }) {

  const [loguinData, setLoginData] = useState ({
    mail: '',
    password: ''
  })

  const dispatch = useDispatch()

  const verify = () => {
    console.log("verificoo", loguinData);

    //VERIFICAR CTA AQUÍ!!!!!! si esta bien, mandar al estado global como esta abajo


    dispatch(getUserMail(loguinData.mail))
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

