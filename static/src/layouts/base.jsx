import { Header } from '../components/utils/header.jsx'
import { Container } from 'react-bootstrap';

export function LayoutBase(props){
    return(
        <>
        <Header />
        <Container className='py-4'>
            {props.children}
        </Container>
        <h1>GG</h1>
        </>
    );
}