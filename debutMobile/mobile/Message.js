import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, Image } from 'react-native';
import Constants from 'expo-constants';
import ViewMessage from './ViewMessage';

export default function Message({ navigation }) {
    function handleClick() {
        try {
            navigation.navigate('ViewMessage');
        } catch (e) {
            console.log(e);
        }
    }
    function handleClickB() {
        try {
            navigation.navigate('ViewMessageB');
        } catch (e) {
            console.log(e);
        }
    }
    function handleClickC() {
        try {
            navigation.navigate('ViewMessageC');
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.messages}>
                Messages
            </Text>
            <TouchableOpacity style={styles.CircleOneContainer}>
                <Button style={styles.circleOne}
                    title='A'
                    color='#FDF7F2'
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.WriteBoxOne}>
                <Text style={styles.textboxOne} onPress={(e) => handleClick(e)}>
                    Hey! I saw your recent job update and was interested...
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.CircleTwoContainer}>
                <Button style={styles.circleTwo}
                    title='B'
                    color='#FDF7F2'
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.WriteBoxTwo}>
                <Text style={styles.textboxTwo} onPress={(e) => handleClickB(e)}>
                    Hey! I saw your recent job update and was interested...
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.CircleThreeContainer}>
                <Button style={styles.circleThree}
                    title='C'
                    color='#FDF7F2'
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.WriteBoxThree}>
                <Text style={styles.textboxThree} onPress={(e) => handleClickC(e)}>
                    Hey! I saw your recent job update and was interested...
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.CircleFourContainer}>
                <Button style={styles.circleFour}
                    title='D'
                    color='#FDF7F2'
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.WriteBoxFour}>
                <Text style={styles.textboxFour}>
                    Hey! I saw your recent job update and was interested...
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.CircleFiveContainer}>
                <Button style={styles.circleFive}
                    title='E'
                    color='#FDF7F2'
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.WriteBoxFive}>
                <Text style={styles.textboxFive}>
                    Hey! I saw your recent job update and was interested...
                </Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    messages: {
        left: 32,
        top: 50,
        position: 'absolute',
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'normal',
    },

    CircleOneContainer: {
        elevation: 8,
        backgroundColor: "#431FE4",
        borderRadius: 100,
        paddingVertical: 1,
        paddingHorizontal: 1,
        height: 40,
        width: 40,
        position: 'absolute',
        left: 37,
        top: 130,
    },

    circleOne: {
        fontSize: 10,
    },

    CircleTwoContainer: {
        elevation: 8,
        backgroundColor: "#431FE4",
        borderRadius: 100,
        paddingVertical: 1,
        paddingHorizontal: 1,
        height: 40,
        width: 40,
        position: 'absolute',
        left: 37,
        top: 210,
    },

    circleTwo: {
        fontSize: 10,
    },

    CircleThreeContainer: {
        elevation: 8,
        backgroundColor: "#431FE4",
        borderRadius: 100,
        paddingVertical: 1,
        paddingHorizontal: 1,
        height: 40,
        width: 40,
        position: 'absolute',
        left: 37,
        top: 300,
    },

    circleThree: {
        fontSize: 10,
    },

    CircleFourContainer: {
        elevation: 8,
        backgroundColor: "#431FE4",
        borderRadius: 100,
        paddingVertical: 1,
        paddingHorizontal: 1,
        height: 40,
        width: 40,
        position: 'absolute',
        left: 37,
        top: 390,
    },

    circleFour: {
        fontSize: 10,
    },

    CircleFiveContainer: {
        elevation: 8,
        backgroundColor: "#431FE4",
        borderRadius: 100,
        paddingVertical: 1,
        paddingHorizontal: 1,
        height: 40,
        width: 40,
        position: 'absolute',
        left: 37,
        top: 480,
    },

    circleFive: {
        fontSize: 10,
    },

    WriteBoxOne: {
        elevation: 8,
        backgroundColor: "#E4E4E4",
        borderRadius: 15,
        borderColor: "#000000",
        borderWidth: 1,
        paddingVertical: 1,
        paddingHorizontal: 1,
        height: 24,
        width: 270,
        position: 'absolute',
        left: 100,
        top: 140,
    },

    textboxOne: {
        fontSize: 8,
        position: 'absolute',
        padding: 5,
    },

    WriteBoxTwo: {
        elevation: 8,
        backgroundColor: "#E4E4E4",
        borderRadius: 15,
        borderColor: "#000000",
        borderWidth: 1,
        paddingVertical: 1,
        paddingHorizontal: 1,
        height: 24,
        width: 270,
        position: 'absolute',
        left: 100,
        top: 220,
    },

    textboxTwo: {
        fontSize: 8,
        position: 'absolute',
        padding: 5,
    },

    WriteBoxThree: {
        elevation: 8,
        backgroundColor: "#E4E4E4",
        borderRadius: 15,
        borderColor: "#000000",
        borderWidth: 1,
        paddingVertical: 1,
        paddingHorizontal: 1,
        height: 24,
        width: 270,
        position: 'absolute',
        left: 100,
        top: 310,
    },

    textboxThree: {
        fontSize: 8,
        position: 'absolute',
        padding: 5,
    },

    WriteBoxFour: {
        elevation: 8,
        backgroundColor: "#E4E4E4",
        borderRadius: 15,
        borderColor: "#000000",
        borderWidth: 1,
        paddingVertical: 1,
        paddingHorizontal: 1,
        height: 24,
        width: 270,
        position: 'absolute',
        left: 100,
        top: 400,
    },

    textboxFour: {
        fontSize: 8,
        position: 'absolute',
        padding: 5,
    },

    WriteBoxFive: {
        elevation: 8,
        backgroundColor: "#E4E4E4",
        borderRadius: 15,
        borderColor: "#000000",
        borderWidth: 1,
        paddingVertical: 1,
        paddingHorizontal: 1,
        height: 24,
        width: 270,
        position: 'absolute',
        left: 100,
        top: 490,
    },

    textboxFive: {
        fontSize: 8,
        position: 'absolute',
        padding: 5,
    },

});
