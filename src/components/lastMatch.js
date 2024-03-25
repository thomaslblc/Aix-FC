import { Link } from 'react-router-dom';
import illustration from "../img/illustrations/illu-5.webp";
import homeTeam from "../img/logos/logo_sion.png";
import awayTeam from "../img/logos/logo_aix.png";

function lastMatch() {
    return (
        <div className="lastMatchContainer">
            <img className='cover' src={illustration} alt='Background Dernier match' />
            <div className="inner">
                <div className="lastMatchInfos">
                    <h2>Dernier Match</h2>
                    <div className='lastMatchContent'>
                        <img src={homeTeam} alt="Logo équipe domicile"/>
                        <div className='lastMatchResult'>
                            <div className='score'>1<span className='score_separator'>-</span>4</div>
                        </div>
                        <img src={awayTeam} alt="Logo équipe extérieur"/>
                    </div>
                    <span className='matchHashtag'>#SIONAIX</span>
                </div>
                <div className="lastMatchButtons">
                    <Link className='button c2' to={"/"}>Actualités</Link>
                    <Link className='button c2' to={"/"}>Billetterie</Link>
                    <Link className='button c2' to={"/"}>Boutique</Link>
                </div>
            </div>
        </div>
    )
}

export default lastMatch;