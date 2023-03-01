import Carrousel from "../components/others/Carrousel";
import Layout from "../hocs/Layout";
import Youtube from "../img/Youtube.svg";

const Home = () => {
   return (
        <Layout>
            <div className="home_carousel text-center mb-5">
                <Carrousel/>
    
                <a className="fs-5 text-center carousel_text text-decoration-none fw-bold text-dark bg-transparent"
                href="https://www.youtube.com/live/kDnLsqON9yg?feature=share" target="_blank"
                rel="noreferrer"
                >
                    <img src={Youtube} height="20px" alt="..."/>   Ver nuestro mensaje de bienvenida - Llegada    
                </a>

            </div>
            

        </Layout>
    )
}

export default Home;