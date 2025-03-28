import React, { useState } from 'react'
import { Offer } from '../types/offerTypes';

const useDashboard = () => {
    const [activeComponent, setActiveComponent] = useState(1);
   
    return {
        activeComponent,
        setActiveComponent,
    }
}

export default useDashboard;