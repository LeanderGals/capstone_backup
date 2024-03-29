import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, TouchableOpacity } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as MediaLibrary from 'expo-media-library';

export default function App() {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    let savePhoto = async () => {
      const timestamp = new Date().getTime(); 
      const filename = `LUMOTech_${timestamp}.jpg`; 
      await MediaLibrary.saveToLibraryAsync(photo.uri, filename);
      setPhoto(undefined);
      ;
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
        <View style={styles.options}>
          <View style={styles.opt1}>
            <Button title="Share" onPress={sharePic} />
          </View>
          <View style={styles.opt}>
            {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
          </View>
          <View style={styles.opt1}>
            <Button title="Discard" onPress={() => setPhoto(undefined)} />
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.backgroundbtn}>
        <TouchableOpacity style={styles.buttonContainer} onPress={takePic}>
          <Image style={styles.camera} source={require('../images/camera.png')} />
        </TouchableOpacity>
      </View>
    </Camera>
  );
}

const styles = StyleSheet.create({ 
  options:{
    flexDirection: 'row',
  },
  opt1:{
    margin: hp(2)
  },
  opt:{
    margin: hp(2),
    marginLeft: wp(10),
    marginRight: wp(10)
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  backgroundbtn:{
    backgroundColor:'gray',
    width: wp(100),
    opacity: 0.4,
    height: hp(20),
    justifyContent:'center',
    borderRadius: 20
  },
  buttonContainer: {
    backgroundColor: 'white',
    alignContent: 'center',
    alignSelf:'center',
    width: wp(15),
    borderRadius: 50,
    opacity: 1
  },
  camera:{
    alignSelf:'center',
    resizeMode:'contain',
    width:wp(10),
    height:hp(7),
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1
  }
});