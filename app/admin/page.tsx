"use client"

import { useEffect } from "react"
import Script from "next/script"

export default function AdminPage() {
    useEffect(() => {
        // Disable the default page layout for the admin
        document.body.style.minHeight = "100vh"
    }, [])

    return (
        <>
            <Script
                src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"
                strategy="afterInteractive"
            />
            <style jsx global>{`
        /* Hide the site header/footer for admin */
        header, footer {
          display: none !important;
        }
        body {
          background: white;
        }
        .flex-1 {
          flex: none !important;
        }
      `}</style>
        </>
    )
}
