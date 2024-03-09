import { lazy } from "react";
const Search = lazy(() => import("../../components/Search"));
const ShopInfor  = lazy(() => import("../../components/shop/ShopInfor"));
const ShopProduct  = lazy(() => import("../../components/shop/ShopProduct"));


const Shop = {
  shopID: 123,
  shopname: "Tien's Shop",
  shopEmail: "tranmanhtien35@gmail.com",
  shopInfor: "This is my Shop",
  shopLike: 156,
  shopImage :"../../images/NO_IMG.png"
}
const Products = 
  [
  {
  name: 'Áo nam',
  discription: "Áo dành cho nam",
  price: 156,
  imagePath :"../../images/NO_IMG.png"
  },
  {
    name: 'Áo nữ',
    discription: "Áo dành cho nữ",
    price: 112,
    imagePath :"../../images/NO_IMG.png"
    },
    ,{
      name: 'Áo gay',
      discription: "Áo dành cho gay",
      price: 69,
      imagePath :"../../images/NO_IMG.png"
      }
      ,{
        name: 'Áo gay',
        discription: "Áo dành cho gay",
        price: 69,
        imagePath :"../../images/NO_IMG.png"
        }    ,{
          name: 'Áo gay',
          discription: "Áo dành cho gay",
          price: 69,
          imagePath :"../../images/NO_IMG.png"
          }    ,{
            name: 'Áo gay',
            discription: "Áo dành cho gay",
            price: 69,
            imagePath :"../../images/NO_IMG.png"
            }    ,{
              name: 'Áo gay',
              discription: "Áo dành cho gay",
              price: 69,
              imagePath :"../../images/NO_IMG.png"
              }    ,{
                name: 'Áo gay',
                discription: "Áo dành cho gay",
                price: 69,
                imagePath :"../../images/NO_IMG.png"
                }
]



const MyShopView = () => {
    return(
        <div >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ShopInfor shopData={Shop} /> </div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', marginBottom: '0.5rem'}}>
    {Products.map((product, index) => (
        <div key={index} style={{ width: '25%', marginBottom: '0.5rem' }}>
            <ShopProduct products={product} />
        </div>
    ))}
</div>

        </div>
    )
};

export default MyShopView;
