export const dummyData1 = (arrayLength, description) => {
  let dummyArray = [];
  for (let i = 0; i < arrayLength; i++) {
    dummyArray = dummyArray.concat([
      {
        description,
      },
    ]);
  }
  return dummyArray;
};
