import { Injectable } from '@angular/core';
import { Project } from 'models';

const allProjects: Project[] = [
    new Project(
        'DocSource.io',
        {
            thumbnails: [
                '/assets/images/docsource-0-sm.png',
                '/assets/images/docsource-1-sm.png'
            ],
            images: [
                '/assets/images/docsource-0-lg.png',
                '/assets/images/docsource-1-lg.png'
            ]
        },
        'Github-integrated developer documentation tool',
        ['typescript', 'angular', 'express', 'node', 'webpack', 'github-api', 'socket-io', 'web-sockets', 'sass', 'production', 'website', 'ci'],
        [
            ['Demo', 'https://docsource.io/']
        ]
    ),
    new Project(
        'Collide (game)',
        {
            thumbnails: [
                '/assets/images/collide-0-sm.png',
                '/assets/images/collide-1-sm.png',
                '/assets/images/collide-2-sm.png',
                '/assets/images/collide-3-sm.png'
            ],
            images: [
                '/assets/images/collide-0-lg.png',
                '/assets/images/collide-1-lg.png',
                '/assets/images/collide-2-lg.png',
                '/assets/images/collide-3-lg.png'
            ]
        },
        'Spacial puzzle block-slider game',
        ['typescript', 'game-engine', 'html5', 'webpack', 'steam-api', 'production', 'commercial', 'opengl', 'game', 'nw.js', 'greenworks', 'svg', 'three.js', 'ci'],
        [
            // ['Store', '']
        ]
    ),
    new Project(
        'Worms-Warcraft',
        {
            thumbnails: [
                '/assets/images/worms-warcraft-0-sm.png'
            ],
            images: [
                '/assets/images/worms-warcraft-0-lg.png'
            ]
        },
        'Warcraft-themed realtime networked Worms clone',
        ['unity', 'c#', 'destructible-terrain', 'multiplayer'],
        [
            ['Source', 'https://github.com/blslade-neumont/worms-warcraft']
        ]
    ),
    new Project(
        'Asynchronous SPA Router',
        null,
        'Promise-based asynchronous SPA router and dependency loader',
        ['typescript', 'webpack', 'sass', 'nightwatch', 'node', 'website', 'ci'],
        [
            ['Source', 'https://github.com/blslade-neumont/capstone-spa-router']
        ]
    ),
    new Project(
        'brandonslade.me',
        null,
        'A project portfolio website demonstrating competency in web technologies and Angular 2+',
        ['typescript', 'angular', 'webpack', 'sass', 'production', 'portfolio', 'resume', 'website', 'ci', 'animations'],
        [
            ['Source', 'https://github.com/aboveyou00/portfolio'],
            ['Demo', 'http://brandonslade.me/']
        ]
    ),
    new Project(
        'Procedural Continent Generator',
        {
            thumbnails: [
                '/assets/images/continents-0-sm.png',
                '/assets/images/continents-1-sm.png',
                '/assets/images/continents-2-sm.png'
            ],
            images: [
                '/assets/images/continents-0-lg.png',
                '/assets/images/continents-1-lg.png',
                '/assets/images/continents-2-lg.png'
            ]
        },
        'Procedural content generation tech demo',
        ['typescript', 'webpack', 'procedural-terrain', 'procedural-generation'],
        [
            ['Source', 'https://github.com/blslade-neumont/procedural-continent-generator'],
            ['Demo', 'https://blslade-neumont.github.io/procedural-continent-generator/']
        ]
    ),
    new Project(
        'Minecraft Music Mod',
        null,
        'A Minecraft mod that adds a rythm-based guitar sword that does more damage on the beat',
        ['java', 'minecraft', 'mod', 'music-analysis'],
        [
            ['Source', 'https://github.com/blslade-neumont/music-mod']
        ]
    ),
    new Project(
        'Game Engine Physics',
        {
            thumbnails: [
                '/assets/images/physics-demo-0-sm.png',
                '/assets/images/physics-demo-1-sm.png',
                '/assets/images/physics-demo-2-sm.png'
            ],
            images: [
                '/assets/images/physics-demo-0-lg.png',
                '/assets/images/physics-demo-1-lg.png',
                '/assets/images/physics-demo-2-lg.png'
            ]
        },
        'A tech demo showcasing rigidbody physics in my custom HTML5 engine',
        ['typescript', 'physics', 'game-engine', 'html5', 'springs', 'ci'],
        [
            ['Source', 'https://github.com/blslade-neumont/GAT310'],
            ['Demo', 'https://blslade-neumont.github.io/GAT310/']
        ]
    ),
    new Project(
        'Boulder Physics Game',
        {
            thumbnails: [
                '/assets/images/boulder-game-0-sm.png',
                '/assets/images/boulder-game-1-sm.png',
                '/assets/images/boulder-game-2-sm.png'
            ],
            images: [
                '/assets/images/boulder-game-0-lg.png',
                '/assets/images/boulder-game-1-lg.png',
                '/assets/images/boulder-game-2-lg.png'
            ]
        },
        'A small game showcasing rigidbody physics in my custom HTML5 engine',
        ['typescript', 'physics', 'game'],
        [
            ['Source', 'https://github.com/blslade-neumont/physics-game-final'],
            ['Demo', 'https://blslade-neumont.github.io/physics-game-final/']
        ]
    ),
    new Project(
        'Angular Vector Editor',
        {
            thumbnails: [
                '/assets/images/vector-editor-0-sm.png',
                '/assets/images/vector-editor-1-sm.png'
            ],
            images: [
                '/assets/images/vector-editor-0-lg.png',
                '/assets/images/vector-editor-1-lg.png'
            ]
        },
        'A frontend vector graphic editor created using Angular',
        ['typescript', 'angular', 'svg', 'html5', 'local-storage', 'ci'],
        [
            ['Source', 'https://github.com/blslade-neumont/final-web-app'],
            ['Demo', 'https://blslade-neumont.github.io/final-web-app/']
        ]
    ),
    new Project(
        'HTML5 Game Engine',
        null,
        '2D game engine created for browser environments',
        ['typescript', 'html5', 'game-engine', 'physics', 'ci'],
        [
            ['Source', 'https://github.com/blslade-neumont/agile-html5-engine']
        ]
    ),
    new Project(
        'Artificial Intelligence Playground',
        {
            thumbnails: [
                '/assets/images/ai-playground-0-sm.png',
                '/assets/images/ai-playground-1-sm.png'
            ],
            images: [
                '/assets/images/ai-playground-0-lg.png',
                '/assets/images/ai-playground-1-lg.png'
            ]
        },
        'A tech demo showcasing various AI behaviors in my custom HTML5 engine',
        ['typescript', 'html5', 'ai', 'artificial-intelligence', 'flocking', 'pathfinding', 'a*', 'a-star', 'ci'],
        [
            ['Source', 'https://github.com/blslade-neumont/GAT420'],
            ['Demo', 'https://blslade-neumont.github.io/GAT420/']
        ]
    ),
    new Project(
        'Miter Web Framework',
        null,
        'A backend web framework built on Node.JS and Express, using Typescript',
        ['typescript', 'open-source', 'node', 'express', 'socket-io', 'web-framework', 'decorators', 'server', 'ci'],
        [
            ['Source', 'https://github.com/miter-framework/miter'],
            ['Docs', 'https://gitsupport.io/github/miter-framework/miter']
        ],
        `
### Example Code

\`\`\`typescript
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
\`\`\`
        `
    ),
    new Project(
        'OpenGL Game Engine',
        null,
        'A game engine built from the ground up using C++ and OpenGL',
        ['c++', 'opengl', 'game-engine', 'multithreaded'],
        [
            ['Source', 'https://github.com/aboveyou00/GL-VR-Engine']
        ]
    ),
    new Project(
        'Dungeon Crawler',
        null,
        'Massively-multiplayer, networked, procedurally generated 3D dungeon crawler',
        ['c#', 'opengl', 'game-engine', 'multiplayer', 'multithreaded', 'procedural-generation', '3d', 'game'],
        [
            ['Source', 'https://github.com/aboveyou00/dungeon_crawler']
        ]
    )
];

@Injectable()
export class ProjectService {
    constructor() {
        
    }
    
    async findBySlug(slug: string): Promise<Project | null> {
        let projects = await this.findAll();
        return projects.find(proj => proj.slug === slug) || null;
    }
    findAll(): Promise<Project[]> {
        return Promise.resolve([...allProjects]);
    }
}
