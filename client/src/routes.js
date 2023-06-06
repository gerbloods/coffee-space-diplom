import { ADMIN_PANEL, CONTACTS_ROUTE, MAIN_ROUTE, MENU_ROUTE, NEWS_ROUTE } from "./const";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import News from "./pages/News";


export const adminRoutes = [
    {
        path: ADMIN_PANEL,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contact
    },
    {
        path: MENU_ROUTE,
        Component: Menu
    },
    {
        path: NEWS_ROUTE,
        Component: News
    },
    {
        path: ADMIN_PANEL,
        Component: Admin
    }
] 