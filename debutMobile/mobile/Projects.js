import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import IndividualProject from './IndividualProject';
// const styles = StyleSheet.create({
    
// })

export default function Projects( { route, navigation }) {
    function handleViewMore(){
        try{
            if (title === ''){
                navigation.navigate('IndividualProject',{
                    title : '',
                    tagOne: '',
                    tagTwo: '',
                    roleOne: '',
                    roleTwo: '',
                    description:'',
                });
            } else{
                navigation.navigate('IndividualProject',{
                    title : title,
                    tagOne: tagOne,
                    tagTwo: tagTwo,
                    roleOne: roleOne,
                    roleTwo: roleTwo,
                    description: description,
                });
            }
          } catch(e){
            console.log(e);
          }
    }
    function handleCreateNew(){
        try{
            navigation.navigate('Create');
        } catch(e){
            console.log(e);
        }
    }
    function handleMessage(){
        try{
            navigation.navigate('Message');
        } catch(e){
            console.log(e);
        }
    }
    let { title, tagOne, tagTwo, roleOne, roleTwo, description } = route.params;

    if (title === ''){
        return(
            <View style = {styles.container}> 
            <Text style = {styles.title}>
                All Projects
            </Text>
            <Text style = {styles.createProject}
             onPress={(e) => handleCreateNew(e)}>
                Create New Project
            </Text>
            <TouchableOpacity style={styles.upperFirst}>
                <TouchableOpacity style={styles.tagBoxFirst}>
                    <Text style={styles.tagBoxFirstText}>
                        Concept Video
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tagBoxFirstTwo}>
                    <Text style={styles.tagBoxFirstTextTwo}>
                        Art
                    </Text>
                </TouchableOpacity>
                <Text style={styles.projectTileFirst}>
                    Project Title
                </Text>
                <Text style={styles.userTitleFirst}>
                    with Donald Trump
                </Text>
                <Text style={styles.userDateFirst}>
                    01/19/2022-01/30/2022
                </Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.lowerFirst}>
                <Text style={styles.roleFirstOneText}>
                1 Choreographer
                </Text>
                <Text style={styles.roleFirsttwoText}>
                3 Dancer
                </Text>
                <Text style = {styles.click}
                onPress={(e) => handleViewMore(e)}>
                    Click to view more
                </Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.message}>
                <Text style={styles.messagesText}
                onPress={(e) => handleMessage(e)}>
                    View Messages
                </Text>
            </TouchableOpacity>
        </View>
        );
    } else{
        return(
            <View style = {styles.container}> 
            <Text style = {styles.title}>
                All Projects
            </Text>
            <Text style = {styles.createProject}
             onPress={(e) => handleCreateNew(e)}>
                Create New Project
            </Text>
            <TouchableOpacity style={styles.upperFirst}>
                <TouchableOpacity style={styles.tagBoxFirst}>
                    <Text style={styles.tagBoxFirstText}>
                        Concept Video
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tagBoxFirstTwo}>
                    <Text style={styles.tagBoxFirstTextTwo}>
                        Art
                    </Text>
                </TouchableOpacity>
                <Text style={styles.projectTileFirst}>
                    Project Title
                </Text>
                <Text style={styles.userTitleFirst}>
                    with Donald Trump
                </Text>
                <Text style={styles.userDateFirst}>
                    01/19/2022-01/30/2022
                </Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.lowerFirst}>
                <Text style={styles.roleFirstOneText}>
                1 Choreographer
                </Text>
                <Text style={styles.roleFirsttwoText}>
                3 Dancer
                </Text>
                <Text style = {styles.click}
                onPress={(e) => handleViewMore(e)}>
                    Click to view more
                </Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.upperSecond}>
                <TouchableOpacity style={styles.tagBoxSecond}>
                    <Text style={styles.tagBoxSecondText}>
                        {tagOne}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tagBoxSecondTwo}>
                    <Text style={styles.tagBoxSecondTwoText}>
                        {tagTwo}
                    </Text>
                </TouchableOpacity>
                <Text style={styles.projectTitleSecond}>
                    {title}
                </Text>
                <Text style={styles.userTitleSecond}>
                    with Donald Trump
                </Text>
                <Text style={styles.userDateSecond}>
                    01/19/2022-01/30/2022
                </Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.lowerSecond}>
                <Text style={styles.roleSecondOneText}>
                {roleOne}
                </Text>
                <Text style={styles.roleSecondTwoText}>
                {roleTwo}
                </Text>
                <Text style = {styles.clickTwo}
                onPress={(e) => handleViewMore(e)}>
                    Click to view more
                </Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.message}>
                <Text style={styles.messagesText}
                onPress={(e) => handleMessage(e)}>
                    View Messages
                </Text>
            </TouchableOpacity>
            </View>
            
        );
    }
    
}

