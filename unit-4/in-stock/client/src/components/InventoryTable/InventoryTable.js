//Styles
import './inventory-table.scss'

//Imports
import sortIcon from '../../assets/Icons/sort-24px.svg';
import chevronIcon from '../../assets/Icons/chevron_right-24px.svg';
import deleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';
import InStockTag from '../InStockTag/InStockTag';

function InventoryTable({items}) {
    return (
        <>
         <table className="inventory-list-table">
                <tr className="inventory-list-table__row inventory-list-table__row--header">
                    <th>
                        <div className="inventory-list-table__placeholder"></div>
                    </th>
                    <th>
                        <div className="inventory-list-table__header">
                            <h2 className="inventory-list-table__title">inventory item</h2>
                            <img className="inventory-list-table__header-icon" src={sortIcon} alt="sort items icon"/>
                        </div>
                    </th>
                    <th>
                        <div className="inventory-list-table__header">
                            <h2 className="inventory-list-table__title">category</h2>
                            <img className="inventory-list-table__header-icon" src={sortIcon} alt="sort items icon"/>
                        </div>
                    </th>
                    <th>
                        <div className="inventory-list-table__header">
                            <h2 className="inventory-list-table__title">status</h2>
                            <img className="inventory-list-table__header-icon" src={sortIcon} alt="sort items icon"/>
                        </div>
                    </th>
                    <th>
                        <div className="inventory-list-table__header">
                            <h2 className="inventory-list-table__title">qty</h2>
                            <img className="inventory-list-table__header-icon" src={sortIcon} alt="sort items icon"/>
                        </div>
                    </th>
                    <th>
                        <div className="inventory-list-table__header">
                            <h2 className="inventory-list-table__title">warehouse</h2>
                            <img className="inventory-list-table__header-icon" src={sortIcon} alt="sort items icon"/>
                        </div>
                    </th>
                    <th>
                        <div className="inventory-list-table__header">
                            <h2 className="inventory-list-table__title">actions</h2>
                        </div>
                    </th>
                    <th>
                        <div className="inventory-list-table__placeholder"></div>
                    </th>
                </tr>
                <tr className="inventory-list-table__row inventory-list-table__row--cell">
                    <td>
                        <div className="inventory-list-table__placeholder"></div>
                    </td>
                    <td>
                        <div className="inventory-list-table__cell">
                            <div className="inventory-list-table__item">
                                <p className="inventory-list-table__cell-content inventory-list-table__cell-content--indigo">Television</p>
                                <img className="inventory-list-table__cell-icon" src={chevronIcon} alt="chevron icon pointing right"/>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="inventory-list-table__cell">
                            <p className="inventory-list-table__cell-content">Electronics</p>
                        </div>
                    </td>
                    <td>
                        <div className="inventory-list-table__cell">
                            <InStockTag inStock=""/>
                        </div>
                    </td>
                    <td>
                        <div className="inventory-list-table__cell">
                            <p className="inventory-list-table__cell-content">500</p>
                        </div>
                    </td> 
                    <td>
                        <div className="inventory-list-table__cell">
                            <p className="inventory-list-table__cell-content">Warehouse</p>
                        </div>
                    </td>       
                    <td>
                        <div className="inventory-list-table__cell">
                            <div className="inventory-list-table__action">
                                <img className="inventory-list-table__cell-icon" src={deleteIcon} alt="trash bin icon"/>
                                <img className="inventory-list-table__cell-icon" src={editIcon} alt="edit pencil icon"/>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="inventory-list-table__placeholder"></div>
                    </td>                
                </tr>
                <tr className="inventory-list-table__divider">
                    <td className="inventory-list-table__border" colspan="8"></td>
                </tr>
            </table>

      </>
    );
  }

  export default InventoryTable;