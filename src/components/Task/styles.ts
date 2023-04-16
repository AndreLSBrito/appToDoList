import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
})