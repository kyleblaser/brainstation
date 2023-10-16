//Imports
import './inventory-list.scss'
import InventoryListCard from '../InventoryListCard/InventoryListCard'  
import InventoryTable from '../InventoryTable/InventoryTable'

function InventoryList() {
    return(
        <>
        <div className="inventory-list">
            <InventoryTable/>
            <InventoryListCard/>
            <InventoryListCard/>
            <InventoryListCard/>
        </div>
        </>
    )
}

export default InventoryList;