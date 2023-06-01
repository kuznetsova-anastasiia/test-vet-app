import { StyleSheet } from "react-native";
import { Select, SelectItem, IndexPath } from '@ui-kitten/components'

export const DisabledSelect = ({ data, selectedIndex, setSelectedIndex}) => {
  const displayValue = data[selectedIndex.row];
  const renderOption = (title) => (
    <SelectItem title={title} disabled={true} />
  );

  return (
    <Select
      disabled={true}
      style={styles.select}
      placeholder='Select'
      value={displayValue}
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      {data.map(renderOption)}
    </Select>
  );
}

const styles = StyleSheet.create({
  select: {
    borderWidth: 1,
    borderColor: '#E9E8E8',
    borderRadius: 6,
    backgroundColor: 'white',
  },
});
