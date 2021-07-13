const findMostRepeated = (arr) => {
  // checks if it's empty array and handles

  const nullAnswer = {
    elements: [],
    repeats: null,
  };

  // converts array into an object, which has the key eg: Foo and number of times: 3
  // accumulator, item, index, array
  let obj = {};
  let countedNames = arr.reduce(function (allNames, name) {
    if (name in allNames) {
      allNames[name]++;
    } else {
      allNames[name] = 1;
    }
    return allNames;
  }, obj);

  console.log("counted", countedNames);
  // now we want to iterate over the values in that object and add each value to an array
  let valueArray = [];
  Object.values(countedNames).forEach((val) => valueArray.push(val));
  console.log("Value Array", valueArray);
  // then we want to check the max value in that array
  let maxValue = Math.max(...valueArray);
  console.log("Max value", maxValue);
  // now we have the max value, we want to refer back to the object,
  // and check which keys have the value of the maxValue
  // we want to add those keys to an array
  let finalArray = [];
  Object.entries(countedNames).forEach(([key, value]) => {
    if (value == maxValue) {
      finalArray.push(key);
    }
    console.log("inside", finalArray);
  });

  console.log("Final array", finalArray);
  console.log("CountedNames", countedNames);

  if (maxValue === 1 || arr.length == 0) {
    return nullAnswer;
  } else {
    return {
      elements: finalArray,
      repeats: maxValue,
    };
  }
};

module.exports = { findMostRepeated };
