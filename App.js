import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import pages
import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";
import Busca from "./src/pages/Busca";

// Import icons FONTAWESOME
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "lightblue",
          tabBarInactiveTintColor: "black",
          tabBarStyle: {
            backgroundColor: "#FFF",
            height: 50,
            borderTopEndRadius: 40,
            borderTopLeftRadius: 40,
            borderTopColor: "transparent",
            padding: 10,
            shadowColor: "lightblue",
            shadowOffset: {
              width: 0,
              height: -4,
            },
            shadowOpacity: 1,
            shadowRadius: 4.65,
            elevation: 8,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => {
              return <FontAwesome size={size} color={color} name="home" />;
            },
            headerShown: false,
            title: "",
          }}
        />
        <Tab.Screen
          name="Sobre"
          component={Sobre}
          options={{
            tabBarIcon: ({ size, color }) => {
              return (
                <FontAwesome size={size} color={color} name="newspaper-o" />
              );
            },
            headerShown: false,
            title: "",
          }}
        />
        <Tab.Screen
          name="Busca"
          component={Busca}
          options={{
            tabBarIcon: ({ size, color }) => {
              return <FontAwesome size={size} color={color} name="search" />;
            },
            headerShown: false,
            title: "",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
