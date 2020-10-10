import React from 'react';
import {
    StyleSheet, 
    Text, 
    View, 
    Image, 
    TouchableOpacity
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const Face = ({icon, title, color, full}) => {
    return (
        <View>

        </View>
    );
};

const Rating = ({ rating }) => {
    return (
        <View style={styles.rating}>
            {Array(5)
                .fill(0)
                .map((_, i) => {
                    if (rating > i) {
                        return (<AntDesign name="star" color="#FA8D00" style={{marginRight: 5}} />);}
                        return <AntDesign name="staro" style={{marginRight: 5}} />;
                    }
                )
            }
        </View>
    );
};

export const CardHome = ({title, info, noHeader, noFooter, book}) => {
    return (
        <View></View>
    );
};

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    headerContainer: {
        padding: 20,
        paddingHorizontal: 10,
        marginTop: 52
    }
});

export default HomeScreen;