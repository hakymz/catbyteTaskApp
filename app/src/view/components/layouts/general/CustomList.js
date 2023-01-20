import React from 'react';
import {View, FlatList} from 'react-native';
import {CustomTab} from './CustomTab';
export const CustomList = ({onTabChange, data, selectCategory, ...props}) => {
  const [selectedDataIndex, setSelectedDataIndex] = React.useState([]);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  const selectDataIndex = index => {
    setSelectedDataIndex(index);
    onTabChange?.(data?.[index]?.data);
  };

  React.useEffect(() => {
    if (selectCategory) {
      selectDataIndex(selectCategory - 1);
      setSelectedCategoryIndex(selectCategory - 1);
    } else {
      selectDataIndex(0);
      setSelectedCategoryIndex(0);
    }
  }, [selectCategory]);

  React.useEffect(() => {
    onTabChange?.(data?.[selectedDataIndex]?.data);
  }, [selectedDataIndex]);

  return (
    <View>
      <CustomTab
        selectedCategoryIndex={selectedCategoryIndex}
        tabList={data}
        selectDataIndex={selectDataIndex}
      />
      <FlatList {...props} data={data?.[selectedDataIndex]?.data} />
    </View>
  );
};
