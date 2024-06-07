import { useState } from 'react';


export const WaitToRenderComponent = (props: any) => {
    const [isWaiting, setIsWaiting] = useState(true);

    setTimeout(() => setIsWaiting(false), props.seconds * 1000);

    return (
        <div>
            {!isWaiting ? props.children : null}
        </div>
    );

}
