### Example Code

```typescript
import { Miter, Controller, Get, Request, Response } from 'miter';

@Controller()
class HomeController {
    
    @Get('/')
    public async home(req: Request, res: Response) {
        res.status(200).send("You've arrived!");
    }
    
}

Miter.launch({
    name: 'simple-server',
    port: 8080,
    router: {
        controllers: [HomeController]
    }
});
```
