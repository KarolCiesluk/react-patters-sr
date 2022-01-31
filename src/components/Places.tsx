import { LoginChecker } from ".";
import { User } from "../context/userContext";
import withUser from "./withUsers";

const Places = ({ email, isAdmin }: User) => (
  <LoginChecker>
    <h1>Places</h1>
    <p>User email: {email}</p>
    <p>Admin: {isAdmin.toString()}</p>
  </LoginChecker>
);

export default withUser(Places);