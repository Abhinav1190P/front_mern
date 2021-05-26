import axios from 'axios'

export function postuser(data){

const request = axios.post('/api/formPost',data)
.then((response)=>{
    return response.data
})


return{
type:'user_post',
payload:request

}

}