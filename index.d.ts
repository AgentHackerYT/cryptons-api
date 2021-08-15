declare module 'cryptons-api';
export class keyUtils {
    constructor(options : clientoptions)
    public getKey(): Promise<any>
    public checkKey(): Promise<any>;
}
interface clientoptions {
    token: string;
}
export class IMDB{
constructor(options: imdbOptions)
}
interface imdbOptions {
    key: string;
    movie: string;
    message: string;
}
export class client {
    constructor(options: ClientOptions) 
        public tokencheck(): Promise<any>
        public stats(): Promise<any>
        public meme(): Promise<any>
        public discorduser(): Promise<any>
        public insult(): Promise<any>
        public nameservers(): Promise<any>
        public userbanner(): Promise<any>
        public covid(): Promise<any>
        public covidworld(): Promise<any>
}
interface ClientOptions {
    token : string;
}
export class covid {
    constructor(options: covidOptions)
}
export function insult()
export function nameservers()
export function script()
interface covidOptions{
    country: string;
    message: string;
    title: string;
    description: string;
    color: string;
    footer: string;
    addFieldOption: string;
}
export class LogoGame {
    constructor(options: LogoGameOptions)
    public start(): Promise<any>
}
export class MS {
    constructor(options: MSOptions)
    public output(): Promise<any>
}
interface MSOptions {
size: number | string;
bomb: number | string;
}
/*export class clyde{
    constructor(options: clydeOptions)
}
interface clydeOptions {
    text: string;
}*/
export async function randomusername()
interface LogoGameOptions {
    message: string;
    token: string;
}
/*export class ButtonPage {
    constructor(options: btnpageOptions)
    public init(): Promise<any>
}
interface btnpageOptions {
    message: string;
    pages: string;
    emoji1: string;
    emoji2: string;
    timeout: string;
    color: string;
    client: string;
}*/
