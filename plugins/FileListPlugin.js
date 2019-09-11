class FileListPlugin{

    constructor({filename})
    {
        this.filename=filename;
    }
    apply(complier){
        //文件装备好了要发射
        complier.hooks.emit.tap('FileListPlugin',(compilcation)=>{
            let assets=compilcation.assets //打包后的资源列表
            console.log(Object.entries(assets))
            let content=`## 文件名    文件大小\n`;
            Object.entries(assets).forEach(([item,statsObj])=>{
                console.log(item,statsObj)
                content+=`  ${item}   ${statsObj.size()}\n`
            })
            assets[this.filename]={
                source(){
                    return content;
                },
                size(){
                    return content.length;
                }
            }
            
        })
    }

}


module.exports=FileListPlugin;