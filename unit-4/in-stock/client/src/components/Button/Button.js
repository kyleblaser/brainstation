//Imports
import './button.scss';

function Button({type, text, img}) {
    return(
        <>
        <div className={type ? `button button--${type}` : `button`}>
            <div className="button__body">
                {img ? <img className="button__icon" src={img} alt=""/> : null}
                <p className={type ? `button__text button__text--${type}` : `button__text`}>{text}</p>
            </div>
		</div>
        </>
    )
}

export default Button;