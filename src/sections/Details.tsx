import { Col, Row } from "react-bootstrap";
import Audience from '../img/audience.jpg';
import Man from '../img/retrat/man-3053774_640.png';
import Portraits from "../components/others/Portraits";
import { ActivityFour, ActivityOne, ActivityThree, ActivityTwo } from "../constants/portraits";

const Details = () => {


    return(
        <Row className="text-start justify-content-center details">
            <Col xs={1} md={2}/>
                <Col xs={10} md={8}>
                    <h2 className="fw-bold title-details text-dark mb-5">
                        Congreso Internacional de Personas PROVINCIA 2023 
                        «Frase»
                    </h2>
                    <div className="text-details paragraph">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. 
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged. It was popularised in the 
                            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                            recently with desktop publishing software like Aldus PageMaker including versions of 
                            Lorem Ipsum.
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. 
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries, but also the leap into 
                            electronic typesetting.
                        </p>
                    </div>

                    <figure className="mt-2">
                        <img 
                            src={Audience} 
                            className="img-fluid" 
                            alt=""
                        />
                    </figure>

                    <div className="ratio ratio-16x9 mb-3 details__video">
                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" 
                        title="YouTube video" allowFullScreen></iframe>
                    </div>

                    {/* Portrait */}
                    <Portraits children={""} activity={1} portraits={ActivityOne}/>
                    <Portraits children={""} activity={2} portraits={ActivityTwo}/>
                    <Portraits children={""} activity={3} portraits={ActivityThree}/>
                    <Portraits children={""} activity={4} portraits={ActivityFour}/>


                </Col>
                
            <Col xs={1} md={2}/>
        </Row>
    )
}

export default Details;