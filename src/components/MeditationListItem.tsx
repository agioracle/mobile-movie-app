import { View, Text } from "react-native";
import { Meditation } from "@/types";

export function MeditationListItem( { meditation } : { meditation: Meditation }) {
    return (
        <View className="p-5 border-gray-300 border-2 rounded-lg">
            <Text className="font-semibold text-2xl">{meditation.title}</Text>
        </View>
    )
}
