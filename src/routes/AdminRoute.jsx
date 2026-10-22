// import { Navigate } from "react-router-dom";

// export default function AdminRoute({ children, me }) {
//     if (!me) return null; // me loading থাকলে কিছু রেন্ডার না
//     if (me.role !== "admin") return <Navigate to="/student" replace />;
//     return children;
// }

import { Navigate } from "react-router-dom";

export default function AdminRoute({ children, me }) {
    const isBypass =
        import.meta.env.DEV &&
        localStorage.getItem("dev_bypass") === "true";

    // Development-only route preview
    if (isBypass) {
        return children;
    }

    if (!me) return null;

    if (me.role !== "admin") {
        return <Navigate to="/student" replace />;
    }

    return children;
}