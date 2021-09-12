import { MenuItemHome } from "../components/home/menuItemHome.jsx";

export function Home(){
    return(
        <main className="min-vh-100 d-flex justify-content-center align-items-center flex-wrap">
            <nav>Hello World</nav>
            <MenuItemHome />
        </main>
    );
}