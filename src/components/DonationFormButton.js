import React from 'react';
import {Button, Text } from 'native-base';
import {TouchableOpacity} from 'react-native';


const DonationFormButton = () => {

    return(
        <>
            <TouchableOpacity style={{width: '100%', height: '20%', backgroundColor: '#D9D55B'}}>
                <Button block>
                    <Text style={{fontSize: 18, fontWeight: '700', textAlign: 'center'}}>Donate</Text>
                </Button>
            </TouchableOpacity>
        </>
    )
}

export default DonationFormButton;