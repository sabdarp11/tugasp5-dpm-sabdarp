import React from 'react';
import { View, StyleSheet, Image, ScrollView, Text as RNText } from 'react-native';
import { Appbar, Text, Button } from 'react-native-paper';

const favoriteSongs = [
  {
    title: 'Serana',
    artist: 'For Revenge',
    image: require('./assets/fr.png'),
  },
  {
    title: 'Satu Bulan',
    artist: 'Bernadya',
    image: require('./assets/b.png'),
  },
  {
    title: 'Keras Kepala',
    artist: 'Meiska',
    image: require('./assets/k.png'),
  },
  {
    title: 'Bawa Dia Kembali',
    artist: 'Mahalini',
    image: require('./assets/m.png'),
  },
  {
    title: 'Cool Enough For You',
    artist: 'Skyline',
    image: require('./assets/c.png'),
  },
];

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Musik Kesukaan" titleStyle={styles.appbarTitle} />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Daftar Musik Kesukaan Saya</Text>

        {favoriteSongs.map((song, index) => (
          <View key={index} style={styles.musicPlayerContainer}>
            <Image source={song.image} style={styles.albumArt} />
            <View style={styles.musicInfoContainer}>
              <Text style={styles.musicTitle}>{song.title}</Text>
              <Text style={styles.musicArtist}>{song.artist}</Text>
            </View>
            <View style={styles.musicControls}>
              <Button
                icon="play"
                mode="contained"
                onPress={() => {}}
                style={styles.activeButton}>
                Play
              </Button>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <RNText style={styles.footerText}>Sabda Rp 2024</RNText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    padding: 20,
  },
  appbar: {
    backgroundColor: 'green',
  },
  appbarTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  musicPlayerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    marginVertical: 10,
  },
  albumArt: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 15,
  },
  musicInfoContainer: {
    flex: 1,
  },
  musicTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  musicArtist: {
    fontSize: 14,
    color: 'white',
  },
  musicControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: 'green',
  },
  footer: {
    paddingVertical: 15,
    backgroundColor: 'green',
    marginTop: 'auto',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 14,
  },
});
