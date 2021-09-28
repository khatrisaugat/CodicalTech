import { Link } from 'react-router-dom'
import Button from './Button'
function Items(props) {
    const handleClick = (e) => {
        document.getElementById('root').scrollIntoView();
    }
    return (
        <div className="Items">
            <div className="Items-text-section">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
            <Link to="/packages" className="Link"><Button title="View Package" handleClick={handleClick} /></Link>
        </div>
    )
}

export default Items
