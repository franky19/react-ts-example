import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import HomePage from "./component/home/Homepage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoginPage from "./component/Login/LoginPage";
import HomePageAdmin from "./component/admin/HomepageAdmin";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Login" component={LoginPage} />
        <Route path="/admin" component={HomePageAdmin} />
        <Route path="/produk" component={HomePage}/>
        <Route path="/pariwisata" component={HomePage}/>
        <Route path="/kegiatan" component={HomePage}/>
        <Route path="/kegiatanDetail/:id" component={HomePage}/>
      </Switch>
    </Router>
  );
}

export default App;
