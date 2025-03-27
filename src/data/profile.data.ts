interface SocialItem {
  name: string;
  url: string;
}

interface Profile {
  name: string;
  avatar: string;
  bio: string;
  socials: SocialItem[];
}

export const profileData: Profile = {
  name: "Hemant Baviskar",
  avatar: "/avatar.png",
  bio: "Explorer",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/hemantyb"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hemantyb"
    },
  ]
};