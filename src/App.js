import "./App.css";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Dish from "./routes/dish/dish.component";
import AboutUs from './routes/about/about.component'
import Menu from "./routes/menu/menu.component";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/dishes" element={<Dish/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/menu" element={<Menu/>}/>
      </Route>
    </Routes>
  );
}

export default App;
