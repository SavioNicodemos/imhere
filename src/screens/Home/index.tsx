import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Home() {

  function handleParticipantAdd(){
    console.log('Você apertou no botão de Adicionar!');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        sexta, 4 de Novembro de 2022.
      </Text>

<View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6b6b6b"
      />

      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
</View>
  )
}