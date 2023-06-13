import { StyleSheet } from 'react-native';
import  { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import Projects from './Projects';
import IndividualProject from './IndividualProject';
import Create from './Create';
import Profile from './Profile';
import Message from './Message';
import ViewMessage from './ViewMessage';
import ViewMessageB from './ViewMessageB';
import ViewMessageC from './ViewMessageC';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Projects" component={Projects} />
        <Stack.Screen name="IndividualProject" component={IndividualProject} />
        <Stack.Screen name="Create" component={Create} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="ViewMessage" component={ViewMessage} />
        <Stack.Screen name="ViewMessageB" component={ViewMessageB} />
        <Stack.Screen name="ViewMessageC" component={ViewMessageC} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
