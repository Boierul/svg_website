import './App.css';
import {useEffect, useRef} from "react";

function App() {
    const ref = useRef(null);

    function performSVGAnimation() {
        let paths = ref.current.querySelectorAll('path');

        function fillSvgPaths() {
            let scrollPercentage =
                (document.documentElement.scrollTop + document.body.scrollTop) /
                (document.documentElement.scrollHeight - document.documentElement.clientHeight);

            for (let i = 0; i < paths.length; i++) {
                let path = paths[i];

                let pathLength = path.getTotalLength();

                path.style.strokeDasharray = pathLength;
                path.style.strokeDashoffset = pathLength;

                let drawLength = pathLength * scrollPercentage;

                path.style.strokeDashoffset = pathLength - drawLength;
            }
        }

        window.addEventListener('scroll', fillSvgPaths)

        return () => {
            window.removeEventListener('scroll', fillSvgPaths)
        };
    }

    useEffect(() => {
        return performSVGAnimation();
    }, []);

    return (
        <div className="App">
            <section>
                <h1>Airplane</h1>
            </section>

            <section>
                <h1>They go so fast</h1>
            </section>

            <section>
                <h1>Vroom vroom</h1>
            </section>

            <div ref={ref}>
                <svg viewBox="0 0 369.08 262.7">
                    <path className="cls-1"
                          d="M64.44,225.3l3.17,6.34-3.17,3.62,15.17,26.94h9.74l10.87-10.64,17.21-54.79,6.57-3.17,8.15,9.51,16.3-7.02,15.85,33.96-4.08,2.49,2.04,3.4,5.89-4.08,1.58,3.85,2.04-2.49,.91-4.3,48.23-31.25,11.55-9.96s-2.49-.91-3.85,0-2.72,.91-2.72,.91c0,0-5.66-2.04-7.92,.68s-21.96,14.04-21.96,14.04l24.45-58.42s20.38-12.23,24.68-26.04c0,0,29.66-20.83,31.25-24.23s0-6.34,0-6.34l5.21-4.98-1.36-5.21,1.36-6.11S347.01,25.83,361.04,7.04c2.49-3.4,5.43-5.66,5.43-5.66,0,0-9.74,3.17-10.87,3.62s-33.96,8.15-60.23,23.32c0,0-22.64,4.08-35.09,11.55s-33.51,29.89-33.51,29.89l-6.57,3.85-24.45,13.13-78.34-9.96,26.49-17.89s2.04-1.36,2.26-3.17-.23-2.94-.23-2.94l-58.87,37.13,2.26,3.85,4.53-2.04,27.62,52.08-19.47,11.09s-72.91,.68-76.53,2.94S1.04,176.17,1.04,176.17l43.25,14.72,7.25,2.26s52.53-33.74,60.68-35.77,32.83-18.11,32.83-18.11c0,0,50.72-44.6,54.34-47.09s11.32-9.51,11.32-9.51c0,0,5.43,9.96,10.19,14.94l-35.32,28.53"/>
                    <path className="cls-1"
                          d="M296.95,27.43s3.64,5.42,3.19,6.32-17.66,24.91-72.45,41.66l-2.72-2.94,1.81-2.72"/>
                    <path className="cls-1" d="M173.8 89.9 111.76 78.81 99.76 86.73 141.19 131.49"/>
                    <path className="cls-1" d="M207.99 135.64 180.66 218.73 170.63 225.75 159.99 170.28"/>
                </svg>
            </div>
        </div>
    );
}

export default App;
