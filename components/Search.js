import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Select, SelectItem, IndexPath, Datepicker, Button, Text as EvaText } from '@ui-kitten/components'
import { SvgXml } from 'react-native-svg';
import { location, calendar } from "../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import { setDateFilter, setGeoFilter } from '../redux/actions';

const LocationIcon = () => (
  <SvgXml xml={location} height="16" />
);

const CalendarIcon = () => (
  <SvgXml xml={calendar} height="16" />
);

const geo = [
  '1 mile',
  '2 miles',
  '5 miles',
  '10 miles'
];

export const Search = () => {
  const [selectedPurpose, setSelectedPurpose] = useState(new IndexPath(0));
  const [selectedAnimal, setSelectedAnimal] = useState(new IndexPath(0));
  const [selectedGeo, setSelectedGeo] = useState();
  const [date, setDate] = useState();
  const { latitude, longitude } = useSelector(state => state.currentGeoReducer);

  const dispatch = useDispatch();

  const displayGeo = selectedGeo
    ? evaProps => <EvaText {...evaProps} style={styles.selectOption}>{geo[selectedGeo.row]}</EvaText>
    : evaProps => <EvaText {...evaProps} style={[styles.selectOption, { opacity: 0.7 }]}>Nearby</EvaText>

  const displayDate = date
    ? undefined
    : evaProps => <EvaText {...evaProps} style={styles.selectOption}>{date}</EvaText>

  const handleSearch = () => {
    if (!selectedGeo && !date) {
      return;
    }

    if (date) {
      dispatch(setDateFilter(date));
    }

    if (selectedGeo) {
      dispatch(setGeoFilter(+geo[selectedGeo.row].split(' ')[0]));
    }
  }

  const renderOption = (title) => (
    <SelectItem title={evaProps => <EvaText {...evaProps} style={{ fontFamily: 'outfit-r' }}>{title}</EvaText>} />
  );

  return (
    <View style={styles.search}>
      <View style={{ gap: 15 }}>
        <Select
          style={styles.select}
          placeholder='Select Purpose'
          value={evaProps => <EvaText {...evaProps} style={[styles.selectOption, { opacity: 0.7 }]}>Select Purpose</EvaText>}
          selectedIndex={selectedPurpose}
          onSelect={(index) => setSelectedPurpose(index)}
        >
          <SelectItem title={evaProps => <EvaText {...evaProps} style={{ fontFamily: 'outfit-r' }}>Select Purpose</EvaText>} disabled={true} />
        </Select>

        <Select
          style={styles.select}
          placeholder='Select Animal'
          value={evaProps => <EvaText {...evaProps} style={[styles.selectOption, { opacity: 0.7 }]}>Select Animal</EvaText>}
          selectedIndex={selectedAnimal}
          onSelect={(index) => setSelectedAnimal(index)}
        >
          <SelectItem title={evaProps => <EvaText {...evaProps} style={{ fontFamily: 'outfit-r' }}>Select Animal</EvaText>} disabled={true} />
        </Select>

        <View style={{ flexDirection: 'row', gap: 14 }}>
          <Select
            style={[styles.select, { flex: 1 }]}
            placeholder='Default'
            value={displayGeo}
            selectedIndex={selectedGeo}
            onSelect={(index) => setSelectedGeo(index)}
            accessoryRight={LocationIcon}
            disabled={!latitude && !longitude}
          >
            {geo.map(renderOption)}
          </Select>

          <Datepicker
            style={{ flex: 1 }}
            placeholder='Pick Date'
            date={date}
            onSelect={nextDate => setDate(nextDate)}
            accessoryRight={CalendarIcon}
          />
        </View>
      </View>

      <Button style={styles.button} onPress={handleSearch}>
        {evaProps => <EvaText {...evaProps} style={styles.buttonText}>SEARCH</EvaText>}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    elevation: 12,
    gap: 25
  },
  select: {
    borderWidth: 1,
    borderColor: '#E9E8E8',
    borderRadius: 6,
    backgroundColor: 'white',
  },
  selectOption: {
    fontFamily: 'outfit-r',
    fontSize: 13,
    color: '#08182F',
    paddingLeft: 10
  },
  buttonText: {
    fontFamily: 'outfit-b',
    fontSize: 14,
    color: '#FFF'
  },
  button: {
    backgroundColor: '#2F5EA0',
    borderRadius: 24,
    width: '50%',
    paddingVertical: 12,
    alignSelf: 'center'
  }
})