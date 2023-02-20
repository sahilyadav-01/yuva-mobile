import React from 'react';
import { SVG } from '../../../../assets';
export const useLifeStyleCard = () => {

    const imageData = {
        OBESITY: <SVG.OBESITY/>,
        THYROID: <SVG.THYROID/>,
        WOMEN_HEALTH: <SVG.WOMEN_HEALTH/>,
        SMOKING_AND_ALCOHOL: <SVG.SMOKING_AND_ALCOHOL/>,
        DIABETES: <SVG.DIABETES/>,
        HYPER_TENSION: <SVG.HYPER_TENSION/>,
      };
    return {
        imageData
    };
};