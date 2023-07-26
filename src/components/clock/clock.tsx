import { useState, useEffect } from "react";
import styles from './clock.module.css'

function Clock() {
    const [time, setTime] = useState<number>(0);

    useEffect(() => {
        // Update the state with the current time every second
        const intervalId = setInterval(() => {
            const currentDate = new Date();
            setTime(currentDate.getTime());
        }, 1000);

        // Clean up the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);

    // Convert the time (in milliseconds) to a human-readable format
    const formattedTime = new Date(time).toLocaleTimeString();

    return (
        <div>
            <p className={styles.clockTest}>{formattedTime}</p>
        </div>
    );
}

export default Clock;
