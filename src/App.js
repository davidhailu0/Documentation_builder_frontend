import Header from './Components/header'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HowTemplateWorks from './Components/How-it-works-for-template-generator';
import HowItWorksForDocumentGenerator from './Components/how-it-works-for-document-generator';
import ContactUs from './Components/contact-us';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Footer from './Components/Footer';
import RenewPassword from './Pages/RenewPassword';
import DocumentWriter from './Pages/Document-Writer';
import Topbar from './Pages/Admin/components/topBar'
import Sidebar from './Pages/Admin/components/sideBar';
import DashBoard from './Pages/Admin/pages/Home';
import UserList from './Pages/Admin/pages/UserList';
import User from './Pages/Admin/pages/User';
import NewUser from './Pages/Admin/pages/NewUser';
import Product from './Pages/Admin/pages/Product';
import ProductList from './Pages/Admin/pages/ProductList';
import NewProduct from './Pages/Admin/pages/NewProduct';
import TemplateWriter from './Pages/Template-Generator';
import 'animate.css';
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
    <Route path='/template' element={<TemplateWriter/>}/>
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