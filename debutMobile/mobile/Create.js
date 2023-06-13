import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function Create ( {navigation} ){
    const [title, setTitle] = React.useState('');
    const [tagOne, setTagOne] = React.useState('');
    const [tagTwo, setTagTwo] = React.useState('');
    const [roleOne, setRoleOne] = React.useState('');
    const [roleTwo, setRoleTwo] = React.useState('');
    const [description, setDescription] = React.useState('');

    function handleConfirm(){
        try{
            navigation.navigate('Projects', {
                title: title,
                tagOne: tagOne,
                tagTwo: tagTwo,
                roleOne: roleOne,
                roleTwo: roleTwo,
                description: description
            });
        } catch(e){
            console.log(e);
        }
    }
    return(
        <View>
            <TouchableOpacity>
                <Text style={styles.titleQuestion}>
                    What is the title of your project?
                </Text>
                <TextInput 
                    style={styles.titleInput}
                    onChangeText={setTitle}
                    value={title}
                    placeholder='Project Title'>
                </TextInput>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.tagQuestion}>
                    What are the tags of your project?
                </Text>
                <TextInput 
                    style={styles.tagInputOne}
                    onChangeText={setTagOne}
                    value={tagOne}
                    placeholder='tag one'>
                </TextInput>
                <TextInput 
                    style={styles.tagInputTwo}
                    onChangeText={setTagTwo}
                    value={tagTwo}
                    placeholder='tag two'>
                </TextInput>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.roleQuestion}>
                    What kind of role do you require?
                </Text>
                <TextInput 
                    style={styles.roleOne}
                    onChangeText={setRoleOne}
                    placeholder='2 Dancer'
                    value={roleOne}>
                </TextInput>
                <TextInput 
                    style={styles.roleTwo}
                    onChangeText={setRoleTwo}
                    placeholder='3 Singer'
                    value={roleTwo}>
                </TextInput>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.descriptionQuestion}>
                    Enter the description of your project.
                </Text>
                <TextInput 
                    style={styles.description}
                    onChangeText={setDescription}
                    placeholder='Description'
                    value={description}>
                </TextInput>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleConfirm()} 
                style={styles.confirmButton}>
                <Text style={styles.confirmText}>
                    Confirm
                </Text>
            </TouchableOpacity>
        </View>
    );

}
const styles = StyleSheet.create({

    titleQuestion:{
        left: 40,
        top: 30,
        position: 'absolute',
        color: '#000',
    },
    titleInput:{
        fontSize: 16,
        height: 30,
        fontStyle: 'normal',
        left: 40,
        top: 50,
        textAlign: 'left',
        position: 'absolute',
        height: 40,
        width: 300,
        borderRadius: 2,
        borderWidth: 1,
        color: '#000',
    },
    tagInputOne:{
        borderRadius:10,
        paddingVertical: 2,
        borderWidth: 1,
        position: 'absolute',
        left: 40,
        top: 140,
        height: 40,
        width: 100,
        color: '#000'
    },
    tagInputTwo:{
        borderRadius:10,
        paddingVertical: 2,
        borderWidth: 1,
        position: 'absolute',
        left: 200,
        top: 140,
        height: 40,
        width: 100,
        color: '#000'
    },
    tagQuestion:{
        position: 'absolute',
        left: 40,
        top: 110,
        width: 300,
    },
    roleQuestion:{
        position: 'absolute',
        left: 40,
        top: 205,
    },
    roleOne:{
        paddingVertical: 2,
        borderWidth: 1,
        position: 'absolute',
        left: 40,
        top: 230,
        height: 30,
        width: 300,
    },
    roleTwo:{
        paddingVertical: 2,
        borderWidth: 1,
        position: 'absolute',
        left: 40,
        top: 280,
        height: 30,
        width: 300,
    },
    descriptionQuestion:{
        position: 'absolute',
        top: 340,
        left: 40,
    },
    description:{
        position: 'absolute',
        top: 370,
        left: 40,
        height: 100,
        width: 300,
        borderWidth: 1
    },
    confirmButton:{
        position: 'absolute',
        top: 500,
        left: 230,
        height: 30,
        width: 100,
        borderRadius: 10,
        fontWeight: 'bold',
        borderWidth: 1,
    },
    confirmText:{
        color: '#000',
        top: 5,
        left: 20,
        color: '#5200FF',
        fontWeight: 'bold'
    }
    
})

