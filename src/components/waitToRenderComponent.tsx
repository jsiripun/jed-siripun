import { useState } from 'react';
import Box from '@mui/material/Box';


export const WaitToRenderComponent = (props: any) => {
    const [isWaiting, setIsWaiting] = useState(true);

    setTimeout(() => {
        setIsWaiting(false)
    }, props.seconds);


    if (isWaiting) {
        return null
    } else {
        return (
            <Box>
                {props.children}
            </Box>
        );
    }

}
