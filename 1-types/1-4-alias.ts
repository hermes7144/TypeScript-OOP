{
  /*
    Type Aliases 원하는 타입을 정의하는 것
   */
  type Text = string;
  const name: Text = 'ellie';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'ellie',
    age: 3,
  };

  // String Literal Types
  type Name = 'name';
  let elliName: Name;
  elliName = 'name';
}
