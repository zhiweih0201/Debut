import React, { useState, useEffect, useRef } from "react";
import {
    Text,
    View,
    StyleSheet,
    Button,
    TouchableOpacity,
    TextInput,
} from "react-native";
import Message from './Message';

export default function ViewMessage({ navigation }) {
    const [reply, setReply] = useState([
        {
            key: 1,
            text: "",
        },
    ]);
    const currReplyText = useRef();
    function clickBack() {
        try {
            navigation.navigate("Message");
        } catch (e) {
            console.log(e);
        }
    }
    const replyTextChangeHandler = (value) => {
        currReplyText.current = value;
    };
    const updateReplylist = () => {
        setReply((p) => {
            const len = p.length;
            return [
                ...p,
                {
                    key: p[len - 1].key + 1,
                    text: currReplyText.current,
                },
            ];
        });
    };
    useEffect(() => {
        console.log(reply);
    }, [reply]);
    return (
        <View style={styles.container}>
            <Text style={styles.messages}>Messages</Text>
            <TouchableOpacity
                style={styles.returnButtonContainer}
                onPress={(e) => clickBack(e)}
            >
                <Button style={styles.returnButton} title="<" color="#FDF7F2" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.CircleOneContainer}>
                <Button style={styles.circleOne} title="A" color="#FDF7F2" />
            </TouchableOpacity>
            <Text style={styles.read}>Read 14:20</Text>
            <Text style={styles.deliver}>Delivered 14:20</Text>
            <TouchableOpacity style={styles.WriteBoxOne}>
                <Text style={styles.textboxOne}>Hey! I saw your recent job update and was interested to find out more about it! I’ve attached my resume and portfolio for your viewing! Please, let me know if you would like to discuss further!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.WriteBoxTwo}>
                {reply.map((item) => (
                    <TouchableOpacity key={item.key}>
                        <Text style={styles.textboxOne}>{item.text}</Text>
                    </TouchableOpacity>
                ))}
            </TouchableOpacity>
            <TouchableOpacity style={styles.CircleTwoContainer}>
                <Button style={styles.circleTwo} title="R" color="#FDF7F2" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.replyContainer}>
                <TextInput
                    style={styles.replyText}
                    onChangeText={replyTextChangeHandler}
                    placeholder="Type a message..."
                    placeholderTextColor="#000000"
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ReplyButtonContainer}>
                <Button
                    style={styles.returnButton}
                    title="reply"
                    color="#FFFFFF"
                    onPress={updateReplylist}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    messages: {
        left: 64,
        top: 55,
        position: "absolute",
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: "normal",
    },

    returnButtonContainer: {
        elevation: 5,
        backgroundColor: "#D1A8EA",
        borderRadius: 50,
        paddingVertical: 0.1,
        paddingHorizontal: 0.1,
        height: 40,
        width: 28,
        position: "absolute",
        left: 29,
        top: 50,
    },

    ReplyButtonContainer: {
        top: 500,
        right: 30,
        backgroundColor: "#000000",
        height: 40,
        width: 60,
        position: "absolute",
    },

    returnButton: {
        fontSize: 0.5,
        padding: 0.1,
    },

    read: {
        left: 310,
        top: 192,
        fontSize: 8,
        fontWeight: 'bold',
        position: "absolute",
    },

    deliver: {
        left: 61,
        top: 293,
        fontSize: 8,
        fontWeight: 'bold',
        position: "absolute",
    },

    CircleOneContainer: {
        elevation: 8,
        backgroundColor: "#431FE4",
        borderRadius: 100,
        paddingVertical: 1,
        paddingHorizontal: 1,
        height: 40,
        width: 40,
        position: "absolute",
        left: 37,
        top: 130,
    },

    circleOne: {
        fontSize: 3,
    },

    CircleTwoContainer: {
        elevation: 8,
        backgroundColor: "#C4C4C4",
        borderRadius: 100,
        paddingVertical: 1,
        paddingHorizontal: 1,
        height: 40,
        width: 40,
        position: "absolute",
        left: 338,
        top: 228,
    },

    circleTwo: {
        fontSize: 3,
    },

    WriteBoxOne: {
        elevation: 8,
        backgroundColor: "#D1A8EA",
        borderRadius: 15,
        borderColor: "#000000",
        borderWidth: 1,
        paddingVertical: 1,
        paddingHorizontal: 1,
        height: 70,
        width: 263,
        position: "absolute",
        left: 100,
        top: 120,
    },

    WriteBoxTwo: {
        elevation: 8,
        backgroundColor: "#C4C4C4",
        borderRadius: 15,
        borderColor: "#000000",
        borderWidth: 1,
        paddingVertical: 1,
        paddingHorizontal: 1,
        height: 70,
        width: 263,
        position: "absolute",
        left: 49,
        top: 219,
    },

    textboxOne: {
        fontSize: 9,
        position: "absolute",
        padding: 8,
    },

    readText: {
        left: 318,
        top: 192,
        position: "absolute",
        fontSize: 8,
        fontWeight: 'bold',
        fontStyle: "normal",
    },

    replyContainer: {
        backgroundColor: "#E4E4E4",
        borderRadius: 15,
        paddingVertical: 2,
        paddingHorizontal: 2,
        borderWidth: 1,
        position: "absolute",
        left: 21,
        top: 500,
        height: 25,
        width: 300,
    },

    replyText: {
        fontSize: 12,
        height: 14,
        fontStyle: "normal",
        marginTop: 3,
        marginBottom: 3,
        textAlign: "left",
    },
});
