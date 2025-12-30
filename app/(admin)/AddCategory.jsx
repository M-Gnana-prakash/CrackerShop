import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { THEME } from '../../Components/ui/theme';

export default function AddCategory() {
    const router = useRouter();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [isActive, setIsActive] = useState(true);

    return (
        <View className="flex-1 bg-white">
            <View className="flex-row items-center gap-2 bg-white p-3 shadow-sm z-10">
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color={THEME.colors.primary} />
                </TouchableOpacity>
                <Text className="text-2xl font-bold" style={{ color: THEME.colors.primary }}>
                    Add Category
                </Text>
            </View>

            <ScrollView className="flex-1 bg-gray-50 p-5" showsVerticalScrollIndicator={false}>
                <View className="bg-white rounded-xl p-5 mb-5 shadow-sm border border-gray-100 space-y-4 gap-4">

                    {/* Image Placeholder */}
                    <TouchableOpacity className="h-40 bg-gray-100 rounded-xl items-center justify-center border-2 border-dashed border-gray-300">
                        <Ionicons name="image-outline" size={40} color="gray" />
                        <Text className="text-gray-400 mt-2 font-bold">Upload Category Icon</Text>
                    </TouchableOpacity>

                    <View>
                        <Text className="mb-2 text-xs font-bold uppercase text-gray-500">Category Name</Text>
                        <TextInput
                            placeholder="e.g. Sparklers"
                            value={name}
                            onChangeText={setName}
                            className="bg-gray-50 p-3 rounded-lg text-gray-800 border border-gray-200"
                        />
                    </View>

                    <View>
                        <Text className="mb-2 text-xs font-bold uppercase text-gray-500">Description</Text>
                        <TextInput
                            placeholder="Brief description of the category..."
                            value={description}
                            onChangeText={setDescription}
                            multiline
                            numberOfLines={3}
                            className="h-20 bg-gray-50 p-3 rounded-lg text-gray-800 border border-gray-200"
                            textAlignVertical="top"
                        />
                    </View>

                    <View className="flex-row justify-between items-center py-2">
                        <Text className="text-base font-bold text-gray-700">Active Status</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#FF6B00' }}
                            thumbColor={isActive ? '#ffffff' : '#f4f3f4'}
                            onValueChange={setIsActive}
                            value={isActive}
                        />
                    </View>
                </View>

                {/* Save Button */}
                <TouchableOpacity
                    onPress={() => {
                        if (!name) {
                            alert('Category Name is required');
                            return;
                        }
                        alert('Category Added Successfully!');
                        router.back();
                    }}
                    className="mb-10 flex-row items-center justify-center rounded-xl bg-orange-500 py-4 shadow-md active:bg-orange-600"
                >
                    <Ionicons name="checkmark-circle-outline" size={24} color="white" className="mr-2" />
                    <Text className="font-bold text-white text-lg">Save Category</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
}
