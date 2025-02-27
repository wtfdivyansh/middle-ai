/* eslint-disable @typescript-eslint/no-explicit-any */
import account from "@/lib/appwrite/init";
import { useState, useEffect } from "react";

export const useAuth = () => {
  const [user, setUser] = useState<null | any>(null); // Define a more specific type for the user
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await account.get();
        setUser(fetchedUser ?? null);
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading };
};