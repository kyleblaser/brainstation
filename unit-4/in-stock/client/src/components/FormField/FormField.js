//Imports
import './form-field.scss'

function FormField({placeholder, icon}) {
    return(
        <>
        <div className="form-field">
			<input placeholder={placeholder} className="form-field__input" />
            {icon ? <img className="form-field__icon" src={icon} alt={`${icon}`}/> : null }
		</div>
        </>
    )
}

export default FormField