const styles = StyleSheet.create({
    title:{
        fontStyle: 'normal',
        fontSize: 15,
        color: '#000',
        marginBottom: 10,
        fontWeight: 'bold',
        position: 'absolute',
        left: 35,
        top: 15,
    },
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    lowerFirst:{
        position: 'absolute',
        left: 40,
        right: 40,
        top: 130,
        bottom: 400,
        height: 50,
        width: 300,
        backgroundColor: '#5200FF',
        borderRadius: 5,
    },
    upperFirst:{
        position: 'absolute',
        left: 40,
        right: 40, 
        top: 50,
        bottom: 130,
        height: 130,
        width: 300,
        borderWidth: 1,
        borderRadius: 5,
    },
    tagBoxFirst:{
        position: 'absolute',
        left: 10,
        top: 7,
        height: 15,
        width: 70,
        backgroundColor: '#5200FF',
        borderRadius: 20,
    },
    tagBoxFirstText:{
        position: 'absolute',
        left: 10,
        top: 3,
        color: '#FFFFFF',
        fontSize: 7,
    },
    tagBoxFirstTwo:{
        position: 'absolute',
        left: 100,
        top: 7,
        height: 15,
        width: 70,
        backgroundColor: '#5200FF',
        borderRadius: 20,
    },
    tagBoxFirstTextTwo:{
        position: 'absolute',
        left: 20,
        top: 3,
        color: '#FFFFFF',
        fontSize: 7,
    },
    projectTileFirst:{
        position: 'absolute',
        left: 13,
        top: 25,
        fontSize: 12,
        fontWeight: 'bold',
    },
    userTitleFirst:{
        position: 'absolute',
        left: 15,
        top: 45,
        fontSize: 8,
        fontWeight: 'bold', 
    },
    userDateFirst:{
        position: 'absolute',
        left: 10,
        top: 60,
        fontSize: 8,
    },
    roleFirstOneText:{
        position: 'absolute',
        color: '#FFF',
        fontSize: 10,
        top: 10,
        left: 10,
        fontWeight: 'bold',
    },
    roleFirsttwoText:{
        position: 'absolute',
        color: '#FFF',
        fontSize: 10,
        top: 25,
        left: 10,
        fontWeight: 'bold',
    },
    click:{
        position: 'absolute',
        color: '#FFF',
        fontSize: 10,
        top: 28,
        left: 190,
        borderWidth: 1,
        borderColor: '#FFF',
        borderLeftWidth: 5,
        borderRightWidth: 5,
    },
    createProject:{
        position: 'absolute',
        color: '#000',
        fontSize: 13,
        top: 15,
        left: 210,
        borderWidth: 1,
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderRadius: 10
    },

    lowerSecond:{
        position: 'absolute',
        left: 40,
        right: 40,
        top: 280,
        height: 50,
        width: 300,
        backgroundColor: '#5200FF',
        borderRadius: 5,
    },
    upperSecond:{
        position: 'absolute',
        left: 40,
        right: 40, 
        top: 200,
        height: 130,
        width: 300,
        borderWidth: 1,
        borderRadius: 5,
    },
    tagBoxSecond:{
        position: 'absolute',
        left: 10,
        top: 7,
        height: 15,
        width: 70,
        backgroundColor: '#5200FF',
        borderRadius: 20,
    },
    tagBoxSecondText:{
        position: 'absolute',
        left: 10,
        top: 3,
        color: '#FFF',
        fontSize: 7,
    },
    tagBoxSecondTwo:{
        position: 'absolute',
        left: 100,
        top: 7,
        height: 15,
        width: 70,
        backgroundColor: '#5200FF',
        borderRadius: 20,
    },
    tagBoxSecondTwoText:{
        position: 'absolute',
        left: 20,
        top: 3,
        color: '#FFFFFF',
        fontSize: 7,
    },
    projectTitleSecond:{
        position: 'absolute',
        left: 13,
        top: 25,
        fontSize: 12,
        fontWeight: 'bold',
    },
    userTitleSecond:{
        position: 'absolute',
        left: 15,
        top: 45,
        fontSize: 8,
        fontWeight: 'bold', 
    },
    userDateSecond:{
        position: 'absolute',
        left: 10,
        top: 60,
        fontSize: 8,
    },
    roleSecondOneText:{
        position: 'absolute',
        color: '#FFF',
        fontSize: 10,
        top: 10,
        left: 10,
        fontWeight: 'bold',
    },
    roleSecondTwoText:{
        position: 'absolute',
        color: '#FFF',
        fontSize: 10,
        top: 25,
        left: 10,
        fontWeight: 'bold',
    },
    clickTwo:{
        position: 'absolute',
        color: '#FFF',
        fontSize: 10,
        top: 28,
        left: 190,
        borderWidth: 1,
        borderColor: '#FFF',
        borderLeftWidth: 5,
        borderRightWidth: 5,
    },
    message:{
        position: 'absolute',
        backgroundColor: '#5200FF',
        top: 500,
        right: 30,
        height: 30,
        width: 200,
        borderRadius: 10,
    },
    messagesText:{
        color: '#FFF',
        fontSize: 15,
        top: 5,
        left: 45
    }
});

