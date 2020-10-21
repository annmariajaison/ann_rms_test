import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import CompanyLogo1 from '../../assets/images/Companylogo1';

 function ListScreen () {
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
      renderItem={({ item }) => {
        return (
          
          <View style={styles.jobcard}>
             <View style={{flexDirection:'row'}} >
               <CompanyLogo1 style={styles.tinyCompLogo}/>
            {/* <Image
        style={styles.tinyCompLogo}
        source={require('../../assets/CompanyLogo1.png')}
      />  */}
        <View >
          <Text style={styles.jobRoleStyle}>
            {item.jobName}  </Text>
            <Text style={styles.CompanyNameStyle}>
            {item.CompanyName}
            </Text>
            <Text style={styles.CompanyNameStyle}>
          
           {item.CompCity} ,
          {item.CompState},
          {item.CompCountry}
          </Text>
          <Text style={styles.JobPostedTimeStyle}>
          Posted {item.JobPostDay} days ago
          </Text>
          </View>
         </View>
         </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  jobcard:{
    flexDirection:'row',
    backgroundColor: "white",
     fontSize: 20,
     paddingLeft:20,
     marginVertical: 24,
     
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
    marginTop:4,
    color: '#403C4F'
   
  },
  tinyCompLogo:{
    width:24,
    height:24,
    marginLeft:6,
    marginRight:8,
    marginTop : 6
  },
  
});

export default ListScreen;