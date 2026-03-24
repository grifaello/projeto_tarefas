import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
const tarefas=[
{id:"1",titulo:"aprender Git"},
{id:"2",titulo:"aprender fazer Commit"},
  {id:"3",titulo:"aprender utilizar o Github"},
]
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>lista de tarefas</Text>

      <FlatList
      data={tarefas}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>(
        <Text style={{color: 'white'}}>{item.titulo}

        </Text>
      )}




      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    
  },
  titulo:{
    fontSize:48,
    fontWeight:'bold',
    color:'white',
    marginBottom:20
  }
});
