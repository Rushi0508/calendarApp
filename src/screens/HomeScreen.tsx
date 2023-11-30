import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/Ionicons'
import Filter from '../components/Filter'

const HomeScreen = ({navigation}:any) => {

    const [filterOpen, setFilterOpen] = useState(false);

    const handleFilter = () =>{
        if(filterOpen) setFilterOpen(false)
        else setFilterOpen(true)
    }

  return (
    <SafeAreaView style={tw`flex-1 bg-[#f6f4f5]`}>
        {/* Header Start  */}
        <View style={tw`flex z-1000 justify-center bg-white relative py-3 border-b border-gray-300`}>
            <TouchableOpacity onPress={handleFilter} style={tw`z-2 absolute left-2`}>
                <Icon name='filter-outline' size={25} color="#000"/>
            </TouchableOpacity>
            <Text style={tw`text-lg tracking-wide text-center text-black font-bold z-1`}>Home</Text>
            <View style={tw`flex flex-row absolute right-2 gap-2 z-2`}>
                <TouchableOpacity onPress={()=>navigation.navigate("Notification")}>
                    <Icon name='notifications-outline' size={25} color="#000"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("History")}>
                    <Icon name='timer-outline' size={25} color="#000"/>
                </TouchableOpacity>
            </View>
        </View>
        {/* Header Ends  */}
        
        {/* Home Section  */}
        <View style={tw`border-l-4 border-[#FCBF1C] m-2`}>
            <Text style={tw`ml-2 text-black text-lg font-semibold tracking-wider`}>Upcomming</Text>
        </View>

        <View style={tw`flex flex-row mx-2`}>
            <View style={tw`mt-2 mx-1`}>
                <Text style={tw`text-xs`}>Fri</Text>
                <Text style={tw`px-1 rounded-2xl bg-[#FCBF1C] text-center text-base text-white`}>3</Text>
            </View>
            <View style={tw`mb-2 flex-1 bg-white flex flex-row justify-between items-center rounded-xl p-3 mx-2`}>
                <View>
                    <Text style={tw`text-black`}>Meeting For Business</Text>
                    <Text style={tw`text-xs`}>7:35 - 8:30 P.M</Text>
                </View>
                <View style={tw`flex flex-row gap-1`}>
                    <Icon name='person-outline' size={18} color='#FCBF1C'/>
                    <Text style={tw`text-[#ca8a04]`}>2</Text>
                </View>
            </View>
        </View> 
        <View style={tw`flex flex-row mx-2`}>
            <View style={tw`mt-2 mx-1`}>
                <Text style={tw`text-xs`}>Sat</Text>
                <Text style={tw`px-1 rounded-2xl text-center text-base text-black`}>4</Text>
            </View>
            <View style={tw`mb-2 flex-1 bg-white flex flex-row justify-between items-center rounded-xl p-3 mx-2`}>
                <View>
                    <Text style={tw`text-black`}>Family Night Plan</Text>
                    <Text style={tw`text-xs`}>9:00 - 11:30 P.M</Text>
                </View>
                <View style={tw`flex flex-row gap-1`}>
                    <Icon name='person-outline' size={18} color='#FCBF1C'/>
                    <Text style={tw`text-[#ca8a04]`}>4</Text>
                </View>
            </View>
        </View>

        {/* Filter Modal  */}
        {
            filterOpen ? <Filter setFilterOpen={setFilterOpen}/> : null
        }

        {/* New Meeting Button  */}
        <TouchableOpacity onPress={()=>navigation.navigate("Modal")} style={tw`absolute bg-[#FCBF1C] rounded-full px-4 bottom-10 right-10`}>
            <Text style={[tw`text-white text-center`, {fontSize: 40}]}>+</Text>
        </TouchableOpacity>

    </SafeAreaView>
  )
}

export default HomeScreen