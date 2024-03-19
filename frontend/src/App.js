import Navigation from "./components/Layouts/Navigation/Navigation";
import AppRoutes from "./routes/AppRoutes";

function App() {
    return (
        <div className="App">
            <Navigation />
            <div className="container">
                <AppRoutes />
            </div>
        </div>
    );
}

export default App;
