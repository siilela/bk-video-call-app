import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View,Text } from 'react-native';
import {ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'

function MakeCall() {

    //const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Siilela Video Call</Text>
            {/* <View style={styles.container}> */}
            {/* <ZegoUIKitPrebuiltCall
                appID={"838289274"}
                appSign={"36e51d2354a40c2435251a0691ea94a577688728489f627785885cf4176426f8"}
                userID={"+27714511032"} // userID can be something like a phone number or the user id on your own user system. 
                userName={"silelauriah@gmail.com"}
                callID={"Siilela"} // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onOnlySelfInRoom: () => {navigation.navigate('Home') },
                    onHangUp: () => { navigation.navigate('Home') },
                }}
            /> */}
            </View>
    )
}

export default MakeCall