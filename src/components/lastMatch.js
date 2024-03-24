import { Link } from 'react-router-dom';
import illustration from "../img/illustrations/illu-5.webp"

function lastMatch() {
    return (
        <div className="lastMatchContainer">
            <img src={illustration} alt='Background Dernier match'/>
            <div className="inner">
                <div className="lastMatchInfos">

                </div>
                <div className="lastMatchButtons">
                    <Link className='button' to={"/"}>Actualités</Link>
                    <Link className='button' to={"/"}>Billetterie</Link>
                    <Link className='button' to={"/"}>Boutique</Link>
                </div>
            </div>
        </div>
    )
}

export default lastMatch;