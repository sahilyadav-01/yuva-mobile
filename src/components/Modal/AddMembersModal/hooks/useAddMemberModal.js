import {useState} from 'react';
import {Alert} from 'react-native';

export const useAddMemberModal = (relationsData, onSaveDetailsPress) => {
  const data = [
    {heading: 'Name', placeholder: 'Name'},
    {heading: 'Age', placeholder: 'Age'},
    {heading: 'Relationship', placeholder: 'Relationship'},
  ];
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [selectedRelation, setSelectedRelation] = useState('');

  const getTextInputValue = key => {
    switch (key) {
      case 'Name':
        return {value: name, func: setName,type:'input'};
      case 'Age':
        return {value: age, func: setAge,type:'input',keyboardType:'numeric'};
      case 'Relationship':
        return {value: '0',type:'picker'};
    }
  };
  const onTextChange = (text, heading) => {
    const set = getTextInputValue(heading)?.func;
    set(text);
  };
  const onItemSelect = index => {
    const item = relationsData.find(
      item => item.key === index.toString(),
    )?.value;
    setSelectedRelation(item);
  };
  const onSaveDetails = () => {
    const reg = /[- #*;,.<>\{\}\[\]\\\/]/gi
    if(!(name && age && selectedRelation)) Alert.alert('Alert', 'Please fill all the details');
    else if(reg.test(age)) Alert.alert('Alert', 'Please enter a proper age');
    else onSaveDetailsPress({name, age, selectedRelation});
  };
  return {
    data,
    name,
    age,
    selectedRelation,
    onItemSelect,
    getTextInputValue,
    onTextChange,
    onSaveDetails,
  };
};
