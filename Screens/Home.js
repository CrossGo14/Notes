import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,SafeAreaView,Dimensions, } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Input from './Input';
import { StatusBar } from 'expo-status-bar';
import Searchbar from '../Components/Searchbar';


export default function Home() {
  const navigation = useNavigation();


const [inputvisible, setinputvisible] = useState(false);

const addingsubmission =(title,desc) =>
{

  console.log(desc,title);

}

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
    <SafeAreaView>
      <View style={{justifyContent:'center',alignItems:'center' }}>

      {notesadd}
      </View>


      <Searchbar />


    </SafeAreaView>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  add:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',

    
  },
  notes:{
    fontSize:20,
    fontWeight:'bold',
    
  }
});
