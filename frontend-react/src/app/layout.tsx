import { ReactNode } from 'react';
import Footer from './footer';
import Header from './header';
import './globals.scss';
import './layout.scss';

function App({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <head></head>

            <body>
                <Header></Header>

                <main>
                    {children}
                </main>

                <Footer></Footer>
            </body>
        </html>
    );
}

export default App;
