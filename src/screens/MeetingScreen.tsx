import { View, Text, TouchableWithoutFeedback, SafeAreaView, Keyboard, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import tw from 'twrnc'

const MeetingScreen = ({navigation}:any) => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={tw`flex-1 bg-white`}>
        {/* Meeting Section  */}
          {/* Meeting Title  */}
        <View style={tw`px-5 border-b border-gray-400 py-2`}>
          <Text style={tw`ml-3 text-xl font-semibold tracking-wide text-black`}>Meeting</Text>
        </View>

          {/* Meeting Dates  */}
        <View style={tw`py-5 border-b border-gray-400 w-[90%] mx-auto`}>
          {/* View 1 */}
          <View style={tw`flex flex-row justify-between items-center mx-3`}>
            <View style={tw`flex flex-row justify-between items-center`}>
              <Icon style={tw`text-black`} name='time-outline' size={20} />
              <Text style={tw`mx-2 text-black`}>All Day</Text>
            </View>
            <BouncyCheckbox
              disableBuiltInState
              isChecked={isChecked}
              onPress={() => setIsChecked(!isChecked)}
              fillColor="#475569"
              size={20}
            />
          </View>
          {/* Outer View  */}
          <View style={tw`flex flex-row justify-between mx-6 my-3`}>
            {/* View 1  */}
            <View style={tw`flex`}>
              <TouchableOpacity style={tw`py-1 px-4`}>
                  <Text style={tw`text-xs text-black`}>Sat, 25 Dec 2023</Text>
              </TouchableOpacity>
              <Text style={tw`font-bold text-center`}>|</Text>
              <Text style={tw`font-bold text-center`}>|</Text>
              <TouchableOpacity style={tw`py-1 px-4`}>
                  <Text style={tw`text-xs text-black`}>Sat, 25 Dec 2023</Text>
              </TouchableOpacity>
            </View>
            {/* View 2  */}
            <View style={tw`flex justify-between`}>
              <TouchableOpacity style={tw`py-1 px-4`}>
                  <Text style={tw`text-xs text-black`}>12:30 pm</Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw`py-1 px-4`}>
                  <Text style={tw`text-xs text-black`}>11:30 pm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

          {/* Meeting Notes  */}
          <View style={tw`pt-5 w-[90%] mx-auto`}>
            <View style={tw`flex flex-row items-center mx-3`}>
              <Icon style={tw`text-black`} name='book-outline' size={20} />
              <Text style={tw`mx-2 text-black`}>No Note</Text>
            </View>
          </View>

          {/* Meeting People  */}
          <View style={tw`py-5 w-[90%] mx-auto`}>
            <View style={tw`flex flex-row items-center mx-3`}>
              <Icon style={tw`text-black`} name='people-outline' size={20} />
              <Text style={tw`mx-2 text-black`}>Add People</Text>
            </View>
            <View style={tw`mx-10 my-3`}>
              <View style={tw`flex flex-row gap-2`}>
                <TouchableOpacity style={tw`py-1 px-4 rounded-2xl border border-gray-300 bg-white shadow-sm`}>
                    <Text style={tw`text-xs text-black`}>Abhishek</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`py-1 px-4 rounded-2xl border border-gray-300 bg-white shadow-sm`}>
                    <Text style={tw`text-xs text-black`}>Vaibhav</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default MeetingScreen