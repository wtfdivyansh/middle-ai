"use client";
import { useEffect } from "react";
import { useAuth } from "./auth.context";
import { usePathname, useRouter } from "next/navigation";
// import LoadingScreen from "@/components/custom/screens/loading.screen";

export const RoutesContext = ({
  children,
  protectedRoutes,
  publicRoutes,
}: {
  children: React.ReactNode;
  protectedRoutes: string[];
  publicRoutes: string[];
}) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    if (!loading) {
      const handleRedirect = async () => {
        if (user && publicRoutes.includes(path)) {
          await new Promise((resolve) => setTimeout(resolve, 500)); // Wait for 0.5 seconds
          router.replace("/dashboard");
        } else if (!user && protectedRoutes.includes(path)) {
          await new Promise((resolve) => setTimeout(resolve, 500)); // Wait for 0.5 seconds
          router.replace("/");
        }
      };

      handleRedirect();
    }
  }, [user, loading, path, publicRoutes, protectedRoutes, router]);

  // if (loading && protectedRoutes.includes(path)) {
  //   return <LoadingScreen />;
  // }

  return children;
};