import { AsyncStorage } from 'react-native'

export default {

  storeItem: async (key, value) => {
  try {
      await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Error storing an item')
    }
  },

  retrieveItem: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if (value) {
        return JSON.parse(value)
      }
      return null
    } catch(error) {
      console.error('Error retrieving an item from storage')
    }
  }
}
