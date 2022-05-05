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

function App() {
	return (
		<div className='App'>
			<AuthProvider>
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={Signup} />
					</Switch>
					<Switch>
						<Route exact path='/signup' component={Signup} />
					</Switch>
					<Switch>
						<PrivateRoute exact path='/home'>
							<Home />
						</PrivateRoute>
					</Switch>
					<Switch>
						<Route exact path='/login' component={Signin} />
					</Switch>
					<Switch>
						<Route exact path='/approve-withdraw' component={ApproveWithdraw} />
					</Switch>
					<Switch>
						<Route exact path='/approve-deposit' component={ApproveDeposit} />
					</Switch>
					<Switch>
						<PrivateRoute exact path='/transfer'>
							<Transfer />
						</PrivateRoute>
					</Switch>
					<Switch>
						<PrivateRoute exact path='/deposit'>
							<Deposit />
						</PrivateRoute>
					</Switch>
					<Switch>
						<PrivateRoute exact path='/withdraw'>
							<Withdraw />
						</PrivateRoute>
					</Switch>
					<Switch>
						<PrivateRoute exact path='/account'>
							<Account />
						</PrivateRoute>
						<PrivateRoute exact path='/dashboard'>
							<Dashboard />
						</PrivateRoute>
					</Switch>
					<Switch>
						<PrivateRoute exact path='/fund-password'>
							<FundPassword />
						</PrivateRoute>
					</Switch>
					<Switch>
						<PrivateRoute exact path='/bank-card'>
							<BankCard />
						</PrivateRoute>
					</Switch>
					<Switch>
						<PrivateRoute exact path='/wallet-address'>
							<WalletAddress />
						</PrivateRoute>
					</Switch>
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}

export default App;
