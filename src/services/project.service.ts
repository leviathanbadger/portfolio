import { Injectable } from '@angular/core';
import { Project } from 'models';

const allProjects: Project[] = [
    new Project(
        'GitSupport.io',
        null,
        'Github-integrated developer documentation tool',
        [
            ['Demo', 'https://gitsupport.io/']
        ]
    ),
    new Project(
        'Worms-Warcraft',
        null,
        'Warcraft-themed realtime networked Worms clone',
        [
            ['Source', 'https://github.com/blslade-neumont/worms-warcraft']
        ]
    ),
    new Project(
        'Asynchronous SPA Router',
        null,
        'Promise-based asynchronous SPA router and dependency loader',
        [
            ['Source', 'https://github.com/blslade-neumont/capstone-spa-router']
        ]
    ),
    new Project(
        'Procedural Continent Generator',
        null,
        'Procedural content generation tech demo',
        [
            ['Source', 'https://github.com/blslade-neumont/procedural-continent-generator'],
            ['Demo', 'https://blslade-neumont.github.io/procedural-continent-generator/']
        ]
    ),
    new Project(
        'Minecraft Music Mod',
        null,
        'A Minecraft mod that adds a rythm-based guitar sword that does more damage on the beat',
        [
            ['Source', 'https://github.com/blslade-neumont/music-mod']
        ]
    ),
    new Project(
        'Game Engine Physics',
        null,
        'A tech demo showcasing rigidbody physics in my custom HTML5 engine',
        [
            ['Source', 'https://github.com/blslade-neumont/GAT310'],
            ['Demo', 'https://blslade-neumont.github.io/GAT310/']
        ]
    ),
    new Project(
        'Boulder Physics Game',
        null,
        'A small game showcasing rigidbody physics in my custom HTML5 engine',
        [
            ['Source', 'https://github.com/blslade-neumont/physics-game-final'],
            ['Demo', 'https://blslade-neumont.github.io/physics-game-final/']
        ]
    ),
    new Project(
        'Angular Vector Editor',
        null,
        'A frontend vector graphic editor created using Angular',
        [
            ['Source', 'https://github.com/blslade-neumont/final-web-app'],
            ['Demo', 'https://blslade-neumont.github.io/final-web-app/']
        ]
    ),
    new Project(
        'HTML5 Game Engine',
        null,
        '2D game engine created for browser environments',
        [
            ['Source', 'https://github.com/blslade-neumont/agile-html5-engine']
        ]
    ),
    new Project(
        'Artificial Intelligence Playground',
        null,
        'A tech demo showcasing various AI behaviors in my custom HTML5 engine',
        [
            ['Source', 'https://github.com/blslade-neumont/GAT420'],
            ['Demo', 'https://blslade-neumont.github.io/GAT420/']
        ]
    ),
    new Project(
        'Miter Web Framework',
        null,
        'A backend web framework built on Node.JS and Express, using Typescript',
        [
            ['Source', 'https://github.com/miter-framework/miter'],
            ['Demo', 'https://gitsupport.io/github/miter-framework/miter']
        ]
    ),
    new Project(
        'OpenGL Game Engine',
        null,
        'A game engine built from the ground up using C++ and OpenGL',
        [
            ['Source', 'https://github.com/aboveyou00/GL-VR-Engine']
        ]
    ),
    new Project(
        'Dungeon Crawler',
        null,
        'Massively-multiplayer, networked, procedurally generated 3D dungeon crawler',
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
        console.log(`Finding project with slug "${slug}"`);
        let projects = await this.findAll();
        return projects.find(proj => proj.slug === slug) || null;
    }
    findAll(): Promise<Project[]> {
        return Promise.resolve([...allProjects]);
    }
}
