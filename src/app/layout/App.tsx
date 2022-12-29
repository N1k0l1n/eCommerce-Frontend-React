import {Container,createTheme, ThemeProvider, CssBaseline} from "@mui/material";
import { useState } from "react";
import AboutPage from "../features/about/AboutPage";
import Catalog from "../features/catalog/Catalog";
import ProductDetails from "../features/catalog/ProductDetails";
import ContactPage from "../features/contact/ContactPage";
import HomePage from "../features/home/HomePage";
import Header from "./Header";
import {Switch, Route} from "react-router-dom"
import ErrorPage from "../features/error/ErrorPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ServerError from "../features/error/ServerError";
import NotFoundPage from "../features/error/NotFoundPage";

function App() {


  const [darkMode, setDarkMode] = useState(false);

  const paletteType = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette :{
      mode:paletteType,
      background :{
        default: paletteType === 'light' ? "#eaeaea" : "#121212"
    }
  }
  })



  function handleThemeChange(){
      setDarkMode(!darkMode);
  }

      return (
                  <ThemeProvider theme={theme}>
                    <ToastContainer position="bottom-right" hideProgressBar/>
                    <CssBaseline/>
                      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}  />
                        <Container>
                          <Switch>
                             <Route exact path="/" component={HomePage} />
                             <Route exact path="/catalog" component={Catalog} />
                             <Route path="/catalog/:id" component={ProductDetails} />
                             <Route path="/about" component={AboutPage} />
                             <Route path="/error" component={ErrorPage} />
                             <Route path="/server-error" component={ServerError} />
                             <Route path="/contact" component={ContactPage} />
                             {/* If none of this routes dont match it will return the component below */}
                             <Route component={NotFoundPage} />
                          </Switch>
                        </Container>
                  </ThemeProvider>
  );
}

export default App;
