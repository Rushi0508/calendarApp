import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import tw from 'twrnc'
import { TextInput } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { TouchableWithoutFeedback } from 'react-native'
import { Keyboard } from 'react-native'
import CustomText from '../components/CustomText'

const ModalScreen = ({navigation}:any) => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={tw`flex-1 bg-white`}>
        {/* Header Start  */}
        <View style={tw`flex flex-row justify-between items-center py-3 px-2`}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={tw``}>
                <Icon name='close-outline' size={30} color="#000"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Meeting")} style={tw`bg-[#FCBF1C] py-1 px-2 rounded-2xl mr-2`}>
              <CustomText style={tw`text-base text-white font-semibold`}>Create</CustomText>
            </TouchableOpacity>
        </View>
        {/* Header Ends  */}

        {/* Modal Section  */}
          {/* Meeting Title  */}
        <View style={tw`px-5 border-b border-gray-400 w-[90%] mx-auto`}>
          <TextInput
            placeholder='Add Title'
            style={tw`text-lg tracking-wider text-black`}
          />
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
              fillColor="#FCBF1C"
              size={20}
            />
          </View>
          {/* Outer View  */}
          <View style={tw`flex flex-row justify-between mx-6 my-3`}>
            {/* View 1  */}
            <View style={tw`flex`}>
              <TouchableOpacity style={tw`py-1 px-4 rounded-2xl border border-gray-300 bg-white shadow-sm`}>
                  <CustomText style={tw`text-xs text-black`}>Sat, 25 Dec 2023</CustomText>
              </TouchableOpacity>
              <CustomText style={tw`font-bold text-center`}>|</CustomText>
              <CustomText style={tw`font-bold text-center`}>|</CustomText>
              <TouchableOpacity style={tw`py-1 px-4 rounded-2xl border border-gray-300 bg-white shadow-sm`}>
                  <CustomText style={tw`text-xs text-black`}>Sat, 25 Dec 2023</CustomText>
              </TouchableOpacity>
            </View>
            {/* View 2  */}
            <View style={tw`flex justify-between`}>
              <TouchableOpacity style={tw`py-1 px-4 rounded-2xl border border-gray-300 bg-white shadow-sm`}>
                  <CustomText style={tw`text-xs text-black`}>12:30 pm</CustomText>
              </TouchableOpacity>
              <TouchableOpacity style={tw`py-1 px-4 rounded-2xl border border-gray-300 bg-white shadow-sm`}>
                  <CustomText style={tw`text-xs text-black`}>11:30 pm</CustomText>
              </TouchableOpacity>
            </View>
          </View>
        </View>

          {/* Meeting Notes  */}
          <View style={tw`pt-5 w-[90%] mx-auto`}>
            <View style={tw`flex flex-row items-center mx-3`}>
              <Icon style={tw`text-black`} name='book-outline' size={22} />
              <CustomText style={tw`mx-2 text-black`}>Add Note</CustomText>
            </View>
            <View style={tw`mx-10 my-3`}>
              <TextInput 
                multiline
                numberOfLines={4}
                placeholder='Add meeting notes...'
                style={tw`border border-[#FCBF1C] rounded-xl px-2 min-h-20`}
                textAlignVertical='top'
              />
            </View>
          </View>

          {/* Meeting People  */}
          <View style={tw`pb-5 pt-2 border-b border-gray-400 w-[90%] mx-auto`}>
            <View style={tw`flex flex-row items-center mx-3`}>
              <Icon style={tw`text-black`} name='people-outline' size={22} />
              <CustomText style={tw`mx-2 text-black`}>Add People</CustomText>
            </View>
            <View style={tw`mx-10 my-3`}>
              <TextInput 
                placeholder='Search people'
                style={tw`border-2 border-gray-100 text-black rounded-xl px-2 py-1`}
              />
            </View>
          </View>

          {/* People  */}
          <View style={tw`w-[90%] mx-auto`}>
            <View style={tw`flex flex-row gap-2 mx-10 py-4`}>
              <TouchableOpacity style={tw`py-1 px-4 rounded-2xl border border-gray-300 bg-white shadow-sm`}>
                  <CustomText style={tw`text-xs text-black`}>Abhishek</CustomText>
              </TouchableOpacity>
              <TouchableOpacity style={tw`py-1 px-4 rounded-2xl border border-gray-300 bg-white shadow-sm`}>
                  <CustomText style={tw`text-xs text-black`}>Vaibhav</CustomText>
              </TouchableOpacity>
            </View>
          </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default ModalScreen