import ReactDOM from 'react-dom';

import { Header } from './components/Header';
import { Container } from './components/Container';

function App() {
    return (
        <>
            <Header />
            <Container />
        </>
    );
}


ReactDOM.render(<App />, document.querySelector('.root'))