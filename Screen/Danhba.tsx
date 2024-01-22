import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  RefreshControlBase,
  RefreshControl,
  StatusBarStyle,
} from 'react-native';
import React, {useState} from 'react';
const data = [
  {
    name: 'Nguyen Van A',
    email: 'a@example.com',
    position: 'Call',
    photo:
      'https://th.bing.com/th/id/OIP.QYL5uX9B77vk4tKImv0akQHaEK?rs=1&pid=ImgDetMain',
  },

  {
    name: 'Tran Thi B',
    email: 'b@example.com',
    position: 'Call',
    photo:
      'https://th.bing.com/th/id/R.4846f5e9bf6cd9a264492b695b3c136e?rik=8gIE8ZVSOfNZcQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-lq-EcBKBPl8%2fViue_8vjteI%2fAAAAAAAAFTI%2fcFTXouxtEi8%2fs1600%2f51.PNG&ehk=1Xfeez4Zsg%2fWWXq8P1Tv0isomr2CuQPTqOpHUU1vRUU%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    name: 'Tran Thi B',
    email: 'c@example.com',
    position: 'Call',
    photo:
      'https://th.bing.com/th/id/R.4846f5e9bf6cd9a264492b695b3c136e?rik=8gIE8ZVSOfNZcQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-lq-EcBKBPl8%2fViue_8vjteI%2fAAAAAAAAFTI%2fcFTXouxtEi8%2fs1600%2f51.PNG&ehk=1Xfeez4Zsg%2fWWXq8P1Tv0isomr2CuQPTqOpHUU1vRUU%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    name: 'Tran Thi B',
    email: 'd@example.com',
    position: 'Call',
    photo:
      'https://th.bing.com/th/id/R.4846f5e9bf6cd9a264492b695b3c136e?rik=8gIE8ZVSOfNZcQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-lq-EcBKBPl8%2fViue_8vjteI%2fAAAAAAAAFTI%2fcFTXouxtEi8%2fs1600%2f51.PNG&ehk=1Xfeez4Zsg%2fWWXq8P1Tv0isomr2CuQPTqOpHUU1vRUU%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    name: 'Tran Thi B',
    email: 'e@example.com',
    position: 'Call',
    photo:
      'https://th.bing.com/th/id/R.4846f5e9bf6cd9a264492b695b3c136e?rik=8gIE8ZVSOfNZcQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-lq-EcBKBPl8%2fViue_8vjteI%2fAAAAAAAAFTI%2fcFTXouxtEi8%2fs1600%2f51.PNG&ehk=1Xfeez4Zsg%2fWWXq8P1Tv0isomr2CuQPTqOpHUU1vRUU%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    name: 'Tran Thi B',
    email: 'f@example.com',
    position: 'Call',
    photo:
      'https://th.bing.com/th/id/R.4846f5e9bf6cd9a264492b695b3c136e?rik=8gIE8ZVSOfNZcQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-lq-EcBKBPl8%2fViue_8vjteI%2fAAAAAAAAFTI%2fcFTXouxtEi8%2fs1600%2f51.PNG&ehk=1Xfeez4Zsg%2fWWXq8P1Tv0isomr2CuQPTqOpHUU1vRUU%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    name: 'Tran Thi B',
    email: 's@example.com',
    position: 'Call',
    photo:
      'https://th.bing.com/th/id/R.4846f5e9bf6cd9a264492b695b3c136e?rik=8gIE8ZVSOfNZcQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-lq-EcBKBPl8%2fViue_8vjteI%2fAAAAAAAAFTI%2fcFTXouxtEi8%2fs1600%2f51.PNG&ehk=1Xfeez4Zsg%2fWWXq8P1Tv0isomr2CuQPTqOpHUU1vRUU%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    name: 'Tran Thi B',
    email: 'g@example.com',
    position: 'Call',
    photo:
      'https://th.bing.com/th/id/R.4846f5e9bf6cd9a264492b695b3c136e?rik=8gIE8ZVSOfNZcQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-lq-EcBKBPl8%2fViue_8vjteI%2fAAAAAAAAFTI%2fcFTXouxtEi8%2fs1600%2f51.PNG&ehk=1Xfeez4Zsg%2fWWXq8P1Tv0isomr2CuQPTqOpHUU1vRUU%3d&risl=&pid=ImgRaw&r=0',
  },
  // Thêm các đối tượng danh bạ khác nếu cần
];
export default function Danhba() {
  const [barStyle, setBarStyle] = useState<StatusBarStyle>('light-content');
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    // Logic khi người dùng thực hiện pull-to-refresh
    setRefreshing(true);

    // Thực hiện các tác vụ cập nhật dữ liệu hoặc tải lại dữ liệu ở đây

    // Sau khi hoàn thành, đặt refreshing về false
    setRefreshing(false);
  };
  const renderItem = ({item}) => (
    <View style={styles.contactItem}>
      <Image source={{uri: item.photo}} style={styles.contactPhoto} />
      <View style={styles.contactDetails}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactEmail}>{item.email}</Text>
      </View>
      <TouchableOpacity style={styles.btnCall}>
        <Text style={styles.contactPosition}>{item.position}</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <StatusBar
        barStyle={barStyle}
        translucent
        backgroundColor={'transparent'}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.email}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ccc',
  },
  contactItem: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  contactPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
    marginLeft: 10,
  },
  contactDetails: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  contactEmail: {
    color: 'gray',
  },
  contactPosition: {
    flex: 0.5,
    fontSize: 14,
    color: 'green',
    marginRight: 16,
    justifyContent: 'center',
  },
  btnCall: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
  },
});
