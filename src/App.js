import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
function App() {
  return (
      <Router>

        <Routes>
          <Route path="/login"
            element = {
             <Login/> 
            }>
            
          </Route>

          <Route path="/checkout"
          element={
            <>
            <Header />
            <Checkout />
            </>
          } > 
          </Route>

          <Route path="/"
         element={ <> <Header />
            <Home />
          </>
          }
          >
           
          </Route>

        </Routes>

      </Router>
  
  );
}

export default App;
