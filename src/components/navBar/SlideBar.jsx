import Container from 'react-bootstrap/Container';

import './navBar.css';


function SlideBar(props) {
    return (
        <>
            <section className="slide__bar--container">
                <Container>
                    <h1 style={{fontSize: 50}}>{props.title}</h1>
                    <p style={{fontSize: 25}}>{props.subtitle}</p>
                </Container>
            </section>
        </>
    )
}

export default SlideBar