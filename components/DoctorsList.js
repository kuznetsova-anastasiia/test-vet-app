import { ScrollView, StyleSheet, View, Text } from "react-native";
import { DoctorCard } from "./DoctorCard";

export const DoctorsList = ({ list }) => {
  return (
    <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 18, flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Nearby Vets
        </Text>

        <Text style={styles.link}>
          View All
        </Text>
      </View>

      {list.length
        ? (
          <>
            {list.map(item => <DoctorCard data={item} key={item.fullName} />)}
          </>
        )
        : (
          <Text
            style={{
              fontFamily: 'outfit-m',
              fontSize: 16
            }}
          >
            Sorry, nothing was found... :c
          </Text>
        )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
    width: '100%'
  },
  title: {
    fontFamily: 'outfit-b',
    fontSize: 18,
    letterSpacing: 1,
    color: '#08182F'
  },
  link: {
    fontFamily: 'outfit-m',
    fontSize: 13,
    color: '#2F5EA0'
  }
})