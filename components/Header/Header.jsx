import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useUserStore } from "../../store/useUserStore";

export default function Header() {
    const username = useUserStore((state) => state.username);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <svg
                    width="143"
                    height="24"
                    viewBox="0 0 143 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M17.8253 15.7664C19.7858 15.7992 21.3852 14.2024 21.3852 12.2296H21.3862C21.3862 10.7881 20.533 9.54757 19.3089 8.99783C19.1294 8.91695 18.9423 8.85028 18.7488 8.8011C18.1475 8.6459 17.5852 8.3519 17.1624 7.89177C16.5817 7.26006 16.227 6.41412 16.227 5.48512V5.47966C16.227 5.18675 16.2876 4.89931 16.3763 4.6217C16.4282 4.45995 16.4682 4.29382 16.4963 4.12332C16.5482 3.8009 16.5601 3.46537 16.5179 3.11235C16.3179 1.45218 14.9694 0.138466 13.3192 0.0105925C11.2625 -0.147884 9.54309 1.49262 9.54309 3.53969C9.54309 5.02172 10.4449 6.29062 11.7242 6.81632C11.8518 6.86878 11.9827 6.91469 12.1178 6.95185C12.864 7.15732 13.5452 7.57154 14.0091 8.1978C14.4471 8.78798 14.7055 9.52134 14.7055 10.3148V10.3203C14.7055 10.5902 14.6472 10.8558 14.5628 11.1116C14.4979 11.305 14.4503 11.5072 14.4211 11.7138C14.3855 11.9586 14.3746 12.2122 14.3919 12.4712C14.512 14.2909 16.0216 15.7369 17.8253 15.7664Z"
                        fill="white"
                    />
                    <path
                        d="M7.00079 3.5386C7.00079 5.4925 5.43361 7.07644 3.50039 7.07644C1.56718 7.07644 0 5.4925 0 3.5386C0 1.5847 1.56718 0.000756297 3.50039 0.000756297C5.43361 0.000756297 7.00079 1.5847 7.00079 3.5386Z"
                        fill="white"
                    />
                    <path
                        d="M16.5871 20.4628C16.5871 22.4355 14.9878 24.0323 13.0273 23.9995C11.2235 23.97 9.71395 22.524 9.59392 20.7043C9.57662 20.4453 9.58744 20.1917 9.62312 19.9469C9.65232 19.7403 9.6999 19.5381 9.76478 19.3447C9.84913 19.0889 9.90752 18.8233 9.90752 18.5534V18.5479C9.90752 17.7545 9.64907 17.0211 9.21112 16.4309C8.74721 15.8047 8.06595 15.3904 7.3198 15.185C7.18463 15.1478 7.05379 15.1019 6.92618 15.0494C5.64693 14.5237 4.74506 13.2548 4.74506 11.7728C4.74506 9.72573 6.46336 8.08522 8.5212 8.24479C10.1714 8.37267 11.5198 9.68638 11.7199 11.3466C11.7621 11.6996 11.7502 12.0351 11.6983 12.3575C11.6702 12.528 11.6301 12.6941 11.5782 12.8559C11.4896 13.1335 11.429 13.421 11.429 13.7139V13.7193C11.429 14.6483 11.7837 15.4943 12.3644 16.126C12.7872 16.5861 13.3495 16.8801 13.9508 17.0353C14.1443 17.0845 14.3314 17.1511 14.5109 17.232C15.735 17.7818 16.5882 19.0223 16.5882 20.4638L16.5871 20.4628Z"
                        fill="white"
                    />
                    <path
                        d="M26.087 3.5386C26.087 5.4925 24.5198 7.07644 22.5866 7.07644C20.6533 7.07644 19.0862 5.4925 19.0862 3.5386C19.0862 1.5847 20.6533 0.000756297 22.5866 0.000756297C24.5198 0.000756297 26.087 1.5847 26.087 3.5386Z"
                        fill="white"
                    />
                    <path
                        d="M41.0879 19.21C36.8879 19.21 34.0879 16.07 34.0879 11.77C34.0879 7.47 36.8879 4.35 41.0879 4.35C45.2879 4.35 48.0879 7.47 48.0879 11.77C48.0879 13.71 47.5079 15.43 46.4879 16.71L48.2879 18.51L47.1479 19.65L45.3479 17.85C44.2079 18.71 42.7479 19.21 41.0879 19.21ZM35.9679 11.77C35.9679 14.85 37.4879 17.61 41.0879 17.61C42.3679 17.61 43.3879 17.25 44.1679 16.67L42.2879 14.79L43.4279 13.65L45.2479 15.47C45.9079 14.45 46.2079 13.15 46.2079 11.77C46.2079 8.69 44.6879 5.95 41.0879 5.95C37.4879 5.95 35.9679 8.69 35.9679 11.77Z"
                        fill="white"
                    />
                    <path
                        d="M53.2576 19.21C51.3976 19.21 49.8376 18.19 49.8376 15.85V8.73H51.4376V15.45C51.4376 16.77 52.0576 17.81 53.6576 17.81C55.4576 17.81 56.6576 16.67 56.6576 15.09V8.73H58.2576V18.93H56.6576V17.71H56.6176C56.0776 18.43 54.9976 19.21 53.2576 19.21Z"
                        fill="white"
                    />
                    <path
                        d="M63.4016 19.21C61.3416 19.21 60.0416 18.03 60.0416 16.31C60.0416 13.97 61.7616 13.33 64.4016 12.85C66.1416 12.53 66.9416 12.33 66.9416 11.33C66.9416 10.53 66.5016 9.83 64.8216 9.83C62.8816 9.83 62.3216 10.41 62.2216 11.89H60.5416C60.6416 9.93 61.8816 8.43 64.8816 8.43C66.7816 8.43 68.5016 9.23 68.5016 11.73V16.63C68.5016 17.43 68.6216 17.83 69.0216 17.83C69.0816 17.83 69.1416 17.83 69.2616 17.81V18.93C69.0016 18.99 68.7616 19.03 68.4816 19.03C67.6016 19.03 67.0616 18.69 66.9616 17.43H66.9216C66.2616 18.53 65.1016 19.21 63.4016 19.21ZM61.7216 16.23C61.7216 17.23 62.2416 17.81 63.5616 17.81C65.4816 17.81 66.9416 16.95 66.9416 14.99V13.37C66.6416 13.69 65.6416 13.95 64.5416 14.17C62.5616 14.57 61.7216 15.05 61.7216 16.23Z"
                        fill="white"
                    />
                    <path
                        d="M77.8313 12.21C77.8313 10.89 77.2113 9.85 75.6113 9.85C73.8113 9.85 72.6113 10.99 72.6113 12.57V18.93H71.0113V8.73H72.6113V9.95H72.6513C73.1913 9.23 74.2713 8.45 76.0113 8.45C77.8713 8.45 79.4313 9.47 79.4313 11.81V18.93H77.8313V12.21Z"
                        fill="white"
                    />
                    <path
                        d="M84.7377 19.03C83.2377 19.03 82.1977 18.51 82.1977 16.19V10.13H80.6977V8.73H82.1977V5.33H83.7977V8.73H85.7977V10.13H83.7977V16.27C83.7977 17.35 84.0577 17.63 84.9577 17.63C85.2977 17.63 85.4577 17.61 85.7977 17.57V18.93C85.3377 19.01 85.0977 19.03 84.7377 19.03Z"
                        fill="white"
                    />
                    <path
                        d="M90.8162 19.21C88.9562 19.21 87.3962 18.19 87.3962 15.85V8.73H88.9962V15.45C88.9962 16.77 89.6162 17.81 91.2162 17.81C93.0162 17.81 94.2162 16.67 94.2162 15.09V8.73H95.8162V18.93H94.2162V17.71H94.1762C93.6362 18.43 92.5562 19.21 90.8162 19.21Z"
                        fill="white"
                    />
                    <path
                        d="M104.2 12.21C104.2 10.89 103.94 9.85 102.34 9.85C100.74 9.85 99.7402 10.99 99.7402 12.57V18.93H98.1402V8.73H99.7402V9.95H99.7802C100.32 9.23 101.2 8.45 102.74 8.45C104.2 8.45 105.04 9.07 105.46 10.21H105.5C106.2 9.25 107.26 8.45 108.8 8.45C110.86 8.45 111.86 9.67 111.86 11.81V18.93H110.26V12.21C110.26 10.89 110 9.85 108.4 9.85C106.8 9.85 105.8 10.99 105.8 12.57V18.93H104.2V12.21Z"
                        fill="white"
                    />
                    <path
                        d="M118.375 18.93V4.63H119.975V18.93H118.375Z"
                        fill="white"
                    />
                    <path
                        d="M125.12 19.21C123.06 19.21 121.76 18.03 121.76 16.31C121.76 13.97 123.48 13.33 126.12 12.85C127.86 12.53 128.66 12.33 128.66 11.33C128.66 10.53 128.22 9.83 126.54 9.83C124.6 9.83 124.04 10.41 123.94 11.89H122.26C122.36 9.93 123.6 8.43 126.6 8.43C128.5 8.43 130.22 9.23 130.22 11.73V16.63C130.22 17.43 130.34 17.83 130.74 17.83C130.8 17.83 130.86 17.83 130.98 17.81V18.93C130.72 18.99 130.48 19.03 130.2 19.03C129.32 19.03 128.78 18.69 128.68 17.43H128.64C127.98 18.53 126.82 19.21 125.12 19.21ZM123.44 16.23C123.44 17.23 123.96 17.81 125.28 17.81C127.2 17.81 128.66 16.95 128.66 14.99V13.37C128.36 13.69 127.36 13.95 126.26 14.17C124.28 14.57 123.44 15.05 123.44 16.23Z"
                        fill="white"
                    />
                    <path
                        d="M137.57 19.21C135.93 19.21 134.97 18.49 134.37 17.61H134.33V18.93H132.73V4.63H134.33V9.99H134.37C134.97 9.21 135.93 8.45 137.57 8.45C140.13 8.45 142.17 10.47 142.17 13.83C142.17 17.19 140.13 19.21 137.57 19.21ZM134.33 13.83C134.33 16.23 135.51 17.81 137.41 17.81C139.51 17.81 140.49 15.83 140.49 13.83C140.49 11.83 139.51 9.85 137.41 9.85C135.51 9.85 134.33 11.43 134.33 13.83Z"
                        fill="white"
                    />
                </svg>
                <nav className={styles.menu}>
                    <ul className={styles.menu__list}>
                        <li className={styles.menu__item}>
                            <Link href="/">Главная</Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link href="/calculator">Калькулятор</Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link href="/password-generator">
                                Генератор паролей
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles["profile-block"]}>
                    <span className={styles["profile-block__name"]}>
                        {username}
                    </span>
                    <div className={styles["profile-block__icon"]}>
                        <Image
                            src="/profile.jfif"
                            width={500}
                            height={500}
                            alt="Фото профиля"
                            className={styles["profile-block__photo"]}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
