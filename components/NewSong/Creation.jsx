//______________NUEVOO__________________________________

import { createStackNavigator } from "@react-navigation/stack";
import Create1 from "./Create1";
import Create1Manually from "./Create1Manually";



const Stack = createStackNavigator();

export default function Creation() {
  return (

    <Stack.Navigator>
       <Stack.Screen name="Create1" component={Create1} />
       <Stack.Screen name="Create1Manually" component={Create1Manually} />
    </Stack.Navigator>



    /* 
<ScrollView>
      <Text>creation</Text>
    </ScrollView> */
  );
}
