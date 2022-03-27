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
import DashBoard from './components/Admin';
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
    <Route path='/admin' element={<DashBoard/>}/>
    </Routes>
    </Router>
  )
}