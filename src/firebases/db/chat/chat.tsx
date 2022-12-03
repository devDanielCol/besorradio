import { onValue, ref, set, get, child } from "firebase/database";
import { database as db } from "../../config";

interface Message {
  userId: string;
  message: string;
}

function writeMessage(name: string, description: string, img?: string) {
  return void set(ref(db, "chats/" + name), {
    name,
    description,
    img,
  });
}

const WatchChatsMessages = () => {
  const starCountRef = ref(db, "programs/");
  onValue(starCountRef, (snapshot) => {
    console.log("programs data");
    console.log(snapshot.val(), "programs data");
  });
};
