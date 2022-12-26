import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
const CategoryCard = (props) => {
  return (
    <TouchableOpacity className='relative mr-2'>
      <Image
        className='w-20 h-20 rounded'
        source={{
          uri: props.imgUrl,
        }}
      />
      <Text className='absolute bottom-1 left-1 font-bold text-white'>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

export default CategoryCard
