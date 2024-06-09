import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Text } from 'react-native-elements';
import styles from '../styles/homeStyles'

export default function HomeScreen(props) {
const {navigation} = props;

const [token, setToken] = useState('');


useEffect(() => {
  const refreshToken = navigation.addListener('focus', () => {
    _checkToken();
  })
 return refreshToken
}, [navigation])

const _checkToken = async () => {
  const token = await AsyncStorage.getItem('accessToken')
  setToken(token)
}

  return (
    <ImageBackground
      source={require('../assets/doc-bg.png')}
      style={styles.background}
      >
        <View style={styles.container}>
          <Text style={styles.title}>أهلًا بك في تطبيق طبيبي</Text>
          <Text style={styles.text}>التطبيق الأول للربط بين الأطباء والمرضى</Text>
          {token ? 
          <>
            <Button title="استعرض قائمة الأطباء" onPress={() => navigation.navigate('Doctors')} />
            <Button type='clear' title="الصفحة الشخصية" onPress={() => navigation.navigate('Profile')}>
              <Text style={styles.labelButton}>استعرض الملف الشخصي</Text>
            </Button>
          </>
          :
          <>
          <Button title="تسجيل الدخول" onPress={() => navigation.navigate('SignIn')} />
          <Button type='clear' title="تسجيل مستخدم جديد" onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.labelButton}>إنشاء حساب جديد</Text>
          </Button>
        </>
          }
        </View>
      </ImageBackground>
  );
}