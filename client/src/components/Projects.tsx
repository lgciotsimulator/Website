import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, GitFork, Calendar } from 'lucide-react';
import { fetchGitHubRepos, GitHubRepo } from '@/lib/data';
import { formatDistanceToNow } from 'date-fns';

const GITHUB_USERNAME = 'lgciotsimulator';

const languageColors: Record<string, string> = {
  JavaScript: 'bg-yellow-400',
  TypeScript: 'bg-blue-500',
  Python: 'bg-green-500',
  C: 'bg-gray-500',
  'C++': 'bg-pink-500',
  HTML: 'bg-orange-500',
  CSS: 'bg-purple-500',
  default: 'bg-primary'
};

export function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchGitHubRepos(GITHUB_USERNAME)
      .then(setRepos)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">
            Our Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            IoT Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore our open-source IoT and embedded systems projects on GitHub.
          </p>
        </motion.div>

        {loading && (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}

        {error && (
          <div className="text-center p-8 glass rounded-2xl">
            <p className="text-muted-foreground">Unable to load projects. Please try again later.</p>
          </div>
        )}

        {!loading && !error && repos.length === 0 && (
          <div className="text-center p-8 glass rounded-2xl">
            <p className="text-muted-foreground">No projects found.</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group block p-6 rounded-2xl glass hover:border-primary/50 transition-all"
              data-testid={`project-card-${repo.id}`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors line-clamp-1">
                  {repo.name}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2 min-h-[40px]">
                {repo.description || 'No description available'}
              </p>

              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                {repo.language && (
                  <div className="flex items-center gap-1.5">
                    <span className={`w-3 h-3 rounded-full ${languageColors[repo.language] || languageColors.default}`} />
                    <span>{repo.language}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="w-3 h-3" />
                  <span>{repo.forks_count}</span>
                </div>
              </div>

              <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground/70">
                <Calendar className="w-3 h-3" />
                <span>Updated {formatDistanceToNow(new Date(repo.updated_at))} ago</span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl hover:bg-white/10 transition-colors font-medium"
            data-testid="projects-view-all"
          >
            View All on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}