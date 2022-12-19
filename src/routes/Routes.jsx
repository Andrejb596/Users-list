import { Routes as Switch, Route } from 'react-router-dom';
import { Users, AboutUs, PageNotFound } from '../pages';
import { routes } from './utils/routes';

export const Routes = () => (
  <Switch>
    <Route path={routes.Users} element={<Users />} />
    <Route path={routes.AboutUs} element={<AboutUs />} />
    <Route path="*" element={<PageNotFound />} />
  </Switch>
);
