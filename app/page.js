import Business from "@/components/business";
import PaymentGateway from "@/components/gatewaysection";
import Header from "@/components/header";
import Section from "@/components/section";

export default function Home() {
  return (
  <>
  <Header/>
  <Section/>
  <PaymentGateway/>
  <Business/>
  </>
  );
}
