import { onValue, ref, set, get, child } from "firebase/database";
import { database as db } from "../config";

function writeProgramData(name: string, description: string, img?: string) {
  void set(ref(db, "programs/" + name), {
    name,
    description,
    img,
  })
    .then(() => {
      console.log("datos guardados correctamente");
    })
    .catch(() => {
      console.log("error al guardar datos");
    });
}

function writeUserData(
  userId: string,
  age: string,
  phone: string,
  church: string
) {
  void set(ref(db, "users/" + userId), {
    age: age,
    phone: phone,
    church: church,
  });
}

const WatchProgramsData = () => {
  const starCountRef = ref(db, "programs/");
  onValue(starCountRef, (snapshot) => {
    console.log("programs data");
    console.log(snapshot.val(), "programs data");
  });
};

const GetProgramsData = () => {
  const dbRef = ref(db);
  return get(child(dbRef, `programs`));
};

export { writeUserData, writeProgramData, WatchProgramsData, GetProgramsData };
