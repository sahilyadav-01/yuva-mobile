

import { useSelector } from 'react-redux';


export const useAddNewAddress = () => {

    const { packageDetails } = useSelector(state => state.diagnostic);

    return {

        packageDetails,

    }
}