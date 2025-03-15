import { FlatList, Text } from "react-native";
import { meditations } from "@/data";
import { MeditationListItem } from "@/components/MeditationListItem";

import "../../global.css";

export default function Index() {
  return (
    <FlatList
      className="bg-white"
      contentContainerClassName="gap-5 p-3"
      data={meditations}
      renderItem={ ({item}) => <MeditationListItem meditation={item} />}
    />
  );
}
