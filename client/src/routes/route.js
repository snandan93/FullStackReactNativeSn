import { View, Text } from "react-native";
import React from "react";
// import { AuthProvider } from "./context/authContext";
// import ScreenMenu from "./components/Menus/ScreenMenu";
// import { PostProvider } from "./context/postContext";
import { AuthProvider } from "../context/authContext";
import { PostProvider } from "../context/postContext";
import ScreenMenu from "../components/Menus/ScreenMenu";

const RootNavigation = () => {
  return (
    <AuthProvider>
      <PostProvider>
        <ScreenMenu />
      </PostProvider>
    </AuthProvider>
  );
};

export default RootNavigation;