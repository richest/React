import {Suspense, Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {AuthRouteHelper, ProtectedRouteHelper} from './helpers.js';
import { AuthorizedRoutes, ProtectedRoutes, PublicRoutes } from './routes.js';
import Layout from '../container/layouts/index.js';

function AppRoutes({isAuthenticated}) {
  return (
    <Router>
        <Fragment>
            <Suspense fallback={<div>Loading...</div>}>
                <Layout isAuthenticated={isAuthenticated}>
                    <Routes>                       
                        {PublicRoutes.map(({component: Component, slug, exact}, index) => (
                            <Route path={`${slug}`} key={index} exact element={<Component />}/>
                        ))}
                        
                        {ProtectedRoutes.map(({component: Component, slug, exact}, index) => (
                            <Route path={`${slug}`} key={index} exact element={
                                <ProtectedRouteHelper isAuthenticated={isAuthenticated}>
                                    <Component />
                                </ProtectedRouteHelper>
                                }
                            />
                        ))}

                        {AuthorizedRoutes.map(({component: Component, slug, exact}, index) => (
                            <Route path={`${slug}`} key={index} exact element={
                                <AuthRouteHelper isAuthenticated={isAuthenticated}>
                                    <Component />
                                </AuthRouteHelper>
                                }
                            />
                        ))}
                    </Routes>
                </Layout>
            </Suspense>
        </Fragment>
    </Router>
  );
}

export default AppRoutes;