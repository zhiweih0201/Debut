import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default function EditProfile({ navigation }) {
    const [username, setUsername] = React.useState();
    const [userBio, setUserBio] = React.useState();
    const [userSkill, setUserSkill] = React.useState();
    const [userContact, setUserContact] = React.useState();
    const [userCampus, setUserCampus] = React.useState();

    return (
        <View style={styles.container}>
            <Text style={styles.fullname}>
                Full Name(displayed)
            </Text>
            <TouchableOpacity style={styles.fullnameContainer}>
                <TextInput style={styles.fullnameText}
                    onChangeText={setUsername}
                    value={username} />
            </TouchableOpacity>
            <Text style={styles.bio}>
                Bio
            </Text>
            <TouchableOpacity style={styles.bioContainer}>
                <TextInput style={styles.bioText}
                    onChangeText={setUserBio}
                    value={userBio} />
            </TouchableOpacity>
            <Text style={styles.skills}>
                Skills
            </Text>
            <TouchableOpacity style={styles.skillContainer}>
                <TextInput style={styles.skillText}
                    onChangeText={setUserSkill}
                    value={userSkill} />
            </TouchableOpacity>
            <Text style={styles.contact}>
                Contact Number
            </Text>
            <TouchableOpacity style={styles.contactContainer}>
                <TextInput style={styles.contactText}
                    onChangeText={setUserContact}
                    value={userContact} />
            </TouchableOpacity>
            <Text style={styles.campus}>
                Campus Affiliations
            </Text>
            <TouchableOpacity style={styles.campusContainer}>
                <TextInput style={styles.campusText}
                    onChangeText={setUserCampus}
                    value={userCampus} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveProfileContainer}>
                <Button style={styles.saveProfile}
                    title='Save Profile'
                    color='#FDF7F2'
                />
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

    fullname: {
        left: 31,
        top: 172,
        position: 'absolute',
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontFamily: 'Inter',
    },

    fullnameContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 0,
        paddingVertical: 2,
        borderWidth: 1,
        position: 'absolute',
        left: 28,
        top: 205,
        height: 49,
        width: 308,

    },

    fullnameText: {
        fontSize: 16,
        height: 30,
        fontStyle: 'normal',
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'left',
    },

    bio: {
        left: 31,
        top: 270,
        position: 'absolute',
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontFamily: 'Inter',
    },

    bioContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 0,
        paddingVertical: 2,
        borderWidth: 1,
        position: 'absolute',
        left: 28,
        top: 298,
        height: 49,
        width: 308,
    },

    bioText: {
        fontSize: 16,
        height: 30,
        fontStyle: 'normal',
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'left',
    },

    skills: {
        left: 31,
        top: 360,
        position: 'absolute',
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontFamily: 'Inter',
    },

    skillContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 0,
        paddingVertical: 2,
        borderWidth: 1,
        position: 'absolute',
        left: 28,
        top: 394,
        height: 49,
        width: 308,
    },

    skillText: {
        fontSize: 16,
        height: 30,
        fontStyle: 'normal',
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'left',
    },

    contact: {
        left: 31,
        top: 458,
        position: 'absolute',
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontFamily: 'Inter',
    },

    contactContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 0,
        paddingVertical: 2,
        borderWidth: 1,
        position: 'absolute',
        left: 28,
        top: 491,
        height: 49,
        width: 308,
    },

    contactText: {
        fontSize: 16,
        height: 30,
        fontStyle: 'normal',
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'left',
    },

    campus: {
        left: 31,
        top: 555,
        position: 'absolute',
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontFamily: 'Inter',
    },

    campusContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 0,
        paddingVertical: 2,
        borderWidth: 1,
        position: 'absolute',
        left: 28,
        top: 588,
        height: 49,
        width: 308,
    },

    campusText: {
        fontSize: 16,
        height: 30,
        fontStyle: 'normal',
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'left',
    },

    saveProfileContainer: {
        elevation: 8,
        backgroundColor: "#431FE4",
        borderRadius: 100,
        paddingVertical: 3,
        paddingHorizontal: 8,
        height: 45,
        width: 261,
        position: 'absolute',
        left: 114,
        top: 697,
    }






});
