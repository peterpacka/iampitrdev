export interface SocialLink {
  name: string;
  img: string;
  link: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "github",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    link: "https://github.com/peterpacka",
  },
  {
    name: "discord profile",
    img: "/static/socials/discord.svg",
    link: "https://discord.com/users/1022154396794097706",
  },
  {
    name: "pitr@iampitr.dev",
    img: "/static/socials/mail.svg",
    link: "mailto:pitr@iampitr.dev",
  },
];
