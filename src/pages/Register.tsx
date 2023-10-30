import React from "react";
import TitleComponent from "../components/TitleComponent";
import RegisterComponent from "../components/RegisterComponent";

function RegisterPage() {
  const title: string = "ลงทะเบียนใช้งาน";

  return (
    <>
      <TitleComponent data={title} />
      <RegisterComponent />
    </>
  );
}

export default RegisterPage;
