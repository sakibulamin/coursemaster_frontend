import axios from "axios";
import { getToken, clearToken } from "../utils/auth";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
});
S:\Next level\pullock-frontend\courseMaster_frontEnd\src\services\api.js
// Request interceptor - automatically add token
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    // bug-3 no add bearer before token
    // if (token) {
    //   config.headers.Authorization = token;
    // }
    // fix code
        if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor - handle errors globally
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       // Token expired or invalid
//       clearToken();
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );
// Response interceptor - handle errors globally
// api.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         if (error.response?.status === 401) {
//             const isDevBypass =
//                 import.meta.env.DEV &&
//                 localStorage.getItem("dev_bypass") === "true";

//             // Keep development route preview active
//             if (isDevBypass) {
//                 return Promise.reject(error);
//             }

//             clearToken();

//             if (window.location.pathname !== "/login") {
//                 window.location.href = "/login";
//             }
//         }

//         return Promise.reject(error);
//     }
// );

api.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);
export default api;

// import axios from "axios";
// import { getToken, clearToken } from "../utils/auth";

// const api = axios.create({
//   baseURL:
//     import.meta.env.VITE_API_BASE_URL ||
//     "http://localhost:5000/api",
// });

// // Automatically attach the authentication token
// api.interceptors.request.use(
//   (config) => {
//     const token = getToken();

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Handle unauthorized responses
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       clearToken();

//       if (window.location.pathname !== "/login") {
//         window.location.href = "/login";
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default api;
