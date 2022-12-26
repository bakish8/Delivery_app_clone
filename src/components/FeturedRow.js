import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/solid'
import RestuarntCard from './RestuarntCard'
import resturats from '../../data/resturants'

const FeturedRow = (props) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{props.title}</Text>
        <ArrowRightIcon size={20} color='#00CCBB' />
      </View>
      <Text className='text-xs text-gray-500 px-4'>{props.Description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator='false'
        className='pt-4'
      >
        {resturats?.map((restaurant) => (
          <RestuarntCard
            key={restaurant.id}
            id={restaurant.id}
            imageUrl={restaurant.image}
            title={restaurant.title}
            raiting={restaurant.raiting}
            genere={restaurant.genere}
            address={restaurant.address}
            short_description={restaurant.short_desription}
            dishes={restaurant.dishes}
            long={restaurant.lng}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default FeturedRow
