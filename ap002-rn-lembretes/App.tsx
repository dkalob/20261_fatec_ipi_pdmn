import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


interface Lembrete {
  id: string;
  texto: string;
}

export default function App() {
  const [lembretes, setLembretes] = useState<Lembrete[]>([]);
  const [lembrete, setLembrete] = useState('');
  const [emModoEdicao, setEmModoEdicao] = useState(false);

  const adicionar = () => {
    //criar um novo lembrete com id e texto
    const novoLembrete: Lembrete = {
      id: Date.now().toString(),
      texto: lembrete
    }

    //atualiza a lista de lembretes
    setLembretes(lembreteAtual => [novoLembrete, ...lembreteAtual]);

    //limpa o campo de texto
    setLembrete('');
  }

  const remover = (lembrete: Lembrete) => {
    setLembretes(lembreteAtual => (
      lembreteAtual.filter(item => item.id !== lembrete.id)
    ));
  };

  const atualizar = () => {

  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Digite um lembrete...'
        onChangeText={setLembrete}
        value={lembrete}
      />
      <Pressable
        onPress={emModoEdicao ? atualizar : adicionar}
        style={styles.button}>
        <Text
          style={styles.buttonText}>
          {emModoEdicao ? 'Atualizar Lembrete' : 'Adicionar Lembrete'}
        </Text>
      </Pressable>
      <FlatList
        style={styles.list}
        data={lembretes}
        renderItem={({ item }) => (
          <View
          style={styles.listItem}>
            <Text
              style={styles.listItemText}
            >{item.texto}
            </Text>
              <View
                style={styles.listItemButtons}>
                <Pressable
                  onPress={() => remover(item)}
                >
                  <AntDesign 
                    name="delete" 
                    size={24}/>
                </Pressable>
                <Pressable
                  onPress={() => {
                    setLembrete(item.texto)
                    setEmModoEdicao(true)
                  }}
                >
                  <AntDesign 
                    name="edit" 
                    size={24}/>
                </Pressable>
              </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    padding: 8,
    textAlign: 'center'
  },
  list: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '80%',
    marginTop: 20,
    borderRadius: 4,
  },
  listItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    backgroundColor: '#f9f9f9',
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemText: {
    color: '#333',
    textAlign: 'center',
    width: '70%',
  },
  listItemButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '30%',
  },
  button: {
    width: '80%',
    padding: 12,
    backgroundColor: 'blue',
    borderWidth: 1,
    marginTop: 12,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
