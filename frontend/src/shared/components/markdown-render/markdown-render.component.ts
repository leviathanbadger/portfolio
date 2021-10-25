import { Component, Input } from '@angular/core';

/*

BlockElem := Paragraph
           | Header
           | BlockQuote

LineEnd := '\r' | '\n' | '\r\n'
BlankLines := BlankLine [BlankLines]
BlankLine := [(any whitespace character that don't match LineEnd)] LineEnd
           | [(any whitespace characters that don't match LineEnd)] EOF

Header := AtxHeader
        | SetextHeader

AtxHeader := AtxHeaderLevel ' ' SingleLineBlockTextFormat [' ' AtxEndHeader] LineEnd BlankLines
AtxEndHeader := '#' [AtxEndHeader]
AtxHeaderLevel := '#' ['#' ['#' ['#' ['#' ['#']]]]]

SetextHeader := SingleLineBlockTextFormat LineEnd SetextHeaderLevel LineEnd BlankLines
SetextHeaderLevel := '===' (0 or more of '=')
                   | '---' (0 or more of '-')

SingleLineBlockTextFormat := (one or more characters not matching LineEnd, but not entirely whitespace)

BlockQuote := '>' ' ' SingleLineBlockTextFormat LineEnd [BlockQuoteSubsequentLines] BlankLines
BlockQuoteSubsequentLines := BlockQuoteSubsequentLine [BlockQuoteSubsequentLines]
BlockQuoteSubsequentLine := ['>' ' '] SingleLineBlockTextFormat LineEnd

Paragraph := SingleLineBlockTextFormat LineEnd

*/

@Component({
  selector: 'bls-markdown-render[src]',
  templateUrl: './markdown-render.component.html',
  styleUrls: ['./markdown-render.component.scss']
})
export class MarkdownRenderComponent {
  @Input()
  src!: string;


}
