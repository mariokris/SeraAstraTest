import {StyleSheet, StatusBar} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: 24,
    height: '100%',
    paddingBottom: 20,
  },
  pageTitle: {
    color: '#25282B',
    fontSize: 21,
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 8,
    height: 60,
    backgroundColor: 'white',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonImageContainer: {
    backgroundColor: '#25282B',
    height: 48,
    width: 48,
    borderRadius: 4,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImage: {
    height: '70%',
    width: '70%',
    resizeMode: 'contain',
    flex: 1,
  },
  title: {
    color: '#25282B',
    fontSize: 14,
  },
  subtitle: {
    color: '#9E9E9E',
    fontSize: 12,
  },
  overviewContainer: {
    height: 100,
    borderRadius: 4,
    marginTop: 10,
  },
  overviewTitle:{
    color: '#9E9E9E',
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  overview:{
    color: '#25282B', marginTop: 20
  },
  overviewDetailContainer:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingRight: 24,
  }
});
