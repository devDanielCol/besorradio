import "../config";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();

async function SignInWithGooglePopup() {
  return await signInWithPopup(auth, provider);
}

function SignInWithRedirect() {
  return signInWithRedirect(auth, provider);
}

export { SignInWithGooglePopup, SignInWithRedirect };
