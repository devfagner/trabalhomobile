import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './screens/login';
import inputs from './screens/inputs';
import cadastro from './screens/cadastro';


const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="tela de login" component={login} />
        <Stack.Screen name="tela das apostas" component={inputs} />
        <Stack.Screen name="tela de cadastro" component={cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
