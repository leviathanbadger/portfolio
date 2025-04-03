import { Observable, of as observableOf } from 'rxjs';
import { Theme, ThemeProvider } from './theme';

export class DarkThemeProvider extends ThemeProvider {
    constructor() {
        super(void(0) as any, void(0) as any);
    }

    override createTheme$(): Observable<Theme> {
        return observableOf('dark');
    }
}
