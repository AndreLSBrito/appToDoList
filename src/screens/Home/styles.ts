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
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between",
    marginBottom: 1,
    padding: 12,
    width:350,
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 8,
    backgroundColor: '#262626',
    color: 'white',
  },
  
  checkboxRoot: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  
  
  checkboxIndicator: {
    height: 24,
    width: 24,
    backgroundColor: '#ccc',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#4EA8DE'
  },
  
  
  iconCheck: {
    height: 22,
    width: 22,
    alignItems: 'center',
    justifyContent:"center",
    backgroundColor: '#5E60CE',
    color: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#5E60CE',
  },
  
  
  iconTrash: {
    height: 24,
    width: 24,
    display: 'flex',
    alignItems: 'flex-start',
    opacity: 0.9,
  }
});