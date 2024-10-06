import "../styles/globals.scss";
import { useRouter } from "next/router";
import Header from "../components/Header/Header";
import { useEffect, useState } from "react";
import { useUserStore } from "../store/useUserStore";

function MyApp({ Component, pageProps }) {
    const setUsername = useUserStore((state) => state.setUsername);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        const storedName = localStorage.getItem("username");
        if (storedName) {
            setUsername(storedName);
        }
        setIsClient(true);
    }, [setUsername]);

    const router = useRouter();

    const showHeader = ["/calculator", "/password-generator"].includes(
        router.pathname
    );

    return (
        <>
            {showHeader && isClient && <Header />}
            <main className={showHeader ? "main-container" : "index-container"}>
                <Component {...pageProps} />
            </main>
        </>
    );
}

export default MyApp;
