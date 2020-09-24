class ClassSchema {
  public sex: string
  public sayHi:()=>string
}

/* 接口也是可以继承类的，首先，类本身其实就是规范实例对象的一个接口，因为通过new一个类来创建对象，那么这个类本身
规范这个实例对象身上有哪些属性，有哪些方法，那么这个类其实和接口其实就是一样的意思，所以接口是可以继承类的
而且，类在使用接口的时候，接口中规范的属性，类必须要遵守，但是只能多，不能少，如果参数比接口规定的还要多的话，其实是允许的
*/
interface ClassSchema2 extends ClassSchema {
  name:string
  age:number
  run():void
}

class Person implements ClassSchema2 {
  public name:string
  public age:number
  public sex:string
  public color:string
  constructor(name:string,age:number,sex:string,color:string) {
    this.name = name
    this.age = age
    this.sex = sex
    this.color = color
  }
  run():void {
    console.log(`${this.name}正在跑步`)
  }
  sayHi():string {
    return `${this.name}正在跑步`
  }
}

const dog = new Person('阿黄',2,'男','yellow')
console.log(dog)
dog.run()
console.log(dog.sayHi())




//泛型
// 首先泛型解决了一个什么问题，我们平常在创建变量和类和函数，都需要为成员和返回值进行一个类型的接口限制，
// 那么就需要写到很多重复的代码，但是如果有泛型的话，我们传递过来的是什么类型的，所有用到的地方只需要
//使用一个字母就可以效仿，而不需要写大量重复的代码，泛型其实就是对变量的约束，说白了就是接口

import { T } from "ts-toolbelt"

//首先下面两种写法都是正确的，如果你不指定传递的泛型类型的话，那么ts就会自动进行类型转换
function func<T>(name:T):T {
  return name
}
// func<string>('樊志军')
func('樊志军')

//多个类型的参数 
// 在这里我们可以用一个类型来接收，但是这里传递过来的是一个数组，所以我们可以分别接收数组的两项
function funcMulti<T,U>(arr:[T,U]):[U,T]{
  return [arr[1],arr[0]]
}
funcMulti([12,'樊志军'])

// 泛型约束
interface FuncSchema {
  length: number
}

/* 有的时候，ts并不知道你会传入一个什么类型的泛型，所以也不确定这个类型的数据是否有length这个属性，所以你需要进行一
下泛型约束，所以这个时候，我们就可以让这个泛型去继承这个接口，这样的话，就可以保证这个传递过来的泛型中是有length这个
属性的，所以ts就可以让你去使用这个length属性
相反如果你就传递过来的是一个数值型的数据的话，ts就会直接报错的，因为数值类型的属性无法去使用接口，更不会存在length属性
了
*/
function func2<T extends FuncSchema>(arr:T):number {
  return arr.length
}

func2<number[]>([1,2,3,4,5])

interface FuncSchema2 {
  name:string
}

function functhree<T extends FuncSchema2> (data:T):string {
  return data.name
}
//这里要千万注意，泛型使用extends其实就是相当于 使用了这个接口，那么使用这个接口就要符合接口的规则，如果没有接口规定的参数，
// 是绝对不可以的，也就是说接口规范的属性，传入的泛型数据就必须要有
// functhree({age:12})
functhree({name:'樊志军'})

//泛型接口
interface FuncSchema3 {
  <T>(name:string,age:T):T
}

let funcFour:FuncSchema3 = function<T>(name:string,age:T):T{
  console.log(name)
  return age
}
// 传递参数的时候，ts会自动检测，你传递的泛型是第几个参数的类型，在函数中我们使用name的类型是string,age的类型是泛型，
// 所以本轮传递的泛型就是参数二的类型，也就是number类型
console.log(funcFour('樊志军',12))

