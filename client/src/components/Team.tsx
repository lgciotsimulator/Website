import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { fetchData, TeamData } from '@/lib/data';

export function Team() {
  const [teamData, setTeamData] = useState<TeamData | null>(null);

  useEffect(() => {
    fetchData<TeamData>('team.json').then(setTeamData);
  }, []);

  if (!teamData) return null;

  return (
    <section id="team" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">
            {teamData.subtitle}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            {teamData.title}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {teamData.description}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center"
              data-testid={`team-member-${member.id}`}
            >
              <div className="relative mx-auto w-40 h-40 rounded-2xl overflow-hidden mb-6 glass group-hover:glow transition-all">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                    <User className="w-16 h-16 text-muted-foreground" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="font-display font-semibold text-xl">{member.name}</h3>
              <p className="text-primary text-sm font-medium mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}