const users = [
  {name: "John", surname: "Smith", id: 1,},
  {name: "Pete", surname: "Hunt", id: 2,},
  {name: "Mary", surname: "Key", id: 3,}
];
const usersMapped = [];

// 1st variant

// let item;
// function mapUsers (arr1, arr2) {
//   for (i = 0; i < arr1.length; i++) {
//     item = arr1[i];
//     arr2.push({'fullname' : `${item.name} ${item.surname}`, 'id':item.id})
//     //arr2[i] = new Mapping (arr1[i].name + ' ' + arr1[i].surname, arr1[i].id)
//   }
// }

//----------------------------------------------------------------------------

//2nd variant

// function Mapping (fullname, id) {
//   this.fullname = fullname;
//   this.id = id;
//   return {fullname, id};
// }
//
// function mapUsers (arr1, arr2) {
//   for (i = 0; i < arr1.length; i++) {
//     arr2[i] = new Mapping (arr1[i].name + ' ' + arr1[i].surname, arr1[i].id)
//   }
//   return arr2;
// }

//----------------------------------------------------------------------------

//3rd variant

function mapUsers (arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    arr2 = arr1.map(function (fullName, id) {
      fullname: `${arr1[i].name} ${arr1[i].surname}`,
      id: `${arr1[i].id}`,
    })
  }
  return arr2;
}

//----------------------------------------------------------------------------

mapUsers(users, usersMapped);
console.log (usersMapped)
