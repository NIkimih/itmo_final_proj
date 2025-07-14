import { ShopItem } from "./ShopItem";
import dataShop from "../../Base/ShopItems.json"
import { useEffect, useState } from "react";

//@ts-ignore
export function Shop() {
  
  const[data, setData] = useState({items: []});
  useEffect(()=>{
    //@ts-ignore
    setData(dataShop);
  }, [])
  return(
    <div className="test">
    <div className="all-item-cards grid grid-cols-2 md:grid-cols-5 gap-30">
      { data && data.items.map(item => (
        //@ts-ignore
        <ShopItem props = {item}/>
))}
    </div>
    </div>
  )
}