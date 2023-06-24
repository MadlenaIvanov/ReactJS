import { useEffect, useState, lazy, Suspense } from "react";
import * as gameService from '../../services/gameService'
// import GameCard from "./GameCard";

const GameCard = lazy(() => import('./GameCard'))

const GameCatalog = ({
    navigationChangeHandler 
}) => {

    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        gameService.getAll()
            .then(result => {
                setGames(result)
                setLoading(false);
            })
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            <Suspense fallback={<p>Loading</p>}>
                {loading
                    ? <h3 className="no-articles">Loading...</h3>
                    : games.length > 0 
                    ? games.map(x => <GameCard key={x._id} game={x} navigationChangeHandler={navigationChangeHandler} />)
                    : <h3 className="no-articles">No articles yet</h3>
                }
            </Suspense>
            
        </section>
    );
};

export default GameCatalog;