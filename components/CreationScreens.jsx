//______________NUEVOO__________________________________

import { createStackNavigator } from "@react-navigation/stack";
import ManuallyCreator from "./Creator/ManuallyCreator";
import Creator2 from "./Creator2";
import LyricsSelect from "./LyricsSelect";

const Stack = createStackNavigator()

export default function CreationScreens () {
  return (

    <Stack.Navigator>
       <Stack.Screen name="LyricsSelect" component={LyricsSelect} />
       <Stack.Screen name="ManuallyCreator" component={ManuallyCreator} />
       <Stack.Screen name="Creator2" component={Creator2} />
    </Stack.Navigator>

  );
}
