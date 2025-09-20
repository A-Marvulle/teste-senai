import type { CardProps } from '../../types/card.types';

const Card = (props: CardProps) => {
    switch (props.type) {
        case 'curiosidades':
            return (
                <div className="card__curiosidades">
                    <h3> {props.title}</h3>
                    <p> {props.text}</p>
                </div>
            );
        default:
            return null;
    }
};

export default Card;