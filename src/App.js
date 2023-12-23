import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Signin from "./pages/Login/Signin.jsx";
import AuthProvider from "./Context/AuthProvider";
import Transfer from "./pages/Transfer/Transfer";
import Deposit from "./pages/Deposit/Deposit";
import Withdraw from "./pages/Withdraw/Withdraw";
import Account from "./pages/Account/Account";
import FundPassword from "./pages/Account/FundPassword";
import BankCard from "./pages/Account/BankCard";
import WalletAddress from "./pages/Account/WalletAddress";
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./pages/Registration/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import ApproveWithdraw from "./pages/Approve/ApproveWithdraw";
import ApproveDeposit from "./pages/Approve/ApproveDeposit";
// import Notfound from "./Notfound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Signup} />
            <Route exact path="/signup" component={Signup} />
            {/* <Route path="*" exact={true} component={Notfound} /> */}
            <PrivateRoute exact path="/home">
              <Home />
            </PrivateRoute>
            <Route exact path="/login" component={Signin} />
            <Route exact path="/approve-withdraw" component={ApproveWithdraw} />
            <Route exact path="/approve-deposit" component={ApproveDeposit} />
            <PrivateRoute exact path="/transfer">
              <Transfer />
            </PrivateRoute>
            <PrivateRoute exact path="/deposit">
              <Deposit />
            </PrivateRoute>
            <PrivateRoute exact path="/withdraw">
              <Withdraw />
            </PrivateRoute>
            <PrivateRoute exact path="/account">
              <Account />
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute exact path="/fund-password">
              <FundPassword />
            </PrivateRoute>
            <PrivateRoute exact path="/bank-card">
              <BankCard />
            </PrivateRoute>
            <PrivateRoute exact path="/wallet-address">
              <WalletAddress />
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
