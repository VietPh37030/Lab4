import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.oneText}>Hi Welcome Back!👏</Text>
        <Text style={styles.twoText}>Hello again, you have been missed!</Text>
      </View>
      <View style={[styles.imgContainer, styles.imgContent]}>
        <Image
          style={styles.imageAvatar}
          source={require('./Image/quy-trinh-tuyen-dung-nhan-su-14.jpg')}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Email address</Text>
        <TextInput style={styles.inputField}>Enter your email address</TextInput>
        <Text style={styles.inputText}>Password</Text>
        <TextInput style={styles.inputField}>Enter your password</TextInput>
      </View>
      <View style={styles.footer}>
        <Text style={styles.textThree}>Or Login with </Text>
        <View style={styles.socialButtonsContainer}>
          <Pressable style={styles.socialButton}>
            <Image
              style={styles.socialIcon}
              source={require('./Image/gg.png')}
            />
            <Text>Facebook</Text>
          </Pressable>
          <Pressable style={styles.socialButton}>
            <Image
              style={styles.socialIcon}
              source={require('./Image/gg.png')}
            />
            <Text>Google</Text>
          </Pressable>
        </View>
        <View style={styles.itemText}>
          <Text>Don't have an account?</Text>
          <Text style={{color:'#A62CA6',marginLeft:10}}>Register</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
    marginTop: 25,
    marginLeft: 20,
  },
  oneText: {
    fontFamily: 'Popins',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  twoText: {
    color: 'black',
    fontSize: 15,
    marginTop: 10,
    fontFamily: 'Popins',
  },
  imgContainer: {
    alignItems: 'center', // Đặt hình ảnh giữa màn hình
  },
  imgContent: {
    alignContent: 'center',
  },
  imageAvatar: {
    width: 250,
    height: 130,
  },
  inputContainer: {
    flex: 1,
    marginTop: 30,
  },
  inputText: {
    marginTop: 10,
  },
  inputField: {
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 6,
    paddingHorizontal: 20,
  },
  footer: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
  },
  textThree: {
    alignItems: 'center',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  socialButton: {
    flexDirection: 'row',
    width: 174,
    height: 48,
    backgroundColor: '#EBEEF3',
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    width: 21,
    height: 21,
    marginRight: 10,
  },
  itemText:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  }
});
