import Header from './components/Header.jsx';
import CoreConceptParent from './components/CoreConceptParent.jsx';
import Examples from './components/Examples.jsx';

function App() {
    return (
        <>
        <Header/> 
        <main>
            <CoreConceptParent/>
            <Examples/>    
            <h2>Time to get started!</h2>
        </main> 
        </>
    );
}

export default App;
