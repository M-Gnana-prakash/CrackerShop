import { ScrollView, Text, View } from 'react-native'
import Categories from './Categories'

export default function ShopByCategory() {
  const categories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <View className="mt-6 px-4">
      <Text className="text-xl font-bold">Shop By Category</Text>

      <View className="mt-4">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 16 }}
        >
          {categories.map((item, index) => (
            <Categories key={index} />
          ))}
        </ScrollView>
      </View>
    </View>
  )
}
