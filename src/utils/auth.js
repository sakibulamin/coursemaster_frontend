// export const saveToken = (token) => localStorage.setItem("user_token", token);
// export const getToken = () => localStorage.getItem("token");
// export const clearToken = () => localStorage.removeItem("token");

export const saveToken = (token) =>
    localStorage.setItem("token", token);

export const getToken = () =>
    localStorage.getItem("token");

export const clearToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_token");
};
console.log("Token exists:", Boolean(localStorage.getItem("token")));
console.log("User token exists:", Boolean(localStorage.getItem("user_token")));