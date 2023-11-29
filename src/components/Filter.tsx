import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import Cal from './Calendar'

const Filter = ({setFilterOpen}:any) => {
    const [calendarOpen, setCalendarOpen] = useState(false)
    const handleCalendar = ()=>{
        if(calendarOpen) setCalendarOpen(false)
        else setCalendarOpen(true)
    }

  return (
    <>
    {
        !calendarOpen?
        <View style={tw`absolute w-[90%] flex w-full top-40% items-center justify-center flex-1`}> 
        <View style={tw`bg-white w-[90%] rounded-2xl shadow-md`}>
            <View style={tw`flex flex-row justify-between p-3 border-b border-gray-300`}>
                <Text style={tw`text-black font-bold text-base tracking-wider`}>Filter</Text>
                <TouchableOpacity style={tw`mr-1`} onPress={()=>setFilterOpen(false)}>
                    <Text style={tw`text-[#FCBF1C] font-bold text-base tracking-wider`}>Apply</Text>
                </TouchableOpacity>
            </View>
            <View style={tw`pt-3 pb-5`}>
                <View style={tw`flex flex-row justify-around`}>
                    <Text style={tw`text-black p-2 font-semibold`}>Start Date</Text>
                    <Text style={tw`text-black p-2 font-semibold`}>End Date</Text>
                </View>
                <View style={tw`flex flex-row justify-center gap-2`}>
                    <TouchableOpacity onPress={handleCalendar} style={tw`py-1 px-4 rounded-2xl border border-gray-300 bg-white shadow-sm`}>
                        <Text style={tw`text-xs font-light text-black`}>Sat, 25 Dec 2023</Text>
                    </TouchableOpacity>
                    <Text style={tw`font-bold`}>- - - - -</Text>
                    <TouchableOpacity onPress={handleCalendar} style={tw`py-1 px-4 rounded-2xl border border-gray-300 bg-white shadow-sm`}>
                        <Text style={tw`text-xs font-light text-black`}>Sat, 25 Dec 2023</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </View>
        :
        <Cal setCalendarOpen={setCalendarOpen}/>
    }
    </>
  )
}

export default Filter