import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class BookTransactionScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            hasCameraPermissions : null,
            scanned : false,
            scannedData : '',
            buttonState : 'normal',
        }
    }
    getCameraPermissions = async() =>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            /*status === "granted" is true when user has granted permission status === "granted" is false when user has not granted the permission */
            hasCameraPermissions : status === 'granted',
            buttonState : 'clicked'
        })
    }
    handleBarCodeScanned = async({type,data}) =>{
        this.setState({scanned : true, scannedData : data, buttonState : 'normal'})
    }
    render(){
        const hasCameraPermissions = this.state.hasCameraPermissions;
        const scanned = this.state.scanned;
        const buttonState = this.state.buttonState;
        if(buttonState === "clicked" && hasCameraPermissions){
            return(
                <BarCodeScanner 
                onBarCodeScanned = {scanned?undefined:this.handleBarCodeScanned} 
                style = {StyleSheet.absoluteFillObject}>
                </BarCodeScanner>
            )
        }
        else if(buttonState === "normal"){
            return(
                <View style = {styles.container}>
                <Text style = {styles.displayText}>{
                hasCameraPermissions === true?this.state.scannedData : "Request Permissions"
            }</Text>
                <TouchableOpacity style={styles.scanButton} onPress = {
                    this.getCameraPermissions
                }>
                    <Text style = {styles.buttonText}>Scan QR code</Text>
                </TouchableOpacity>
                </View>
            );
    
        }
    }
        }
        
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    displayText :{
        fontSize :15,
        textDecorationLine: "underline",
    },
    scanButton:{
        padding:10,
        margin:10,
        backgroundColor: "#2196F8",
    },
    buttonText:{
        fontSize:20,
    }
})