import React, { useState } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import DiscoverScreen from "../screens/DiscoverScreen";
import NewsScreen from "../screens/NewsScreen";
import TopNavigatin from "./TopNavigatin";

const InshotTabs = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(1);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewsScreen,
  });
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNavigatin index={index} setIndex={setIndex} />}
    />
  );
};

export default InshotTabs;
