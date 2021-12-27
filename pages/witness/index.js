import React from "react";
import Registration from "../../components/sections/user/registration";
import LoginLayout from "../../components/shared/layout/LoginLayout";
import Witness from "../../components/sections/witness/witness";

const index = () => {
  return (
    <>
      <LoginLayout>
        <Witness></Witness>
      </LoginLayout>
    </>
  );
};

export default index;
