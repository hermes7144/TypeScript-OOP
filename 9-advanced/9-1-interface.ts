type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

interface PositionInterface {
  z: number;
}

// object
const obj1: PositionType = {
  x: 1,
  y: 1,
};

const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1,
};

// class
class Pos1 implements PositionType {
  x: number;
  y: number;
}

class Pos2 implements PositionInterface {
  x: number;
  y: number;
}

// Extends
interface ZpositionInterface extends PositionInterface {
  z: number;
}

type ZPositionType = PositionType & { z: number };

// only interface can be merged.
interface PositionInterface {
  z: number;
}

// type PositionType {
// }

// Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};

type Name = Person['name']; // string

type NumberType = number;
type Direction = 'left' | 'right';

// 어떤 것의 규격사항(의사소통) interface는 클래스 구현할때?
//type은 어떤 데이터를 담을 수 있을지를 정의할 때
