import RootNavigation from "./src/routes/route";

import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation/>
    </NavigationContainer>
  );
}