import { StyleSheet } from 'react-native'

const $warningColor = '#E8DB6D';
const $successColor = '#52FFA8';
const $dangerColor = '#FF9175';
const $primaryColor = '#534EE8';

export default StyleSheet.create({
  homeContainer: {
    backgroundColor: $warningColor
  },
  headerView: {
    marginTop: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainContent: {
    marginTop: 30,
    marginHorizontal: 10,
  }
})