import react,{useState,useEffect} from "react";
import { Text,TextInput,SafeAreaView,View,StyleSheet,TouchableWithoutFeedback,Keyboard,Modal,TouchableOpacity} from "react-native";
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from "@react-navigation/native";
import Home from "./Home";


export default function Input({visible,onClose,submission}) {

    const handlekeyb =() =>{
        Keyboard.dismiss();
    }

     const [title, settitle] = useState('');
     const [desc, setdesc] = useState('');

     const handlesubmit = () => {
        if(!title.trim() && !desc.trim()) return onClose()
        submission(title,desc)
        setdesc('')
        settitle('')
        onClose();
     }

     const XClose= () =>
     {
        setdesc('')
        settitle('')
        onClose();
     }
    

     const crossbutton =(
        <Feather
        name="x"
        size={30}
        backgroundColor='red'
        style={{paddingLeft:50}}
        onPress={XClose}
         />
     )

     const tickbutton = (
    <Feather
    name="check"
    size={30}
    backgroundColor='#2aa32c'
    onPress={handlesubmit}

    />
    )

 
     const Navigation=useNavigation();

    return(
        //modal is different than view, but ig its more functional and ractiacal than vie
        <View>

        <Modal visible={visible}>
            <View style={{paddingTop:20}}></View>

        <TextInput
         value={title}
         onChangeText={(text) => settitle(text)}
         placeholder='Title' 
         style={[styles.Input,styles.title]} />

        <TextInput 
         //this 'multiline' commands allows user to type on dofferent lines
         multiline
         value={desc}
         onChangeText={(text) => setdesc(text)}
          placeholder='Description' style={[styles.Input,styles.description]}/>

<View style={{flexDirection:'row',justifyContent: 'center',alignItems:'center',paddingVertical:60}}>

            <TouchableOpacity>
            

            {
            title.trim() || desc.trim() ? tickbutton : null
            }
            
                
            </TouchableOpacity>

            <TouchableOpacity>
                
            {crossbutton}
            </TouchableOpacity>           
</View>

        <TouchableWithoutFeedback onPress={handlekeyb}>
            <View style={[styles.dismisskeyb,StyleSheet.absoluteFill]} />
        </TouchableWithoutFeedback> 

        </Modal>
        </View>

    )
}


const styles = StyleSheet.create ({
Input: {
    borderBottomWidth:2,
marginTop:30,
marginHorizontal:30 
},
title:{
    fontSize:30,
    fontWeight:'bold'

},
description:{
    fontSize:22,
},
dismisskeyb:{
    flex:1,
    zIndex:-1
},
tick:{
    paddingHorizontal:40,
    backgroundColor:'#FFFFF'

}

})