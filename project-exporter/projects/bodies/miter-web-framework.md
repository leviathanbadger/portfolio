### Miter Web Framework

Miter is a web framework heavily influenced by [Ruby on Rails][rails] and [SailsJs][sails]. It is built on top of [Express][express]. Miter uses Typescript's experimental decorators to create elegant controllers and services, using dependency injection to avoid tight coupling.

#### Installation

Install `miter` using NPM.

`bash
npm install --save miter miter-cli
`

`miter-cli` is optional, but can be used to generate and run database migrations from the command line. See [miter-framework/miter-cli][miter_cli] for more details.

#### Example

First, create a controller:

```typescript
import { Controller, Get } from 'miter';
import { Request, Response } from 'express';

@Controller()
class HelloWorldController {

    @Get('greet')
    async sampleRoute(req: Request, res: Response) {
        res.status(200).send(`Hello, World!`);
    }

}
```

Next, start the Miter server using `Miter.launch`:

```typescript
import { Miter } from 'miter';
import { HelloWorldController } from './hello-world.controller';

Miter.launch({
    name: 'server-name',
    port: 8080,
    router: {
        controllers: [HelloWorldController]
    }
});
```

After you have launched your server, navigate to [localhost:8080/greet](example_url) to see your route in action.

This is a simple demonstration, but you can already see how simple and easy it is to get a server up and running.

[rails]: http://rubyonrails.org/
[sails]: http://sailsjs.com/
[express]: https://expressjs.com/
[miter_cli]: https://github.com/miter-framework/miter-cli
[example_url]: http://localhost:8080/greet
