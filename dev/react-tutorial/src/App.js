import logo from './logo.svg';
import './App.css';
import MyTable from "./MyTable";

function App() {
    return (
        <Home/>
    );
}

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Hallo From React!
                </p>
                <MyTable/>
            </header>
        </div>
    )
}

export default App;