import { Pipe, PipeTransform } from '@angular/core';
import MarkdownIt = require('@aboveyou00/markdown-it');
import hljs = require('highlight.js');
import sanitizeHtml = require('sanitize-html');
import merge = require('lodash.merge');
import { Router } from "@angular/router/src";

let cache = new Map<string, string>();

function extractLocalHref(href?: string): string | null {
    if (!href) return null;
    if (href.startsWith('#')) {
        let fullHref = document.location.href;
        let hashIdx = fullHref.indexOf('#');
        if (hashIdx !== -1) fullHref = fullHref.substr(0, hashIdx);
        href = fullHref + href;
    }
    if (href.startsWith(document.location.origin)) {
        return href.substr(document.location.origin.length) || '/';
    }
    else if (href.match(/^\/[^\/]/) || href === '/') {
        return href;
    }
    return '';
}

const SANITIZE_OPTIONS = {
    allowedTags: [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'span', 'a', 'ul', 'ol',
        'nl', 'li', 'b', 'i', 'strong', 'em', 'del', 's', 'code', 'hr', 'br', 'div',
        'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre', 'img', 'iframe'
    ],
    allowedAttributes: {
        '*': ['class', 'id', 'name'],
        'a': ['href','onclick','target'],
        'img': ['src', 'alt'],
        'iframe': ['width', 'height', 'src', 'frameborder', 'allowfullscreen']
    },
    transformTags: {
        's': function (tagName: string, attribs: {[key: string]: string}) {
            return {
                tagName: 'del',
                attribs: attribs
            };
        },
        'a': function (tagName: string, attribs: {[key: string]: string}) {
            let href = attribs['href'];
            if (href && href.startsWith('#')) delete attribs['href'];
            delete attribs['onclick'];
            let localHref = extractLocalHref(href);
            if (localHref) {
                attribs['onclick'] = `event.preventDefault(); window.router.navigateByUrl("${encodeURI(localHref)}")`;
            }
            else if (href) {
                attribs['target'] = "_blank";
            }
            return {
                tagName: tagName,
                attribs: attribs
            };
        }
    }
};

@Pipe({
    name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {
    constructor() {
        let highlight: any = (code: string, lang: string) => {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, code, true).value;
                }
                catch (e) {
                    console.error(e);
                }
            }
            return '';
        };
        highlight.class = 'hljs';
        this.markdown = new MarkdownIt({
            html: true,
            linkify: true,
            typographer: true,
            highlight: highlight,
            lineStartPrefix: 'line-start-'
        });
    }
    
    private markdown: any;
    
    transform(value: string, options?: Object) {
        if (!value) return value;
        //TODO: ensure cache stores different versions based on options
        
        options = options || {};
        if (typeof options === 'string' && options === 'inline') {
            options = { inline: true };
        }
        let key = JSON.stringify(options) + JSON.stringify(value);
        if (cache.has(key)) return cache.get(key);
        
        let isInline = false;
        if (typeof (<any>options).inline === 'boolean' && (<any>options).inline) {
            isInline = true;
            delete (<any>options).inline;
        }
        
        let renderFn = isInline ? this.markdown.renderInline : this.markdown.render;
        renderFn = renderFn.bind(this.markdown);
        let result = renderFn(value);
        let sanitizeOpts = <any>merge({}, SANITIZE_OPTIONS);
        if (typeof (<any>options).preview === 'boolean' && (<any>options).preview) {
            sanitizeOpts.transformTags['iframe'] = function (tagName: string, attribs: {[key: string]: string}) {
                return {
                    tagName: 'img',
                    attribs: <{[key: string]: string}> {src: `//placehold.it/${attribs.width || 400}x${attribs.height || 300}?text=Embedded+Content`}
                };
            };
        }
        result = sanitizeHtml(result, sanitizeOpts);
        
        cache.set(key, result);
        return result;
    }
}
