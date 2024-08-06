import React from 'react';
import { Link } from 'react-router-dom';
import './ClientPage.css';


const products = [
  { description: 'Description 3', price: 'Ksh.1,000', img: 'https://cdn.mafrservices.com/sys-master-root/h27/hff/12454522486814/22053_Main.jpg?im=Resize=1700?im=Resize=400' },
  { description: 'Krackles Assorted flavoursx24', price: 'Ksh.1,400', img: 'https://cdn.optipic.io/site-2766/images/thumbnails/550/450/detailed/17/4oti6KlZHiRZucaycSyTEffux9K_Jo6EdRRnNjU4LCs.jpg' },
  { description: 'Cereal Corn Flakes Value Pack 1Kgx12', price: 'Ksh.5,500', img: 'https://cdn.mafrservices.com/sys-master-root/h9b/h44/50586219184158/19714_main.jpg?im=Resize=1700?im=Resize=400' },
  { description: 'Tilly Cooking Fat 10kg', price: 'Ksh.2,400', img: 'https://cdn.mafrservices.com/sys-master-root/h43/hd4/26950721732638/21031_1.jpg?im=Resize=1700?im=Resize=400' },
  { description: 'Rina Vegetable Cooking oil 20L', price: 'Ksh.4,000', img: 'https://cdn.mafrservices.com/sys-master-root/hb7/h7f/17384319385630/21020_main.jpg?im=Resize=1700?im=Resize=400' },
  { description: 'Captain Cook Corn Oil', price: 'Ksh.7,000', img: 'https://cdn.mafrservices.com/sys-master-root/hba/h28/50586218070046/20991_main.jpg?im=Resize=1700?im=Resize=400' },
  { description: 'Brookside Dairy milk 500mlx12', price: 'Ksh.600', img: 'https://mybigorder.com/public/uploads/products/photos/DNf8oAIUDWYuYFVuXrc0lpjWhR6OakhTkn2kPzzv.jpeg' },
  { description: 'Royco Mchuzi Mix 2kg', price: 'Ksh.500', img: 'https://kikuuboonline.ams3.cdn.digitaloceanspaces.com/Items/637904420592676604.png' },
  { description: 'Royco Mchuzi Mix 170gx24', price: 'Ksh.1,900', img: 'https://cdn.mafrservices.com/sys-master-root/h26/h79/50428192489502/13913_3.jpg?im=Resize=1700?im=Resize=400' },
  { description: 'Blueband Croma For Catering Medium Fat Spread 10kg', price: 'Ksh.3,000', img: 'https://cdn.mafrservices.com/sys-master-root/h30/hf9/12451482730526/13872_Main.jpg?im=Resize=480' },
  { description: 'Oreo Biscuit 55gx12', price: 'Ksh.600', img: 'https://cdn.mafrservices.com/sys-master-root/hed/h91/51430620495902/182716_main.jpg?im=Resize=480' },
  { description: 'Kakira Light Brown Sugar 5kg', price: 'Ksh.1,200', img: 'https://cdn.mafrservices.com/sys-master-root/h09/h99/17328354885662/68475_main.jpg?im=Resize=480' },
  { description: 'Prestige Margarine 5KG', price: 'Ksh.2,000', img: 'https://cdn.mafrservices.com/sys-master-root/h09/h0c/26449282859038/21010_main.jpg?im=Resize=1700?im=Resize=400' },
  { description: 'Blue Band 250gx12', price: 'Ksh.1,440', img: 'https://cdn.mafrservices.com/sys-master-root/he9/h90/30801988091934/13869_main.jpg?im=Resize=480' },
  { description: 'Choco Primo Drinking Chocolate Powder 20gx36', price: 'Ksh.540', img: 'https://cdn.mafrservices.com/sys-master-root/hb5/hab/51467885477918/211007_main.jpg?im=Resize=480' },
  { description: 'Tropical Heat Kenyan Chevda Hot 50gx24', price: 'Ksh.1,200', img: 'https://cdn.optipic.io/site-2766/images/thumbnails/550/450/detailed/17/mEih5FmPYOAFvhXcGbgj5h4uY0gtcoo35TQDJLZ58-Y.png' },
  { description: 'Indomie Instant Noodles Beef 20x120g', price: 'Ksh.800', img: 'https://cdn.optipic.io/site-2766/images/thumbnails/550/450/detailed/16/LLHd1pUX4HzFk96-4RNjsYu2KTBbcFTdmkWkm8ejFdA.png' },
  { description: 'Noodies Instant Noodles Beef 5Pack 8x70g', price: 'Ksh.850', img: 'https://cdn.optipic.io/site-2766/images/thumbnails/550/450/detailed/15/4hQITDUMRYokDIsv-XYJZI4vCLmmPtHpwpUstX5cINM.jpg' },
  { description: 'Pick N Peel Pure Fruit Juice Tetra Apple 12x1L', price: '2,500', img: 'https://cdn.optipic.io/site-2766/images/thumbnails/550/450/detailed/17/FEeeul3NxQClK1tKWjqpvctMFZ5KtRtU3B0ZL0Kopnw.jpg' },
  { description: 'Tropical Heat Potato Crisps Cheese & Onion 200gx12', price: '500', img: 'https://cdn.optipic.io/site-2766/images/thumbnails/550/450/detailed/17/wzTx56a0J_b-BU_DezBZ4Iae855eYJ_syyTtgIdQYaE.jpg' },
  { description: 'Celine Premium Toilet Tissue 10x4s', price: 'Ksh.300', img: 'https://cdn.optipic.io/site-2766/images/thumbnails/550/450/detailed/16/6n6VPvUWCO7FOp3A_Cm_PTF68av8M0yYP1rRWq8VEDg.jpg' },
  { description: 'EXE Self Raising Flour 12x2Kg', price: 'Ksh.1,700', img: 'https://cdn.optipic.io/site-2766/images/thumbnails/550/450/detailed/17/5e9y0ywy5nM3fevL6qchzFGd-aFgg816zJtDtkkO0Qo.png' },
  { description: 'Exe All Purpose Wheat Flour 12x2kg', price: 'Ksh.1,650', img: 'https://cdn.optipic.io/site-2766/images/thumbnails/550/450/detailed/17/NW6T8fdmEFVBKlvAPHVu0okAUS4YreF22ytwGLSYykk.jpg' },
  { description: 'Jik Bleach Regular 6x750ml', price: 'Ksh.2,000', img: 'https://cdn.optipic.io/site-2766/images/thumbnails/550/450/detailed/17/mWjHFOHPI-WHEQcUyA0_vVpZRM28fA_pHnYMA8pybkQ.jpg' },
  { description: 'Msafi Bleach Colour (750ml + 250ml Free) 12x1L', price: 'Ksh.1,700', img: 'https://cdn.optipic.io/site-2766/images/thumbnails/550/450/detailed/17/ALCwlBKYw5hHq_-eVV7T0OL3nwa8FuwEOrJFMfWa-yw.jpg' },
  { description: 'Keringet Still Water 4x5L', price: 'Ksh.500', img: 'https://cdn.optipic.io/site-2766/images/thumbnails/550/450/detailed/17/4g7S851ri1FjdKZOHMy6skD9krjVv622h1RTHq5OSUY.jpg' },
  { description: 'Nestle Milo Active-Go Chocolate Milk Powder 10gx24', price: 'Ksh.340', img: 'https://cdn.mafrservices.com/sys-master-root/h09/h66/17588391018526/73986_main.jpg?im=Resize=1700?im=Resize=400' },
  { description: 'Imperial Leather Uplifting Soap 150g X3 x12', price: 'Ksh.1,900', img: 'https://cdn.mafrservices.com/sys-master-root/h24/h0f/32226868494366/168849_main.jpg?im=Resize=480' },
  { description: 'Geisha Rose & Honey Pink Family Bathing Soap Value Pack 200G X 3 x12', price: 'Ksh. 3,000', img: 'https://cdn.mafrservices.com/sys-master-root/hfc/hab/49586849284126/75756_main.jpg?im=Resize=480' },
  { description: 'Royco Fortified Beef Cubes, For nutritious meals full of flavour, 4g x 40 x12', price: 'Ksh.1,300', img: 'https://cdn.mafrservices.com/sys-master-root/hd6/hd5/48142736982046/85033_main.jpg?im=Resize=480' },
  { description: 'Tropical Heat Spices Mixed Spices 100Gx12', price: 'Ksh.2,300', img: 'https://cdn.mafrservices.com/sys-master-root/hc9/h4d/62412187729950/32142_main.jpg?im=Resize=480' },
  { description: 'Velvex Liquid Disinfectant Orange Pine 1x5Lx6', price: 'Ksh.3,000', img: 'https://cdn.optipic.io/site-2766/images/thumbnails/550/450/detailed/17/91QMqJ_D6W9tbEmCoEesjxBKN-ZKPpJdX-G4NT2wYfw.jpg' },
  { description: 'Nutrameal Popcorn Kernels 1kgx12', price: 'Ksh.3,000', img: 'https://cdn.mafrservices.com/sys-master-root/h62/ha0/12454521700382/22040_Main.jpg?im=Resize=1700?im=Resize=400' },
  { description: 'Santa Lucia Spaghetti Pasta 700gx12', price: 'Ksh.2,000', img: 'https://cdn.mafrservices.com/sys-master-root/ha5/h35/16872053080094/25790_main.jpg?im=Resize=480' },
  { description: 'Poshy Roll Poa Toilet Tissue Roll 10 Packx4', price: 'Ksh.750', img: 'https://cdn.mafrservices.com/sys-master-root/h2c/h6d/26675962216478/131953_main.jpg?im=Resize=480' },




];

const ClientPage = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/client">Client</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
      <h1>Client Page</h1>
      <div className="collection-container">
        {products.map((product, index) => (
          <div className="card" key={index}>
            <div className="card-img">
              {product.img ? <img src={product.img} alt={`Product ${index }`} /> : <div>No Image Available</div>}
            </div>
            <div className="card-info">
              <p className="text-title">{}</p>
              <p className="text-body">{product.description}</p>
            </div>
            <div className="card-footer">
              <span className="text-title">{product.price}</span>
              <div className="card-button">
                <svg className="svg-icon" viewBox="0 0 20 20">
                  {/* SVG icon content */}
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientPage;
