import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehousesPage from '../src/pages/WarehousesPage/WarehousesPage';
import InventoryPage from '../src/pages/InventoryPage/InventoryPage';
import InventoryDetailsPage from '../src/pages/InventoryDetailsPage/InventoryDetailsPage';

function App() {
	return (
		<>
	<BrowserRouter>
      <Routes>
        <Route path="/" element={<WarehousesPage />} />
		<Route path="warehouse/:warehouseId" element={<WarehousesPage />} />
        <Route path="inventory" element={<InventoryPage />} />
		<Route path="inventory/:inventoryId" element={<InventoryDetailsPage />} />
      </Routes>
    </BrowserRouter>
		</>
	);
}

export default App;
