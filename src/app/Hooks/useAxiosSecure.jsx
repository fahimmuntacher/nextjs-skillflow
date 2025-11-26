"use client";
import axios from "axios";
import { useAuth } from "@/AuthContext/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const axiosSecure = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_DOMAIN}`,
});

const useAxiosSecure = () => {
  const { user, signOutUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // REQUEST INTERCEPTOR
    const requestIntercept = axiosSecure.interceptors.request.use(
      async (config) => {
        if (user) {
          const token = await user.getIdToken(); // Firebase fresh token
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // RESPONSE INTERCEPTOR
    const responseIntercept = axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        const status = error?.response?.status;

        if (status === 401 || status === 403) {
          await signOutUser();
          router.push("/login");
        }

        return Promise.reject(error);
      }
    );

    // CLEAN UP ON UNMOUNT
    return () => {
      axiosSecure.interceptors.request.eject(requestIntercept);
      axiosSecure.interceptors.response.eject(responseIntercept);
    };
  }, [user, signOutUser, router]);

  return axiosSecure;
};

export default useAxiosSecure;
