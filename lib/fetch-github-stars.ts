"use server";

export async function fetchGithubStars() {
  const response = await fetch(
    "https://api.github.com/SkidGod4444/middle-ai",
    {
      next: {
        revalidate: 3600,
      },
    },
  );

  return response.json();
}
