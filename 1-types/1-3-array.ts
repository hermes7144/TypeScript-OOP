{
  // Array
  const fruits: string[] = ['a', ' b'];
  const scroes: Array<number> = [1, 3, 5];

  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class로 대체하는게 가독성 좋음
  let student: [string, number];
  student = ['name', 123];
  // array 가독성이 떨어진다?
  student[0]; // name
  student[1]; // 123

  const [name, age] = student;
}
