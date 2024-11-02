import {useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

const timeFormat = new Intl.RelativeTimeFormat("ja-JP");

export default function Countdown(props: { target: string }) {
    const target = new Date(props.target);
    const now = useSignal(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            if (now.value > target) {
                clearInterval(interval);
            }
            now.value = new Date();
        }, 1000);
        return () => clearInterval(interval);
    }, [props.target]);

    const secondsLeft = Math.floor((target.getTime() - now.value.getTime()) / 1000);
    if (secondsLeft < 0) {
        return <p>🎉</p>;
    }
    return <span>{timeFormat.format(secondsLeft, "seconds")}</span>;
}