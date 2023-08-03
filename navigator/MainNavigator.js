import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";

import * as ROUTES from "../src/constants/routes";
import Button from "../src/components/atoms/Button";
import SignIn from "../src/components/screens/SignIn";
import ForgotPassword from "../src/components/screens/ForgotPassword";
import BottomTabNavigator from "./BottomTabNavigator";
import DrawerNavigator from "./DrawerNavigator";
import RestaurantDetails from "../src/components/screens/RestaurantDetails";
import { Host } from "react-native-portalize";
import Deals from "../src/components/screens/Deals";
import OrderDetails from "../src/components/screens/OrderDetails";
import TelegraphDetails from "../src/components/screens/TelegraphDetails";
import TrackOrdermap from "../src/components/screens/TrackOrderMap";
import StoreDetails from "../src/components/screens/StoreDetails";
import SafeDetails from "../src/components/screens/SafeDetails";
import CategoriesDetails from "../src/components/screens/CategoriesDetails";
import RegisterScreen from "../src/components/screens/RegisterScreen";
import SearchScreen from "../src/components/screens/SearchScreen";

const Stack = createNativeStackNavigator();

function SignUp({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home misho</Text>
      <Button title="Go To Back" light onPress={() => navigation.goBack()} />
      <Button
        title="Finish shop"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Host>
        <Stack.Navigator>
          <Stack.Screen
            name={ROUTES.SIGN_IN_SCREEN}
            component={SignIn}
            options={{ title: "Sign in", headerShown: false }}
          />

          <Stack.Screen
            name={ROUTES.FORGOT_PASSWORD_SCREEN}
            component={ForgotPassword}
            options={{ title: "Forgot Password", headerShown: true }}
          />

          <Stack.Screen
            name={ROUTES.SIGN_UP_SCREEN}
            component={SignUp}
            options={{ title: "Sign Up", headerShown: true }}
          />

          <Stack.Screen
            name={ROUTES.DRAWER_NAVIGATOR}
            component={DrawerNavigator}
            options={{ headerShown: false, title: "" }}
          />

          <Stack.Screen
            name={ROUTES.REST_DETAILS}
            component={RestaurantDetails}
            options={{ headerShown: false, title: "Restaurant" }}
          />
          <Stack.Screen
            name={ROUTES.DEALS_SCREEN}
            component={Deals}
            options={{ headerShown: false, title: "Deals" }}
          />
          <Stack.Screen
            name={ROUTES.ORDER_DETAILS}
            component={OrderDetails}
            options={{ headerShown: true, title: "OrderDetails" }}
          />

          <Stack.Screen
            name={ROUTES.TELEGRAPH_DETAILS}
            component={TelegraphDetails}
            options={{ headerShown: true, title: "DeliveryDetails" }}
          />
          <Stack.Screen
            name={ROUTES.TRACK_ORDER_MAP}
            component={TrackOrdermap}
            options={{ headerShown: true, title: "TrackOrderMap" }}
          />
          <Stack.Screen
            name={ROUTES.STORE_DETAILS}
            component={StoreDetails}
            options={{ headerShown: false, title: "TrackOrderMap" }}
          />
          <Stack.Screen
            name={ROUTES.SAFE_DETAILS}
            component={SafeDetails}
            options={{ headerShown: false, title: "" }}
          />
          <Stack.Screen
            name={ROUTES.CATEGORY_DETAILS}
            component={CategoriesDetails}
            options={{ headerShown: false, title: "" }}
          />
          <Stack.Screen
            name={ROUTES.REGISTER_DETAILS}
            component={RegisterScreen}
            options={{ headerShown: false, title: "" }}
          />
          <Stack.Screen
            name={ROUTES.SEARCH_DETAILS}
            component={SearchScreen}
            options={{ headerShown: false, title: "SearchScreen" }}
          />
        </Stack.Navigator>
      </Host>
    </NavigationContainer>
  );
};

export default MainNavigator;
