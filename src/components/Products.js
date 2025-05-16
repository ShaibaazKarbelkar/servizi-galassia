function Products() {
    return (
      <>
      <div className="products">
        <p className="products-title">PRODUCTS</p>
        <p className="products-heading grow-up">BEST SELLING PRODUCTS</p>
        <div className="card-holder">
          <div className="card">
            <img src="/assets/images/productImages/HP EliteBook 840 G5 i5-8th Gen.webp" alt="HP EliteBook 840 G5 i5-8th Gen"/>
            <p>HP EliteBook 840 G5 i5-8th Gen</p>
            <div>
              <button className="buy">BUY NOW</button>
              <button className="chat">CHAT NOW</button>
            </div>
          </div>
          <div className="card">
            <img src="/assets/images/productImages/Lenovo ThinkPad T470 i5-7th Gen.webp" alt="Lenovo ThinkPad T470 i5-7th Gen" />
            <p>Lenovo ThinkPad T470 i5-7th Gen</p>
            <div>
              <button className="buy">BUY NOW</button>
              <button className="chat">CHAT NOW</button>
            </div>
          </div>
          <div className="card">
            <img src="/assets/images/productImages/Dell Latitude 5420 i5-11th Gen.webp" alt="Dell Latitude 5420 i5-11th Gen"/>
            <p>Dell Latitude 5420 i5-11th Gen</p>
            <div>
              <button className="buy">BUY NOW</button>
              <button className="chat">CHAT NOW</button>
            </div>
          </div>
          <div className="card">
            <img src="/assets/images/productImages/Dell Latitude 5400 i5-8th Gen.webp" alt="Dell Latitude 5400 i5-8th Gen"/>
            <p>Dell Latitude 5400 i5-8th Gen</p>
            <div>
              <button className="buy">BUY NOW</button>
              <button className="chat">CHAT NOW</button>
            </div>
          </div>
          <div className="card">
            <img src="/assets/images/productImages/Lenovo ThinkPad T480 i5-8th Gen.webp" alt="Lenovo ThinkPad T480 i5-8th Gen"/>
            <p>Lenovo ThinkPad T480 i5-8th Gen</p>
            <div>
              <button className="buy">BUY NOW</button>
              <button className="chat">CHAT NOW</button>
            </div>
          </div>
          <div className="card">
            <img src="/assets/images/productImages/Apple Macbook Air M1 A2337.webp" alt="Apple Macbook Air M1 A2337"/>
            <p>Apple Macbook Air M1 A2337</p>
            <div>
              <button className="buy">BUY NOW</button>
              <button className="chat">CHAT NOW</button>
            </div>
          </div>
        </div>
        <div className="more">
          <a href="">KNOW MORE</a>
        </div>
      </div>
      </>
    );
  }
  
  export default Products;