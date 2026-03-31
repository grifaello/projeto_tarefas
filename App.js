import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
const tarefas=[
{id:"1",titulo:"aprender Git"},
{id:"2",titulo:"aprender fazer Commit"},
  {id:"3",titulo:"aprender utilizar o Github"},
  {id:"4",titulo:"Criar um novo commit"},
]

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>lista de tarefas</Text>

      <FlatList
      data={tarefas}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>(
        <Text style={styles.item}>{item.titulo}

        </Text>
      )}


      />
      <TouchableOpacity style={styles.btnAdicionar}><Text>Adicionar Tarefa</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  titulo:{
    fontSize:48,
    fontWeight:'bold',
    color:'dark blue',
    marginBottom:20
  },

  item: {
    padding:15,
    marginTop: 10,
    backgroundColor:'lightgreen',
    borderRadius:5
  },
  btnAdicionar: {
    width: "90%",
    backgroundColor: 'lightgreen',
    margin:15,
    height: 40,
    borderRadius:5
  }
});