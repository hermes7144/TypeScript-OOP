{
    const obj = {
        name:'ellie'
    }
    obj.name; // name
    obj['name'] // name
    type Animal = {
        name:string;
        age:number;
        gender: 'male'| 'female'
    }
    type Name = Animal['name'] // string
    const text: Name = 12

    type Gender = Animal['gender']

    type Keys  = keyof Animal;

    const keys : Keys = 'age'

    type Person = {
        name:string;
        gender: Animal['gender']
    }
    const person:Person = {
        name:'ellie',
        gender:'male'
    }
}