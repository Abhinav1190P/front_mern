import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './component/home'
import Layout from './component/layout'
const Routes = () =>{

    return(
        <div>
            <Layout>
<BrowserRouter>
<Route path = "/" exact component={Home}/>
</BrowserRouter>
</Layout>

        </div>
    )
}

export default Routes