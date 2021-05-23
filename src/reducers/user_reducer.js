export default function foo(state={},action){
switch(action.type){
case "user_post" :
return {...state,userDATA:action.payload}
default:
return state;
}

}