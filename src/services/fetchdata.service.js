import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../firebase/database";

export const fetchVideos = async () => {
  const kVideosFirestoreKey = "videos";

  const ordersQuery = query(
    collection(db, kVideosFirestoreKey),
    // where("active", "==", true)
  );

  try {
    const querySnapshot = await getDocs(ordersQuery);
    // console.log(querySnapshot);
    return querySnapshot.docs;
  } catch (error) {
    console.log(error);
    return Promise.reject("Something went wrong", error);
  }
};
