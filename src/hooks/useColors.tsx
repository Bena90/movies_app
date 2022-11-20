import React from 'react';
import { ContextProps, GradientContext } from '../context/GradientContext';

export const useColors = (): ContextProps => React.useContext(GradientContext)
