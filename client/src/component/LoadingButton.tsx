import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface LoadingButtonProps {
  onPress: () => Promise<void> | void;
  buttonText: string;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({ onPress, buttonText }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handlePress = async () => {
    setLoading(true);

    try {
      await onPress();
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={loading ? undefined : handlePress}
      disabled={loading}
    >
      <Text style={styles.buttonText}>{loading ? 'Please wait...' : buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LoadingButton;
