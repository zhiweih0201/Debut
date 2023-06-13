import { StyleSheet, TextInput, View, Button, Text, TouchableOpacity } from 'react-native';
import React, { useState } from "react";
import addUser from './Storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

export default function ProfileOverview({ navigation }) {
    const [select, setSelect] = React.useState('profile');

    const profileList = [
        {
            label: "Account Overview",
            value: "account overview",
        },
        {
            label: "Edit Profile",
            value: "edit profile",
        },
        {
            label: "Change Password",
            value: "change password",
        },
        {
            label: "Manage Uploads",
            value: "manage uploads",
        },
        {
            label: "Privacy Settings",
            value: "privacy settings",
        },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.accountOverview}>
                Account Overview
            </Text>
            <Text style={styles.userName}>
                Username
            </Text>
            <View
                style={styles.lineOne}
            />
            <Text style={styles.email}>
                Email
            </Text>
            <View
                style={styles.lineTwo}
            />
            <Text style={styles.homeSchool}>
                Home School
            </Text>
            <View
                style={styles.lineThree}
            />
            <Text style={styles.primaryRole}>
                Primary Role Registered
            </Text>
            <View
                style={styles.lineFour}
            />
            <Text style={styles.secondRole}>
                Secondary Role Registered
            </Text>
            <View
                style={styles.lineFive}
            />
            <TouchableOpacity style={styles.editProfileContainer}>
                <Button style={styles.editProfile}
                    title='Edit Profile'
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

    accountOverview: {
        left: 21,
        top: 115,
        position: 'absolute',
        fontSize: 23,
        fontWeight: 'bold',
        fontStyle: 'normal',
    },

    userName: {
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'normal',
        position: 'absolute',
        top: 200,
        left: 35,
    },

    lineOne: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        top: 227,
        left: 34,
        width: 325,
        position: 'absolute',
    },

    email: {
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'normal',
        position: 'absolute',
        top: 287,
        left: 35,
    },

    lineTwo: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        top: 317,
        left: 34,
        width: 325,
        position: 'absolute',
    },

    homeSchool: {
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'normal',
        position: 'absolute',
        top: 377,
        left: 35,
    },

    lineThree: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        top: 407,
        left: 34,
        width: 325,
        position: 'absolute',
    },

    primaryRole: {
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'normal',
        position: 'absolute',
        top: 467,
        left: 35,
    },

    lineFour: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        top: 497,
        left: 34,
        width: 325,
        position: 'absolute',
    },

    secondRole: {
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'normal',
        position: 'absolute',
        top: 557,
        left: 35,
    },

    lineFive: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        top: 587,
        left: 34,
        width: 325,
        position: 'absolute',
    },

    editProfile: {
        fontSize: 20,
    },

    editProfileContainer: {
        elevation: 8,
        backgroundColor: "#431FE4",
        borderRadius: 100,
        paddingVertical: 3,
        paddingHorizontal: 8,
        height: 45.45,
        width: 261.35,
        position: 'absolute',
        left: 35,
        top: 669,
    },







});
