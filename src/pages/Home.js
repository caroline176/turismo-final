import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/Styles";

// Import Carousel
import Carousel from "react-native-snap-carousel";

// Import fonts
import { useFonts } from "expo-font";

const data = [
  //Link das imagens do carousel
  {
    imgUrl:
      "https://iporanga.sp.gov.br/ipotur/wp-content/uploads/2016/02/casa-de-pedra.jpg",
  },
  {
    imgUrl:
      "https://visiteholambra.com.br/assets/img/history/expoflora-moinho-holambra-sp.jpg",
  },
  {
    imgUrl:
      "https://aeanalandia.com.br/wp-content/uploads/2020/02/morro-do-camelo.jpg",
  },
  {
    imgUrl:
      "https://a.cdn-hotels.com/gdcs/production19/d269/c8ff3c22-a99a-49ab-a250-48d99293a0c3.jpg",
  },
];
function CarouselCardItem({ item, index }) {
  return (
    <View
      style={{
        height: 400, // Define altura do carousel
        width: "100%", // Define a largura do carousel
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30, // Margem superior do carousel
      }}
    >
      <View
        style={{
          height: 350,
          width: 300,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
          shadowColor: "lightblue", // Define a cor da sombra
          shadowOffset: { width: 5, height: 5 }, // Define o tamanho da sombra
          shadowOpacity: 0, // Define a opacidade da sombra
          shadowRadius: 100, // Define o raio de desfocagem da sombra
          elevation: 5, // Define a elevação de uma view
          borderRadius: 20, // Deixa a borda arrendodada
          backgroundColor: "white", // Define a cor de fundo
          borderRadius: 30, // Deixa a borda arrendodada
        }}
      >
        <Image
          source={{ uri: item.imgUrl }} // style das imagens do carousel
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 30,
          }}
        />
      </View>
    </View>
  );
}

export default function Home() {
  const [fontsLoaded] = useFonts({
    // Link das fontes ultilizadas
    "PoetsenOne-Regular": require("../assets/fonts/PoetsenOne-Regular.ttf"),
    "JuliusSansOne-Regular": require("../assets/fonts/JuliusSansOne-Regular.ttf"),
    "CormorantGaramond-Light": require("../assets/fonts/CormorantGaramond-Light.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={{ fontFamily: "PoetsenOne-Regular", fontSize: 30 }}>
            Explore
          </Text>
        </View>
        <View style={styles.viewButtons}>
          <TouchableOpacity
            style={{
              fontFamily: "CormorantGaramond-Light",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "lightblue" }}>Sights</Text>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                backgroundColor: "lightblue",
                marginTop: 5,
              }}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Tours</Text>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                backgroundColor: "white",
                marginTop: 5,
              }}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Adventures</Text>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                backgroundColor: "white",
                marginTop: 5,
              }}
            ></View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 500,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Carousel
            data={data}
            renderItem={CarouselCardItem}
            sliderWidth={400}
            itemWidth={400}
            autoplay={true}
            autoplayInterval={3000}
            loop={true}
            layout={"dafult"}
            layoutCardOffset={`9`}
          />
        </View>
        <View>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 20,
              fontFamily: "PoetsenOne-Regular",
            }}
          >
            Popular
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 120,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              height: "80%",
              backgroundColor: "red",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",

              flexDirection: "row",

              shadowColor: "lightblue",
              shadowOffset: { width: 5, height: 5 },
              shadowOpacity: 0,
              shadowRadius: 100,
              elevation: 5,
              borderRadius: 20,
            }}
          >
            <View
              style={{
                width: "30%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/images/london.jpg")}
                style={{
                  height: "80%",
                  width: "80%",
                  borderRadius: 20,
                  resizeMode: "cover",
                }}
              />
            </View>
            <View
              style={{
                width: "70%",
                height: "100%",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Text>TEXTO EXEMPLO</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
