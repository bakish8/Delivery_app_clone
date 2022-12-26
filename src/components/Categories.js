import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import categories from '../../data/categories'
const Categories = () => {
  return (
    <View>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
      >
        {categories?.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            imgUrl={category.image}
            title={category.title}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default Categories
