import Userfront from "@userfront/toolkit";
import { Authorization } from "../Authorization/Authorization";

export default function Cart() {
    if (Userfront.user.email != null) {
  return (
    <div>Cart</div>
  )}
  else{
    return(
        <Authorization />
    )
  }
}
