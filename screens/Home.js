import { StyleSheet, View } from 'react-native';
import { Search } from '../components/Search';
import { DoctorsList } from '../components/DoctorsList';
import { useEffect, useState } from 'react';
import doctors from '../api/doctors.json';
import { filterDoctors } from '../utils/helpers/filterDoctors';
import * as Location from "expo-location";
import { getFormattedDate } from '../utils/helpers/getFormattedDate';
import { useSelector } from 'react-redux';
import { ErrorMessage } from '../components/ErrorMessage';
import { useDispatch } from "react-redux";
import { setCurrentGeo } from '../redux/actions';

export const Home = () => {
  const { dateFilter, geoFilter } = useSelector(state => state.filterReducer);
  // const [currentCoords, setCurrentCoords] = useState();
  const { latitude, longitude } = useSelector(state => state.currentGeoReducer);
  const [geoError, setGeoError] = useState(false);

  const dispatch = useDispatch();

  const selectedDate = dateFilter ? getFormattedDate(dateFilter) : '';
  const geoArgs = geoFilter ? { radius: geoFilter, currentCoords: { longitude, latitude } } : undefined;
  const filteredDoctors = filterDoctors(doctors, selectedDate, geoArgs);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setGeoError(true);
          return;
        }
        const location = await Location.getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        dispatch(setCurrentGeo, { latitude: location.coords.latitude, longitude: location.coords.longitude });
        // setCurrentCoords({ latitude: location.coords.latitude, longitude: location.coords.longitude });
      } catch {
        console.log('nope');
        setGeoError(true);
      }
    }

  getLocation();
  }, []);

  return (
      <View style={styles.container}>
        <View style={{ width: '100%', paddingHorizontal: 18 }}>
          <Search />
        </View>

        <DoctorsList list={filteredDoctors} />

        {geoError && (
          <ErrorMessage message="Cant't access to location" setError={setGeoError} isError={geoError} />
        )}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    width: '100%',
    paddingTop: 55,
    justifyContent: 'center',
    alignItems: 'center'
  }
})