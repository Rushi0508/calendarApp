import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/Ionicons'
import Filter from '../components/Filter'

const HomeScreen = () => {

    const [filterOpen, setFilterOpen] = useState(false);

    const handleFilter = () =>{
        if(filterOpen) setFilterOpen(false)
        else setFilterOpen(true)
    }

  return (
    <SafeAreaView style={tw`flex-1 bg-[#f6f4f5]`}>
        {/* Header Start  */}
        <View style={tw`flex z-1000 justify-center bg-white relative py-3 border-b border-gray-400`}>
            <TouchableOpacity onPress={handleFilter} style={tw`z-2 absolute left-2`}>
                <Icon name='filter-outline' size={25} color="#000"/>
            </TouchableOpacity>
            <Text style={tw`text-lg text-center text-black font-bold z-1`}>Home</Text>
            <View style={tw`flex flex-row absolute right-2 gap-2`}>
                <TouchableOpacity>
                    <Icon name='notifications-outline' size={25} color="#000"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name='albums-outline' size={25} color="#000"/>
                </TouchableOpacity>
            </View>
        </View>
        {/* Header Ends  */}
    </SafeAreaView>
  )
}

export default HomeScreen