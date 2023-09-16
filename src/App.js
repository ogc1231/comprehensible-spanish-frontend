import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Slider from "./components/Slider";
import UnifiedDropdown from "./components/UnifiedDropdown";

import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import ResourceCreateForm from "./pages/posts/ResourceCreateForm";
import ResourcePage from "./pages/posts/ResourcePage";


function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() =>
          <div>
            <Slider />
            <UnifiedDropdown />
          </div>
          } />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/resources/create" render={() => <ResourceCreateForm />} />
          <Route exact path="/resources/:id" render={() => <ResourcePage />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;