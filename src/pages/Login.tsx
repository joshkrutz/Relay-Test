import { Link } from "react-router-dom";

export function Login() {
  return (
    <div>
      Login here <button>Login</button>
      <Link to="/register">Register here</Link>
    </div>
  );
}
