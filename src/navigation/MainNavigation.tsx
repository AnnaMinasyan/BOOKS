import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BookScreen from "@/screens/Book.screen";
import AddBookScreen from "@/screens/AddBook.screen";
import EditBookScreen from "@/screens/EditBook.screen";


export type MainParamList = {
  Books: undefined;
  AddBook: undefined;
  EditBook: undefined;

};

const Stack = createStackNavigator<MainParamList>();

export function MainNavigation() {
  return (
    <Stack.Navigator
    initialRouteName="Books"
      screenOptions={{ animationEnabled: true }}>
      <Stack.Screen name="Books" component={BookScreen} />
      <Stack.Screen name="AddBook" component={AddBookScreen} />
      <Stack.Screen name="EditBook" component={EditBookScreen} />
    </Stack.Navigator>
  );
}
