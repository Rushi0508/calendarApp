import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/Ionicons'
import CustomText from '../components/CustomText'

const NotificationScreen = ({navigation}:any) => {
  return (
    <SafeAreaView style={tw`flex-1 bg-[#f6f4f5]`}>
        {/* Header Start  */}
        <View style={tw`flex z-1000 justify-center bg-white relative py-3 border-b border-gray-300`}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={tw`z-2 absolute left-2`}>
                <Icon name='chevron-back-outline' size={30} color="#000"/>
            </TouchableOpacity>
            <CustomText style={tw`text-lg text-center tracking-wide text-black font-bold z-1`}>Notifications</CustomText>
        </View>
        {/* Header Ends  */}
        
        {/* Notification Section  */}
        <View style={tw`flex relative bg-white justify-between flex-row border-b border-gray-400 py-1 px-3`}>
            <View style={tw`my-2 gap-3 flex flex-row`}>
                <View style={tw``}>
                    <Image
                        style={tw`h-12 w-12 rounded-full`}
                        source={require('../assets/avatar.jpg')}
                    />
                </View>
                <View style={tw``}>
                    <CustomText style={tw`text-black text-base`}>Abhishek scheduled a meeting</CustomText>
                    <CustomText style={tw`text-sm text-gray-700`}>25th December, 2023</CustomText>
                    <View style={tw`flex flex-row gap-2 mt-2`}>
                        <TouchableOpacity style={tw`py-1 px-5 rounded-2xl bg-red-500 shadow-sm`}>
                            <CustomText style={tw`text-xs text-white`}>Decline</CustomText>
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`py-1 px-5 rounded-2xl bg-[#FCBF1C] shadow-sm`}>
                            <CustomText style={tw`text-xs text-white`}>Accept</CustomText>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={tw`my-2`}>
                <CustomText style={tw`my-1 text-xs`}>6:00 P.M</CustomText>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default NotificationScreen