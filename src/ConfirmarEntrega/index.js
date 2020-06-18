import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StatusBar, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather as Icons, FontAwesome5 } from '@expo/vector-icons';
import { Camera } from 'expo-camera';

import styles from './styles';

const ConfirmarEntrega = () => {
    const camRef = useRef(null);
    const navigation = useNavigation();
    const [hasPermission, setHasPermission] = useState(null);
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    async function takePhoto(){
        if(camRef){
            const data = await camRef.current.takePictureAsync();
            setPhoto(data.uri);
            console.log(data)
        }
    }

    function backPage(){
        navigation.goBack();
    }

    return(
        <>
            <View style={styles.backHeader}>
                <StatusBar barStyle="light-content" />

                <Text style={styles.title}>Confirmar entrega</Text>

                <Icons 
                    name="arrow-left" 
                    size={25} 
                    color="#fff"
                    onPress={backPage}
                    style={styles.backIcon}
                />
            </View>

            <View style={{ paddingHorizontal: 24, flex: 1, borderRadius: 5 }}>
                <Camera 
                    style={{ 
                        marginTop: -95,
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: -1
                        },
                        shadowOpacity: 0.23,
                        shadowRadius: 2.62,
                        elevation: 1,
                        height: 500,
                        borderRadius: 5
                    }}
                    type={Camera.Constants.Type.back}
                    ref={camRef}
                >
                    <View style={styles.contentButtonCamera}>
                        <TouchableOpacity style={styles.buttonCamera} onPress={takePhoto}>
                            <FontAwesome5 name="camera" size={30} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    
                </Camera>

                { photo &&
                    <View style={{ flex: 1, borderRadius: 5 }}>
                        <TouchableOpacity 
                            style={styles.btnNovaFoto}
                            onPress={() => setPhoto(null)}
                        >
                            <Text style={styles.textNovaFoto}>Tirar foto novamente</Text>
                        </TouchableOpacity>
                        <Image 
                            style={{ 
                                marginTop: -500,
                                shadowColor: '#000',
                                shadowOffset: {
                                    width: 0,
                                    height: -1
                                },
                                shadowOpacity: 0.23,
                                shadowRadius: 2.62,
                                elevation: 1,
                                height: 500
                             }}
                             source={{ uri: photo }}
                        />
                    </View>
                }
                
                <TouchableOpacity style={styles.btnEnviar}>
                    <Text style={styles.textBtnText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default ConfirmarEntrega;