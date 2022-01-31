import { LoginChecker } from ".";
import { User } from "../context/userContext";
import withUser from "./withUsers";

const Movies = ({ email, isAdmin }: User) => {
  return (
    <LoginChecker>
      <h1>Movies</h1>
      <p>User email: {email}</p>
      <p>Admin: {isAdmin.toString()}</p>
    </LoginChecker>
  );
};

export default withUser(Movies);