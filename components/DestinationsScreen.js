import { View, Text, SafeAreaView, FlatList, StyleSheet, Image } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Images from '../assets/Images';

export default function DestinationsScreen({ navigation }) {
    const LOCATIONS = [
        {
          id: 1,
          image: Images.lakeLouise,
          title: 'Lake Louise',
          description: 'Lake Louise is rich heritage as one of the world\'s most awe-inspiring mountain destinations.',
        },
        { 
          id: 2,
          image: Images.sanFrancisco,
          title: 'San Francisco',
          description: 'Grab your coat and a handful of glitter and enter the land of fog and fabulousness.',
        },
        { 
          id: 3,
          image: Images.alesund,
          title: 'Ålesund',
          description: 'The far northern port of Ålesund might be far away from the bright lights of metropoliton Norway.',
        }
    ];

    const renderDestination = ({ item }) => (
        <View style={styles.destinationContainer}>
            <Image style={styles.destinationImage} source={item.image} />
            <View style={styles.destinationText}>
                <View style={styles.destinationTitleDescription}>
                    <Text style={styles.destinationTitle}>{item.title}</Text>
                    <Text style={styles.destinationDescription}>{item.description}</Text>
                </View>
                <Pressable onPress={() => navigation.navigate('DetailsScreen', { destination: item })}>
                    <Text style={styles.exploreText}>Explore</Text>
                </Pressable>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList
                    horizontal
                    data={LOCATIONS}
                    renderItem={renderDestination}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    listContainer: {
        width: 360,
        height: '80%',
    },
    destinationContainer: {
        width: 320,
        flex: 1,
        margin: 20,
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: 'gray',
        backgroundColor: 'white',
        shadowColor: 'darkgray',
        shadowOpacity: 0.4,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowRadius: 5,
    },
    destinationImage: {
        width: 320,
        height: 320,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    destinationText: {
        flex: 1,
        justifyContent: 'space-around',
        marginHorizontal: 16,
    },
    destinationTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    destinationDescription: {
        color: 'gray',
    },
    exploreText: {
        fontSize: 14,
        textTransform: 'uppercase',
        letterSpacing: 0.2,
        fontWeight: 'bold',
    }
});