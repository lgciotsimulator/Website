import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Zap } from 'lucide-react';
import { fetchData, HeroData } from '@/lib/data';
import heroBackground from '@assets/generated_images/iot_network_hero_background.png';

export function Hero() {
  const [heroData, setHeroData] = useState<HeroData | null>(null);

  useEffect(() => {
    fetchData<HeroData>('hero.json').then(setHeroData);
  }, []);

  if (!heroData) {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </section>
    );
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      <div className="absolute inset-0 bg-gradient-radial z-0" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              {heroData.taglines.join(' • ')}
            </span>
          </motion.div>

          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
            <span className="text-gradient glow-text">{heroData.headline}</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-display text-2xl md:text-3xl text-muted-foreground"
          >
            {heroData.subheadline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground/80"
          >
            {heroData.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href={heroData.ctaLink}
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-all glow"
              data-testid="hero-cta-primary"
            >
              {heroData.ctaText}
            </a>
            <a
              href={heroData.secondaryCtaLink}
              className="px-8 py-4 glass font-semibold rounded-xl hover:bg-white/10 transition-all"
              data-testid="hero-cta-secondary"
            >
              {heroData.secondaryCtaText}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}