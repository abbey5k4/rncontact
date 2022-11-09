import React, { useContext } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './authNavigator';
import DrawerNavigator from './drawerNavigator';
import { GlobalContext } from '../context/reducers/Provider';

const AppNavContainer = () => {
  // const isLoggedIn = true;

  const {authState: {isLoggedIn}} = useContext(GlobalContext);

  // console.log(state);
  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
