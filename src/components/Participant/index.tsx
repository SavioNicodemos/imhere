import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export const Participant: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        Sávio Nicodemos
      </Text>

      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
    </View>
  );
}
