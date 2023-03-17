import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { Participant } from '../../components/Participant';
import { styles } from './styles';

export default function Home() {

  function handleParticipantAdd() {
    console.log('Você apertou no botão de Adicionar!');
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você apertou para remover o participante ${name}!`);
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

      <Participant name='Nicodemos Gomes' onRemove={() => handleParticipantRemove("savinho")} />
    </View>
  )
}