import React, { lazy, Suspense } from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import Navigation from './components/navigation';
import Loader from './utility/loader';
const ViewHome = lazy(( ) => import ( './pages/home/view-home' ));
const ViewDashboard = lazy(( ) => import ( './pages/dashboard/view-dashboard' ));
const ViewLogin = lazy(( ) => import ( './pages/login/view-login' ));
function App( ) {
	return (
		<Suspense fallback={( <Loader/> )}>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Navigation>
							<ViewHome/>
						</Navigation>
					</Route>
					<Route exact path='/login'>
						<ViewLogin/>
					</Route>
					<Route exact path='/dashboard'>
						<Navigation>
							<ViewDashboard/>
						</Navigation>
					</Route>
				</Switch>
			</Router>
		</Suspense>

	);
}

export default App;
