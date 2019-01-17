<template>
    <div>
        购物车
        <ul>
            <li v-for="(val,i) in shopcarlist"
            :key="i">
                <span class="checkbox" :class="{checked:opencheckbox[i].open}"
                @click="onecheck(i)"></span>
                <img :src="'../static/'+val.img" alt="">
                <h2>
                    <span>{{val.title}}</span>
                    <p>{{val.price}}</p>
                </h2>
                <div>
                    <button @click="reduce(i)">-</button>
                    <span>{{val.num}}</span>
                    <button @click="add(i)">+</button>
                </div>
            </li>
        </ul>
        <div><span class="checkbox" :class="{checked:allcheckopen}" @click="allcheck"></span>全选 共计￥{{sumprice}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            shopcarlist:[],
            opencheckbox:[],
            allcheckopen:false,
            sumprice:0
        }
    },
    created(){
        this.shopcarlist = JSON.parse(localStorage.getItem('shopcar')) || [];
        this.opencheckbox = this.shopcarlist.map(item=>({
            open:false,
            price:item.price*item.num
        }))
        // console.log(this.opencheckbox);
    },
    methods:{
        reduce(i){
            let obj = this.shopcarlist[i];
            obj.num--;
            obj.num = obj.num <= 1 ? 1 : obj.num;
            this.setdata(i);
        },
        add(i){
            let obj = this.shopcarlist[i];
            obj.num++;
            this.setdata(i);
        },
        setdata(i){
            this.opencheckbox[i].price = this.shopcarlist[i].num * this.shopcarlist[i].price;
            this.addsumprice();

            localStorage.setItem('shopcar',JSON.stringify(this.shopcarlist));
            this.bus.$emit('chagenum');
        },
        allcheck(){
            this.allcheckopen = !this.allcheckopen;
            this.opencheckbox.forEach(item=>{
                item.open = this.allcheckopen;
            })
            this.addsumprice();
        },
        onecheck(i){
            this.opencheckbox[i].open = !this.opencheckbox[i].open;
            this.allcheckopen = this.opencheckbox.every(item=>item.open);
            this.addsumprice();
        },
        addsumprice(){
            this.sumprice = 0;
            this.opencheckbox.forEach(item=>{
                if(item.open){
                    this.sumprice += item.price;
                }
            })
        }
    }
}
</script>
<style scoped>
li{
    display: flex;
}
.checkbox{
    display: inline-block;
    width: 20px;
    height: 20px;
    border:2px solid yellow;
    border-radius: 50%;
}
.checked{
    background: yellow;
}
img{
    width: 100px;
    height: 100px;
}
</style>

