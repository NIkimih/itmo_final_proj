import { BrowserRouter } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main";
import store from "./app/store";
import { Provider } from "react-redux";

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
        
      </BrowserRouter>

    </Provider>
  );
}

export default App;
