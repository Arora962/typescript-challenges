type Profile = {
  username: string;
  bio: string | null;
  avatarUrl?: string;
};

const profile1: Profile = {
  username: "user123",
  bio: null
};

const profile2: Profile = {
  username: "user456",
  bio: "Frontend developer and designer.",
  avatarUrl: "https://avatars.githubusercontent.com/u/195315638?v=4"
};

function showProfile(profile: Profile): void {
  const bioText = profile.bio ?? "No bio available.";
  const avatar = profile.avatarUrl ?? "https://avatars.githubusercontent.com/u/157892517?v=4";

  console.log(`Username: ${profile.username}`);
  console.log(`Bio: ${bioText}`);
  console.log(`Avatar: ${avatar}`);
  console.log("-----------");
}

showProfile(profile1);
showProfile(profile2);
