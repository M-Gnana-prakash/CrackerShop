import { Text, View } from 'react-native'
import Product from './Product'

export default function Products() {
  const products = [1,2,3,4,5,6,7,8,9,10]

  return (
    <View className="mt-6 px-4">
      <Text className="text-xl font-bold mb-4">
        Products
      </Text>

      <View className="flex-row flex-wrap justify-between">
        {products.map((product) => (
          <Product key={product} />
        ))}
      </View>
    </View>
  )
}
