import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import BookList from "./screens/bookList/BookList";
import MyBooks from "./screens/myBooks/MyBooks";
import Profile from "./screens/profile/Profile";

const BottomTabs = createBottomTabNavigator();
// esto es para crear el navegador con el menu
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <BottomTabs.Navigator>
          <BottomTabs.Screen name="booklist" component={BookList} />
          <BottomTabs.Screen name="mybooks" component={MyBooks} />
          <BottomTabs.Screen name="profile" component={Profile} />
        </BottomTabs.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
}