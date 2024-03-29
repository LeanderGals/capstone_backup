import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    //console.log('set ' + key)
  } catch (error) {
    console.log('Error storing value: ', error);
  }
};


export const getItem = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      //console.log('got ' + key +value)
      return value;
    } catch (error) {
      console.log('Error retrieving value: ', error);
    }
};

export const removeItem = async (key) =>{
    try {
        await AsyncStorage.removeItem(key);
        console.log('removed ' + key)
      } catch (error) {
        console.log('Error deleting value: ', error);
      }
}


//clear the data
export const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('AsyncStorage has been cleared successfully.');
  } catch (error) {
    console.error('Error clearing AsyncStorage:', error);
  }
};

