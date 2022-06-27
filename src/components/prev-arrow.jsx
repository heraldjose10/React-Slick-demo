import './arrow.styles.css'

const PrevArrow = ({ onClick }) => (
    <button className="arrow" onClick={onClick}>
        &lt;
    </button>
)

export default PrevArrow