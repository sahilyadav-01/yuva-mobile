import { useState } from "react";
import { FAQ_QUESTIONS } from "../constants";




export const useViewAllOurPlan=()=>{

    const list = FAQ_QUESTIONS.map((item) => {
        return {
            ...item,
            isExpanded: false
        }
    })
    const [packageList, setPackageList] = useState(list)
    const onUpdate = (index) => {
        const newList = packageList.map((item, itemIndex) => {
            return {
                ...item,
                isExpanded: itemIndex === index && !item.isExpanded,
            }
        });
        setPackageList(newList)
    }

return {
    packageList,
    onUpdate,
}
}
