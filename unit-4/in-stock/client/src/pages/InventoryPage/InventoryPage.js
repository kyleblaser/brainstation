//Imports
import InventoryList from '../../components/InventoryList/InventoryList'
import FormField from '../../components/FormField/FormField';
import Button from '../../components/Button/Button';
import SearchIcon from '../../assets/Icons/search-24px.svg';
import Divider from '../../components/Divider/Divider';
import './inventory-page.scss';

function InventoryPage() {
    return (
        <>
        <main className="inventory-page">
            <div className="inventory-page__header">
                <h1 className="inventory-page__title">Inventory</h1>
                <div class="inventory-page__header-aside">
                  <FormField placeholder="Search..." icon={SearchIcon}/>
                  <Button type="primary" text="+ Add New Item"/>
                </div>
            </div>
            <InventoryList/>
    
        </main>
      </>
    );
  }
  
  export default InventoryPage;