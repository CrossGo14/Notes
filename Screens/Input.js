import react,{useState,useEffect} from "react";
import { Text,TextInput,SafeAreaView,View,StyleSheet,TouchableWithoutFeedback,Keyboard,Modal} from "react-native";


export default function Input() {

    const handlekeyb =() =>{
        Keyboard.dismiss();


    }
     const [title, settitle] = useState('');
     const [desc, setdesc] = useState('')

    return(
        //modal is different than view, but ig its more functional and ractiacal than vie
        <Modal>
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


        <TouchableWithoutFeedback onPress={handlekeyb}>
            <View style={[styles.dismisskeyb,StyleSheet.absoluteFill]} />
        </TouchableWithoutFeedback> 

        </Modal>
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

}

})