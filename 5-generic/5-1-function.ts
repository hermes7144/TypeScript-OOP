{
  function checkNotNull_bk(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  // 제네릭을 사용하면 사용하는 사람이 타입을 결정할 수 있다.

  const number = checkNotNull(123);
  const boal = checkNotNull(true);
  console.log(number);
  checkNotNull(null);
}
