import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from 'react-native-heroicons/solid'
import { TextInput } from 'react-native-web'
import Categories from '../components/Categories'
import FeturedRow from '../components/FeturedRow'

const HomeScreen = () => {
  const navigation = useNavigation()
  const [featuredCategories, setfeaturedCategories] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView>
      <View className='space-x-2 bg-white'>
        <View className='flex-row pb-3 items-center mx-4 px-4'>
          <Image
            className='h-9 w-9 rounded-full p-6 bg-gray-300'
            source={{
              uri: 'https://i.ibb.co/Ss3hcN1/fast-food-delivery-12982.png',
            }}
          />{' '}
          <View className='flex-1'>
            <Text className='ml-2 font-bold text-gray-400 xs'>Order Now</Text>
            <Text className='ml-1 font-bold xl'>
              Current Location
              <ChevronDownIcon color='#00CCBB' size={15} />
            </Text>
          </View>
          <UserIcon color='#00CCBB' size={35} />
        </View>
        <View className='flex-row items-center space-x-2 pb-2 mx-4 px-4'>
          <View className='flex-row space-x-2 p-3 bg-gray-300 flex-1'>
            <MagnifyingGlassIcon size={20} color='gray' />
            <TextInput placeholder='Search' KeyboardType='default' />
          </View>
          <View>
            <AdjustmentsVerticalIcon color='#00CCBB' />
          </View>
        </View>
      </View>{' '}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Categories />
        <FeturedRow
          id='1'
          title='Fetured'
          Description='place orders for your resturants.'
          category='Fetured'
        />
        <FeturedRow
          id='2'
          title='Tasty Discounts'
          Description='place orders for your resturants.'
          category='Fetured'
        />
        <FeturedRow
          id='3'
          title='Offers near you'
          Description='place orders for your resturants.'
          category='Fetured'
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
