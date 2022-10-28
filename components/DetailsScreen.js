import { View, SafeAreaView, Text, ImageBackground, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function DestinationsScreen({ navigation, route }) {
    const { destination } = route.params;

    return (
    <ImageBackground source={destination.image} style={styles.backgroundImage}>
        <SafeAreaView style={styles.body}>
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="close" size={24} color="white" />
          </Pressable>
          <View style={styles.destinationText}>
            <Text style={styles.destinationTitle}>{destination.title}</Text>
            <Text style={styles.destinationDescription}>{destination.description}</Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    },
    backgroundImage: {
      width: '100%',
      height: '100%'
    },
    body: {
        margin: 16,
    },
    destinationText: {
        marginTop: 64,
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    destinationTitle: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    destinationDescription: {
        fontSize: 14,
        marginTop: 16,
    }
  });
  