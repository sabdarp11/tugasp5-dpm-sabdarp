import React from 'react';
import { View, StyleSheet, ScrollView, Text as RNText } from 'react-native';
import { Appbar, Text, Card, Paragraph, Button } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.Content title="Web Sederhana" subtitle="Selamat datang!" titleStyle={styles.appbarTitle} />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Selamat Datang di Web Sederhana</Text>

        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Jelajahi Lebih Lanjut</Text>
            <Paragraph style={styles.cardContent}>
              Klik tombol di bawah untuk melanjutkan ke halaman musik kesukaan Sabda Rp.
            </Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button
              mode="contained"
              onPress={() => navigation.navigate('Detail')}
              style={styles.button}>
              Lanjutkan
            </Button>
          </Card.Actions>
        </Card>
      </ScrollView>

      <View style={styles.footer}>
        <RNText style={styles.footerText}>Sabda Rp 2024</RNText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,           
    fontWeight: 'bold',
    textAlign: 'center',    
    color: 'white',         
    marginBottom: 20,       
  },
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
  card: {
    marginBottom: 20,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: 'black',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  cardContent: {
    fontSize: 14,
    color: 'white',
  },
  button: {
    backgroundColor: 'green',
    marginTop: 10,
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
