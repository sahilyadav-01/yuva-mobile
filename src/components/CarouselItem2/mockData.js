export const dummyData = (arrayLength, description, text) => {
  let dummyArray = [];
  for (let i = 0; i < arrayLength; i++) {
    dummyArray = dummyArray.concat([{description, text}]);
  }
  return dummyArray;
};
