//Imports
import './in-stock-tag.scss';

function InStockTag({ inStock }) {
	return inStock ? (
		<p className="in-stock-tag in-stock-tag--true">in stock</p>
	) : (
		<p className="in-stock-tag in-stock-tag--false">out of stock</p>
	);
}

export default InStockTag;
