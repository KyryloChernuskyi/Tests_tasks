const users = [
  {name: "John", surname: "Smith", id: 1,},
  {name: "Pete", surname: "Hunt", id: 2,},
  {name: "Mary", surname: "Key", id: 3,}
];

//----------------------------------------------------------------------------

// 1st variant

let item;
function mapUsers (arr1) {
  const arr2 = [];
  for (i = 0; i < arr1.length; i++) {
    item = arr1[i];
    arr2.push({'Full Name' : `${item.name} ${item.surname}`, 'id':item.id})
  }
  return arr2;
}

const usersMapped_1 = mapUsers(users);

//----------------------------------------------------------------------------

//2nd variant

const usersMapped_2 = users.map(function (i) { return {fullName: `${i.name} ${i.surname}`, id: i.id} })

//----------------------------------------------------------------------------

console.log ('Option 1:');
console.log (usersMapped_1);
console.log ('Option 2:');
console.log (usersMapped_2);
