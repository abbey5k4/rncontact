import React, {useState} from 'react';
import RegisterComponent from '../../components/common/signUp';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmitForm = () => {
    //do some validations
    console.log("hi :>> ", form); 
    if (!form.userName) {
      setErrors((prev => {
        return {...prev, userName: "Please add a username"}
      }))
    }
    if (!form.firstName) {
      setErrors((prev => {
        return {...prev, firstName: "Please add a first Name"}
      }))
    }
  };

  return (
    <RegisterComponent
      form={form}
      onChange={onChange}
      onSubmitForm={onSubmitForm}
      errors={errors}
    />
  );
};

export default Register;
