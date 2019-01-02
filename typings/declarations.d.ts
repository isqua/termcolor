export interface ColorScheme extends Map<string,ColorData> {
    ANSI0?:  ColorData,
    ANSI1?:  ColorData,
    ANSI2?:  ColorData,
    ANSI3?:  ColorData,
    ANSI4?:  ColorData,
    ANSI5?:  ColorData,
    ANSI6?:  ColorData,
    ANSI7?:  ColorData,
    ANSI8?:  ColorData,
    ANSI9?:  ColorData,
    ANSI10?: ColorData,
    ANSI11?: ColorData,
    ANSI12?: ColorData,
    ANSI13?: ColorData,
    ANSI14?: ColorData,
    ANSI15?: ColorData,

    BACKGROUND?:    ColorData,
    FOREGROUND?:    ColorData,
    CURSOR?:        ColorData,
    CURSOR_TEXT?:   ColorData,
    SELECTION?:     ColorData,
    SELECTED_TEXT?: ColorData,
    BOLD?:          ColorData
}

export interface ColorData extends Map<string,number> {
    R?: number,
    G?: number,
    B?: number
}

export interface BijectInterface {
    [key: string]: Map<string,string>
}

export interface BijectMap {
    [key: string]: string
}

export interface FileInfo {
    title: string,
    filename: string,
    mimeType: string,
    content: string
}

export interface TemplateTag {
    tag: string,
    classNames?: Array<string>,
    content?: Array<TemplateData>
}

export type TemplateData = TemplateTag|string;

export interface StyleRules {
    [key: string]: string
}

export type StyleDeclaration = [ string, StyleRules ]

export as namespace CS
