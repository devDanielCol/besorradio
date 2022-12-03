import { onValue, ref, set, get, child } from "firebase/database";
import { database as db } from "../../config";

interface UserData {
  userId: string;
  name: string;
  lastname: string;
  phone: string;
}

function WriteRegisterUserData(userData: UserData) {
  return set(ref(db, "user/" + userData.userId), {
    userId: userData.userId,
    name: userData.name,
    lastname: userData.lastname,
    phone: userData.phone,
    blocked: false,
  });
}

const WatchUserData = (userId: string) => {
  const starCountRef = ref(db, "user/" + userId);
  onValue(starCountRef, (snapshot) => {
    console.log(snapshot.val(), "user data");
  });
};

const GetUserData = (userId: string) => {
  const dbRef = ref(db);
  return get(child(dbRef, `user/` + userId));
};

export { WriteRegisterUserData, WatchUserData, GetUserData };
