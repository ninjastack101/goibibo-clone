const cityParser = (contents) => {
  let editedContents = contents.replace(/"1"/g, '"1",').replace(/"0"/g, '"0",').slice(0, -1).replace(/(\r\n|\n|\r)/gm, '');
  editedContents = editedContents.substring(0, editedContents.length - 1);
  const dummy = editedContents.split(',');
  const newdummy = dummy.map((text) => text.replace(/"/g, '')).slice(2, dummy.length);
  newdummy[0] = 'Panvel';
  const cityList = [];
  for (let i = 0; i < newdummy.length; i += 3) {
    const city = {};
    city.label = newdummy[i];
    city.value = newdummy[i + 1];
    city.domestic = newdummy[i + 2];
    cityList.push(city);
  }
  return cityList;
}

export default cityParser;

