export type Author = {
    id: number;
    username: string;
    description: string;
    image: string;
    aboutme: string;
    socials: AuthorSocials[]
}

export type AuthorSocials = {
    platform: string;
    url: string;
}