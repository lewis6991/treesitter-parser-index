import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

function git(args) {
  try {
    return execFileSync('git', args, { encoding: 'utf8' }).trim();
  } catch {
    return '';
  }
}

function normalizeRepositoryUrl(remoteUrl) {
  if (!remoteUrl) {
    return null;
  }

  const httpsMatch = remoteUrl.match(/^https:\/\/github\.com\/(.+?)(?:\.git)?$/);

  if (httpsMatch) {
    return `https://github.com/${httpsMatch[1]}`;
  }

  const sshMatch = remoteUrl.match(/^git@github\.com:(.+?)(?:\.git)?$/);

  if (sshMatch) {
    return `https://github.com/${sshMatch[1]}`;
  }

  return null;
}

const outputPath = resolve(process.argv[2] ?? 'site/dist/build-meta.json');
const commit = git(['rev-parse', 'HEAD']);
const shortCommit = git(['rev-parse', '--short', 'HEAD']) || 'unknown';
// Use commit count as the public site revision because it climbs monotonically on main.
// This means CI needs the full git history rather than a shallow checkout.
const revision = git(['rev-list', '--count', 'HEAD']);
const repositoryUrl = normalizeRepositoryUrl(git(['config', '--get', 'remote.origin.url']));

const buildMeta = {
  revision: revision ? Number(revision) : null,
  shortCommit,
  label: revision ? `r${revision} · ${shortCommit}` : shortCommit,
  commitUrl: repositoryUrl && commit ? `${repositoryUrl}/commit/${commit}` : null,
};

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(buildMeta, null, 2)}\n`);
