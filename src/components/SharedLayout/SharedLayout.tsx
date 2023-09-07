import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import {ProductProps} from '../App/App.types';

// import { Loader } from 'components/Loader/Loader';
// import PawLoader from '../../images/Loader.png';

interface OrderProps{
orders: ProductProps[];
}
  
export const SharedLayout: React.FC<OrderProps> = ({orders}) => {
  return (
    <>
      <Header orders={ orders } />
      <Suspense fallback={'Loading...'}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </>
  );
};
