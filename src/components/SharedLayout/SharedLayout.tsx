import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

// import { Loader } from 'components/Loader/Loader';
// import PawLoader from '../../images/Loader.png';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={'Loading...'}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </>
  );
};
