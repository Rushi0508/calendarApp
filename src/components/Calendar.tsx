import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Calendar } from 'react-native-calendars'
import tw from 'twrnc'

const Cal = ({setCalendarOpen}:any) => {
    const [selected, setSelected] = useState("")
  return (
    <View style={[tw`w-[90%] m-auto`]}> 
        <Calendar
            style={[{height: 370}, tw`rounded-2xl shadow-md`]}
            theme={{
                selectedDayBackgroundColor: "#FCBF1C",
                todayTextColor: "#000000",
                selectedDayTextColor: "#FFFFFF"
            }}
            onDayPress={day => {
                setSelected(day.dateString);
                setTimeout(()=>{
                    setCalendarOpen(false)
                }, 1000)
            }}
            markedDates={{
                [selected]: {selected: true, disableTouchEvent: true}
            }}
        />
    </View>
  )
}

export default Cal