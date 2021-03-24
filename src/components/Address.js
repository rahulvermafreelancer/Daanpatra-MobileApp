import React, {useState} from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Address = () => {

  const [pickup_address, setPickAddress] = useState("");

  return (
    <GooglePlacesAutocomplete
      placeholder='Enter Pickup Address'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        
        console.log(data, details);
      }}
      query={{
        key: 'YOUR API KEY',
        language: 'en',
        components: 'country:in',
      }}
    />
  );
};

export default Address;