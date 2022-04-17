import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);
  let location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user.emailVerified) {
    return (
      <div className="text-center mt-5">
        <h3 className="text-danger">Your Email is not verified!!</h3>
        <h5 className="text-success"> Please Verify your email address</h5>
        <button
          className="btn btn-primary"
          onClick={async () => {
            await sendEmailVerification();
            toast("email sent to your email address");
          }}
        >
          Send Verification Email Again
        </button>
        <ToastContainer></ToastContainer>
      </div>
    );
  }
  return children;
}

export default PrivateRoute;
