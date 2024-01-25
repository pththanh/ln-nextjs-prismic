import React from "react";
import Script from "next/script";

const GoogleAnalyticsTracking = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-SL87HS25S2"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-SL87HS25S2');
            `}
      </Script>
    </>
  );
};

export default GoogleAnalyticsTracking;
