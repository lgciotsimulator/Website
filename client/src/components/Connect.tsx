import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, MessageCircle, ExternalLink, Mail } from 'lucide-react';
import { fetchData, SiteData } from '@/lib/data';

const socialIcons = {
  linkedin: Linkedin,
  instagram: Instagram,
  whatsapp: MessageCircle
};

export function Connect() {
  const [siteData, setSiteData] = useState<SiteData | null>(null);

  useEffect(() => {
    fetchData<SiteData>('site.json').then(setSiteData);
  }, []);

  if (!siteData) return null;

  const socialLinks = [
    { key: 'linkedin', label: 'LinkedIn', url: siteData.socialLinks.linkedin },
    { key: 'instagram', label: 'Instagram', url: siteData.socialLinks.instagram },
    { key: 'whatsapp', label: 'WhatsApp Channel', url: siteData.socialLinks.whatsapp }
  ];

  return (
    <section id="connect" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Let's Get Connected
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Looking to collaborate on an IoT project, industry solution, or research-based system?
            Connect with LGC through the platforms below.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {socialLinks.map((social, index) => {
              const Icon = socialIcons[social.key as keyof typeof socialIcons];
              return (
                <motion.a
                  key={social.key}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group p-6 rounded-2xl glass hover:border-primary/50 transition-all text-center"
                  data-testid={`connect-${social.key}`}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:glow transition-all">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg">{social.label}</h3>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl glass text-center"
          >
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-display font-bold text-2xl mb-4">
              Collaborate With Us
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              We welcome industry partnerships, project collaborations, and innovative ideas.
              Fill out our form to get started.
            </p>
            <a
              href={siteData.socialLinks.googleForm}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-all glow"
              data-testid="connect-google-form"
            >
              Submit Inquiry
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}