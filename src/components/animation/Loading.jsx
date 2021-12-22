import PulseLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/react";


function Loading(props) {

    const override = css`
        display: block;
        margin: 15px 0;
    `;

    return (
        <>
            <section className="d-flex justify-content-center mt-4 load--bg">
                <h5 style={{fontSize: '40px', marginRight: '20px', color: 'white', textShadow: '0 0 20px #FF2079'}}>
                    {props.load}
                </h5>
                <PulseLoader color='#FF2079' css={override} size={20} />
            </section> 
        </>
    )
}

export default Loading
