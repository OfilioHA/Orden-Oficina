import { MenuItemHome } from "../components/home/menuItemHome.jsx";
import aguaSvg from '../../img/agua.svg';
import tiendaSvg from '../../img/tienda.svg';
import { Container, Row } from "react-bootstrap";

export function Home() {

    const urlArray = [
        {
            url: '/agua',
            image: aguaSvg
        },
        {
            url: '/tienda',
            image: tiendaSvg
        },
        {
            url: '/tienda',
            image: tiendaSvg
        },
        {
            url: '/tienda',
            image: tiendaSvg
        }
    ]

    return (
        <div>
            <h1>Hello World</h1>
            <Container>
                <Row className="justify-content-around"> 
                    {urlArray.map(({ url, image }, index) => {
                        return (<MenuItemHome
                            url={url}
                            image={image}
                            key={index} />)
                    })}
                </Row>
            </Container>
        </div>
    );
}