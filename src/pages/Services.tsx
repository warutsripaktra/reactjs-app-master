import { HomeComponent } from "../components/HomeComponent";
import { ServicesComponent } from "../components/ServicesComponent";
import TitleComponent from "../components/TitleComponent";

function ServicesPage() {
  const title: string = "Service Page";
  return (
    <>
      <TitleComponent data={title} />
      <ServicesComponent />
      <HomeComponent />
    </>
  );
}

export default ServicesPage;
