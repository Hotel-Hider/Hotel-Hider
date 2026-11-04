import React, { useEffect, useRef, useState } from 'react';
import logoWhite from '../assets/Hotel Hider Logos/Icon Only - WHITE.svg';
import heroRoomImage from '../assets/Hotel Hider Images/Deluxe Room(3).jpeg';
import standardRoomImage from '../assets/Hotel Hider Images/Standard Room(1).jpeg';
import deluxeRoomImage from '../assets/Hotel Hider Images/Deluxe Room(4).jpeg';
import familyRoomImage from '../assets/Hotel Hider Images/Family Room.jpeg';
import restaurantImage from '../assets/Hotel Hider Images/Restaurant view.jpeg';
import deluxeBathroomImage from '../assets/Hotel Hider Images/Deluxe Room Bathroom.jpeg';
import roomDetailImage from '../assets/Hotel Hider Images/Standard Room(3).jpeg';
import loungeImage from '../assets/Hotel Hider Images/Lounge Area (1).jpeg';
import hallwayImage from '../assets/Hotel Hider Images/Hallway (1).jpeg';
import buildingImage from '../assets/Hotel Hider Images/Hotel Hider Building View.jpeg';

const imageAssets = {
  'Deluxe Room(3).jpeg': heroRoomImage,
  'Standard Room(1).jpeg': standardRoomImage,
  'Deluxe Room(4).jpeg': deluxeRoomImage,
  'Family Room.jpeg': familyRoomImage,
  'Restaurant view.jpeg': restaurantImage,
  'Deluxe Room Bathroom.jpeg': deluxeBathroomImage,
  'Standard Room(3).jpeg': roomDetailImage,
  'Lounge Area (1).jpeg': loungeImage,
  'Hallway (1).jpeg': hallwayImage,
  'Hotel Hider Building View.jpeg': buildingImage,
};
const asset = (name) => imageAssets[name];
const hotelWhatsApp = '919289416060';
const hotelPhoneLabel = '+91 92894 16060';

