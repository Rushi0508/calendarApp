import { View, Text, TouchableWithoutFeedback, SafeAreaView, Keyboard, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import tw from 'twrnc'
import CustomText from '../components/CustomText'

const MeetingScreen = ({navigation}:any) => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={tw`flex-1 bg-white`}>
        {/* Meeting Section  */}
          {/* Meeting Title  */}
        <View style={tw`px-5 border-b border-gray-400 py-3`}>
          <CustomText style={tw`ml-3 text-xl font-semibold tracking-wide text-black`}>Meeting</CustomText>
        </View>

          {/* Meeting Dates  */}
        <View style={tw`py-5 border-b border-gray-400 w-[90%] mx-auto`}>
          {/* View 1 */}
          <View style={tw`flex flex-row justify-between items-center mx-3`}>
            <View style={tw`flex flex-row justify-between items-center`}>
              <Icon style={tw`text-black`} name='time-outline' size={22} />
              <CustomText style={tw`mx-2 text-black`}>All Day</CustomText>
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
                  <CustomText style={tw`text-xs text-black`}>Sat, 25 Dec 2023</CustomText>
              </TouchableOpacity>
              <CustomText style={tw`font-bold text-center`}>|</CustomText>
              <CustomText style={tw`font-bold text-center`}>|</CustomText>
              <TouchableOpacity style={tw`py-1 px-4`}>
                  <CustomText style={tw`text-xs text-black`}>Sat, 25 Dec 2023</CustomText>
              </TouchableOpacity>
            </View>
            {/* View 2  */}
            <View style={tw`flex justify-between`}>
              <TouchableOpacity style={tw`py-1 px-4`}>
                  <CustomText style={tw`text-xs text-black`}>12:30 pm</CustomText>
              </TouchableOpacity>
              <TouchableOpacity style={tw`py-1 px-4`}>
                  <CustomText style={tw`text-xs text-black`}>11:30 pm</CustomText>
              </TouchableOpacity>
            </View>
          </View>
        </View>

          {/* Meeting Notes  */}
          <View style={tw`pt-5 w-[90%] mx-auto`}>
            <View style={tw`flex flex-row items-center mx-3`}>
              <Icon style={tw`text-black`} name='book-outline' size={22} />
              <CustomText style={tw`mx-2 text-black`}>No Note</CustomText>
            </View>
          </View>

          {/* Meeting People  */}
          <View style={tw`py-5 w-[90%] mx-auto`}>
            <View style={tw`flex flex-row items-center mx-3`}>
              <Icon style={tw`text-black`} name='people-outline' size={22} />
              <CustomText style={tw`mx-2 text-black`}>Add People</CustomText>
            </View>
            <View style={tw`mx-10 my-3`}>
              <View style={tw`flex flex-row gap-2`}>
                <TouchableOpacity style={tw`py-1 px-4 rounded-2xl border border-gray-300 bg-white shadow-sm`}>
                    <CustomText style={tw`text-xs text-black`}>Abhishek</CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={tw`py-1 px-4 rounded-2xl border border-gray-300 bg-white shadow-sm`}>
                    <CustomText style={tw`text-xs text-black`}>Vaibhav</CustomText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default MeetingScreen