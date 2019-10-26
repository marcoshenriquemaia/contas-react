const formatReal = int => {
  let newInt = `${int}`.replace('.', '');
  newInt = newInt.replace(/([0-9]{2})$/g, ",$1");
  if (newInt.length > 6) newInt = newInt.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

  return newInt;
}

export default formatReal;