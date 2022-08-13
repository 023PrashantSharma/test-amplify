import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import awsConfig from "./aws-exports"
import { AmplifySignout, withAuthenticator } from "@aws-amplify/ui-react"
Amplify.configure(awsConfig)
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignout />
        <h2>Hello user</h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
