import { Dimensions, View } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'
import Carousel, { Pagination } from 'react-native-reanimated-carousel'
import { COLORS } from '../constant/theme'

const { width } = Dimensions.get('window')
const banners = [1, 2, 3, 4]

export default function BannerCarousel() {
  const progress = useSharedValue(0)

  return (
    <View className="mt-4">
      <Carousel
        width={width}
        height={100}
        autoPlay
        loop
        data={banners}
        scrollAnimationDuration={3000}
        onProgressChange={(_, absoluteProgress) => {
          progress.value = absoluteProgress
        }}
        renderItem={() => (
          <View className="mx-4 h-full rounded-2xl bg-gray-300" />
        )}
      />

      {/* ✅ Pagination Dots */}
      <Pagination.Basic
        progress={progress}
        data={banners}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: '#D1D5DB',
        }}
        activeDotStyle={{
          backgroundColor: COLORS.primary,
        }}
        containerStyle={{
          gap: 6,
          marginTop: 10,
          alignSelf: 'center',
        }}
      />
    </View>
  )
}
