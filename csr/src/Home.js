import './App.css';
import Footer from './Footer';
import Header from './Header';

function Home() {
    return (
        <>
            <Header />
            <div className="App">
                <h1
                    className="App-link"
                >
                    Home Page
                </h1>
            </div>
            <Footer />
        </>
    );
}

export default Home;
