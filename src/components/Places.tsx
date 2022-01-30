import { User } from "../context/userContext";
import withUser from "./withUsers";

const Places = ({ email, isAdmin }: User) => (
  <>
    <h1>Places</h1>
    <p>User email: {email}</p>
    <p>Admin: {isAdmin.toString()}</p>
  </>
);

export default withUser(Places);