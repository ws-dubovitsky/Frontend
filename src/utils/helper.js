

export const generateSchemData = (floorsAmount, checkedFloor) => { // floorsAmount: number, checkedFloor: 'g' or 'lg'
  const schemData = [];
  let label;
  const offset = checkedFloor === 'lg' ? 2 : 1; // offset for labels related to checkedFloor
  for (let i = 1; i <= floorsAmount; i++) {
    if ((checkedFloor === 'g' && i === 1) || (checkedFloor === 'lg' && i === 2)) {
    	label = 'G';
    } else if (checkedFloor === 'lg' && i === 1) {
      label = 'LG';
    } else {
      label = (i - offset).toString();
    }
    schemData.unshift({
      id: i,
      label,
    });
  }

  return schemData;
};
