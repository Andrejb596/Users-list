import { HashRouter } from 'react-router-dom';
import { Menu } from '../routes/Menu/Menu';
import { Routes } from '../routes/Routes';
import { Footer } from '../components/Footer/Footer';
import style from './app.module.scss';

export const App = () => (
  <div className={style.app}>
    <HashRouter>
      <Menu />
      <Routes />
      <Footer />
    </HashRouter>
  </div>
);
