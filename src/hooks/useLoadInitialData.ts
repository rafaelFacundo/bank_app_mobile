import { useEffect, useState } from "react"
import * as Font from "expo-font"

const useLoadInitialData = (): {isReady: boolean} => {
    const [isReady, setIsReady] = useState<boolean>(false);

    async function fetchData() {
        try {
            await Font.loadAsync({
                Poppins: require('../../assets/fonts/Poppins-Light.ttf'),
                PoppinsMedium: require('../../assets/fonts/Poppins-Medium.ttf'),
                PoppinsRegular: require('../../assets/fonts/Poppins-Regular.ttf')
            })
            await new Promise( resolve => setTimeout(resolve, 1000));
        }catch(e) {
            console.log("AN ERROR!");
            console.log(e);
        }finally{
            setIsReady(true)
        }
        
    }

    useEffect(() => {
        fetchData();
    }, [])
    return {isReady}
}

export default useLoadInitialData;