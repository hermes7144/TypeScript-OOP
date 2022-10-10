{
  // Type Assertions bad
  function jsStrFunc(): any {
    return 2;
  }

  const result = jsStrFunc();

  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers()!;
  numbers!.push(2); // 😱 무조건 null이 아니라고 선언함
}
