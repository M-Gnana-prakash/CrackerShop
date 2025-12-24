import { ScrollView, View } from 'react-native'
import BannerCarousel from '../../Components/BannerCarousel'
import BestSellingProducts from '../../Components/BestSellingProducts'
import FilterChips from '../../Components/FilterChips'
import HomeHeader from '../../Components/HomeHeader'
import Products from '../../Components/Products'
import ShopByCategory from '../../Components/ShopByCategory'

export default function Home() {
  return (
    <View className="flex-1 bg-white">
      <HomeHeader />

      {/* Vertical Scroll */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <BannerCarousel />
        <ShopByCategory />
        <BestSellingProducts />
        <FilterChips />
        <Products />
      </ScrollView>
    </View>
  )
}
