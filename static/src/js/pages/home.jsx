import { MenuItemHome } from "../components/home/menuItemHome.jsx";
import aguaSvg from '../../img/agua.svg';
import tiendaSvg from '../../img/tienda.svg';
import fumigadorSvg from '../../img/fumigator.svg';
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
