import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Network,
  Cpu,
  Activity,
  CircuitBoard,
  Code,
  Wifi,
  LayoutDashboard,
  Zap,
  LucideIcon
} from 'lucide-react';
import { fetchData, ExpertiseData } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  Network,
  Cpu,
  Activity,
  CircuitBoard,
  Code,
  Wifi,
  LayoutDashboard,
  Zap
};

export function Expertise() {
  const [expertiseData, setExpertiseData] = useState<ExpertiseData | null>(null);

  useEffect(() => {
    fetchData<ExpertiseData>('expertise.json').then(setExpertiseData);
  }, []);

  if (!expertiseData) return null;

  return (
    <section id="expertise" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">
            {expertiseData.subtitle}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            {expertiseData.title}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {expertiseData.description}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseData.areas.map((area, index) => {
            const Icon = iconMap[area.icon] || Zap;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-6 rounded-2xl glass hover:border-primary/50 transition-all cursor-pointer"
                data-testid={`expertise-card-${area.id}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}