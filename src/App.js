import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Slider from "./components/Slider";

import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import ResourceCreateForm from "./pages/posts/ResourceCreateForm";
import ResourcePage from "./pages/posts/ResourcePage";
import ResourcesPage from "./pages/posts/ResourcesPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import ResourceEditForm from "./pages/posts/ResourceEditForm";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() =><Slider />} />
          <Route exact path="/resources" render={() => <ResourcesPage message="No results found. Adjust the search keyword."/>} />
          <Route
            exact
            path="/favourites"
            render={() => (
              <ResourcesPage
                message="No results found. Adjust the search keyword or favourite a post."
                filter={`favourites__owner__profile=${profile_id}&ordering=-favourites__created_at&`}
              />
            )}
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/resources/create" render={() => <ResourceCreateForm />} />
          <Route exact path="/resources/:id" render={() => <ResourcePage />} />
          <Route exact path="/resources/:id/edit" render={() => <ResourceEditForm />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;