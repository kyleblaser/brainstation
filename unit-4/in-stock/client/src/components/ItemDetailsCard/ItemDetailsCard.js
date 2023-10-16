//Imports
import './item-details-card.scss'
import InStockTag from '../InStockTag/InStockTag';
import Button from '../Button/Button';
import editIcon from '../../assets/Icons/edit-24px.svg';
import arrowBackIcon from '../../assets/Icons/arrow_back-24px.svg';

function InventoryDetailsCard() {
    return (
        <>
        <div className="item-details-card">
            <div className="item-details-card__header">
                <div className="item-details-card__title">
                    <img className="item-details-card__title-icon" src={arrowBackIcon} alt="arrow back icon"/>
                    <h1 className="item-details-card__item-name">Television</h1>
                </div>
                <Button text="Edit" img={editIcon} type="small"/>
            </div>
            <div className="item-details-card__divider"/>
            <div className="item-details-card__body">
                <div class="item-details-card__aside item-details-card__aside--left">
                    <div className="item-details-card__section">
                        <p className="item-details-card__sub-header">item description:</p>
                        <p className="item-details-card__content item-details-card__content--long">This 50", 4K LED TV provides a crystal-clear picture and vivid colors.</p>
                    </div>
                    <div className="item-details-card__section">
                        <p className="item-details-card__sub-header">category:</p>
                        <p className="item-details-card__content">Electronics</p>
                    </div>
                </div>
                <div className="item-details-card__aside item-details-card__aside--right">
                    <div className="item-details-card__row">
                        <div className="item-details-card__section">
                            <p className="item-details-card__sub-header">status:</p>
                            <InStockTag/>
                        </div>
                        <div className="item-details-card__section">
                            <p className="item-details-card__sub-header">quantity:</p>
                            <p className="item-details-card__content">500</p>
                        </div>
                    </div>
                    <div className="item-details-card__section">
                            <p className="item-details-card__sub-header">warehouse:</p>
                            <p className="item-details-card__content">Manhattan</p>
                    </div>
                </div>

            </div>
    
        </div>
      </>
    );
  }
  
  export default InventoryDetailsCard;