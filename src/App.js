import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import UpdateProduct from './UpdatePoduct';
import ProductList from './StudentList';
import Home from './Home';
import AddProduct from './AddStudent';
import Header from './Header';
import StudentList from './StudentList';
import AddStudent from './AddStudent';


const App = () => {
  return (
    <div>
      
      

   
       <BrowserRouter>
       <Header/>
       <Route exact path="/updateproduct/:id">

{/* kis product ka data edit ken aha ia ye id se identify kege */}
<UpdateProduct />
</Route>


<Route exact path="/productlist">
<StudentList />
</Route>
<Route exact path="/add">
<AddStudent/>
</Route>
<Route exact path="/">
<Home />
</Route>

   

    </BrowserRouter>
    
    </div>
  )
}

export default App
