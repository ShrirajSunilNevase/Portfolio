export async function getGitHubData() {
  const username = 'ShrirajSunilNevase';
  const headers: HeadersInit = { Accept: 'application/vnd.github+json' };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const [profileRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${username}`, { headers, next: { revalidate: 3600 } }),
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, { headers, next: { revalidate: 3600 } }),
  ]);
  if (!profileRes.ok || !reposRes.ok) throw new Error('GitHub API unavailable');
  const profile = await profileRes.json();
  const repos = await reposRes.json();
  return { profile, repos };
}
