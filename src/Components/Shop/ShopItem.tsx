import Userfront from "@userfront/toolkit";

let shopItemInCart: any[] = []

//@ts-ignore
export function ShopItem(props) {
  //@ts-ignore
  function addToCart (id){
    shopItemInCart.push(id)
    console.log(shopItemInCart)
  }

  return (
     <div className="shop-cards">
         <div className="item-card">
           <h1 className="item-name">{props.props.name}</h1>
           <h2 className="item-type"> {props.props.type}</h2>
           <div className="item-info">
             <div className="item-photo"><img src={props.props.image} alt="" /></div>
             <p className="item-desc">{props.props.desc.gen_info}</p>
           </div>

           {(Userfront.user.email == null) ? (
        <div></div>
      ) : (
        <div className="document-download rounded-full bg-sky-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-sky-700" onClick={()=>{addToCart(props.props.id)}}>Добавить</div>
      )}

         </div>
       </div>
  );
}