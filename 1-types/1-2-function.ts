{
  // // JavaScript
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // JavaScript
  // function Add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // // JavaScript
  // function jsFetchNum(id: string): Promise<number> {
  //   // code...
  //   // code...
  //   // code...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // JavaScript => TypeScript
  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('Steve', 'Jobs');
  printName('Ellie');

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  console.log(addNumbers(1, 2, 3));
  console.log(addNumbers(1, 2, 3, 4, 5));

  function addNumbers(...numbers: Array<number>): number {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
}
