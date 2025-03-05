import { Redirect, Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function TabLayout() {
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const { isLoggedIn, token } = useTypedSelector((state) => state.auth);
  console.log("isLoggedIn:", isLoggedIn);
  console.log("token:", token);

  if (!token && !isLoggedIn) {
    return <Redirect href={"/"} />;
  } else {
    return (
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            //   backgroundColor: "white",
            backgroundColor: Colors.customColors.gray700,
            position: "absolute",
            borderTopColor: "yellow",
            minHeight: 70,
          },
          headerStyle: { backgroundColor: Colors.customColors.primary500 },
          headerTintColor: Colors.customColors.gray700,
        }}>
        <Tabs.Screen
          name="dashboard"
          options={{
            headerTitle: "Dashboard",
            headerShown: true,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={"blue"}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="book-scanner"
          options={{
            headerTitle: "BookScanner",
            headerShown: true,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                name={focused ? "camera" : "camera-outline"}
                color={"blue"}
              />
            ),
          }}
        />
      </Tabs>
    );
  }
}
