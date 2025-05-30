// components/GoogleMapsScript.tsx
'use client'

import Script from 'next/script'

type GoogleMapsScriptProps = {
    onLoad?: () => void;
};

export default function GoogleMapsScript({ onLoad }: GoogleMapsScriptProps) {
    return (
        <Script
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
            strategy="afterInteractive"
            onLoad={onLoad}
        />
    )
}