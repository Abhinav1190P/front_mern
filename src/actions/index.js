import axios from 'axios'

export function postuser(data){

const request = axios.post('https://deploy-server1.herokuapp.com/',data)
.then((response)=>{
    return response.config.data
})

console.log(request)
return{
type:'user_post',
payload:request

}

}