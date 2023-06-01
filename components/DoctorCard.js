import { Button, Text as EvaText } from "@ui-kitten/components";
import { Image, View, Text, StyleSheet } from "react-native";
import { SvgXml } from 'react-native-svg';
import { star, location } from "../utils/icons";
import { getDoctorDate } from "../utils/helpers/getDoctorDate";
import ViewOverflow from 'react-native-view-overflow';

export const DoctorCard = ({ data }) => {
  const diff = getDoctorDate(data.available);

  if (diff < 0) {
    return;
  }

  return (
      <View style={styles.card}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
            <Image
              source={require('../assets/images/doctor.jpg')}
              style={styles.photo}
            />

            <View style={{ gap: 8 }}>
              <Text style={styles.name}>
                {data.fullName}
              </Text>

              <Text style={styles.position}>
                {data.position}
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <SvgXml xml={star} height="12" />

            <Text style={styles.rating}>
              {data.rating}
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', gap: 15, marginBottom: 30 }}>
          <SvgXml xml={location} height="15" />

          <Text style={styles.location}>
            {data.location.name}
          </Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.available}>
            {`Available ${diff}`}
          </Text>
          
          <Button style={styles.button}>
          {evaProps => <EvaText {...evaProps} style={styles.buttonText}>Book</EvaText>}
          </Button>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 12,
    padding: 15,
    marginBottom: 12,
    width: '100%'
  },
  photo: {
    width: 48,
    height: 48,
    borderColor: 'lightgray',
    borderWidth: 0.5,
    borderRadius: 50,
  },
  name: {
    fontFamily: 'outfit-b',
    fontSize: 14, 
    color: '#08182F',
    letterSpacing: 1
  },
  position: {
    fontFamily: 'outfit-r',
    fontSize: 11,
    color: '#08182F',
    letterSpacing: 1
  },
  rating: {
    fontFamily: 'outfit-b',
    fontSize: 14,
    letterSpacing: 1,
    color: '#FFBA07'
  },
  location: {
    fontFamily: 'outfit-r',
    fontSize: 12,
    letterSpacing: 1,
    color: '#2F5EA0'
  },
  available: {
    fontFamily: 'outfit-m',
    fontSize: 12,
    color: '#FF974D'
  },
  buttonText: {
    fontFamily: 'outfit-b',
    fontSize: 13,
    letterSpacing: 2,
    color: '#FFFFFF'
  },
  button: {
    paddingVertical: 10,
    backgroundColor: '#2F5EA0',
    borderRadius: 22,
    width: '30%'
  }
})