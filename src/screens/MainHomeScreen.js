import React from 'react';
import { Text, StyleSheet,Image, View, Button, FlatList,TouchableOpacity } from 'react-native';
import ListScreen from "./ListScreen";
import Overseas_card from '../../assets/images/Overseas_card';
import Domestic_card from '../../assets/images/Domestic_card';
import Applied_icon from '../../assets/images/Applied_icon';
import Selected_icon from '../../assets/images/Selected_icon';
const MainHomeScreen = ({ navigation }) => {
  const jobs = [
    { jobName: 'UI Developer', CompanyName: 'Slack Technologies', CompCity:'Bangalore',CompState:'Karnataka',CompCountry:'India',JobPostDay:4 },
    { jobName: 'Content Writer', CompanyName:'Wespa Pvt Ltd' ,CompCity:'Kochi',CompState:'Kerala',CompCountry:'India',JobPostDay:5 },
    { jobName: 'Project Manager SAP', CompanyName: 'Ioata Technologies',CompCity:'Faridabad',CompState:'Punjab',CompCountry:'India',JobPostDay:3 },
    { jobName: 'Senior Infrastruce Engineer', CompanyName: 'Ektav Technologies',CompCity:'Bidar',CompState:'Karnataka',CompCountry:'India',JobPostDay:4  },
    { jobName: 'Front End Developer', CompanyName: 'Zail Technologies',CompCity:'Chennai',CompState:'Tamil Nadu',CompCountry:'India',JobPostDay:6  },
    { jobName: 'Back End Developer', CompanyName: 'Pivot Technologies',CompCity:'Krisnagiri',CompState:'Tamil Nadu',CompCountry:'India',JobPostDay:7  },
    { jobName: 'HR Officer', CompanyName: 'Pamolive Companies' ,CompCity:'Kottayam',CompState:'Kerala',CompCountry:'India',JobPostDay:18 },
    { jobName: 'Tester', CompanyName:'Nirvana Technologies',CompCity:'Udupi',CompState:'Karnataka',CompCountry:'India',JobPostDay:14 },
    { jobName: 'Technical Analyst', CompanyName: 'Allied Technologies',CompCity:'Belgaum',CompState:'Karnataka',CompCountry:'India',JobPostDay:5  }
  ];


  return (
    <FlatList style={{backgroundColor: "white"}}
   keyExtractor={job => job.jobName}
      data={jobs}
      renderItem={({ item}) => {
        return (

         
    <View>
     <TouchableOpacity  onPress={() => navigation.navigate('List')} >
<Overseas_card style = {styles.OverseasCard} />
 {/* <View>
 <Image style = {styles.OverseasCard} source={require('../../assets/overseas_card.png')}  />
 </View> */}
</TouchableOpacity>
      
    <TouchableOpacity  onPress={() => navigation.navigate('List')} >
        <Domestic_card style = {styles.DomesticCard}/>
 {/* <View>
 <Image style = {styles.DomesticCard} source={require('../../assets/domestic_card.png')}  />
 </View> */}
</TouchableOpacity>
      
        
      
      
      <View style={{flexDirection:'row'}}>

      <TouchableOpacity  onPress={() => navigation.navigate('List')} >
      <View style = {styles.AppliedCard}>
 <Text style = {styles.AppliedText}>Applied Jobs </Text>
 <View style={{flexDirection:'row'}}>
 <Text style = {styles.AppliedNo}>123 </Text>
 <Applied_icon style = {styles.AppIcon}/>
 {/* <Image style = {styles.AppIcon} source={require('../../assets/Applied_icon.png')}  /> */}
 </View>
 </View>
</TouchableOpacity>
{/* below for Saved jobs*/}
<TouchableOpacity  onPress={() => navigation.navigate('MyProfile')} >
      <View style = {styles.SavedCard}>
 <Text style = {styles.AppliedText}>Saved Jobs </Text>
 <View style={{flexDirection:'row'}}>
 <Text style = {styles.AppliedNo}>12 </Text>
 <Selected_icon style = {styles.AppIcon1}/>
 {/* <Image style = {styles.AppIcon} source={require('../../assets/Selected_icon.png')}  /> */}
 </View>
 </View>
</TouchableOpacity>


       
      </View>
      <View style={{flexDirection:'row'}}>
      <Text style = {styles.RecommendText}>Recommended Jobs</Text>
      <Text style = {styles.ViewAllText}>View all Jobs</Text>
      </View>
       <ListScreen/>
    </View>
    );
  }}
/>
     
  );
};

const styles = StyleSheet.create({
  jobcard:{
    backgroundColor: "white",
     fontSize: 20,
     //paddingLeft:48,
     //marginVertical: 24
  },
  jobRoleStyle: {
    fontSize: 14,
    fontWeight:"500",
    color: '#403C4F'
   
  },
  CompanyNameStyle: {
    fontSize: 12,
    fontWeight:"500",
    color: '#403C4F'
   
  },
  JobPostedTimeStyle: {
    fontSize: 8,
    
    color: '#403C4F'
   
  },
  text: {
    fontSize: 30,
    marginVertical: 50
  },
  OverseasCard:{
width: 328,
height:120,
marginTop:16,
marginLeft:16,
marginBottom:6,
borderRadius:4
  },
  DomesticCard:{
    width: 328,
    height:120,
    marginLeft:16,
    marginBottom:16,
    borderRadius:4
      },
  AppliedCard:{
    width: 160,
height:64,
marginLeft:21,
borderRadius:4,
borderWidth:2,
paddingLeft:10,
borderColor:'#E0E0E0',
backgroundColor:'white',},
SavedCard:{
  width: 160,
height:64,
marginLeft:6,
borderRadius:4,
borderWidth:2,
paddingLeft:10,
borderColor:'#E0E0E0',
backgroundColor:'white',},
  AppliedText:{
     fontWeight:"500",
    fontSize:14,
    marginTop:8
  },
  RecommendText:{
    fontWeight:"500",
   fontSize:14,
   marginTop:32,
   marginLeft:22,
   color:'#AEB5C6',
 },
 ViewAllText:{
  fontWeight:"500",
 fontSize:14,
 marginTop:32,
 marginLeft:108,
 color:'#0D47A1',
},


  AppliedNo:{
    fontSize:24,
    fontWeight:"400"
  },
  AppIcon:{
    width: 32,
height:32,
marginLeft:59
  },
  AppIcon1:{
    width: 32,
height:32,
marginLeft:78
  },



  space: 555
});

export default MainHomeScreen;