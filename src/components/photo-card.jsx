import './photo-card.styles.css'

const PhotoCard = ({ source, credit }) => {
    return (
        <div>
            <img alt="unsplash" src={source} className='image' />
            <h1>{credit}</h1>
        </div>
    )
}

export default PhotoCard;