import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import logo from './assets/logo.png'

export default function App() {
  const [data, setData] = useState('')
  const findMyIp = async () => {
    setData('Descobrindo Ip...')
    const ip = await fetch('http://httpbin.org/ip')
    const data = await ip.json()
    setData(data.origin)
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image source={logo} />
        <Text style={styles.ip}>{data}</Text>
        <Button title='Descobrir meu IP!' onPress={findMyIp} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.made}>DevReactJS - Renato Siqueira</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f2336',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ip: {
    color: 'white',
    fontSize: 25,
    paddingBottom: 20,
    paddingTop: 20
  },
  footer: {
    paddingTop: 10,
    paddingBottom: 10
  },
  made: {
    color: 'white',
    textAlign: 'center'
  }
});
