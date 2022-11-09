import React from 'react';
import LoginComponent from "../../components/common/login"

const Login = () => {
  const [value, onChangeText] = React.useState('');
  return (
    <LoginComponent />
  );
};

export default Login;
