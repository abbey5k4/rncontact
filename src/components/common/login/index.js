import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../container';
import CustomButton from '../customButton';
import Input from '../input';
import styles from './styles';
import { REGISTER } from '../../../constants/routeNames';

const LoginComponent = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../../assets/images/logo.png')}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Please login here</Text>
        <View style={styles.form}>
          <Input
            label="Username"
            placeholder="Enter Username"
            //   secureTextEntry={false}
            // error={'This field is required'}
          />

          <Input
            label="Password"
            placeholder="Enter password"
            icon={<Text>Show</Text>}
            secureTextEntry={true}
            iconPosition="right"
          />
        </View>
      </View>

      <CustomButton title="Submit" primary />
      {/* <CustomButton title="Submit" primary loading={true} disabled={true} /> */}
      <View style={styles.createSection}>
        <Text style={styles.infoText}>Need a new account ?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(REGISTER);
          }}>
          <Text style={styles.linkBtn}>Register</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default LoginComponent;
