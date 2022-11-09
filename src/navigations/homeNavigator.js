import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import { CONTACTS, CONTACT_DETAILS, CREATE_CONTACT, SETTINGS } from '../constants/routeNames';
import ContactList from '../screens/contactList';
import ContactDetails from '../screens/contactsDetails';
import CreateContact from '../screens/createContact';
import Settings from '../screens/settings';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={CONTACTS}>
      <HomeStack.Screen name={CONTACTS} component={ContactList}></HomeStack.Screen>
      <HomeStack.Screen
        name={CONTACT_DETAILS}
        component={ContactDetails}></HomeStack.Screen>
      <HomeStack.Screen
        name={CREATE_CONTACT}
        component={CreateContact}></HomeStack.Screen>
      <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
