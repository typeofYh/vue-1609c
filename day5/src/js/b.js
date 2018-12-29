
//默认

//默认模块在js中只能出现一次


export let number = Math.floor(Math.random()*20);



export default class{
    constructor(){
        this.age = 13
    }
    sayAge(){
        console.log(this.age)
    }
}