import { MenuItemHome } from "../components/home/menuItemHome.jsx";
import aguaSvg from '../assets/img/agua.svg';
import tiendaSvg from '../assets/img/tienda.svg';
import fumigadorSvg from '../assets/img/fumigator.svg';
import cogsSvg from '../assets/img/cogs.svg';
import signOutSvg from '../assets/img/sign-out.svg'
import { Container, Row } from "react-bootstrap";

export function Home() {

    const urlArray = [
        {
            url: '/agua',
            image: aguaSvg
        },
        {
            url: '/fumigacion',
            image: fumigadorSvg
        },
        {
            url: '/tienda',
            image: tiendaSvg
        },
        {
            url: '/configuracion',
            image: cogsSvg
        }
    ]

    return (
        <Container>
            <Row className="justify-content-around align-items-center min-vh-100">
                {urlArray.map(({ url, image }, index) => {
                    return (<MenuItemHome
                        url={url}
                        image={image}
                        key={index} />)
                })}
            </Row>
        </Container>
    );
}
