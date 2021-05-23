import axios from 'axios'

export function postuser(data){

const request = axios.post('/formPost',data)
.then(response=>response.data)

return{
type:'user_post',
payload:request

}

}