import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Login from './screens/Authentication/Login';
import Home from './screens/Home/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from './screens/Home/Profile';
import {StatusBar} from 'react-native';
import BottomTabs from './screens/BottomTabs';
const Tab = createBottomTabNavigator();
const homeName = 'Home';
const profileName = 'Profile';
function App() {
  return (
        <NavigationContainer>
         <BottomTabs/>
        </NavigationContainer>
  );
}
export default App;
