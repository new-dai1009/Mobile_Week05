import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import VsColor from './components/VsColor';
import VsSanPham from './components/VsSanPham';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="VsSanPham" component={VsSanPham} options={{ headerShown: false }} 
        />
        <Stack.Screen name="VsColor" component={VsColor}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;