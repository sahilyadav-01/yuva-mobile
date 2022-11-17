import AsyncStorage from '@react-native-async-storage/async-storage';

export const setToken = async value => {
  try {
    await AsyncStorage.setItem('token', value);
  } catch (e) {
    // saving error
  }
};

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
      // value previously stored
      return value;
    }
    return null;
  } catch (e) {
    // error reading value
  }
};

export const removeObject = async key => {
  try {
    const value = await AsyncStorage.removeItem(key);
  } catch (e) {
    // error reading value
  }
};

export const setObject = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // save error
  }
};

export const getObject = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // read error
  }
};
