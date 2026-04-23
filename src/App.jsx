import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Scissors, Utensils, Stethoscope, ChevronRight, Activity, Clock, Star, Flame } from 'lucide-react';

function App() {
  const [view, setView] = useState('portal');

  const venues = [
    { name: "Green Trends, Patia", img: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAE0shnpAnmm-xuwAM8_BMC45FSECJDo-jTg6gWl0tjv9RSUlovcQA63kolHR3X1B2bS3n2kBzZEQV0Kf5Dbep-cwUaEvNx1QT3DSCTQfDn2IeJr8Hg_z94WBPrTARrTCn644vJJAw=s3072-v1" },
    { name: "Naturals Salon, Patia", img: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFWjh4bieQXWMawp2C4ZQfJA8JC64VAL4ekeUPaQ0kRC9eygCTj7U0SpO5Ul7KPsQBP6Oc2W1n0Ne5_UeUTxEyiWyYFUkCgaIy-4jG7Lg2kn2E470sFEr5xtFmxKt3xAUaFwion=s2000" },
    { name: "Jawed Habib, Janpath", img: "https://lh3.googleusercontent.com/p/CIHM0ogKEICAgID26_OxpwE=s1600-w1600" },
    { name: "Looks Salon, Jaydev Vihar", img: "https://lh3.googleusercontent.com/p/CIHM0ogKEICAgICstu-H_wE=s1600-w1600" },
    { name: "Lakme Salon, Saheed Nagar", img: "https://lh3.googleusercontent.com/p/AF1QipP4GGSVF74KY--gi2yLV0kXH82UWHP3bESIxi1D=s1600-w1600" },
  ];

  return (
    <div className="main-layout" style={{ position: 'relative', minHeight: '100vh' }}>
      {view === 'portal' && (
        <div className="video-bg-container">
          <video autoPlay loop muted playsInline className="bg-video">
            <source src="/bg-video.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>
      )}
      <AnimatePresence mode="wait">
        {view === 'portal' ? (
          <motion.div 
            key="portal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="portal-wrap"
          >
            <header className="portal-header">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="logo-minimal"
                style={{ fontSize: '36px', marginBottom: '16px' }}
              >
                Book<span>ixo</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="heading-refined"
              >
                Seamless Access to Local Luxury.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Select your intended destination to begin your reservation experience.
              </motion.p>
            </header>

            <div className="selection-grid">
              {/* Salon Selection */}
              <motion.div 
                className="selection-item"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setView('salon')}
              >
                <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80" className="selection-img" alt="Salons" />
                <div className="selection-content">
                  <h3>Salons & Spas</h3>
                  <p>Curated wellness and beauty treatments from premium local professionals.</p>
                  <div className="selection-btn">Discover Venues</div>
                </div>
              </motion.div>

              {/* Clinic Selection */}
              <motion.div 
                className="selection-item"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" className="selection-img" alt="Clinics" />
                <div className="selection-content">
                  <h3>Healthcare Clinics</h3>
                  <p>Expert medical care and specialist consultations without the wait.</p>
                  <div className="selection-btn">Coming Soon</div>
                </div>
              </motion.div>

              {/* Dining Selection */}
              <motion.div 
                className="selection-item"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80" className="selection-img" alt="Dining" />
                <div className="selection-content">
                  <h3>Premium Dining</h3>
                  <p>Exclusive table reservations at the city's most requested eateries.</p>
                  <div className="selection-btn">Coming Soon</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="salon-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="dark-vertical"
            style={{ position: 'relative' }}
          >
            {/* Salon Video Background */}
            <div className="video-bg-container" style={{ background: '#0c0c0c' }}>
              <video autoPlay loop muted playsInline className="bg-video">
                <source src="/salon-video.mp4" type="video/mp4" />
              </video>
              <div className="video-overlay" style={{ background: 'linear-gradient(180deg, rgba(12,12,12,0.7) 0%, rgba(12,12,12,0.5) 50%, rgba(12,12,12,0.8) 100%)' }}></div>
            </div>
            <nav className="nav-minimal" style={{ position: 'relative', zIndex: 10 }}>
              <div className="logo-minimal" style={{ cursor: 'pointer' }} onClick={() => setView('portal')}>
                Book<span>ixo</span>
              </div>
              <div className="nav-links-p" style={{ display: 'flex', gap: '40px', alignItems: 'center', fontSize: '13px', fontWeight: 600, letterSpacing: '1.5px' }}>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>DISCOVER</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>MEMBERSHIP</a>
                <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.15)' }}></div>
                <a href="#" style={{ color: 'var(--accent-gold)', textDecoration: 'none' }}>FOR BUSINESS</a>
                <button style={{ background: 'white', border: 'none', padding: '10px 24px', borderRadius: '2px', fontWeight: 700, fontSize: '11px', cursor: 'pointer' }}>SIGN IN</button>
              </div>
            </nav>

            <div className="max-w-7xl" style={{ margin: '0 auto', padding: '120px 40px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
              <h1 className="heading-refined" style={{ fontSize: '72px', marginBottom: '24px' }}>
                Book your <span style={{ color: 'var(--accent-gold)' }}>Favorite Salon.</span>
              </h1>
              <p style={{ fontSize: '20px', opacity: 0.6, marginBottom: '60px', maxWidth: '700px', margin: '0 auto 60px' }}>
                Find top-rated stylists, check live wait times, and reserve your spot in seconds.
              </p>

              <div className="search-container-premium">
                <div className="search-field-p">
                  <Search size={20} color="#999" />
                  <input type="text" placeholder="Service (e.g. Haircut)" />
                </div>
                <div className="search-field-p">
                  <MapPin size={20} color="#999" />
                  <input type="text" placeholder="Bhubaneswar" defaultValue="Bhubaneswar" />
                </div>
                <button className="search-button-p">Search</button>
              </div>

              {/* Marquee Tweak */}
              <div style={{ marginTop: '120px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                  <h2 className="heading-refined" style={{ fontSize: '32px' }}>Trending Venues</h2>
                  <a href="#" style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontWeight: 600 }}>VIEW ALL</a>
                </div>
                <div className="marquee-container" style={{ overflow: 'hidden', width: '100%' }}>
                  <div className="marquee-track" style={{ display: 'flex', gap: '30px' }}>
                    {[...venues, ...venues].map((v, i) => (
                      <div key={i} className="selection-item" style={{ height: '300px', width: '450px', flexShrink: 0 }}>
                         <img src={v.img} className="selection-img" />
                         <div className="selection-content" style={{ padding: '30px' }}>
                           <h3 style={{ fontSize: '22px' }}>{v.name}</h3>
                           <div style={{ fontSize: '12px', letterSpacing: '2px', opacity: 0.6 }}>OPEN NOW</div>
                         </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Subtle Feature Grid */}
              <div className="feature-grid-subtle">
                <div className="feat-item-minimal">
                  <Activity className="feat-icon-small" size={32} />
                  <h3>Live Queue Syncing</h3>
                  <p>Watch the exact queue position change in real-time. Never sit in a waiting room again.</p>
                </div>
                <div className="feat-item-minimal">
                  <Clock className="feat-icon-small" size={32} />
                  <h3>Instant Booking</h3>
                  <p>Our seamless reservation engine ensures your slot is secured in under 30 seconds.</p>
                </div>
                <div className="feat-item-minimal">
                  <Star className="feat-icon-small" size={32} />
                  <h3>Verified Excellence</h3>
                  <p>Access deep insights and reviews from thousands of real customers before you book.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
