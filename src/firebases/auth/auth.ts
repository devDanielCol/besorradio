import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import "../config";

const auth = getAuth();

interface RegisterUserProps {
  email: string;
  password: string;
}

async function CreateUserWithEmail({ email, password }: RegisterUserProps) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

async function SignInWithEmailPassword({ email, password }: RegisterUserProps) {
  return await signInWithEmailAndPassword(auth, email, password);
}

declare function IsInSession(user: User): void;
declare function IsNotInSession(): void;

function VerifyUserInSession(
  isInSession: typeof IsInSession,
  isNotInSession: typeof IsNotInSession
) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return isInSession(user);
    } else {
      return isNotInSession();
    }
  });
}

declare function Success(): void;
declare function Fail(error: unknown): void;

function SignOut(success: typeof Success, fail: typeof Fail) {
  signOut(auth)
    .then(() => {
      success();
    })
    .catch((error) => {
      fail(error);
    });
}

export {
  CreateUserWithEmail,
  VerifyUserInSession,
  SignInWithEmailPassword,
  SignOut,
};