const rooms = [
  {
    id: 'standard',
    number: '01',
    name: 'Standard Room',
    rate: '₹2,500',
    size: '20 m²',
    bed: '1 Twin Bed',
    image: 'Standard Room(1).jpeg',
    alt: 'A bright Hotel Hider standard room with a neatly made bed',
    summary: 'A comfortable, considered room with everything you need to settle in.',
    features: ['Twin bed', 'Free Wi-Fi', 'Flat-screen TV', 'Air conditioning', 'Private entrance'],
    bath: ['Bath', 'Shower', 'Toilet', 'Free toiletries', 'Towels', 'Slippers', 'Toilet paper'],
    room: ['Air conditioning', 'Flat-screen TV', 'Free Wi-Fi', 'Electric kettle', 'Iron', 'Ironing facilities', 'Private entrance'],
    extra: ['Linen', 'Desk', 'Seating area', 'Tile/marble floor', 'Socket near the bed', 'Telephone', 'Heating', 'Fan', 'Wardrobe or closet', 'Wake-up service', 'Executive lounge access', 'Clothes rack', 'Hand sanitizer', 'Upper floors accessible by elevator', 'Upper floors accessible by stairs only', 'Single-room air conditioning'],
  },
  {
    id: 'deluxe',
    number: '02',
    name: 'Deluxe Room',
    rate: '₹3,500',
    size: '28 m²',
    bed: '1 Queen Bed',
    image: 'Deluxe Room(4).jpeg',
    alt: 'The Hotel Hider deluxe room with a queen bed and seating area',
    summary: 'A little more room to unwind, with a queen bed and a welcoming seating area.',
    features: ['Queen bed', 'Free Wi-Fi', 'Sofa', 'Dining table', 'Air conditioning'],
    bath: ['Bath', 'Shower', 'Toilet', 'Free toiletries', 'Towels', 'Slippers', 'Toilet paper'],
    room: ['Air conditioning', 'Flat-screen TV', 'Free Wi-Fi', 'Electric kettle', 'Private entrance', 'Dining table'],
    extra: ['Sofa', 'Linen', 'Socket near the bed', 'Tile/marble floor', 'Desk', 'Seating area', 'Telephone', 'Ironing facilities', 'Iron', 'Heating', 'Fan', 'Extra-long beds (over 80 inches)', 'Wake-up service', 'Executive lounge access', 'Wardrobe or closet', 'Dining area', 'Clothes rack', 'Hand sanitizer', 'Upper floors accessible by elevator', 'Upper floors accessible by stairs only', 'Single-room air conditioning'],
  },
  {
    id: 'super-deluxe',
    number: '03',
    name: 'Super Deluxe Room',
    rate: '₹4,500',
    size: '35 m²',
    bed: '1 King Bed + 1 Twin Bed',
    image: 'Family Room.jpeg',
    alt: 'A spacious Hotel Hider room with two beds and a sitting area',
    summary: 'An easy choice for a shared stay, with a king bed and a separate twin bed.',
    features: ['King + twin beds', 'Free Wi-Fi', 'Sofa', 'Dining area', 'Air conditioning'],
    bath: ['Bath', 'Shower', 'Toilet', 'Free toiletries', 'Towels', 'Slippers', 'Toilet paper'],
    room: ['Air conditioning', 'Flat-screen TV', 'Free Wi-Fi', 'Electric kettle', 'Private entrance', 'Dining table'],
    extra: ['Sofa', 'Linen', 'Socket near the bed', 'Tile/marble floor', 'Desk', 'Seating area', 'Telephone', 'Ironing facilities', 'Iron', 'Heating', 'Fan', 'Extra-long beds (over 80 inches)', 'Wake-up service', 'Executive lounge access', 'Wardrobe or closet', 'Dining area', 'Clothes rack', 'Hand sanitizer', 'Upper floors accessible by elevator', 'Upper floors accessible by stairs only', 'Single-room air conditioning'],
  },
];

function formatBookingMessage(details) {
  return [
    'Hotel Hider booking enquiry',
    `Name: ${details.name}`,
    `Contact: ${details.phone}`,
    `Room: ${details.room}`,
    `Rate: ${details.rate} per night + tax`,
    `Guests: ${details.guests}`,
    `Check-in: ${details.checkIn}`,
    `Check-out: ${details.checkOut}`,
    `Special notes: ${details.notes || 'None'}`,
  ].join('\n');
}

const gallery = [
  { src: 'Restaurant view.jpeg', label: 'Dining room', wide: true },
  { src: 'Deluxe Room Bathroom.jpeg', label: 'Room details' },
  { src: 'Standard Room(3).jpeg', label: 'A place to unwind' },
  { src: 'Lounge Area (1).jpeg', label: 'Lounge' },
  { src: 'Hallway (1).jpeg', label: 'Thoughtful details' },
];

const amenities = [
  ['wifi', 'Free Wi-Fi', 'Stay connected in every room.'],
  ['ac_unit', 'Air conditioning', 'Individual room air conditioning.'],
  ['tv', 'Flat-screen TV', 'Settle in with a flat-screen television.'],
  ['coffee_maker', 'Electric kettle', 'An electric kettle in every room.'],
  ['shower', 'Bath & shower', 'Bath, shower and everyday essentials.'],
  ['bed', 'Thoughtful bedding', 'Fresh linen and room-specific bed options.'],
  ['checkroom', 'Room to get ready', 'Wardrobe, clothes rack and ironing facilities.'],
  ['elevator', 'Easy access', 'Upper floors accessible by elevator or stairs.'],
];

