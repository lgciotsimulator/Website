import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchData, SiteData } from '@/lib/data';
import logoImage from '@assets/generated_images/lgc_abstract_logo_design.png';

export function Footer() {
  const [siteData, setSiteData] = useState<SiteData | null>(null);

  useEffect(() => {
    fetchData<SiteData>('site.json').then(setSiteData);
  }, []);

  if (!siteData) return null;

  return (
    <footer className="py-16 border-t border-border/50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-4">
            <img src={logoImage} alt="LGC Logo" className="w-12 h-12 rounded-lg" />
            <div>
              <h3 className="font-display font-bold text-xl text-gradient">
                {siteData.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {siteData.fullName}
              </p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground mb-2">
              IoT • Hardware–Software Integration • Industry Collaboration
            </p>
            <p className="text-xs text-muted-foreground/70">
              {siteData.copyright}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}