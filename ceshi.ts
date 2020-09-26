// class Animal<T,U> {
//   public name:T
//   public age:U
//   public sex:T
//   constructor(name:T,age:U,sex:T) {
//     this.name= name
//     this.age = age
//     this.sex=sex
//   }
//   run():T{
//     return this.name
//   }  
// }

// let dog = new Animal('樊志军',12,'男')
// console.log(dog)
// console.log(dog.run())

// interface ListItemSchema<T> {
//   readonly id: T
//   desc: T
//   value: T
// }

// interface Schema<T,C> {
//   name: T
//   list: ListItemSchema<T>[]
//   age: C
//   run:(people:T)=>T
// }

// // interface FunSchema {
// //   ():
// // }

// const list:Schema<string,number> = {name: '樊志軍',age:15,list: [
//   {
//     id:'asdsad',desc:'asdasd',value: '12'
//   }
// ],run<T>(people: T):T{return people}}

// list.run('李三')


interface ArticleListSchema<T> {
  readonly art_id: T
  label: T
  value: T
}

interface ChannelListSchema<T> {
  readonly channel_id: T
  label: T
  value: T
}

interface CommentList<T> {
  readonly com_id: T
  label: T
  value: T
}

interface UserInfo<T> {
  name: T
  tel: T
}



interface Schema<T> {
  articleList: ArticleListSchema<T>[]
  channelList: ChannelListSchema<T>[]
  commentList: CommentList<T>[]
  userInfo?: UserInfo<T>
}

const people:Schema<string> = {
  articleList:[],
  channelList:[],
  commentList:[]
}