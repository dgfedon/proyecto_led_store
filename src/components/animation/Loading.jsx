import './animation.css';


function Loading() {
    return (
        <>
            <section className="d-flex justify-content-center mt-4">
                <h5 style={{fontSize: 30, marginRight: 15, color: 'white'}}>Cargando</h5>
                <figure className="c1"></figure>
                <figure className="c2"></figure>
                <figure className="c3"></figure>
            </section> 
        </>
    )
}

export default Loading
