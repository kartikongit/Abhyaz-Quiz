import "./timer.css";
import { useEffect, useState, useRef } from "react";

export const TimeLimit = ({ duration, onTimeUp }) => {

    const [counter, setCounter] = useState(0);
    const [progressPer, setProgressPer] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            console.log("I am starting the counter");
            setCounter((current) => current + 1);
        }, 1000);

        // Clear interval when the component unmounts
        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        setProgressPer(100 * (counter / duration));

        if (counter === duration) {
            console.log("I am ending the counter");
            clearInterval(intervalRef.current);

            setTimeout(() => {
                onTimeUp();
            }, 1000);
        }

    }, [counter]);

    return (
        <div className="fading">
            <div 
            className="progress"
            style={{
              width:`${progressPer}%`,
              backgroundColor:`${ 
                progressPer <40 ? "lightgreen":
                progressPer <70 ? "orange":
                "red"
              }`


            }}
            > </div>
        </div>
    );
};
