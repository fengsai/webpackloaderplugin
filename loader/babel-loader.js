const babel=require("@babel/core")

const loaderUtils=require("loader-utils")


function babelLoader(source)
{
    let options=loaderUtils.getOptions(this)

    let cb=this.async();

    babel.transform(source,{
        ...options,
        sourceMap:true,
    },function(err,result){
        cb(err,result.code,result.map)
    })

    // return source;
}

module.exports=babelLoader;