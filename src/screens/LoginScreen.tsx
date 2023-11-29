import { View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableWithoutFeedback } from 'react-native'
import { Keyboard } from 'react-native'
import { SafeAreaView } from 'react-native'

const LoginScreen = () => {
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
                    style={tw`font-light`}
                    keyboardType='numeric'
                    maxLength={10}
                />
                <TouchableOpacity style={tw`absolute right-1 px-2 border-l border-gray-400 py-2`}>
                    <Text style={tw`text-xs`}>Send OTP</Text>
                </TouchableOpacity>
            </View>
            <View style={tw`w-[80%] flex flex-row items-center px-3 mb-5 bg-[#f6f4f5] rounded-2xl`}>
                <Icon name='key-outline' style={tw`mr-2`} size={25}/>
                <TextInput
                placeholder='Enter OTP'
                    style={tw`font-light`}
                    keyboardType='numeric'
                    maxLength={5}
                />
            </View>
            <TouchableOpacity style={tw`w-[80%] shadow-md mb-5 bg-[#FCBF1C] p-2 rounded-2xl`}>
                <Text style={tw`text-center text-lg text-white font-bold`}>Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen