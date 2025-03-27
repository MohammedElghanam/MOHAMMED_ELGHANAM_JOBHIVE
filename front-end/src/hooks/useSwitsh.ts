import React, { useState } from 'react'

const useSwitsh = () => {
    const [activeComponent, setActiveComponent] = useState(1);

    return {
        activeComponent,
        setActiveComponent
    }
}

export default useSwitsh