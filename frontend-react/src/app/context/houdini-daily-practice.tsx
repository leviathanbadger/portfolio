'use client';

import { HoudiniDailyPractice } from '@/models';
import { createContext, ReactNode } from 'react';

export const HoudiniDailyPracticeContext = createContext<{ practice: HoudiniDailyPractice | null }>({ practice: null });

function HoudiniDailyPracticeProvider({ practice, children }: { practice: HoudiniDailyPractice | null, children: ReactNode }) {
    return (
        <HoudiniDailyPracticeContext.Provider value={{ practice }}>
            {children}
        </HoudiniDailyPracticeContext.Provider>
    );
}

export default HoudiniDailyPracticeProvider;
