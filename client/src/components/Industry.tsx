import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, CheckCircle2 } from 'lucide-react';
import { fetchData, IndustryData } from '@/lib/data';
import textureImage from '@assets/generated_images/tech_circuit_texture_pattern.png';

export function Industry() {
  const [industryData, setIndustryData] = useState<IndustryData | null>(null);

  useEffect(() => {
    fetchData<IndustryData>('industry.json').then(setIndustryData);
  }, []);

  if (!industryData) return null;

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src={textureImage} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">
            {industryData.subtitle}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            {industryData.title}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {industryData.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {industryData.companies.map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl glass hover:border-primary/30 transition-all group"
                data-testid={`company-${company.id}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">{company.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{company.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl glass"
          >
            <h3 className="font-display font-bold text-2xl mb-6">Key Learnings</h3>
            <ul className="space-y-4">
              {industryData.learnings.map((learning, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-muted-foreground">{learning}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}