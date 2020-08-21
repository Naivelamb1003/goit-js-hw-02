const getItemsString = function (array) {
  "use strict";
  // Write code under this line
  let result = "";
  for (let i = 0; i < array.length; i += 1) {
    const firstItem = array[i];
    const orderedItem = `${i + 1} - ` + firstItem + "\n";
    result += orderedItem;
  }
  return result;
};
