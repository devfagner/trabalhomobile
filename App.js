import {createBottomTabNavigator,createAppContainer } from '@react-navigation/native';


import Login from '../trabalhomobile/screens/login';
import inputs from '../trabalhomobile/screens/inputs';
import cadastro from '../trabalhomobile/screens/cadastro';

const mainNavigation = createBottomTabNavigator({
  Login,
  inputs,
  cadastro,
});

export default createAppContainer(mainNavigation);
