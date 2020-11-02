import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
} from "react-native";

import {getData, getName, overwrite} from 'country-list'
// import Flags from 'react-native-flags'

function CountrySelectDropdown ({
    // countrySelect, 
    
    toggleParentScroll = () => null, 
    error, 
    overwrites = [{code: 'TW', name: 'Taiwan'}], 
    defaultCountry = "", 
    dropdownOffsetX = 0, 
    dropdownOffsetY = 0, 
    fontFamily = "Roboto",
    fontSizeOffset = 0,
    textColor = "black"}) 
{

  overwrite(overwrites)

  const allCountryList = getData()
  const [modalVisible, setModalVisible] = useState(false);
  const [countryCode, setCountryCode] = useState(defaultCountry);
  const [country, setCountry] = useState(getName(defaultCountry));
  const [countryList, setCountryList] = useState(getData())

  const onCountrySelect = ({name, code}) => {
    setModalVisible(false)
    setCountryCode(code)
    setCountry(name)
    // countrySelect(code)
    toggleParentScroll()
  }

  const filterCountryList = (searchText) => {
    const newList = allCountryList.filter(({name}) => name.toLowerCase().includes(searchText.toLowerCase()))
    setModalVisible(true)
    setCountryList(newList)
  }

  const clearCountryField = () => {
    // countrySelect("")
    setCountryCode("")
    setCountry("")
  }
  
  const renderItem = (item) => {
    return (
      <TouchableOpacity key={item.code}
        style={{
        flexDirection: "row",
        backgroundColor: "#f3f3f3",
        
        padding: 15,   // option space
        paddingLeft: 2,
        alignItems: "center",
        borderWidth: 1,
        borderBottomWidth: 0,
        borderColor: "rgba(0,0,0,0.2)",
        backgroundColor:"white",
        zIndex: 2,}}
        onPress={() => {onCountrySelect(item)}}
      >
        {/* <Flags code={item.code} type={"flat"} size={24} /> */}
        <Text style={{               //  style for dropdown options
          fontFamily: fontFamily,
          fontWeight: "500",
          color: textColor,
          paddingHorizontal: 10,}}>{item.name}</Text>

      </TouchableOpacity>
    )
  }

  return (
    <View style={{flex:3, width:"43.5%", marginTop:110,marginLeft:80,}}>      
      {countryCode !== "" &&
        <View style={{         // show the country name in input field
          minHeight: 40,
          width:172,
          height:48,
          borderRadius: 2,
          marginBottom: 10,
          borderColor:"#403C4F",   // border
          borderWidth:1,
          fontSize: 16,
          fontFamily: fontFamily
        }}>
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <TouchableOpacity 
              onPress={clearCountryField} 
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding:3,
                margin: 2,
                maxWidth: "100%",}}
            >
              {/* <Flags code={countryCode} type={"flat"} size={24} style={{marginHorizontal: 2}} /> */}

              <Text style={{            // input country name
                flex: 1,
                paddingHorizontal: 10,
                
                color: "#403C4F",
                fontSize: 16 + fontSizeOffset,
                fontFamily: "Roboto",
              }}>{country}</Text>

              <Text style={{                  // close button
                paddingHorizontal: 10,
                alignSelf: "flex-end",
                transform: [{ rotate: '45deg' }], 
                color: "grey", 
                fontSize: 25 ,
              }}>+</Text>

            </TouchableOpacity>
          </View>
        </View>
      }

      {countryCode === "" &&
        <TextInput style={error ? {    // for error border and all
          // minHeight: 35,
          // borderBottomColor: "#FF7070",
          // borderBottomWidth: 5,
          // color: textColor,
          // fontSize: 20 + fontSizeOffset,
          // fontFamily: fontFamily,
        } : {
          minHeight: 40,
          borderColor:"#AEB5C6",   // input border colour
          borderWidth:1,
          width:172,
          height:48,
          borderRadius: 2,
          paddingLeft:10,
          color: textColor,   // input text colour
          fontSize: 16 ,
          fontFamily: "Roboto"}
        } 
          placeholder={"country"} 
          onChangeText={filterCountryList} 
          onFocus={toggleParentScroll}/>
      }

      {/* {error &&
        <Text style={{
          marginBottom: 20,
          alignSelf: "flex-start",
          color: "#FF7070",
          fontFamily: fontFamily,
          fontSize: 20 + fontSizeOffset}}>{error}</Text>
      } */}

      {modalVisible &&
      <ScrollView style={{
        position: "absolute",
        maxHeight: 220,
        marginTop: 48 + dropdownOffsetY,   // the space between the dropdown and text box
        marginLeft: dropdownOffsetX,
        width: "100%",
        backgroundColor: "white",
        elevation: 5,
        fontFamily: "Roboto"}}>
        {countryList.map((country) => renderItem(country))}
      </ScrollView>}
    </View>
  );
};

export default CountrySelectDropdown;
