import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";

import store from "./src/Redux/store";
import GalleryScreen from "./src/screens/GalleryScreen";
import PhotoScreen from "./src/screens/PhotoScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Gallery"
            component={GalleryScreen}
            options={{ title: "List of images" }}
          />
          <Stack.Screen
            name="Photo"
            component={PhotoScreen}
            options={{ title: "Image" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
