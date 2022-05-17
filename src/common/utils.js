const searchArray = (nameKey, myArray) => {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].id === nameKey) {
      return myArray[i];
    }
  }
}

export default searchArray