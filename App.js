import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MySongBook from './components/MySongBook';
import Explorer from './components/Explorer';
import SettingsScreen from './components/SettingsScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="My Songbook" component={MySongBook} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Explorer" component={Explorer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}