import {firebase} from '@react-native-firebase/database';

export default function getRefDatabase() {
  firebase
    .database()
    .ref('/appointment')
    .set({
      name: 'Ada Lovelace',
      age: 31,
    })
    .then(() => console.log('Data set.'));
}
