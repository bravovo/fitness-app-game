import { useEffect, useMemo, useState } from "react";

function usePreloadAssets(assetUrls = []) {
    const normalizedUrls = useMemo(
        () => [...new Set(assetUrls.filter(Boolean))],
        [assetUrls]
    );
    const [readyMap, setReadyMap] = useState({});

    useEffect(() => {
        if (!normalizedUrls.length) return;

        let isCancelled = false;

        normalizedUrls.forEach((url) => {
            if (readyMap[url]) return;

            const img = new Image();
            const markReady = () => {
                if (isCancelled) return;

                setReadyMap((prev) => {
                    if (prev[url]) return prev;
                    return { ...prev, [url]: true };
                });
            };

            img.onload = markReady;
            img.onerror = markReady;
            img.src = url;

            if (img.complete) {
                markReady();
            }
        });

        return () => {
            isCancelled = true;
        };
    }, [normalizedUrls, readyMap]);

    return normalizedUrls.every((url) => readyMap[url]);
}

export default usePreloadAssets;
