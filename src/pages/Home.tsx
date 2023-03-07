import { Container } from "react-bootstrap";
import Carrousel from "../components/others/Carrousel";
import Layout from "../hocs/Layout";
import Youtube from "../img/Youtube.svg";
import Details from "../sections/Details";
import Meetings from "../sections/Meetings";

const Home = () => {
   return (
        <Layout>
            <div className="home_carousel text-center mb-5 bg-transparent">
                <Carrousel/>
    
                <a className="fs-5 text-center carousel_text text-decoration-none fw-bold text-dark bg-transparent"
                href="https://www.youtube.com/live/kDnLsqON9yg?feature=share" target="_blank"
                rel="noreferrer"
                >
                    {/*<img src={Youtube} height="20px" alt="..."/>   Ver nuestro mensaje de bienvenida - Llegada   */ }
                </a>
                
            </div>
            <Container fluid>
                <Details/>
            </Container>
            

        </Layout>
    )
}

export default Home;