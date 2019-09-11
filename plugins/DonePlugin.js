class DonePlugin{

    apply(complier){
        //同步编译
        complier.hooks.done.tap("DonePlugin",stats=>{
            console.log("编译完成")
        })
    }

}

module.exports=DonePlugin;