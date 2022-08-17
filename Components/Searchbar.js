import { View, Text,StyleSheet,TextInput,TouchableOpacity,Dimensions} from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Searchbar() {
    

    const navigation = useNavigation()
  return (

    <View style={{flexDirection:'row'}}> 

        <Feather
        name='search'
        size={30}
        style={{marginTop:20}}
        />

<TextInput
     style={styles.inputstyle}
     placeholder="Search..."
     // value={search}
     // onChangeText={(text) => setsearch(text)}
    /> 

    </View>


  )
}

const width = Dimensions.get('window').width - 70

const styles = StyleSheet.create ({
search:{
    borderBottomWidth:2,
    fontSize:23,
    paddingVertical:10

},
inputstyle:{
    fontSize:25,
    padding:10,
    marginRight:20,
    borderBottomWidth:1,
    marginLeft:20,
    width,
      },
}

)