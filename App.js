import {createAppContainer, mainNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screens/login';
import inputs from './screens/inputs';
import cadastro from './screens/cadastro';

const mainNavigation = createBottomTabNavigator({
  Login,
  inputs,
  cadastro,
});

export default createAppContainer(mainNavigation)

 
