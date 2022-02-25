import './Players.css';

function Players() {
    return (
        <>
            <div className="player">
                <div className="name">
                    Fathurozak Buhari
                </div>
                <div className="playerScore">
                    <button className="button decrement">-</button>
                    <span className="score">30</span>
                    <button className="button increment">+</button>
                </div>
            </div>
            <div className="player">
                <div className="name">
                    Rizki Romadhoni
                </div>
                <div className="playerScore">
                    <button className="button decrement">-</button>
                    <span className="score">20</span>
                    <button className="button increment">+</button>
                </div>
            </div>
        </>
    )
}

export default Players
