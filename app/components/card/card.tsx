import type { CardProps } from '../../types/card.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import './card.css'
const Card = (props: CardProps) => {
    switch (props.type) {
        case 'curiosidades':
            return (
                <div className="card__curiosidades">
                    <div className="card__icon">
                        <FontAwesomeIcon icon={faCircleQuestion} />
                    </div>
                    <div className="card__content">
                        <h3> {props.title}</h3>
                        <p> {props.text}</p>
                    </div>
                </div>
            );
        default:
            return null;
    }
};

export default Card;