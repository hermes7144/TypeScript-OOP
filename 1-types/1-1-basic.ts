{
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

  // unknown 뭐가 들어갈지 모름(잘 모르겠다) 사용 지양
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 어떤 것이든 들어갈 수 있음 사용 지양
  let anything: any = 0;
  anything = 'hello';

  // void
  function print(): void {
    // 아무것도 리턴 X
    console.log('hello');
    return;
  }

  // never 항상 오류를 출력하거나 리턴 값을 절대로 내보내지 않음.
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }

  // object 원시 타입을 제외한 모든 객체
  let obj: object; // bad
  function acceptObject(obj: object) {}

  acceptObject({ name: 'ellie' });
  acceptObject({ animal: 'dog' });
}
