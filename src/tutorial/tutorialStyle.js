
import colors from '../assets/color';

module.exports = {
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  no: {
    fontSize: 20,
    color: colors.white,
  },
  ques: {
    margin: 10,
    padding: 10,
    borderWidth: 0.2,
    borderRadius: 4,
    flexDirection: 'row',
    borderColor: colors.white,
  },
  quesTxt: {
    fontSize: 20,
    color: colors.white,
    marginLeft: 8,
    width: '90%',
  },
  ans: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 8,
  },
  ansTxt: {
    fontSize: 20,
    color: colors.primary,
  },

  quesPop: {
    padding: 10,
    borderWidth: 0.2,
    borderRadius: 2,
    flexDirection: 'row',
    marginBottom: 6,
    borderColor: colors.primary,
    
  },
  quesTxtPop: {
    fontSize: 20,
    textAlign:"center",
    color: colors.black,

  },
  ansPop: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 6,
  },
  ansTxtPop: {
    fontSize: 20,
    color: colors.primary,
  },
};
