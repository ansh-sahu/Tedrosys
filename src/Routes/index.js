import HomeRoutes from "./HomeRoute";
import AboutRoute from "./AboutRoute";
import LoanRoute from "./LoanRoute";
import CategoryRoutes from "./CategoryRoutes";
import ContactRoutes from "./ContactRoutes";
import LoginRoutes from "./LoginRoutes";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import LoginNumberRoutes from "./LoginNumberRoutes";
import NewAccountRoutes from "./NewAccountRoutes";
import BussinessLoanRoutes from "./BussinessLoanRoutes";
import HomeLoanRoutes from "./HomeLoanRoutes";
import persionalLoanRoutes from "./persionalLoanRoutes";
import OtpRoutes from "./OtpRoutes";
import App from "../App";

const layout = (Comp) => ({
  ...Comp,
  element: (
    <App>
      <Nav />
      {Comp.element}
      <Footer />
    </App>
  ),
});

export default [
  layout(HomeRoutes),
  layout(AboutRoute),
  layout(LoanRoute),
  layout(CategoryRoutes),
  layout(ContactRoutes),
  LoginRoutes,
  LoginNumberRoutes,
  NewAccountRoutes,
  layout(BussinessLoanRoutes),
  layout(HomeLoanRoutes),
  layout(persionalLoanRoutes),
  OtpRoutes,
];
