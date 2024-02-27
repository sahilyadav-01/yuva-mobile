import {useState} from 'react';

export const useFilter = () => {
  const [data, setData] = useState([
    {
      title: 'Category',
      id: 0,
      data: [
        {title: 'Category 1', status: 'unchecked'},
        {title: 'Category 2', status: 'unchecked'},
        {title: 'Category 3', status: 'unchecked'},
      ],
    },
    {
      title: 'Sub Categories',
      id: 1,
      data: [
        {title: 'Sub Category 1', status: 'unchecked'},
        {title: 'Sub Category 2', status: 'checked'},
        {title: 'Sub Category 3', status: 'checked'},
      ],
    },
    {
      title: 'Brand',
      id: 2,
      data: [
        {title: 'Brand 1', status: 'unchecked'},
        {title: 'Brand 2', status: 'unchecked'},
        {title: 'Brand 3', status: 'unchecked'},
      ],
    },
  ]);

  const onCheck = ({id, index}) => {
    let newData = data.map(item => {
      if (item.id === id) {
        return {
          ...item,
          data: item.data.map((element, i) => {
            if (i === index) {
              return {
                ...element,
                status: element.status === 'checked' ? 'unchecked' : 'checked',
              };
            }
            return element;
          }),
        };
      } else return item;
    });
    setData(newData);
  };
  return {onCheck, data};
};
