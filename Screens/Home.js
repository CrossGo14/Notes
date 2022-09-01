import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,SafeAreaView,Dimensions,Modal,Keyboard,TouchableWithoutFeedback } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Input from './Input';
import { StatusBar } from 'expo-status-bar';
import Searchbar from '../Components/Searchbar';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Home() {
  const navigation = useNavigation();
  const [inputvisible, setinputvisible] = useState(false);
  const [notes, setnotes] = useState([])

const addingsubmission =(title,desc) =>
{
  const time= new Date().getTime();
  const note= {id: Date.now(), title,desc,time}
  console.log(note)
}

const findNotes = async () => {
 const Result=  await AsyncStorage.getItem('notes') ;
  if(notes == Result ) null

}

useEffect(() => {
  findNotes();
}, [])


const notesadd = (
  <Feather.Button
  name='plus-square'
  size={28}
  onPress={()=> setinputvisible(true)}
  color='black'
  backgroundColor='#F3F2F2'
  
  >
    <Text style={{fontWeight:'bold'}}>NOTES</Text>

  </Feather.Button>
)



  return (
   

    <>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <SafeAreaView style={styles.container}>
      <View style={{justifyContent:'center',alignItems:'center' }}>

      {notesadd}
      </View>


      <Searchbar />
    </SafeAreaView>

    </TouchableWithoutFeedback>


    <Input 
    visible={inputvisible}
    onClose={()=> setinputvisible(false)}
    submission={addingsubmission} />
    </>


    
  );
}
// if you want to substract the width then use .width after the window braket and remove the 
//curly bracket from the variable or else leave the curly bracket


const width =  Dimensions.get('window').width -100

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex:1,
   
  },
  add:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',

    
  },
  notes:{
    fontSize:20,
    fontWeight:'bold',
    
  },
  dismisskeyb:{
    flex:1,
    zIndex:-1
  }
});
