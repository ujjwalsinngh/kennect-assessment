
let firstArray = [
  {
    name: "John Doe",
    empId: 100,
    username: "abc100",
    email: "abc100@test.in",
  },
  {
    name: "Robin",
    empId: 100,
    username: "abc101",
    email: "abc101@test.in",
  },
];

let secondArray = [
  {
    empId: 100,
    salary: 50000,
  },
  {
    empId: 100,
    salary: 40000,
  },
];

let output = firstArray.map((element) => {
  let obj2 = secondArray.find((ele) => ele.empId == element.empId);
  element["salary"] = obj2.salary;
});

return output;





