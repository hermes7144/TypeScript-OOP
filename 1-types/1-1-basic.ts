{
  // JavaScript

  // number
  const num: number = 1;

  // string
  const str: string = 'hello';

  // boolean
  const bool: boolean = false;

  // undefined
  let name: undefined; // bad
  let age: number | undefined; // good
  function find(): number | undefined {
    return 1;
  }
  // null
  let person: null; // bad
  let person2: string | null; //good
}
