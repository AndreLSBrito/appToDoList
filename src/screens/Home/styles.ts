import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
    paddingHorizontal:24,
    position: "absolute",
    marginTop: 142
  },
  input:{
    backgroundColor: '#262626',
    padding:16,
    color: '#F2F2F2',
    flex: 1,
    height:52,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#0d0d0d',
    borderRadius: 6
  },
  button:{
    width:52,
    height:52,
    alignItems:"center",
    justifyContent: 'center',
    backgroundColor: '#1E6F9F',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#0d0d0d',
    borderRadius:6 
  }
});