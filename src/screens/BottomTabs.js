import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home/Home';
import Profile from './Home/Profile';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Test from './Home/Test';
const Tab = createBottomTabNavigator();
export default function BottomTabs() {
  const CustomTableBarButton = ({children, onPress}) => (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        ...style.shadow,
      }}
      onPress={onPress}>
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: '#000',
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 90,
          ...style.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: focused ? '#e8fc6c' : '#fff',
                padding: 15,
                borderRadius: 7,
              }}>
              <Image
                source={require('../../assets/icons/home.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: '#000',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Test"
        component={Test}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/icons/plus.png')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: '#fff',
              }}
            />
          ),
          tabBarButton: props => <CustomTableBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: focused ? '#e8fc6c' : '#fff',
                padding: 15,
                borderRadius: 7,
              }}>
              <Image
                source={require('../../assets/icons/settings.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: '#000',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const style = StyleSheet.create({
  shadow: {
    shadowColor: '#e8fc6c',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
