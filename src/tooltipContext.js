import React from 'react';


const TooltipContext = React.createContext({});

export const TooltipProvider = TooltipContext.Provider;
export const TooltipConsumer = TooltipContext.Consumer;