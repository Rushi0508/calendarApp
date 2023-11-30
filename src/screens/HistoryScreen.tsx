import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/Ionicons'
import CustomText from '../components/CustomText'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HistoryScreen = ({navigation}:any) => {

    const handleLogOut = async ()=>{
        try{
            await AsyncStorage.removeItem('isLoggedIn')
            navigation.navigate("Login");
        }catch(err:any){
            console.log("Cannot remove storage")
        }
    }

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
        {/* Header Start  */}
        <View style={tw`flex z-1000 justify-center bg-white relative py-3 border-b border-gray-300`}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={tw`z-2 absolute left-2`}>
                <Icon name='chevron-back-outline' size={30} color="#000"/>
            </TouchableOpacity>
            <CustomText style={tw`text-lg text-center text-black tracking-wide font-bold z-1`}>History</CustomText>
        </View>
        {/* Header Ends  */}
        {/* History Section  */}
        <View style={[tw`flex relative bg-white w-full border-b border-gray-400 flex-row items-center gap-3 py-1`,{paddingHorizontal: 10}]}>
            <View style={tw`my-2`}>
                <CustomText style={tw``}>Fri</CustomText>
                <CustomText style={tw`text-base text-center text-black`}>3</CustomText>
            </View>
            <View style={tw`my-2 w-full flex-shrink-1`}>
                <CustomText style={tw`text-black text-sm`}>Abhishek scheduled a meeting on 4 Saturday, 2023.</CustomText>
                <TouchableOpacity onPress={()=>navigation.navigate("Meeting")}>
                    <CustomText style={tw`text-sm`}>Click for Details</CustomText>
                </TouchableOpacity>
                <CustomText style={tw`absolute bottom-[-1] right-1 text-xs`}>6:30 P.M</CustomText>
            </View>
        </View>
        <TouchableOpacity onPress={handleLogOut} style={tw`absolute bottom-5 flex flex-row justify-center w-full `}>
            <CustomText style={tw`text-base`}>Log Out</CustomText>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HistoryScreen