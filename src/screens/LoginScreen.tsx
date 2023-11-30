import { View, Text, Image, TextInput, Button, TouchableOpacity, ActivityIndicator, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableWithoutFeedback } from 'react-native'
import { Keyboard } from 'react-native'
import { SafeAreaView } from 'react-native'
import CustomText from '../components/CustomText'
import auth from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginScreen = ({navigation}:any) => {
    const [confirm, setConfirm] = useState(null)
    const [code, setCode] = useState('');
    const [mobileNumber, setMobileNumber] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    async function signInWithPhoneNumber(phoneNumber:any) {
        try{
            setIsLoading(true)
            const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
            // @ts-ignore
            setConfirm(confirmation);
            ToastAndroid.show('OTP sent successfully', ToastAndroid.BOTTOM)
            setIsLoading(false)
            
        }
        catch(err:any){
            console.log(err)
        }
    }

    async function confirmCode() {
        try {
            console.log(mobileNumber, code)
            // @ts-ignore
            const {user} = await confirm.confirm(code);
            console.log(user)
            try{
                await AsyncStorage.setItem('isLoggedIn',user.uid)
            }catch(err:any){
                console.log("Unable to save data")
            }
            navigation.navigate("Home")
        } catch (error) {
            console.log('Invalid code.');
        }
    }

    const fetchUser = async ()=>{
        try{
            const userID = await AsyncStorage.getItem('isLoggedIn');
            if(userID != null){
                navigation.navigate("Home")
            }
        }catch(err:any){
            console.log("No User Data Saved")
        }
    }

    useEffect(()=>{
        fetchUser();
    }, [])
    

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={tw`flex-1 bg-white items-center justify-center`}>
            <Image
                style={[tw`h-20 w-40 mb-5`, {objectFit: 'cover'}]}
                source={require('../assets/title.png')} 
            />
            <Image
                style={tw`h-60 w-60 mb-10`}
                source={require('../assets/login.webp')} 
            />
            <View style={tw`w-[80%] relative flex flex-row items-center px-3 mb-5 bg-[#f6f4f5] rounded-2xl`}>
                <Icon name='people-outline' style={tw`mr-2`} size={25}/>
                <TextInput
                placeholder='Mobile No.'
                    style={[tw`font-light w-[905]`, {fontFamily: 'Poppins-Regular'}]}
                    keyboardType='numeric'
                    value={mobileNumber}
                    onChangeText={(text)=>setMobileNumber(text)}
                />
                <TouchableOpacity onPress={()=>signInWithPhoneNumber(`+91${mobileNumber}`)} style={tw`absolute right-1 px-2 border-l border-gray-400 py-2`}>
                    {
                        !isLoading? 
                        <CustomText style={tw`text-xs`}>Send OTP</CustomText> 
                        :
                        <ActivityIndicator size="small" color="#000000" />
                    }
                </TouchableOpacity>
            </View>
            <View style={tw`w-[80%] flex flex-row items-center px-3 mb-5 bg-[#f6f4f5] rounded-2xl`}>
                <Icon name='key-outline' style={tw`mr-2`} size={25}/>
                <TextInput
                placeholder='Enter OTP'
                    style={[tw`font-light w-[90%]`, {fontFamily: 'Poppins-Regular'}]}
                    keyboardType='numeric'
                    value={code}
                    onChangeText={(text)=>setCode(text)}
                />
            </View>
            <TouchableOpacity onPress={confirmCode} style={tw`w-[80%] shadow-md mb-5 bg-[#FCBF1C] p-2 rounded-2xl`}>
                <CustomText style={tw`text-center text-lg text-white font-bold`}>Login</CustomText>
            </TouchableOpacity>
        </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen