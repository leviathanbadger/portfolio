import { ReactNode } from 'react';
import './globals.scss';

function App({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <div className="bls-root">
                <div className='header'>Header</div>
                {children}
                <div className='footer'>Footer</div>
            </div>
        </html>
    );
}

export default App;
