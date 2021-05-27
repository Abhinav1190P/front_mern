import axios from 'axios'

export function postuser(data){

const request = axios.post('https://deploy-server1.herokuapp.com/formPost',data)
.then((response)=>{
    return response.data
})


return{
type:'user_post',
payload:request

}

}