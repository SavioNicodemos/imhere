import { format } from 'date-fns';
import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  const formattedDate = format(new Date(), "EEEE, MMMM d, yyyy");

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        'Participant exists',
        'There is already a participant in the list with this name.'
      )
    }
    setParticipants(prev => [...prev, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remove', `Do you want to remove the participant ${name}?`, [
      {
        text: 'Yes',
        onPress: () => setParticipants(prev => prev.filter(participant => participant !== name)),
      },
      {
        text: 'No',
        style: 'cancel'
      }
    ])
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Event name
      </Text>

      <Text style={styles.eventDate}>
        {formattedDate}
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Participant name"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Has anyone arrived at the event yet? Add a participant!
          </Text>
        )}
      />

    </View>
  )
}