import { createStackNavigator } from "@react-navigation/stack";
import LyricsManually from "./Creator/LyricsManually";
import Creator2 from "./Creator/Creator2";
import LyricsSelect from "./Creator/LyricsSelect";
import Creator3 from "./Creator/Creator3";

const Stack = createStackNavigator()

export default function CreationScreens () {
  return (

    <Stack.Navigator>
       <Stack.Screen name="LyricsSelect" component={LyricsSelect} />
       <Stack.Screen name="LyricsManually" component={LyricsManually} />
       <Stack.Screen name="Creator2" component={Creator2} />
       <Stack.Screen name="Creator3" component={Creator3} />
    </Stack.Navigator>

  );
}
