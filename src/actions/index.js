import axios from 'axios'

export function postuser(data){

const request = axios.post('/api/formPost',data)
.then((response)=>{
    return response.data
})

console.log(request)
return{
type:'user_post',
payload:request

}

}