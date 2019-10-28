const convertInt = (value) =>{
  const newValue = parseFloat(value.replace('.','').replace(',','.'));
  const valueInt = newValue.toFixed(2);

  return parseFloat(valueInt);
}

export default convertInt;