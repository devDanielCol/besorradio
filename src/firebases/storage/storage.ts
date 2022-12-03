import "../config";
import { getStorage, ref } from "firebase/storage";

const storage = getStorage();
const storageRef = ref(storage);

export { storageRef, storage };
