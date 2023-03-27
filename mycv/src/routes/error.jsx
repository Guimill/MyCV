import { useRouteError } from "react-router-dom";
import Header from '../components/header'
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Error() {
    const error = useRouteError();
    console.error(error);

    return (
    <>
    <Header />
        <Navbar />
            <main style={{display: "flex", justifyContent: "center" , alignItems: "center", flexFlow: "column", color: "goldenrod"}}>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <i>{error.statusText || error.message}</i>
            </main>
        <Footer />
    </>
  );
}