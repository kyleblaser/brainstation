//Imports
import Divider from '../Divider/Divider';
import InStockTag from '../InStockTag/InStockTag';
import './inventory-list-card.scss';
import chevronIcon from '../../assets/Icons/chevron_right-24px.svg';
import deleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';

function InventoryListCard({item, category, qty, warehouse, inStock}) {
    return(
        <>
        <div className="inventory-list-card">

        <div className="inventory-list-card__divider"></div>

            <div className="inventory-list-card__cell">
                <p className="inventory-list-card__header inventory-list-card__header--indigo">inventory item</p>
                <div className="inventory-list-card__item">
                    <p className="inventory-list-card__description inventory-list-card__description--indigo">{item}</p>
                    <img className="inventory-list-card__icon" src={chevronIcon} alt="chevron icon pointing right"/>
                </div>
            </div>

            <div className="inventory-list-card__cell">
                <p className="inventory-list-card__header">status</p>
                <InStockTag inStock={inStock}/>
            </div>

            <div className="inventory-list-card__cell">
                <p className="inventory-list-card__header">category</p>
                <p className="inventory-list-card__description">{category}</p>
            </div>

            <div className="inventory-list-card__cell">
                <p className="inventory-list-card__header">qty</p>
                <p className="inventory-list-card__description">{qty}</p>
            </div>

            <div className="inventory-list-card__cell inventory-list-card__cell--filler">
            </div>

            <div className="inventory-list-card__cell">
                <p className="inventory-list-card__header">warehouse</p>
                <p className="inventory-list-card__description">{warehouse}</p>
            </div>

            <div className="inventory-list-card__cell">
                <img className="inventory-list-card__icon" src={deleteIcon} alt="trash bin icon"/>
            </div>

            <div className="inventory-list-card__cell">
                <img className="inventory-list-card__icon inventory-list-card__icon--edit" src={editIcon} alt="pencil icon"/>
            </div>
        </div>
        </>
    )
}

export default InventoryListCard;