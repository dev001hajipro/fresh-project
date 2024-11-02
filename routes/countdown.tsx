import Countdown from "../islands/Countdown.tsx";

export default function Page() {
    const date = new Date();
    date.setHours(date.getHours() + 1);
    return (
        <div>
            <p>island-architecture: <a href="https://jasonformat.com/islands-architecture/" target="_blank">https://jasonformat.com/islands-architecture/</a></p>
            <p>ilands execute client side.</p>
            <p><Countdown target={date.toISOString()} /></p>
        </div>
    );
}
