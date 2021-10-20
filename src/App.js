import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AboutUs from './pages/AboutUs/AboutUs';
import AllDoctors from './pages/AllDoctors/AllDoctors';
import AllServices from './pages/AllServices/AllServices';
import Appointment from './pages/Appointment/Appointment';
import ContactUs from './pages/ContactUs/ContactUs';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
   <AuthProvider>
      <Router>
        <Header/>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/about">
        <AboutUs/>
      </Route>
      <Route path="/contact">
        <ContactUs/>
      </Route>
      <Route path="/appointment">
        <Appointment/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <PrivateRoute exact path="/services">
        <AllServices/>
      </PrivateRoute>
      <PrivateRoute path="/doctors">
        <AllDoctors/>
      </PrivateRoute>
      <PrivateRoute path="/services/:serviceId">
        <ServiceDetails/>
      </PrivateRoute>
      <Route path="*">
        <NotFound/>
      </Route>
    </Switch>
    <Footer/>
    </Router>
   </AuthProvider>
  );
}

export default App;
