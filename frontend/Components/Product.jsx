import { Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../constant/theme'

export default function Product({ horizontal = false }) {
  return (
    <TouchableOpacity
      className={`
        bg-[#f5f5f5] rounded-xl p-2
        ${horizontal ? 'w-36 mr-4' : 'w-[47%] mb-4'}
      `}
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        elevation: 2,
      }}
    >
      {/* Image */}
      <View className="h-20 bg-[#ddd] rounded-lg" />

      {/* Name */}
      <Text className="mt-1.5 text-sm font-medium" numberOfLines={2}>
        Product Name
      </Text>

      {/* Price */}
      <Text className="text-xs text-gray-600 mt-0.5">
        $99.99
      </Text>

      {/* Button */}
      <TouchableOpacity className="mt-1.5 py-1.5 rounded-md items-center" style={{ backgroundColor: COLORS.primary }}>
        <Text className="text-white text-xs font-semibold">
          Add to Cart
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}
