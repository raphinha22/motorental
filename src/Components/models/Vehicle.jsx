/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const Vehicle = ({ product }) => {
  return (
    <div className="vehicle">
      <div className="grid-vehicle">
        {product.map(({ id, name, price, btn, img }) => {
          return (
            <div className="product" key={id}>
              <img src={img} alt="image" />
              <div className="name-price">
                <div className="name-flex">
                  <h2>{name}</h2>
                  <p>☆☆☆☆☆</p>
                </div>
                <div className="name-flex">
                  <h2>{price}</h2>
                  <p className="perday">per day</p>
                </div>
              </div>
              <button>{btn}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vehicle;
