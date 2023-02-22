import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { CategoriesScreen } from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { NavigationContainer } from '@react-navigation/native';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <>
        <StatusBar style='light' />
        <NavigationContainer>
          <Stack.Navigator
          screenOptions={{
            contentStyle: {backgroundColor: "lightgray"},
            headerStyle: {backgroundColor: "gray"},
            headerTintColor: "white"
          }}>
            <Stack.Screen name="MealsCategories" 
            component={CategoriesScreen} 
            options={{
              title: "To jest mój tytuł"
            }}/>
            <Stack.Screen name="MealsOverview" 
            component={MealsOverviewScreen}
            options={{
              title: "Twoje danie"
            }} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
  );
}