const nearbyPlaces = [
  ['factory', 'IMT Manesar Tech & Auto Hub', 'Industrial core & corporate offices', '5–10 mins'],
  ['subway', 'HUDA City Centre Metro', 'DMRC Yellow Line direct transit', '25 mins'],
  ['flight_takeoff', 'IGI Airport Delhi (DEL)', 'Terminal 3 & Aerocity Hub', '35–40 mins'],
  ['apartment', 'Cyber City Gurugram', 'DLF CyberHub & Golf Course Extension', '30 mins'],
];

const transitOptions = [
  ['directions_car', 'By car', 'Direct via NH-48 Expressway'],
  ['local_taxi', 'Airport cab', 'Prepaid or Uber / Ola'],
  ['train', 'Metro + auto', 'Yellow Line to Millennium City'],
];

const links = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Suites & Rooms', '#rooms'],
  ['Amenities', '#amenities'],
  ['Gallery', '#gallery'],
  ['Find us', '#location'],
];

function AmbientParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let particles = [];

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      particles = Array.from({ length: 40 }, () => {
        const depth = Math.random() * 0.8 + 0.2;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          depth,
          radius: depth * 1.45,
          speed: (Math.random() * 0.3 + 0.1) * depth,
          opacity: (Math.random() * 0.3 + 0.08) * depth,
        };
      });
    };

    const render = () => {
      context.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        if (!reduceMotion) {
          particle.y -= particle.speed;
          if (particle.y < 0) {
            particle.y = height;
            particle.x = Math.random() * width;
          }
        }
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(255,255,255,${particle.opacity})`;
        context.fill();
      });
      if (!reduceMotion) frame = window.requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas className="hero-canvas" ref={canvasRef} aria-hidden="true" />;
}

function Arrow({ diagonal = false }) {
  return <span className={`arrow ${diagonal ? 'arrow-diagonal' : ''}`} aria-hidden="true">↗</span>;
}

function Brand({ footer = false }) {
  return (
    <a className={`brand ${footer ? 'brand-footer' : ''}`} href="#home" aria-label="Hotel Hider home">
      <span className="brand-mark"><img src={logoWhite} alt="" /></span>
      <span className="brand-copy"><strong>HOTEL HIDER</strong><small>MANESAR · RESIDENCE</small></span>
    </a>
  );
}

function SectionIntro({ title, description }) {
  return (
    <div className="section-intro" data-reveal="up">
      <div className="section-title-block"><h2>{title}</h2></div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function AmenityGroup({ title, items }) {
  return (
    <details className="amenity-group">
      <summary><span>{title}</span><span className="summary-count">{String(items.length).padStart(2, '0')}</span></summary>
      <ul className="amenity-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </details>
  );
}

function RoomCard({ room, reverse, onChoose }) {
  return (
    <article className={`room-card tilt-card ${reverse ? 'room-card-reverse' : ''}`} id={`room-${room.id}`} data-reveal="up">
      <div className="room-photo">
        <img src={asset(room.image)} alt={room.alt} loading="lazy" />
        <span className="photo-index">NO. {room.number} · {room.name.toUpperCase()}</span>
        <span className="photo-caption">Hotel Hider · Room Collection</span>
      </div>
      <div className="room-content">
        <div>
          <div className="room-title-row">
            <div className="room-heading">
              <span className="eyebrow room-eyebrow">ROOM CATEGORY</span>
              <h3>{room.name}</h3>
            </div>
            <div className="room-area">
              <span>RATE PER NIGHT</span>
              <strong>{room.rate}</strong>
              <small>+ tax</small>
            </div>
          </div>
          <div className="room-facts">
            <div><span className="material-symbols-outlined">square_foot</span><strong>{room.size}</strong><span>Room size</span></div>
            <i>•</i>
            <div><span className="material-symbols-outlined">bed</span><strong>{room.bed}</strong></div>
          </div>
          <p className="room-summary">{room.summary}</p>
          <div className="room-tags">{room.features.map((feature) => <span key={feature}>{feature}</span>)}</div>
          <details className="room-full-details">
            <summary>View all room amenities <span className="material-symbols-outlined">add</span></summary>
            <div className="room-detail-groups">
              <AmenityGroup title="Bathroom amenities" items={room.bath} />
              <AmenityGroup title="Room amenities" items={room.room} />
              <AmenityGroup title="Additional facilities" items={room.extra} />
            </div>
          </details>
        </div>
        <div className="room-foot">
          <span className="smoke-policy"><span className="smoke-icon">⊘</span> No smoking</span>
          <div className="room-actions">
            <button className="button button-light" onClick={() => onChoose(room.name)}>Reserve room <Arrow diagonal /></button>
            <a className="button button-ghost" href="#gallery">View space</a>
          </div>
        </div>
      </div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedRoom, setSelectedRoom] = useState('');
  const [enquiry, setEnquiry] = useState(null);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const heroRef = useRef(null);
  const parallaxRef = useRef(null);
  const floatingFrameRef = useRef(null);
  const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  const earliestCheckout = checkInDate ? (() => {
    const nextDay = new Date(`${checkInDate}T12:00:00`);
    nextDay.setDate(nextDay.getDate() + 1);
    return new Date(nextDay.getTime() - nextDay.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  })() : today;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-reveal]').forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 90}ms`);
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + 130;
      const sections = [...document.querySelectorAll('main section[id]')];
      const current = sections.reduce((active, section) => section.offsetTop <= marker ? section.id : active, 'home');
      setActiveSection(current);
    };
    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

  const moveHero = (event) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const bounds = heroRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const offsetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const offsetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    if (parallaxRef.current) {
      parallaxRef.current.style.transform = `scale(1.08) translate3d(${offsetX * -15}px, ${offsetY * -12}px, 0) rotateY(${offsetX * 1.5}deg) rotateX(${offsetY * -1.5}deg)`;
    }
    if (floatingFrameRef.current) {
      floatingFrameRef.current.style.transform = `translate3d(${offsetX * 18}px, ${offsetY * 18}px, 20px)`;
    }
  };

  const resetHero = () => {
    if (parallaxRef.current) parallaxRef.current.style.transform = 'scale(1.05) translate3d(0, 0, 0) rotateY(0) rotateX(0)';
    if (floatingFrameRef.current) floatingFrameRef.current.style.transform = 'translate3d(0, 0, 0)';
  };

  const chooseRoom = (name) => {
    setSelectedRoom(name);
    setEnquiry(null);
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const submitEnquiry = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const details = {
      name: String(formData.get('name') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      checkIn: String(formData.get('checkIn') || ''),
      checkOut: String(formData.get('checkOut') || ''),
      guests: String(formData.get('guests') || '1'),
      room: String(formData.get('room') || ''),
      notes: String(formData.get('notes') || '').trim(),
    };
    details.rate = rooms.find((room) => room.name === details.room)?.rate || 'Rate to confirm';
    details.whatsappUrl = `https://wa.me/${hotelWhatsApp}?text=${encodeURIComponent(formatBookingMessage(details))}`;
    setEnquiry(details);
    window.open(details.whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <Brand />
          <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'} aria-label="Main navigation">
            {links.map(([label, href]) => <a className={activeSection === href.slice(1) ? 'nav-link active' : 'nav-link'} key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </nav>
          <a href="#contact" className="nav-cta">Book your stay <Arrow diagonal /></a>
          <button className={`menu-toggle ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
            <span /><span />
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home" ref={heroRef} onMouseMove={moveHero} onMouseLeave={resetHero}>
          <div className="hero-image" ref={parallaxRef}><img src={asset('Deluxe Room(3).jpeg')} alt="A welcoming Hotel Hider guest room" loading="eager" /></div>
          <div className="hero-shade" />
          <AmbientParticles />
          <div className="hero-frame" ref={floatingFrameRef} />
          <div className="hero-content animate-fadeInUp">
            <span className="hero-kicker"><i /> BOUTIQUE LUXURY SANCTUARY · SECTOR 8 MANESAR</span>
            <h1>In the <em>Heart</em><br /> of the City</h1>
            <p>A destination created for travellers, professionals and explorers alike, where comfort meets thoughtful design.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#rooms">Explore rooms <Arrow diagonal /></a>
              <a className="button button-outline" href="#contact">Book your stay <span>↗</span></a>
            </div>
          </div>
          <div className="hero-bottom"><a href="#about">SCROLL TO DISCOVER <b>↓</b></a></div>
        </section>

        <section className="intro section-pad" id="about">
          <div className="intro-grid">
            <div className="intro-image-wrap tilt-card" data-reveal="up">
              <img src={asset('Hotel Hider Building View.jpeg')} alt="The Hotel Hider building in Manesar" loading="lazy" />
              <div className="image-note"><span>SECTOR 8 · IMT MANESAR</span><em>Hotel Hider · Gurugram</em></div>
            </div>
            <div className="intro-copy" data-reveal="up">
              <span className="eyebrow">THE SANCTUARY MANIFESTO</span>
              <h2>A place to call<br /><em>your own.</em></h2>
              <p className="intro-lead">Welcome to Hotel Hider — holding it all together for travellers, professionals and explorers alike.</p>
              <p>Experience true comfort in our rooms, with elegant interiors, modern amenities and a spacious bathroom. Thoughtfully designed for relaxation and convenience, it’s a place to unwind and feel at home, only better.</p>
              <div className="about-stats">
                <div><strong>03</strong><span>ROOM CATEGORIES</span></div>
                <div><strong>20–35</strong><span>ROOM SIZE · M²</span></div>
                <div><strong>01–02</strong><span>BEDS PER ROOM</span></div>
              </div>
              <a className="text-link" href="#rooms">Find your room <Arrow /></a>
            </div>
          </div>
        </section>

        <section className="rooms-section section-pad" id="rooms">
          <SectionIntro title={<>Rooms &amp;<br /><em>suites.</em></>} description="Thoughtfully designed rooms with a considered mix of modern comforts and everyday essentials." />
          <div className="room-list">
            {rooms.map((room, index) => <RoomCard key={room.id} room={room} reverse={index === 1} onChoose={chooseRoom} />)}
          </div>
        </section>

        <section className="amenities-section section-pad" id="amenities">
          <SectionIntro title={<>Curated<br /><em>amenities.</em></>} description="A thoughtful collection of in-room essentials, arranged to make settling in feel effortless." />
          <div className="amenity-grid">
            {amenities.map(([icon, title, description], index) => <article className="amenity-card tilt-card" key={title} data-reveal="up" style={{ '--card-delay': `${(index % 4) * 70}ms` }}>
              <div className="amenity-icon"><span className="material-symbols-outlined">{icon}</span></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="amenity-index">ROOM ESSENTIAL · 0{index + 1}</span>
            </article>)}
          </div>
        </section>

        <section className="gallery-section section-pad" id="gallery">
          <SectionIntro title={<>The spatial<br /><em>gallery.</em></>} description="A closer look at the rooms, dining spaces and thoughtful interiors at Hotel Hider." />
          <div className="gallery-grid">
            {gallery.map((item, index) => <figure className={`gallery-item tilt-card ${item.wide ? 'gallery-wide' : ''}`} key={item.src} data-reveal="up" style={{ '--card-delay': `${(index % 3) * 80}ms` }}>
              <img src={asset(item.src)} alt={item.label} loading="lazy" />
              <figcaption><span>0{index + 1}</span>{item.label}<i>↗</i></figcaption>
            </figure>)}
          </div>
        </section>

        <section className="location-section section-pad" id="location">
          <SectionIntro title={<>Location &amp; <em>directions.</em></>} />
          <div className="location-layout">
            <article className="map-address-card" data-reveal="up">
              <div className="location-map">
                <img src={asset('Hotel Hider Building View.jpeg')} alt="Hotel Hider on NH-48 in IMT Manesar" loading="lazy" />
                <div className="map-dots" aria-hidden="true" />
                <div className="route-badge"><i />NH-48 DELHI–JAIPUR HIGHWAY CORRIDOR</div>
                <div className="map-marker-group" aria-label="Hotel Hider, Sector 8, IMT Manesar">
                  <span className="map-pulse" />
                  <span className="map-marker material-symbols-outlined">apartment</span>
                  <span className="map-marker-label"><strong>HOTEL HIDER SANCTUARY</strong><small>SECTOR 8 · IMT MANESAR HUB</small></span>
                </div>
                <a className="button button-light map-directions" href="https://maps.google.com/?q=Sector+8+IMT+Manesar+Gurugram" target="_blank" rel="noreferrer"><span className="material-symbols-outlined">explore</span> Get directions</a>
              </div>
              <div className="physical-address">
                <div className="address-heading"><span className="eyebrow">PHYSICAL ADDRESS</span><span className="access-badge"><i />EASY TOLL ACCESS</span></div>
                <h3>Sector 8, IMT Manesar, Gurugram</h3>
                <p>Haryana 122051, India · Off NH-48 Delhi–Jaipur Highway, opposite G.S. Tower</p>
              </div>
            </article>
            <div className="location-details">
              <section className="proximity-card" data-reveal="up">
                <div className="location-card-heading"><h3>Strategic proximity</h3><span>EST. DRIVE TIME</span></div>
                <div className="proximity-list">
                  {nearbyPlaces.map(([icon, name, detail, time]) => <div className="proximity-row" key={name}>
                    <span className="material-symbols-outlined proximity-icon">{icon}</span>
                    <span className="proximity-copy"><strong>{name}</strong><small>{detail}</small></span>
                    <span className="proximity-time">{time}</span>
                  </div>)}
                </div>
              </section>
              <section className="transit-card" data-reveal="up">
                <div className="location-card-heading"><h3>Transit guidance</h3><span>CONNECTIVITY MODES</span></div>
                <div className="transit-grid">
                  {transitOptions.map(([icon, title, detail]) => <article className="transit-option" key={title}>
                    <span className="material-symbols-outlined transit-icon">{icon}</span>
                    <strong>{title}</strong>
                    <small>{detail}</small>
                  </article>)}
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="concierge-panel" data-reveal="up">
            <div className="contact-heading">
              <span className="eyebrow concierge-kicker">DIRECT CONCIERGE</span>
              <h2>Got questions or<br />booking a <em>stay?</em></h2>
              <p>Share your preferred room and dates with Hotel Hider on WhatsApp to check availability and confirm your stay.</p>
              <div className="concierge-facts">
                <div className="concierge-fact"><span>ROOM CATEGORIES</span><strong>03</strong><small>Standard · Deluxe · Super Deluxe</small></div>
                <div className="concierge-fact"><span>ROOM SIZES</span><strong>20–35 m²</strong><small>Space to settle in</small></div>
              </div>
              <div className="contact-note"><span className="material-symbols-outlined note-mark">location_on</span><span><strong>Sector 8, IMT Manesar</strong><small>Gurugram, Haryana</small></span></div>
              <a className="contact-note contact-call-note" href={`https://wa.me/${hotelWhatsApp}`} target="_blank" rel="noreferrer"><span className="material-symbols-outlined note-mark">chat</span><span><strong>WhatsApp Hotel Hider</strong><small>{hotelPhoneLabel}</small></span></a>
              <a className="text-link contact-map-link" href="https://www.google.com/maps/search/?api=1&query=Hotel+Hider+Manesar" target="_blank" rel="noreferrer">Get directions <Arrow diagonal /></a>
            </div>
            <div className="enquiry-card">
              {enquiry ? (
                <div className="enquiry-success" aria-live="polite">
                  <span className="eyebrow">BOOKING MESSAGE READY</span>
                  <div className="success-mark">✓</div>
                  <h3>Thanks, {enquiry.name}.</h3>
                  <p>Your booking details are ready in WhatsApp. Review the message and tap send to contact Hotel Hider. If WhatsApp didn’t open, use the button below.</p>
                  <dl className="enquiry-summary">
                    <div><dt>Room</dt><dd>{enquiry.room}</dd></div>
                    <div><dt>Rate</dt><dd>{enquiry.rate} / night + tax</dd></div>
                    <div><dt>Guests</dt><dd>{enquiry.guests}</dd></div>
                    <div><dt>Dates</dt><dd>{enquiry.checkIn} — {enquiry.checkOut}</dd></div>
                  </dl>
                  <a className="button button-light copy-button" href={enquiry.whatsappUrl} target="_blank" rel="noreferrer"><span className="material-symbols-outlined">chat</span> Continue in WhatsApp</a>
                  <button className="reset-link" onClick={() => setEnquiry(null)}>Edit enquiry</button>
                </div>
              ) : (
                <>
                  <div className="form-heading"><div><span className="eyebrow">HOTEL HIDER · MANESAR</span><h3>Plan your stay</h3><p>Share your preferences directly on WhatsApp.</p></div><span className="form-star material-symbols-outlined">chat</span></div>
                  <form onSubmit={submitEnquiry}>
                    <label className="field">YOUR NAME<input name="name" type="text" placeholder="Your name" autoComplete="name" required /></label>
                    <label className="field">YOUR MOBILE NUMBER<input name="phone" type="tel" placeholder="Your phone number" autoComplete="tel" required /></label>
                    <label className="field">ROOM PREFERENCE<select name="room" value={selectedRoom ?? ''} onChange={(event) => setSelectedRoom(event.target.value)} required><option value="" disabled>Select a room</option>{rooms.map((room) => <option value={room.name} key={room.id}>{room.name} · {room.size} · {room.rate} + tax/night</option>)}</select></label>
                    <label className="field">NUMBER OF GUESTS<select name="guests" defaultValue="2"><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option><option value="4+">4+ guests</option></select></label>
                    <label className="field">CHECK-IN<input name="checkIn" type="date" min={today} value={checkInDate ?? ''} onChange={(event) => { setCheckInDate(event.target.value); setCheckOutDate(''); }} required /></label>
                    <label className="field">CHECK-OUT<input name="checkOut" type="date" min={earliestCheckout} value={checkOutDate ?? ''} onChange={(event) => setCheckOutDate(event.target.value)} required /></label>
                    <label className="field field-wide">SPECIAL NOTES (OPTIONAL)<textarea name="notes" rows="3" placeholder="Anything you’d like the hotel to know?" /></label>
                    <button className="button button-light form-submit" type="submit"><span className="material-symbols-outlined">chat</span> Book via WhatsApp</button>
                  </form>
                  <p className="form-footnote">WhatsApp opens to Hotel Hider with your details prefilled. Review the message and tap send; it isn’t sent automatically.</p>
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main"><div className="footer-brand-block"><Brand footer /><p className="footer-tagline">Thoughtful stays in the heart of Manesar.<br />Holding it all together.</p></div><div className="footer-links"><span className="eyebrow">EXPLORE</span>{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div><div className="footer-links"><span className="eyebrow">YOUR STAY</span><a href="#rooms">Explore rooms</a><a href="#contact">Plan your stay</a><a href="#location">Find Hotel Hider</a></div></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} HOTEL HIDER</span><span>MADE FOR A MOMENT OF YOUR OWN</span><a href="#home">BACK TO TOP ↑</a></div>
      </footer>
    </>
  );
}

export default App;
