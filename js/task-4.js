const formatString = function (string) {
  if (string.length <= 40) {
    return string
  }
    else {
       string = string.split('');
       string.splice(40);
       string.splice(40, 0, '...');
       string = string.join('')
        }
  return string
 
}


console.log(formatString('Curabitur ligula sapien, tincidunt non.'));


console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));


console.log(formatString('Curabitur ligula sapien.'));


console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
