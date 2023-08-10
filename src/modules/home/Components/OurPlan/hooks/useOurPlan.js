import { useState } from "react";

export const useOurPlan = () => {
    const [selectedItems, setSelectedItems] = useState([0]);
    const DATA = [
        {
          title: 'Yuva Family Comprehensive',
          year: 1,
          rupee: 1000,
        },
        {
          title: 'Yuva Plus Gold',
          year: 2,
          rupee: 1000,
        },
        {
          title: 'Yuva Family Comprehensive',
          year: 3,
          rupee: 1000,
        },
      ];
      const handlePress = (item) => {
        setSelectedItems([item]);
      };
  return {
    DATA,
    selectedItems,
    setSelectedItems,
    handlePress
  };
};
