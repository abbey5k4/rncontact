import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const CustomButton = ({
  title,
  loading,
  disabled,
  secondary,
  primary,
  danger,
  onSubmitForm
}) => {
  const [focused, setFocused] = useState(false);

  const getBackgroundColor = () => {
    if (disabled) {
      return colors.grey;
    }
    if (primary) return colors.primary;
    else if (secondary) return colors.secondary;
    else if (danger) return colors.danger;
  };
  return (
    <TouchableOpacity onPress={onSubmitForm}
      style={[styles.wrapper, {backgroundColor: getBackgroundColor()}]}
      disabled={disabled}>
      <View style={[styles.loaderSection]}>
        {loading && <ActivityIndicator color={colors.primary} />}
        {title && (
          <Text
            style={{
              color: disabled ? 'black' : colors.white,
              paddingLeft: loading ? 10 : 0,
            }}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
