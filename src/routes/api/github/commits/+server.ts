import { PRIVATE_GITHUB_USERNAME, PRIVATE_GITHUB_TOKEN } from "$env/static/private";
import { json } from "@sveltejs/kit";

const headers = {
    Authorization: `token ${PRIVATE_GITHUB_TOKEN}`,
    "User-Agent": PRIVATE_GITHUB_USERNAME,
};

async function getRepos() {
    const response = await fetch(`https://api.github.com/users/${PRIVATE_GITHUB_USERNAME}/repos?per_page=100`, {
        headers,
    });

    if (!response.ok) {
        return [];
    }

    return response.json();
}

async function getCommitsSince(repoName: string, sinceISO: string) {
    const response = await fetch(
        `https://api.github.com/repos/${PRIVATE_GITHUB_USERNAME}/${repoName}/commits?since=${sinceISO}&per_page=100`,
        { headers },
    );

    if (!response.ok) {
        return [];
    }

    const commits = await response.json();
    return Array.isArray(commits) ? commits : [];
}

export const GET = async () => {
    const since = new Date();
    since.setFullYear(since.getFullYear() - 1);
    const sinceISO = since.toISOString();

    const commitsPerDay: Record<string, number> = {};
    const repos = await getRepos();

    for (const repo of repos) {
        const commits = await getCommitsSince(repo.name, sinceISO);
        for (const commit of commits) {
            const date = commit.commit.author.date.slice(0, 10); // YYYY-MM-DD
            commitsPerDay[date] = (commitsPerDay[date] || 0) + 1;
        }
    }

    return json(commitsPerDay);
};
