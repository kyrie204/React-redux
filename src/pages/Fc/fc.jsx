import React, { useState } from "react";
import { Button } from "antd";


function Fc() {
    console.log("123");
    const [c, setC] = useState(0);

    const handerClick = () => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                setC(c + 1);
                console.log(c);
            }, 100);
        }
    };
    return <Button onClick={handerClick}>{c}</Button>;
}

export default Fc;
