ages=[{
  name:"Isra",
  age:09/27/1989
}
,{
  name:"Rodolfo",
  age:11/27/1998
}
,{
  name:"Kim",
  age:11/15/1996
}
,{
  name:"Iyari",
  age:09/26/1997
}
]

function differenceInAge(ages){
  return [Math.min(...ages.age), Math.max(...ages.age), Math.max(...ages.age)-Math.min(...ages.age)];
}

console.log(differenceInAge(ages))