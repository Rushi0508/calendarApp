import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/Ionicons'

const HistoryScreen = ({navigation}:any) => {
  return (
    <SafeAreaView style={tw`flex-1 bg-[#f6f4f5]`}>
        {/* Header Start  */}
        <View style={tw`flex z-1000 justify-center bg-white relative py-3 border-b border-gray-300`}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={tw`z-2 absolute left-2`}>
                <Icon name='chevron-back-outline' size={30} color="#000"/>
            </TouchableOpacity>
            <Text style={tw`text-lg text-center text-black tracking-wide font-bold z-1`}>History</Text>
        </View>
        {/* Header Ends  */}
        
        {/* History Section  */}
        <View style={tw`flex relative flex-row items-center gap-3 bg-white border-b border-gray-400 py-1 px-3`}>
            <View style={tw`my-2`}>
                <Text style={tw``}>Fri</Text>
                <Text style={tw`text-base text-center text-black`}>3</Text>
            </View>
            <View style={tw`my-2`}>
                <Text style={tw`text-black text-base`}>Abhishek scheduled a meeting on 4 Saturday, 2023.</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Meeting")}>
                    <Text style={tw`text-sm`}>Click for Details</Text>
                </TouchableOpacity>
                <Text style={tw`absolute bottom-[-1] right-1 text-xs`}>6:30 P.M</Text>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default HistoryScreen