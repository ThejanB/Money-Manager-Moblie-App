import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './HomeScreen';
import MenuScreen from './MenuScreen';
import ProfileScreen from './ProfileScreen';

//Screen names
const homeName = "My Expenses";
const detailsName = "Menu";
const profileScreen = "Group Expenses";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === profileScreen) {
              iconName = focused ? 'home' : 'home-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },/* Changing the color of the icon when it is active or inactive. */
          
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'black',
          tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
          tabBarStyle: {
            padding: 2,
            height: 65,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            backgroundColor: '#89ACFE',
            overflow: 'hidden',
          },
          headerShown: false, // Hiding the header for each screen
        })}
        >

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={profileScreen} component={ProfileScreen} />
        <Tab.Screen name={detailsName} component={MenuScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;