import React, { useState } from 'react'
import { Offer } from '../types/offerTypes';

const useSwitsh = () => {
    const [activeComponent, setActiveComponent] = useState(1);
    const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

    const handleSelectOffer = (offer: Offer) => {
        setSelectedOffer(offer);
        setActiveComponent(5); 
    };

    const handleApply = () => {
        alert("You have applied for this job!");
    };

    return {
        activeComponent,
        setActiveComponent,
        selectedOffer,
        handleApply,
        handleSelectOffer
    }
}

export default useSwitsh