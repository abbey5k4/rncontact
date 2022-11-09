import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Container from '../container';
import CustomButton from '../customButton';
import Input from '../input';
import styles from './styles';
import {LOGIN} from '../../../constants/routeNames';

const RegisterComponent = ({form, onChange, onSubmitForm, errors}) => {
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
        <Text style={styles.subTitle}>Create a free account</Text>
        <View style={styles.form}>
          <Input
            label="Username"
            placeholder="Enter username"
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
            error={errors.userName}
          />
          <Input
            label="First name"
            placeholder="Enter first name"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName}
          />
          <Input
            label="Last name"
            placeholder="Enter last name"
            error={errors.lastName}
          />
          <Input label="Email" placeholder="Enter email" error={errors.email} />

          <Input
            label="Password"
            placeholder="Enter password"
            icon={<Text>Show</Text>}
            secureTextEntry={true}
            iconPosition="right"
            error={errors.password}
          />
        </View>
      </View>

      <CustomButton title="Submit" onSubmitForm={onSubmitForm} primary />
      {/* <CustomButton title="Submit" primary loading={true} disabled={true} /> */}
      <View style={styles.createSection}>
        <Text style={styles.infoText}>Existing customer ?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(LOGIN);
          }}>
          <Text style={styles.linkBtn}>Log in</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default RegisterComponent;
