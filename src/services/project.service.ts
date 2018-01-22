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
        ['typescript', 'angular', 'express', 'node', 'webpack', 'github-api', 'socket-io', 'web-sockets', 'sass', 'production'],
        [
            ['Demo', 'https://docsource.io/']
        ]
    ),
    new Project(
        'Collide (game)',
        null,
        'Spacial puzzle block-slider game',
        ['typescript', 'game-engine', 'html5', 'webpack', 'steam-api', 'production', 'opengl', 'game', 'nw.js', 'greenworks', 'svg', 'three.js'],
        []
    ),
    new Project(
        'Worms-Warcraft',
        null,
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
        ['typescript', 'webpack', 'sass', 'nightwatch', 'node'],
        [
            ['Source', 'https://github.com/blslade-neumont/capstone-spa-router']
        ]
    ),
    new Project(
        'Procedural Continent Generator',
        null,
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
        null,
        'A tech demo showcasing rigidbody physics in my custom HTML5 engine',
        ['typescript', 'physics', 'game-engine', 'html5', 'springs'],
        [
            ['Source', 'https://github.com/blslade-neumont/GAT310'],
            ['Demo', 'https://blslade-neumont.github.io/GAT310/']
        ]
    ),
    new Project(
        'Boulder Physics Game',
        null,
        'A small game showcasing rigidbody physics in my custom HTML5 engine',
        ['typescript', 'physics', 'game'],
        [
            ['Source', 'https://github.com/blslade-neumont/physics-game-final'],
            ['Demo', 'https://blslade-neumont.github.io/physics-game-final/']
        ]
    ),
    new Project(
        'Angular Vector Editor',
        null,
        'A frontend vector graphic editor created using Angular',
        ['typescript', 'angular', 'svg', 'html5', 'local-storage'],
        [
            ['Source', 'https://github.com/blslade-neumont/final-web-app'],
            ['Demo', 'https://blslade-neumont.github.io/final-web-app/']
        ]
    ),
    new Project(
        'HTML5 Game Engine',
        null,
        '2D game engine created for browser environments',
        ['typescript', 'html5', 'game-engine', 'physics'],
        [
            ['Source', 'https://github.com/blslade-neumont/agile-html5-engine']
        ]
    ),
    new Project(
        'Artificial Intelligence Playground',
        null,
        'A tech demo showcasing various AI behaviors in my custom HTML5 engine',
        ['typescript', 'html5', 'ai', 'artificial-intelligence', 'flocking', 'pathfinding', 'a*', 'a-star'],
        [
            ['Source', 'https://github.com/blslade-neumont/GAT420'],
            ['Demo', 'https://blslade-neumont.github.io/GAT420/']
        ]
    ),
    new Project(
        'Miter Web Framework',
        null,
        'A backend web framework built on Node.JS and Express, using Typescript',
        ['typescript', 'open-source', 'node', 'express', 'socket-io', 'web-framework', 'decorators', 'server'],
        [
            ['Source', 'https://github.com/miter-framework/miter'],
            ['Demo', 'https://gitsupport.io/github/miter-framework/miter']
        ]
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
