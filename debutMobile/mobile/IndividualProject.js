import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function IndividualProject ({ route, navigation }){
    let { title, tagOne, tagTwo, roleOne, roleTwo, description } = route.params;
    if (title === ''){
        return ( 
            <View>
                <Text style={styles.projectTitle}> 
                    Project Title
                </Text>
                <TouchableOpacity style={styles.tagBoxFirst}>
                    <Text style={styles.tagBoxFirstText}>
                        Concept Video
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tagBoxSecond}>
                    <Text style={styles.tagBoxSecondText}>
                        Comedy
                    </Text>
                </TouchableOpacity>
                <Text style={styles.date}>
                    Jan 19 - Jan 24
                </Text>
                <TouchableOpacity style={styles.employerContainer} />
                <Text style={styles.employerName}>
                    Donald Trump
                </Text>
                <TouchableOpacity style={styles.employerTagBoxFirst}>
                    <Text style={styles.employerTagBoxFirstText}>
                        Fight Choreographer
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.employerTagBoxSecond}>
                    <Text style={styles.employerTagBoxSecondText}>
                        Assistant Stage Manager
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.apply}>
                    <Text style={styles.applyText}>
                        Apply
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.introContainer}>
                    <Text style={styles.intro}>
                    Night to meat he very rule, meat from is can't without likeness him. 
    Evening first. Brought seas under may a. Seed rule earth whose stars wherein bearing that which creeping.
    Very. Land form moving. May. It given. Winged itself third. Winged make life moveth. 
    Second living. He Had may fourth fill all seed given. Yielding lesser fowl she'd have living, moveth fish created 
    Dry sixth make land green living cattle over isn't lights darkness under every i make hath made she'd 
    Creature fruitful stars day void for herb. 
    Of they're form green creeping bearing him i our. Behold fruit after.
                    </Text>
                </TouchableOpacity>
                <Text style={styles.availableRoles}>
                    Available Roles
                </Text>
                <TouchableOpacity style={styles.rolesContainer}>
                </TouchableOpacity>
                <Text style={styles.roles}>
                        2     Dancer
                </Text>
            </View>
        );
    } else{
        return ( 
            <View>
                <Text style={styles.projectTitle}> 
                    {title}
                </Text>
                <TouchableOpacity style={styles.tagBoxFirst}>
                    <Text style={styles.tagBoxFirstText}>
                        {tagOne}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tagBoxSecond}>
                    <Text style={styles.tagBoxSecondText}>
                        {[tagTwo]}
                    </Text>
                </TouchableOpacity>
                <Text style={styles.date}>
                    Jan 19 - Jan 24
                </Text>
                <TouchableOpacity style={styles.employerContainer} />
                <Text style={styles.employerName}>
                    Donald Trump
                </Text>
                <TouchableOpacity style={styles.employerTagBoxFirst}>
                    <Text style={styles.employerTagBoxFirstText}>
                        Fight Choreographer
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.employerTagBoxSecond}>
                    <Text style={styles.employerTagBoxSecondText}>
                        Assistant Stage Manager
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.apply}>
                    <Text style={styles.applyText}>
                        Apply
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.introContainer}>
                    <Text style={styles.intro}>
                    {description}
                    </Text>
                </TouchableOpacity>
                <Text style={styles.availableRoles}>
                    Available Roles
                </Text>
                <TouchableOpacity style={styles.rolesContainer}>
                </TouchableOpacity>
                <Text style={styles.roles}>
                        {roleOne}
                        {roleTwo}
                </Text>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    projectTitle:{
        position:'absolute',
        fontSize:23,
        fontWeight:'bold',
        color:'#000',
        top:40,
        left:20
    },
    tagBoxFirst:{
        position: 'absolute',
        left: 20,
        top: 80,
        height: 20,
        width: 90,
        backgroundColor: '#5200FF',
        borderRadius: 20,
    },
    tagBoxFirstText:{
        position: 'absolute',
        left: 12,
        top: 4,
        color: '#FFFFFF',
        fontSize: 9,
    },
    tagBoxSecond:{
        position: 'absolute',
        left: 120 ,
        top: 80,
        height: 20,
        width: 53,
        backgroundColor: '#5200FF',
        borderRadius: 20,
    },
    tagBoxSecondText:{
        position: 'absolute',
        left: 9,
        top: 4,
        color: '#FFFFFF',
        fontSize: 9,
    },
    date:{
        position: 'absolute',
        left: 30,
        top: 110,
        fontSize: 13,
    },
    apply:{
        position: 'absolute',
        left: 20 ,
        top: 150,
        height: 30,
        width: 100,
        fontSize: 15,
        borderRadius: 30,
        backgroundColor: '#5200FF',
    },
    applyText:{
        position:'absolute',
        color: '#FFF',
        left: 32,
        top: 5
    },
    introContainer:{
        position: 'absolute',
        color: '#000',
        left: 20,
        top: 200,
        height: 200,
        width: 320,
        borderWidth: 1,
        borderRadius: 10,
    },
    intro:{
        position: 'absolute',
        color: '#000',
        left: 10,
        top: 10,
        right: 10,
        fontSize: 12,
    },
    availableRoles:{
        position: 'absolute',
        color: '#000',
        left: 30,
        top: 420,
        fontWeight: 'bold',
    }, 
    rolesContainer:{
        position: 'absolute',
        color: '#000',
        left: 30,
        top: 450,
        height: 60,
        width: 300,
        fontWeight: 'bold',
        borderRadius: 10,
        borderWidth: 1,
    },
    roles:{
        position: 'absolute',
        fontWeight: 'bold',
        color:'#5200FF',
        top: 470,
        left: 50,
    }, 
    employerContainer:{
        position: 'absolute',
        color:'#000',
        top: 80,
        left: 190,
        height: 100,
        width: 150,
        borderWidth: 1,
        borderRadius: 10,
    },
    employerName:{
        position: 'absolute',
        color:'#000',
        top: 90,
        left: 230,
        fontSize: 14,
        fontWeight: 'bold',
    },
    employerTagBoxFirst:{
        position: 'absolute',
        left: 200,
        top: 120,
        height: 15,
        width: 110,
        backgroundColor: '#5200FF',
        borderRadius: 20,
    },
    employerTagBoxFirstText:{
        position: 'absolute',
        left: 12,
        top: 2,
        color: '#FFFFFF',
        fontSize: 9,
    },
    employerTagBoxSecond:{
        position: 'absolute',
        left: 200,
        top: 140,
        height: 15,
        width: 130,
        backgroundColor: '#5200FF',
        borderRadius: 20,
    },
    employerTagBoxSecondText:{
        position: 'absolute',
        left: 12,
        top: 2,
        color: '#FFFFFF',
        fontSize: 9,
    },


});