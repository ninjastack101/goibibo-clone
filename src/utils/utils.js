const getCountProperty = (props) => {
  if (props === 'Room(s)') return 'room';
  if (props === 'Adult') return 'adult';
  return 'children';
};

export default getCountProperty;
