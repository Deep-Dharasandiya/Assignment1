import React from 'react'
import { Dimensions } from "react-native"


export default useOrientation = () => {

        const [screenInfo,setScreenInfo] = React.useState(Dimensions.get('screen'));

        React.useEffect(() => {
            
            const onChange = (result) =>{
                setScreenInfo(result.screen);
            }

            const event=Dimensions.addEventListener('change',onChange);

            return () =>event.remove();

        }, []);

        return {
            ...screenInfo,
            isPotraite:screenInfo.height>screenInfo.width,
        }

}