import React, { useEffect, useState } from 'react';
import './ManufacturerPage.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faChartLine, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function ManufacturerPage() {
  const [supplies, setSupplies] = useState([]);
  const [orders, setOrders] = useState([]);
  const [editingSupplyId, setEditingSupplyId] = useState(null);
  const [editedSupply, setEditedSupply] = useState({ supply_name: '', quantity_ordered: 0, order_date: '' });

  useEffect(() => {
    const fetchSupplies = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/supply');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); 
        setSupplies(data);
      } catch (error) {
        console.error('Error fetching supplies:', error);
      }
    };

    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:5000/supply_orders');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Orders data:', data); 
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchSupplies();
    fetchOrders();
  }, []);

  const handleEditClick = (supply) => {
    setEditingSupplyId(supply.ID);
    setEditedSupply({
      supply_name: supply.supply_name,
      quantity_ordered: supply.quantity_ordered,
      order_date: new Date(supply.order_date).toISOString().split('T')[0], 
    });
  };

  const handleSaveClick = async (supplyId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/supply/${supplyId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedSupply),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const updatedSupply = await response.json();
      setSupplies((prevSupplies) =>
        prevSupplies.map((supply) =>
          supply.ID === updatedSupply.ID ? updatedSupply : supply
        )
      );
      setEditingSupplyId(null); 
    } catch (error) {
      console.error('Error updating supply:', error);
    }
  };

  const handleCancelClick = () => {
    setEditingSupplyId(null);
  };

  return (
    <div className="manufacturer-container">
      <aside className="side-menu">
        <h2>Manufacturer Menu</h2>
        <ul>
          <li><a href="/"><FontAwesomeIcon icon={faBox} /> Orders From Admin</a></li>
          <li><a href="/supply-form"><FontAwesomeIcon icon={faBox} /> Add a new Product</a></li>
          <li><a href="/"><FontAwesomeIcon icon={faChartLine} /> Dashboard</a></li>
          <li><a href="/"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</a></li>
        </ul>
      </aside>
      <div className="main-content">
        <h2>My Products in Stock</h2>
        <div className="supply-container">
          {supplies.length > 0 ? (
            supplies.map((supply) => (
              <div className="supply-card" key={supply.ID} onClick={() => handleEditClick(supply)}>
                {editingSupplyId === supply.ID ? (
                  <div>
                    <input
                      type="text"
                      value={editedSupply.supply_name}
                      onChange={(e) => setEditedSupply({ ...editedSupply, supply_name: e.target.value })}
                    />
                    <input
                      type="number"
                      value={editedSupply.quantity_ordered}
                      onChange={(e) => setEditedSupply({ ...editedSupply, quantity_ordered: Number(e.target.value) })}
                    />
                    <input
                      type="date"
                      value={editedSupply.order_date}
                      onChange={(e) => setEditedSupply({ ...editedSupply, order_date: e.target.value })}
                    />
                    <button onClick={() => handleSaveClick(supply.ID)}>Save</button>
                    <button onClick={handleCancelClick}>Cancel</button>
                  </div>
                ) : (
                  <div>
                    <h3 className="supply-name">{supply.supply_name}</h3>
                    <p className="quantity-ordered">Quantity Present: {supply.quantity_ordered}</p>
                    <p className="order-date">Date Added: {new Date(supply.order_date).toLocaleDateString()}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>No Products in Stock at the moment.</p> 
          )}
        </div>

        <h2 style={{ textAlign: 'center' }}>Orders From Admin</h2>
        <div className="orders-container">
          {orders.length > 0 ? (
            orders.map((order) => (
              <div className="supply-card" key={order.ID}>
                <h3 className="supply-name">Order for Product {order.ProductID}</h3>
                <p className="order-details">Details: {order.order_details}</p>
                <p className="contact-info">Contact: {order.contact_information}</p>
                <p className="delivery-schedule">Delivery Schedule: {new Date(order.delivery_schedule).toLocaleString()}</p>
                <p className="pricing">
                  Pricing: {
                    !isNaN(parseFloat(order.pricing_and_payment))
                      ? `$${parseFloat(order.pricing_and_payment).toFixed(2)}`
                      : order.pricing_and_payment
                  }
                </p>
                <p className="shipping-info">Shipping: {order.shipping_information}</p>
                <p className="product-info">Product Info: {order.product_information}</p>
              </div>
            ))
          ) : (
            <p>No orders from admin at the moment.</p>
          )}
        </div>
        
      </div>
    </div>
  );
}

export default ManufacturerPage;
