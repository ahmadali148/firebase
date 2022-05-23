import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

export default function App() {

  const[myData,setMyData] = useState(null);
  useEffect(() => {
    getDatabase();
  }, []);
    const getDatabase = async () => {
      try {
        const data = await firestore()
          .collection('contact1')
          .doc('ACSVciKf7mwy0VN8nU75')
          .get();
        setMyData(data._data)
      } catch (err) {
        console.log(err);
      }
    };
  

  return (
    <View>
      <Text>Name:-{myData ? myData.name : 'Loading...'}</Text>
      <Text>Number:-{myData ? myData.number : 'Loading...'}</Text>
      <Text>Image:-{myData ? myData.image : 'Loading...'}</Text>
    </View>
  );
}
