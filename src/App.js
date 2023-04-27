import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Mynavbar from "./components/Mynavbar";
import Search from "./components/Search";
import Service from "./components/Service";
import BookingSummary from "./components/BookingSummary";
import ShippingDetails from "./components/ShippingDetails";

function App() {
  return (
    <div className="min-h-screen bg-cover bg-no-repeat bg-fixed bg-center bg-gray">
      <Mynavbar />

      <Route exact path='/'>
      <Home/>
      <Search/>
      <Service/>
      </Route>
      
      <Route path='/booking'>
        <BookingSummary/>
      </Route>

      <Route path='/details'>
        <ShippingDetails/>
      </Route>

    </div>
  );
}

export default App;
