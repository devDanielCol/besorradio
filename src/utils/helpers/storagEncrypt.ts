import crypto from "crypto-js";

const secretKey = process.env.REACT_APP_SECRET_KEY || "DEV-KEY";

export const setLocalStorage = (
  key: string,
  value: string | object | Array<object | string | number>
) => {
  const valueStringyfy = JSON.stringify(value);
  const valueEncrypt = crypto.AES.encrypt(valueStringyfy, secretKey).toString();
  localStorage.setItem(key, valueEncrypt);
};

export const getLocalStorage = (key: string) => {
  const data: string | null = localStorage.getItem(key);

  if (data) {
    const valueDecrypt: string = crypto.AES.decrypt(data, secretKey).toString(
      crypto.enc.Utf8
    );
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return JSON.parse(valueDecrypt);
  }
  return false;
};
