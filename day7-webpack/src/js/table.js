export default class {
    constructor(obj){
        this.title = document.querySelector(obj.title);
        this.cont = document.querySelector(obj.cont);
        this.titleEl = Array.from(this.title.children);
        this.contEl = Array.from(this.cont.children);
        this.classname = obj.classname;
        this.init();
    }
    init(){
        this.addEvent();
    }
    addEvent(){
        this.titleEl.forEach((el,index)=>{
            el.onclick = ()=>{
                // this.classList.add(this.classname);
                this.titleEl.forEach((item,i)=>{
                    if(i===index){
                        this.titleEl[index].classList.add(this.classname);
                        this.contEl[index].classList.add(this.classname)
                    }else{
                        this.titleEl[i].classList.remove(this.classname);
                        this.contEl[i].classList.remove(this.classname)
                    }
                })
            }
        })
    }
}