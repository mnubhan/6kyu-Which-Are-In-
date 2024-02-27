const inArray = (array1,array2)=>{
  let inArr=[];
  array1.forEach(x=>array2.forEach(y=>y.includes(x)&&inArr.includes(x)==false?inArr.push(x):inArr))
  return inArr.sort()
}

function inArray(array1,array2){
  return array1
    .filter(a1 => array2.find(a2 => a2.match(a1)))
    .sort()
}
