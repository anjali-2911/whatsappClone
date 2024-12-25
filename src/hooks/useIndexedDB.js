import { openDB } from "idb";

export const useIndexedDB = () => {
  const dbPromise = openDB("chat-db", 1, {
    upgrade(db) {
      db.createObjectStore("messages", { keyPath: "id", autoIncrement: true });
    },
  });

  const saveMessage = async (message) => {
    const db = await dbPromise;
    await db.put("messages", message);
  };

  return { saveMessage };
};
