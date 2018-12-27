function inculdeArr(arr,conf){
    // let i = 0;
    conf.forEach((item)=>{
        let {index,content} = item;
        arr[index] = [content,arr[index]]
    });
    console.log(arr.flat())
}

// inculdeArr(['a','b','c','d'],[{
//     index:1,
//     content:'item1'
// },{
//     index:3,
//     content:'item2'
// }])

//['a','item1','b','c','item2','d']


function createArr(length,content){
    //let arr = [];
    // function add(){
    //     if(arr.length < length){
    //         arr.push(content);
    //         add();
    //     }
    // }
    // add();
   console.log(Array(length).fill(content));
   console.log(Array.from({length},()=>{
       return content
   }));
}
createArr(10,'aa');



const app = {
    fns:[],
    callback(ctx){
        console.log(3);
        console.log(ctx);
    },
    use(fn){
        app.fns.push(fn);
    },
    go(ctx){
        // console.log(app.fns);
        let funs = app.fns;
        let init = 0;
        let funsArr = [];
        funs.forEach((item,index)=>{
            funsArr[init] = ()=>{
                init++; 
            }
            if(index === init){  //1
                item(ctx,funsArr[init])
            }
        });
        if(init === funs.length){
            app.callback(ctx);
        }
    }
};
// app.use(express.urlencoded({extended:false}));
app.use(function(ctx,next){
   ctx.user = '1609C';
   console.log(1)
   next();  //function(){init++}  //2
})

app.use(function(ctx,next){
    ctx.age = 18;
    console.log(2)
    next(); //function(){init++}
})

app.go({});