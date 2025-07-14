import Userfront, { PasswordResetForm } from "@userfront/toolkit/react";

Userfront.init("9ny7pd6n");

export default function Reset() {
  return(
    <>
    <div>
        <PasswordResetForm />
    </div>
    </>
  );
}
