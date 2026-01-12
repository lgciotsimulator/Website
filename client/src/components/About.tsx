import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { fetchData, AboutData } from '@/lib/data';
import hardwareImage from '@assets/generated_images/iot_hardware_development_scene.png';

export function About() {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);

  useEffect(() => {
    fetchData<AboutData>('about.json').then(setAboutData);
  }, []);

  if (!aboutData) return null;

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary font-mono text-sm tracking-widest uppercase">
                {aboutData.subtitle}
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
                {aboutData.title}
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {aboutData.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {aboutData.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl glass"
                >
                  <h3 className="font-semibold text-foreground">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glow">
              <img
                src={hardwareImage}
                alt="IoT Hardware Development"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -left-8 p-6 rounded-xl glass max-w-xs"
            >
              <h4 className="font-display font-bold text-lg mb-3">
                {aboutData.differentiator.title}
              </h4>
              <ul className="space-y-2">
                {aboutData.differentiator.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}