import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PostList } from "./PostList";
import { PostDetail } from "./PostDetail";
import { PostAdd } from "./PostAdd";
import { PostEdit } from "./PostEdit";
import { Login } from "./Login";
import { Register } from "./Register";

const Stack = createNativeStackNavigator();
const AppHome = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
          name="Login"
          component={Login}
          //options={{ title: "Login" }}
          options={{headerShown: false} }
        />
      <Stack.Screen
          name="Register"
          component={Register}
          //options={{ title: "Register" }}
          options={{headerShown: false} }
        />
        <Stack.Screen
          name="PostList"
          component={PostList}
          //options={{ title: "Timeline" }}
          options={{headerShown: false} }
        />
        <Stack.Screen
          name="PostDetail"
          component={PostDetail}
          //options={{ title: "Detail Post" }}
          options={{headerShown: false} }
        />
        <Stack.Screen
          name="PostAdd"
          component={PostAdd}
          //options={{ title: "Add Post" }}
          options={{headerShown: false} }
        />
        <Stack.Screen
          name="PostEdit"
          component={PostEdit}
          //options={{ title: "Edit Post" }}
          options={{headerShown: false} }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppHome;
