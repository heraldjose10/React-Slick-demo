import './photo-card.styles.css'

const PhotoCard = ({ source, credit }) => {
    return (
        <div className='card'>
            <img alt="unsplash" src={source} className='image' />
            <h1 className='credit'>{credit}</h1>
        </div>
    )
}

export default PhotoCard;