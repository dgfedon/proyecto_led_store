import './animation.css';


function Loading() {
    return (
        <>
            <section className="d-flex justify-content-center">
                <h5 style={{fontSize: 30, marginRight: 15}}>Cargando</h5>
                <figure className="c1"></figure>
                <figure className="c2"></figure>
                <figure className="c3"></figure>
            </section> 
        </>
    )
}

export default Loading
