{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }
  type StackNode<T> = {
    value: T;
    next?: StackNode<T>;
  };
  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;

    constructor(private capacity: number) {}
    get size(): number {
      return this._size;
    }

    push(value: T) {
      if (this.size === this.capacity) {
        throw new Error('Stack is Full');
      }
      const node = { value, next: this.head };
      this.head = node;
      this._size++;
    }
    pop(): T {
      if (this.head == null) {
        throw new Error('11');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl<string>(3);
  stack.push('Ellie 1');
  stack.push('Ellies 2');
  stack.push('Elliel 3');

  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<number>(10);
  stack2.push(20);
  stack2.push(30);
  stack2.push(40);

  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }
}
