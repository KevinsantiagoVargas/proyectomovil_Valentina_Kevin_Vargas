import { useState } from "react";
import { FlatList, Image, RefreshControl, Text, View } from "react-native"; // Asegúrate de importar Text e Image
import { SafeAreaView } from "react-native-safe-area-context";

import { SearchInput } from "../../components"; // Mantener SearchInput
import { images } from "../../constants"; // Asegúrate de que 'images' esté disponible
import { getAllPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";

const Home = () => {
  const { refetch } = useAppwrite(getAllPosts); // Dejar solo refetch
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-primary">
      {/* Sección adicional con texto de bienvenida y logo */}
      <View className="px-4 my-6">
        <Text className="font-pmedium text-sm text-gray-100">
          Bienvenido a Autobooks
        </Text>
        <Text className="text-2xl font-psemibold text-white">
          Valentina y Kevin
        </Text>

        <View className="mt-1.5">
          <Image
            source={images.logoSmall}
            className="w-9 h-10"
            resizeMode="contain"
          />
        </View>
      </View>

      <FlatList
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <SearchInput />
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;

