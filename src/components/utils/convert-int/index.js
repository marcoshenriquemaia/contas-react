const convertInt = (value) =>{
  const valueInt = parseFloat(value.replace(',','.'));
  
  return valueInt.toFixed(2);
}

export default convertInt;