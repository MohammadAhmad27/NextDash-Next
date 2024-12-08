"use client"
import React from 'react'
import styles from './pagination.module.css'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'


export default function Pagination({ count }) {
    const { replace } = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const page = searchParams.get("page") || 1;
    const params = new URLSearchParams(searchParams);
    const itemPerPage = 2;

    const hasPrev = itemPerPage * (parseInt(page) - 1) > 0;
    const hasNext = itemPerPage * (parseInt(page) - 1) + itemPerPage < count;

    const handleChangePage = (type) => {
        type === 'prev' ? params.set("page", parseInt(page) - 1) : params.set("page", parseInt(page) + 1);
        replace(`${pathname}?${params}`);
    };

    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                disabled={!hasPrev}
                onClick={() => handleChangePage("prev")}
            >
                Previous
            </button>
            <button
                className={styles.button}
                disabled={!hasNext}
                onClick={() => handleChangePage("next")}

            >
                Next
            </button>
        </div>
    )
}
