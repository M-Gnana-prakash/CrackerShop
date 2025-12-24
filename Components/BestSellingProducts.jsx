import { ScrollView, Text, View } from 'react-native'
import Product from './Product'

export default function BestSellingProducts() {
  return (
    <View className="mt-6 px-4">
      <Text className="text-xl font-bold mb-4">
        Best Selling Products
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 16 }}
        style={{ paddingBottom: 4 }}
      >
        {[1, 2, 3, 4, 5, 6].map((product) => (
          <Product key={product} horizontal />
        ))}
      </ScrollView>
    </View>
  )
}
