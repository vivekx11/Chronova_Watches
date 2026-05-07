// lib are been import 

import { ShoppingBag, User, ArrowRight, Share2, Globe, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const NAV_ITEMS = ['Collections', 'Heritage', 'Concierge', 'Journal'];
const CATEGORIES = ['SMART', 'LUXURY', 'SPORTS', 'VINTAGE', 'MINIMAL', "WOMEN'S"];
const PARTNERS = ['GENEVE', 'HORA', 'STELLAR', 'OBSIDIAN', 'VALEUR'];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-surface selection:bg-tertiary selection:text-surface overflow-x-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl transition-all duration-500 rounded-full px-8 py-3 border border-outline-variant/20 flex items-center justify-between
          ${isScrolled ? 'bg-surface/80 backdrop-blur-xl shadow-2xl py-4' : 'bg-transparent'}`}
      >
        <div className="flex items-center gap-12 text-sm font-display tracking-widest">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU1xbpgJd-yAcVrgzImOHhTOqH6ZaKcZtD32r4XOB4FzZWSW9KrOGzCMRCaBow649Dd2iy5Wa5uDViSGBZuPQ2JbCaa4prs48wziKwLXf2DNBC0EpzPnCPsYySmzBV4PkewbTFiE9owWQiFF281BzwkBZVaMqUEmXxFqeIw0FBOBqJrUqYxz8rGQLAJfj1kHy9wCTJFVJ675uvSG4zmMSoOaBH9BZQROotNfhhjULbGFo5OUp1OUO-LHEH9EjSgHNz_PihXSIqRI_9" 
              alt="CHRONOVA" 
              className="h-10 invert brightness-200"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative text-on-surface-variant hover:text-tertiary transition-colors ${i === 0 ? 'text-tertiary font-semibold' : ''}`}
              >
                {item}
                {i === 0 && (
                  <motion.div 
                    layoutId="underline" 
                    className="absolute -bottom-1 left-0 w-full h-px bg-tertiary"
                  />
                )}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-on-surface-variant hover:text-tertiary transition-colors"
          >
            <ShoppingBag size={22} />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-on-surface-variant hover:text-tertiary transition-colors"
          >
            <User size={22} />
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen hero-gradient flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-display text-xs text-tertiary tracking-widest block mb-4 uppercase">Established 1894</span>
            <h1 className="font-serif text-6xl md:text-8xl leading-[0.9] text-on-surface mb-8 tracking-tighter">
              ENGINEERED<br />FOR ETERNITY
            </h1>
            <p className="font-sans text-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
              Witness the convergence of Swiss horological mastery and futuristic precision. Each Chronova timepiece is a testament to the pursuit of mechanical perfection.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-tertiary text-surface px-10 py-4 rounded-full font-display text-xs font-bold tracking-widest hover:brightness-110 transition-all shadow-[0_0_20px_rgba(233,195,73,0.3)]"
              >
                SHOP NOW
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card text-on-surface px-10 py-4 rounded-full font-display text-xs font-bold tracking-widest hover:bg-white/10 transition-all"
              >
                EXPLORE COLLECTION
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative group"
          >
            <div className="absolute -inset-10 bg-tertiary/20 blur-[120px] rounded-full group-hover:bg-tertiary/30 transition-all duration-1000 animate-pulse" />
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_kVwH3vFkVxmFSUnhP8lAvjYY6RmDtW3JxIbE-vus7Qt8g8wC3CRl-R9leHKw0KGjvL32LNH8sYYlx7rxB6zoCvpVOSqXE3OM1nQEkBAG0aqXY6kbR_y9TMIrkqLrBszc24uyPyA31NUZ4SgwDqQ5uaPogV2id39oPeIVYbyRuY1yVrRIomQOsBlMaxzLJ8zU1jOrOhGSemiYGYpTde43fFWLAa61nrOPm4is9f47FRfzWANnhj8RYsW_Al0i8g7aVPtPqlNEoeCY" 
              alt="Skeleton Watch" 
              className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 animate-float"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="font-display text-[10px] text-on-surface-variant/40 tracking-[0.3em] uppercase">Scroll</span>
          <motion.div 
            animate={{ height: [0, 48, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px bg-tertiary"
          />
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="font-display text-xs text-tertiary tracking-widest block mb-2 uppercase">Curated Series</span>
            <h2 className="font-serif text-5xl text-on-surface lowercase italic">Trending Masterpieces</h2>
          </div>
          <motion.a 
            href="#" 
            className="group flex items-center gap-2 font-display text-[10px] tracking-widest text-on-surface-variant hover:text-tertiary transition-colors uppercase"
          >
            View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 group relative h-[600px] overflow-hidden rounded-3xl glass-card flex items-end p-12"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8iA-BKPwUJ8KxM5qPR0dT5OdbPysv_-NZXSeOukmRcTeHPBBnOTZv5pS7Bnlqh6mFx3u4D50xFGGoUA6af7DWZIlVEx6VAR-x9ZG-Zki4vTxBm92Vzb-7lL4HipR0KqSfbWGv56gMLU4D78Yg0bJ8g-CpZgL-ASniltey9Qfp-UTRvwpqHg69u5gfIQmh1MwFGYGDa2mrZUC_2rcNK5dHXOsFiii7hSvExtA_OPNyKfHhRGU48xHDN5lD43P0kBkpa3_QfvOwAKLO" 
              alt="Obsidian"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent p-12" />
            <div className="relative z-10 w-full">
              <h3 className="font-serif text-4xl text-on-surface mb-3 tracking-tight">The Obsidian Horizon</h3>
              <p className="text-on-surface-variant mb-6 max-w-sm leading-relaxed">
                A study in minimalism and depth, featuring a liquid-black sapphire dial and aerospace-grade steel.
              </p>
              <button className="text-tertiary font-display text-xs tracking-widest border-b border-tertiary/20 hover:border-tertiary transition-all pb-1 uppercase font-bold">
                Discover Piece
              </button>
            </div>
          </motion.div>

          {/* Side Cards */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 glass-card p-10 rounded-3xl border-outline-variant/10 hover:border-tertiary/40 transition-all group"
            >
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC35fbijDF7ivGSfxNca8uawQMXD89H0wNpgaNTlD7lyn5HvNJvMNYCQCffiny1JtLVYMv40AWC_pyXr7g3rjRDlmAWdXs-Ja_7U2PowLRHDMY3ykLKL66VXjA93L5RqXCogBjaGip1NnJkFdrgP1t7O5reiD7WDOSrkoOpFYfyaVmlIIre59UH1soVqZYv9fpVPZTzJpZ7SP1HS2Zrfgb0rhIekX5maduXdLLR4FqB1C3BvSnvq-i7e71D06_5dqZYwCjU-YQBcMWO" 
                alt="Ivory Heritage"
                className="w-full h-48 object-contain mb-8 group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <span className="font-display text-[10px] text-tertiary tracking-widest uppercase">Series II</span>
              <h4 className="font-serif text-2xl text-on-surface mt-2 mb-1">Ivory Heritage</h4>
              <p className="text-on-surface-variant/60 font-display text-xs tracking-widest">$12,400 USD</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1 glass-card p-10 rounded-3xl border-outline-variant/10 hover:border-tertiary/40 transition-all group"
            >
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLhKmnZ2_V-_ArNVtV7-msMZE3RkwjbCevYMwzPZJVQl1yzUdARhuYA0fyi50U8aAfuHHPo1_NvqOsa8bfhrXwE4eUgjXXvY455HDZTmI-fFTP5iZPhhGoXW3EDBSSsFu0jxasxefUyr6ElUBJu66dAfQXofIMyOCi8geVd1lMacSS8tjfIQgZQldewqKDfiS_8IFByP3V32UjE6BDfbqQIpWznaFNDX7iSoMLsyT6vP3VjA7xJzQ2h8Ve0pkPgHrImMTPaWbhNHKQ" 
                alt="Chronos Gold"
                className="w-full h-48 object-contain mb-8 group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <span className="font-display text-[10px] text-tertiary tracking-widest uppercase">Reserve</span>
              <h4 className="font-serif text-2xl text-on-surface mt-2 mb-1">Chronos Gold</h4>
              <p className="text-on-surface-variant/60 font-display text-xs tracking-widest">$28,900 USD</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Chips */}
      <section className="py-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex gap-4 justify-between min-w-max md:min-w-0">
            {CATEGORIES.map((cat, i) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.02 }}
                className={`px-12 py-5 rounded-full font-display text-[10px] tracking-[0.3em] transition-all border
                  ${i === 0 
                    ? 'border-tertiary bg-tertiary/5 text-tertiary font-bold' 
                    : 'border-outline-variant/20 text-on-surface-variant hover:border-tertiary hover:text-tertiary'}`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {PARTNERS.map(brand => (
              <span key={brand} className="font-serif text-4xl tracking-widest select-none underline-offset-8 decoration-tertiary/20 underline">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card rounded-[3rem] p-16 md:p-24 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tertiary/5 blur-[150px] rounded-full -mr-32 -mt-32 transition-all group-hover:bg-tertiary/10" />
          
          <div className="max-w-2xl relative z-10">
            <span className="font-display text-[10px] text-tertiary tracking-[0.3em] block mb-6 uppercase">The Inner Circle</span>
            <h2 className="font-serif text-5xl md:text-7xl text-on-surface mb-8 leading-tight lowercase italic">Join the Chronova Journal</h2>
            <p className="text-lg text-on-surface-variant mb-12 leading-relaxed">
              Receive early access to limited edition drops, invitations to private horology workshops, and stories from the heritage archives.
            </p>
            
            <form className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="ENTER YOUR EMAIL"
                className="flex-1 bg-white/[0.05] border border-outline-variant/30 rounded-full px-10 py-5 focus:ring-1 focus:ring-tertiary outline-none text-on-surface font-display text-xs tracking-widest placeholder:text-on-surface-variant/30"
              />
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-on-surface text-surface px-12 py-5 rounded-full font-display text-xs font-bold tracking-widest transition-colors hover:bg-tertiary uppercase"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Testimonial */}
      <section className="py-32 max-w-4xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <span className="font-display text-[10px] text-tertiary tracking-[0.4em] block mb-8 uppercase">Voices of Excellence</span>
          <p className="font-serif text-3xl md:text-5xl text-on-surface italic leading-snug mb-16 underline decoration-tertiary/10 underline-offset-8">
            "Chronova represents more than just a watch; it's a piece of engineering history worn on the wrist. The attention to detail is unparalleled in the modern era."
          </p>
          
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-tertiary/20 blur-xl rounded-full" />
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-tertiary/50 p-1">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ3WFmMJmOtY957M1LvwNxbO2GTzp-3EhzwPS4jLq3MVN2TemuQdK5QYax-ofq7R_M0IQbT1Cq84BRVlBO5wHWOc6AG073TVBq60APCVNisI7j7MgKxXfGqVIZwKGYbd-3XRzrUPXNPgYKDt7Am25betOzuiL8lm05k8XZVjKh67T7I_68RNPQcsqb1dqeg440yE2Kyf4FbPyxmSLqIV4NSHHhNFeam4B7W8WddCni26d-p9UwGNuvdD9ImVH8Q5xfPyMm_Ey37YmE" 
                  alt="Reviewer"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <h5 className="font-display text-xs font-bold tracking-widest text-on-surface uppercase mb-1">Alexander Vaughn</h5>
            <p className="font-display text-[10px] text-tertiary tracking-[0.2em] font-medium uppercase italic opacity-60">Collector & Horologist</p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-outline-variant/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-12 text-center">
          <div className="flex flex-col items-center gap-8">
            <span className="font-serif text-4xl tracking-tighter text-on-surface">CHRONOVA</span>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {['Boutiques', 'Warranty', 'Authenticity', 'Journal', 'Privacy'].map(link => (
                <a key={link} href="#" className="font-display text-[10px] tracking-widest text-on-surface-variant hover:text-tertiary transition-colors uppercase whitespace-nowrap italic">{link}</a>
              ))}
            </div>
          </div>

          <div className="flex gap-8">
            {[Share2, Globe, Mail].map((Icon, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.2, color: '#e9c349' }}
                className="text-on-surface-variant/40"
              >
                <Icon size={20} />
              </motion.button>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="font-display text-[10px] tracking-[0.3em] text-on-surface-variant/30 uppercase italic">© 2026 Chronova Horology. Swiss Engineered.</p>
            <div className="w-12 h-px bg-tertiary/20" />
          </div>
        </div>
      </footer>
    </div>
  );
}
