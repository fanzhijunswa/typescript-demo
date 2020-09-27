// interface FuncSchema {
//   <T>(name:T,age:number):T
// }

// const ceshi:FuncSchema = function<T>(name:T,age:number):T {
//   return name
// }

// ceshi('樊志军',12)

//泛型接口
// interface LengthSchema {
//   length: number
// }

// interface FuncSchema<T extends LengthSchema> {
//   <T>(name:T,age:number):T
// }

// const ceshi:FuncSchema<string> = function<T>(name:T,age:number):T{
//   return name
// }

// ceshi('樊志军',12)

// class Animal<T> {
//   public name: T
//   public run: () => T
// }

// let dog = new Animal<string>()

interface FunSchema<T>{
  (val:T):T
}

interface FilterSchema<T> {
  roleFilter: FunSchema<T>
}

const filters:FilterSchema<string> = {
  roleFilter<T>(val:T):T {
    return val
  }
}

console.log(filters.roleFilter('樊志军'))
