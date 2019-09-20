const getCountProperty = (props) => {
  if (props === 'Room(s)') return 'room';
  if (props === 'Adult') return 'adult';
  return 'children';
};

export function flattenObject(object) {
  const result = {};
  for (const pair in object) {
    if (!object.hasOwnProperty(pair)) continue;
    if ((typeof object[pair]) === 'object' && object[pair] !== null) {
      const flatObject = flattenObject(object[pair]);
      for (const x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;
        result[`${pair}.${x}`] = flatObject[x];
      }
    } else {
      result[pair] = object[pair];
    }
  }
  return result;
}

export default getCountProperty;
