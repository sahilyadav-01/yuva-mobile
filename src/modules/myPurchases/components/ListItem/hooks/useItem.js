import { useState } from "react";

export const useItem = () => {
    const [expanded,setExpanded] = useState(false);
    const onArrowPress = () => setExpanded(!expanded);
    return {expanded, onArrowPress};
}