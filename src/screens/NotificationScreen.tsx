import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/Ionicons'

const NotificationScreen = ({navigation}:any) => {
  return (
    <SafeAreaView style={tw`flex-1 bg-[#f6f4f5]`}>
        {/* Header Start  */}
        <View style={tw`flex z-1000 justify-center bg-white relative py-3 border-b border-gray-300`}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={tw`z-2 absolute left-2`}>
                <Icon name='chevron-back-outline' size={30} color="#000"/>
            </TouchableOpacity>
            <Text style={tw`text-lg text-center tracking-wide text-black font-bold z-1`}>Notifications</Text>
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
                    <Text style={tw`text-black text-base`}>Abhishek scheduled a meeting</Text>
                    <Text style={tw`text-sm text-gray-700`}>25th December, 2023</Text>
                    <View style={tw`flex flex-row gap-2 mt-2`}>
                        <TouchableOpacity style={tw`py-1 px-5 rounded-2xl bg-red-500 shadow-sm`}>
                            <Text style={tw`text-xs text-white`}>Decline</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`py-1 px-5 rounded-2xl bg-[#FCBF1C] shadow-sm`}>
                            <Text style={tw`text-xs text-white`}>Accept</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={tw`my-2`}>
                <Text style={tw`my-1 text-xs`}>6:00 P.M</Text>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default NotificationScreen