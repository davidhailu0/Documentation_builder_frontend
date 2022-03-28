import Header from './components/header'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HowTemplateWorks from './components/How-it-works-for-template-generator';
import HowItWorksForDocumentGenerator from './components/how-it-works-for-document-generator';
import ContactUs from './components/contact-us';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import RenewPassword from './components/RenewPassword';
import DocumentWriter from './components/Document-Writer';
import Topbar from './components/Admin/components/topBar'
import Sidebar from './components/Admin/components/sideBar';
import DashBoard from './components/Admin/pages/Home';
import UserList from './components/Admin/pages/UserList';
import User from './components/Admin/pages/User';
import NewUser from './components/Admin/pages/NewUser';
import Product from './components/Admin/pages/Product';
import ProductList from './components/Admin/pages/ProductList';
import NewProduct from './components/Admin/pages/NewProduct';
import './App.css';

export default function App(){
  return(
    <Router>
    <Routes>
    <Route path='/' exact element={ <><Header/><HowItWorksForDocumentGenerator/><HowTemplateWorks/><ContactUs/><Footer/></>}/>
    <Route path='/SignIn'element={<SignIn/>}/>
    <Route path='/SignUp' element={<SignUp/>}/>
    <Route path="/writer" element={<DocumentWriter/>} />
    <Route path='/reset-password' element={<RenewPassword/>} />
    <Route exact path="/admin" element={<> <Topbar /><div className="container"><Sidebar /><DashBoard /> </div></>}/>
          <Route path="/admin/users" element={<> <Topbar /><div className="container"><Sidebar /><UserList /></div></>}/>
          <Route path="admin/user/:userId" element={<> <Topbar /><div className="container"><Sidebar /> <User /></div></>}/>
          <Route path="admin/newUser" element={<> <Topbar /><div className="container"><Sidebar /><NewUser /></div></>}/>
          <Route path="admin/products" element={<> <Topbar /><div className="container"><Sidebar /><ProductList /></div></>}/>
          <Route path="admin/product/:productId" element={<> <Topbar /><div className="container"><Sidebar /><Product /></div></>}/>
          <Route path="admin/newproduct" element={<> <Topbar /><div className="container"><Sidebar /><NewProduct /></div></>}/>
    </Routes>
    </Router>
  )
}