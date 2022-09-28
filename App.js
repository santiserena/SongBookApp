import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MySongBook from "./components/MySongBook/MySongBook";
import Explorer from "./components/Explorer/Explorer";
import SettingsScreen from "./components/Settings/Settings";
import CreationScreens from "./components/CreationScreens";
import store from "./redux/store";
import { Provider } from "react-redux";
import LoginScreens from "./components/Login/LoginScreens";
import PlaySong from "./components/PlaySong/PlaySong";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen name="LoginScreens" component={LoginScreens} />
          <Tab.Screen
            name="My Songbook"
            component={MySongBook}
            //options={{ unmountOnBlur: true }} // this option reload every time we go there
          />
          <Tab.Screen
            name="Explorer"
            component={Explorer}
            //options={{ unmountOnBlur: true }}
          />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="CreationScreens" component={CreationScreens} />
          <Tab.Screen name="PlaySong" component={PlaySong} />

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
