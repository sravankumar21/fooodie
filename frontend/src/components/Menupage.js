import React from 'react';
import { Link } from 'react-router-dom';

const MenuPage = () => {
  return (
    <div className="container mt-4">
      {/* Header */}
      <header className="text-center mb-4">
        <h1 style={{ fontFamily: 'Inter', fontSize: '40px', fontWeight: 'italic' }}>FOOOODIE.COM</h1>
      </header>

      {/* Starters Section */}
      <section className="menu-section" style={{marginBottom :'5%',marginTop:'3%'}}>
        <h2>Starters</h2>
        {/* Table-like structure for starters */}
        <div className="menu-table">
          <table className="table">
            <thead>
              <tr>
                <th>S/No</th>
                <th>Item Name</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {/* Rows for starters */}
              <tr>
                <td>1</td>
                <td>Starter 1</td>
                <td>Description of Starter 1</td>
                <td>$5.99</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Starter 2</td>
                <td>Description of Starter 2</td>
                <td>$6.99</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Starter 3</td>
                <td>Description of Starter 3</td>
                <td>$7.99</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Starter 4</td>
                <td>Description of Starter 4</td>
                <td>$8.99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Main Course Section */}
      <section className="menu-section" style={{marginBottom :'5%',marginTop:'3%'}}>
        <h2>Main Course</h2>
        <div className="menu-table">
          <table className="table">
            <thead>
              <tr>
                <th>S/No</th>
                <th>Item Name</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {/* Rows for starters */}
              <tr>
                <td>1</td>
                <td>Main Course 1</td>
                <td>Description of Main Course 1</td>
                <td>$5.99</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Main Course 2</td>
                <td>Description of Main Course 2</td>
                <td>$6.99</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Main Course 3</td>
                <td>Description of Main Course 3</td>
                <td>$7.99</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Main Course 4</td>
                <td>Description of Main Course 4</td>
                <td>$8.99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="menu-section" style={{marginBottom :'5%',marginTop:'3%'}}>
        <h2>Chinese</h2>
        <div className="menu-table">
          <table className="table">
            <thead>
              <tr>
                <th>S/No</th>
                <th>Item Name</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {/* Rows for starters */}
              <tr>
                <td>1</td>
                <td>Chinese 1</td>
                <td>Description of Chinese 1</td>
                <td>$5.99</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Chinese 2</td>
                <td>Description of Chinese 2</td>
                <td>$6.99</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Chinese 3</td>
                <td>Description of Chinese 3</td>
                <td>$7.99</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Chinese 4</td>
                <td>Description of Chinese 4</td>
                <td>$8.99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="menu-section" style={{marginBottom :'5%',marginTop:'3%'}}>
        <h2>Italian</h2>
        <div className="menu-table">
          <table className="table">
            <thead>
              <tr>
                <th>S/No</th>
                <th>Item Name</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {/* Rows for starters */}
              <tr>
                <td>1</td>
                <td>Italian 1</td>
                <td>Description of Italian 1</td>
                <td>$5.99</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Italian 2</td>
                <td>Description of Italian 2</td>
                <td>$6.99</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Italian 3</td>
                <td>Description of Italian 3</td>
                <td>$7.99</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Italian 4</td>
                <td>Description of Italian 4</td>
                <td>$8.99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="menu-section" style={{marginBottom :'5%',marginTop:'5%'}}>
        <h2>Desserts</h2>
        <div className="menu-table">
          <table className="table">
            <thead>
              <tr>
                <th>S/No</th>
                <th>Item Name</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {/* Rows for starters */}
              <tr>
                <td>1</td>
                <td>Dessert 1</td>
                <td>Description of Dessert 1</td>
                <td>$5.99</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Dessert 2</td>
                <td>Description of Dessert 2</td>
                <td>$6.99</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Dessert 3</td>
                <td>Description of Dessert 3</td>
                <td>$7.99</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Dessert 4</td>
                <td>Description of Dessert 4</td>
                <td>$8.99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>


      {/* Add more sections as needed */}

      {/* Footer with link to go back to homepage */}
      <footer className="text-center mt-4" style={{marginBottom :'5%',marginTop:'3%'}}>
        <Link to="/" className="btn btn-danger">Back to Homepage</Link>
      </footer>
    </div>
  );
}

export default MenuPage;
