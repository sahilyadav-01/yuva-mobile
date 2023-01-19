export const dummyData1 = arrayLength => {
  let dummyArray = [];
  for (let i = 0; i < arrayLength; i++) {
    dummyArray = dummyArray.concat([
      {
        description: 'This is a description',
        text: 'This is a text',
      },
    ]);
  }
  return dummyArray;
};