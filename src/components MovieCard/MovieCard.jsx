export const MovieCard = () => {
    return (
        <div className="card-container">
            <div className="card-img-container">
                <img src="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0" alt="movie-card" />
            </div>
            <div>
                <span className="title">Fast & Furious</span>
            </div>
            <div>
                <span className="genre">Genre: Action</span>
            </div>
            <div className="ratings">
                <span>Ratin: 4.5</span>
                <span>Duration: 148 min</span>
            </div>
        </div>
    )
}