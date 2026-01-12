import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Star, Milestone } from 'lucide-react';
import { fetchData, AchievementsData } from '@/lib/data';

const typeIcons = {
  achievement: Trophy,
  event: Calendar,
  milestone: Milestone
};

const typeColors = {
  achievement: 'text-yellow-500 bg-yellow-500/10',
  event: 'text-blue-500 bg-blue-500/10',
  milestone: 'text-purple-500 bg-purple-500/10'
};

export function Achievements() {
  const [achievementsData, setAchievementsData] = useState<AchievementsData | null>(null);

  useEffect(() => {
    fetchData<AchievementsData>('achievements.json').then(setAchievementsData);
  }, []);

  if (!achievementsData) return null;

  return (
    <section id="achievements" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">
            {achievementsData.subtitle}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            {achievementsData.title}
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-transparent hidden lg:block" />

          <div className="space-y-12">
            {achievementsData.items.map((item, index) => {
              const Icon = typeIcons[item.type as keyof typeof typeIcons] || Star;
              const colorClass = typeColors[item.type as keyof typeof typeColors] || 'text-primary bg-primary/10';

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative lg:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'
                  }`}
                  data-testid={`achievement-${item.id}`}
                >
                  <div className="p-6 rounded-2xl glass hover:border-primary/30 transition-all">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${colorClass}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-mono text-muted-foreground">{item.date}</span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground capitalize">
                            {item.type}
                          </span>
                        </div>
                        <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/2 -translate-y-1/2 hidden lg:block">
                    <div
                      className={`w-4 h-4 rounded-full bg-primary glow ${
                        index % 2 === 0 ? '-right-[2.5rem]' : '-left-[2.5rem]'
                      } absolute`}
                      style={{ [index % 2 === 0 ? 'right' : 'left']: '-2.5rem' }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}