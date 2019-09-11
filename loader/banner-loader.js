const loaderUtils=require("loader-utils")
const validateOptions=require("schema-utils")

const fs= require("fs")

function loader(source)
{
   // console.log(this)
   let cb=this.async()
   this.cacheable(false)
    var options=loaderUtils.getOptions(this)
    let schema={
        type:'object',
        properties:{
            text:{
                type:'string'
            },
            filename:{
                type:'string'
            }
        }
    }

    validateOptions(schema,options,'banner-loader')

    if(options.filename)
    {
        this.addDependency(options.filename)
        fs.readFile(options.filename,'utf-8',(err,data)=>{
            if(err) return err;
            cb(err,`/**${data}*/${source}`)
        })
    }else{
        cb(null,`/**${options.text}*/${source}`)
    }
    //return source;
}

module.exports=loader;

