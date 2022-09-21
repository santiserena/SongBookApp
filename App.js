import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MySongBook from "./components/MySongBook/MySongBook";
import Explorer from "./components/Explorer/Explorer";
import SettingsScreen from "./components/Settings/Settings";
import Login from "./components/Login";
//import Creator from "./components/Creator/Creator";
//import Creator2 from "./components/Creator/Creator2";
//import LyricsManually from "./components/Creator/LyricsManually";
import CreationScreens from "./components/CreationScreens";
import store from "./redux/store";
import { Provider } from "react-redux";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store = {store}>

      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
          >
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="My Songbook" component={MySongBook} />
          <Tab.Screen name="Explorer" component={Explorer} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="CreationScreens" component={CreationScreens} />

          {/* <Tab.Screen
            name="LyricsManually"
            component={LyricsManually}
            options={{
              tabBarStyle: { display: "none" },
              tabBarButton: () => null,
            }}
          /> */}
        {/*  <Tab.Screen
            name="Creator"
            component={Creator}
            options={{
              // taking the tab out 
              tabBarStyle: { display: "none" },
              // taking the icon out 
              tabBarButton: () => null,
            }}
          /> */}
          {/*  <Tab.Screen
              name="Creator2"
              component={Creator2}
              options={{
                tabBarStyle: { display: "none" },
                tabBarButton: () => null,
              }}
            /> */}
        </Tab.Navigator>
      </NavigationContainer>

    </Provider>
  );
}
