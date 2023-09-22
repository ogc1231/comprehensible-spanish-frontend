import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/home/HomePage";
import NotFound from "./components/NotFound";
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
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import ContactForm from "./pages/contact/ContactForm";
import ContactFormConfirmation from './pages/contact/ContactFormConfirmation';


function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Switch>
          <Route exact path="/" render={() =><HomePage />} />
        <Container className={styles.Main}>
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
          <Route exact path="/contact" render={() => <ContactForm />} />
          <Route exact path="/confirmation" render={() => <ContactFormConfirmation />} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/resources/create" render={() => <ResourceCreateForm />} />
          <Route exact path="/resources/:id" render={() => <ResourcePage />} />
          <Route exact path="/resources/:id/edit" render={() => <ResourceEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
          <Route render={() => <NotFound />} />
        </Container>
      </Switch>
    </div>
  );
}

export default App;