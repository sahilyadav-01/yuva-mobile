import {useState} from 'react';

export const useFooter = () => {
  const [planLockView, setPlanLockView] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [dependents, setDependents] = useState([
    {name: 'Vamsi', gender: 'Male', age: '24', relation: 'Brother'},
  ]);
  const onToggle = () => setPlanLockView(!planLockView);
  const onAddMembersPress = () => {
    setModalVisible(true);
  };
  const onCrossPress = () => setModalVisible(false);
  const onSaveDetailsPress = arg => {
    setDependents([
      ...dependents,
      {
        name: arg.name,
        gender: arg.selectedGender,
        age: arg.age,
        relation: arg.selectedRelation,
      },
    ]);
    setModalVisible(false);
  };
  return {
    planLockView,
    onToggle,
    onAddMembersPress,
    modalVisible,
    onCrossPress,
    dependents,
    onSaveDetailsPress,
  };
};
