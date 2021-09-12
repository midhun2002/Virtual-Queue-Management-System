import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import { PostTask } from './components/PostTask'
import { EachTask } from './components/PostTask'
function App() {
  const { user, isAuthenticated } = useAuth0();
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} user={user} isAuthenticated={isAuthenticated} exact />
          <Route path="/postblog" component={PostTask} user={user} isAuthenticated={isAuthenticated} />
          <Route path="/posts/:id" component={EachTask} user={user} isAuthenticated={isAuthenticated} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
