import React from "react";
import Bride from "../../components/sections/bride/bride";
import LoginLayout from "../../components/shared/layout/LoginLayout";
import MarriageInformation from "../../components/sections/marriageInformation/MarriageInformation";

const index = () => {
  return (
    <>
      <LoginLayout>
        <MarriageInformation></MarriageInformation>
      </LoginLayout>
    </>
  );
};

export default index;
