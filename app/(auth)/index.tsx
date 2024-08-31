import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Video } from 'expo-av';
import { Link } from 'expo-router';


export default function Index() {
  const video = useRef(null);

  const onPlaybackStatusUpdate = (status) => {
    if (status.error) {
      console.log(`Error: ${status.error}`);
    }
  };

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        source={require('../../assets/video/background.mp4')}
        style={styles.backgroundVideo}
        shouldPlay
        isLooping
        resizeMode="cover"
        rate={1.0}
        ignoreSilentSwitch="obey"
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      />
      <View style={styles.overlay}>
        <View style={styles.buttonContainer}>
          <Link asChild href="/login">
            <TouchableOpacity
              style={styles.button}
            >
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </Link>

          <Link asChild href="/register">
            <TouchableOpacity
              style={styles.button}
            >
              <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingBottom: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#6200EE',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
