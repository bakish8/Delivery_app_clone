import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { MapPinIcon, StarIcon } from 'react-native-heroicons/solid'
const RestuarntCard = (props) => {
  return (
    <TouchableOpacity className='relative mr-3 bg-white shadow'>
      <Image
        className='w-64 h-36 rounded-sm'
        source={{
          uri: props.imageUrl,
        }}
      />
      <View className='px-3 pb-4'>
        {' '}
        <Text className='font-bold text-lg pt-2'>{props.title}</Text>
        <View className='flex-row items-center space-x-1'>
          <StarIcon color='green' opacity={0.5} size={20} />
          <Text className='text-xs text-gray-500'>
            <Text className='text-green-500'> {props.raiting} </Text> ·
            {props.genere}
          </Text>
        </View>
        <View className='flex-row items-center space-x-1'>
          <MapPinIcon color='gray' opacity={0.4} size={22} />
          <Text className='text-xs text-gray-500'>
            Nearby · {props.address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestuarntCard
