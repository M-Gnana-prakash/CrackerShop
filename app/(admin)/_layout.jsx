import { Tabs } from "expo-router";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarStyle: { display: 'none' } }}
    >
      <Tabs.Screen
        name="AdminMain"
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="AddNewProduct"
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="Inventory"
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="Users"
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="Orders"
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="ChitManagement"
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="AddChitScheme"
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="ChitDetails"
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="Categories"
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="AddCategory"
        options={{
          tabBarButton: () => null,
        }}
      />
    </Tabs>
  )
}