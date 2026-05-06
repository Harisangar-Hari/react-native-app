// import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { useUserStore } from "@/store/userStore";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  const isAdmin = useUserStore((state) => state.isAdmin);
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#000",
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#888",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      {isAdmin && (
      
        <Tabs.Screen
          name="create"
          options={{
            title: "Add Property",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle-outline" size={size} color={color} />
            ),
          }}
        />
      )}

      
      

      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
