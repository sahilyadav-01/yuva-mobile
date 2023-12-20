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
export const setExistingUser = async () => {
  try {
    await AsyncStorage.setItem('existingUser', JSON.stringify(true));
  } catch (error) {}
};

export const setJwt = async jwt => {
  try {
    await AsyncStorage.setItem('jwt', jwt);
  } catch (error) {}
};

export const setRefreshToken = async token => {
  try {
    await AsyncStorage.setItem('refreshToken', token);
  } catch (error) {}
};


export const setProfileStatus = async status => {
  try {
    await AsyncStorage.setItem('profileUpdated', status);
  } catch (error) {}
};

export const clearJwt = async () => {
  try {
    await AsyncStorage.removeItem('jwt');
  } catch (error) {
    
  }
}

export const clearRefreshToken = async () => {
  try {
    await AsyncStorage.removeItem('refreshToken');
  } catch (error) {
    
  }
}

export const clearProfileStatus = async () => {
  try {
    await AsyncStorage.removeItem('profileUpdated');
  } catch (error) {
    
  }
}

export const getExistingUser = async () => {
  try {
    const existingUser = await AsyncStorage.getItem('existingUser');
    return JSON.parse(existingUser) ?? null;
  } catch (error) {}
};

export const getJwt = async () => {
  try {
    const jwtToken = await AsyncStorage.getItem('jwt');
    return jwtToken;
  } catch (error) {}
};

export const getRefreshToken = async () => {
  try {
    const jwtToken = await AsyncStorage.getItem('refreshToken');
    return jwtToken;
  } catch (error) {}
};

export const setRole = async (role) => {
  try {
    const userRole = await AsyncStorage.setItem('userRole',role ? 'corporate': 'retail');
    return userRole;
  } catch (error) {}
};

export const getRole = async () => {
  try {
    const userRole = await AsyncStorage.getItem('userRole');
    return userRole;
  } catch (error) {}
};

export const clearRole = async () => {
  try {
    await AsyncStorage.removeItem('userRole');
  } catch (error) {
    
  }
}
export const getProfileStatus = async () => {
  try {
    const jwtToken = await AsyncStorage.getItem('profileUpdated');
    return jwtToken;
  } catch (error) {}
};

export const setSearchHistory = async (data) => {
  try {
    const userRole = await AsyncStorage.setItem('searchHistory',JSON.stringify(data));
    return userRole;
  } catch (error) {}
};

export const getSearchHistory = async () => {
  try {
    const userRole = await AsyncStorage.getItem('searchHistory');
    return userRole;
  } catch (error) {}
};

export const clearSearchHistory = async () => {
  try {
    await AsyncStorage.removeItem('searchHistory');
  } catch (error) {
    
  }
}
