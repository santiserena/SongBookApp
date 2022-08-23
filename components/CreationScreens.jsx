//______________NUEVOO__________________________________

import { createStackNavigator } from "@react-navigation/stack";
import LyricsSelect from "./LyricsSelect";

const Stack = createStackNavigator()

export default function CreationScreens () {
  return (

    <Stack.Navigator>
       <Stack.Screen name="LyricsSelect" component={LyricsSelect} />
    </Stack.Navigator>

  );
}
