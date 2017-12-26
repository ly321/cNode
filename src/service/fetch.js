import 'whatwg-fetch'

const baseURL="https://cnodejs.org/api/v1";


//主题首页
//query:?page=1&tab=job&limit=5&mdrender=true 这种形式
export  function fetchTopicList(query) {
    return new Promise((resolve,reject)=>{
        fetch(baseURL+'/topics'+query)
           .then(res=>{
               resolve(res.json());
           })
           .catch(err=>reject(err));
    })
}


//主题详情
export async function fetchTopicContent(id) {
    return await fetch(baseURL+'/topic/'+id)
        .then(res=>res.json())
        .catch(err=>console.log(err));
}