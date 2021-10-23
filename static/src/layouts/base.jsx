import { Header } from '../components/utils/header.jsx';
import { Footer } from '../components/utils/footer.jsx';
import { Container } from 'react-bootstrap';

export function LayoutBase(props){
    return(
        <>
        <Header />
        <Container className='py-4'>
            {props.children}
        </Container>
        <Footer />
        </>
    );
}