import LocationMap from "./LocationMap";
import NavBar from "./NavBar";
import ImageCarousel from "./ImageCarousel";
import Footer from "./Footer";
import CampPrideBookingBar from "./CampPrideBookingBar";
import BookingForm from "./BookingForm";
import heroImage from "./assets/house.JPG";
import {
  Accessibility,
  Ban,
  Bath,
  Briefcase,
  Building2,
  CalendarCheck,
  CalendarClock,
  Car,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  Crown,
  Headset,
  Monitor,
  Presentation,
  Shield,
  Snowflake,
  Sparkles,
  Speaker,
  Timer,
  Wifi,
  Zap,
  Refrigerator,
  Shirt,
  Users,
  Music,
  Camera,
  Cake,
  ChefHat,
  ClipboardPen,
  BookOpen,
} from "lucide-react";

const AMENITIES = [
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Snowflake, label: "Air-Conditioned Hall/Meeting Rooms" },
  { icon: Monitor, label: "Multimedia Projector" },
  { icon: ClipboardList, label: "Flip Chart" },
  { icon: Shirt, label: "Changing Room" },
  { icon: Refrigerator, label: "Free Beverages Refrigeration" },
  { icon: Building2, label: "Storage" },
  { icon: Car, label: "Free Parking" },
  { icon: Shield, label: "CCTV Surveillance" },
  { icon: Speaker, label: "Sound & Lighting" },
  { icon: Crown, label: "Bridal Suite" },
  { icon: Presentation, label: "Conference Rooms" },
  { icon: Zap, label: "24/7 Power Supply" },
  { icon: Bath, label: "Modern Restrooms" },
  { icon: Accessibility, label: "Accessible Venue" },
];

const PROFESSIONAL_SUPPORT = [
  { icon: Users, title: "Ushering Service", text: "Professional ushers to guide and assist your guests throughout the event." },
  { icon: ClipboardPen, title: "Registration Desk", text: "Efficient guest check-in and registration management." },
  { icon: Shield, title: "Bouncers", text: "Trained security personnel for crowd control and safety." },
  { icon: Music, title: "DJ", text: "Professional DJ services to keep the energy alive." },
  { icon: ChefHat, title: "Catering", text: "Delicious catering options tailored to your event." },
  { icon: Camera, title: "Photography", text: "Expert photography to capture every special moment." },
  { icon: Sparkles, title: "Decorations", text: "Elegant decoration services to match your theme." },
  { icon: Cake, title: "Cake & Confectionaries", text: "Delicious cakes and confectionaries for your celebration." },
];

const POLICIES = [
  { icon: CalendarClock, text: "Advance Booking Required" },
  { icon: CheckCircle2, text: "Booking Confirmation Upon Payment" },
  { icon: Ban, text: "No Smoking Inside the Venue" },
  { icon: Briefcase, text: "Guests Responsible for Personal Belongings" },
  { icon: ClipboardCheck, text: "Decorations Must Be Pre-Approved" },
  { icon: Timer, text: "Event Must End Within Booked Time" },
  { icon: BookOpen, text: "The Rules of the House" },
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-gray-600">{subtitle}</p>}
      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gold-400" />
    </div>
  );
}

export default function CampAndPride() {
  return (
    <div id="home" className="scroll-mt-20 overflow-x-hidden">
      <NavBar />

      {/* Hero */}
      <section className="relative bg-navy-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
<div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Camp &amp; Pride Place
            </h1>
            <p className="mt-4 font-display text-xl font-semibold text-gold-300 sm:text-2xl">
              Create Unforgettable Moments
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100">
              A sophisticated venue for social and corporate events with elegant
              interiors, modern facilities, and professional event support.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-lg shadow-gold-500/20 transition-colors hover:bg-gold-400"
              >
                Book Your Event
              </a>
              <a
                href="#amenities"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore Amenities
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt="Camp and Pride event hall"
              className="w-full rounded-2xl object-cover shadow-2xl h-150 "
            />
          </div>
        </div>
      </section>

      {/* Booking bar */}
      <CampPrideBookingBar />

      {/* Image Carousel */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <ImageCarousel />
      </div>

      {/* About + Amenities */}
<section id="amenities" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="What We Offer"
          title="Our Amenities"
          subtitle="Everything you need for an exceptional event, all in one elegant location."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {AMENITIES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-navy-100 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-50 text-navy-800 transition-colors group-hover:bg-gold-100 group-hover:text-gold-600">
                <Icon size={24} />
              </div>
              <p className="text-sm font-medium text-navy-900">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About copy */}
      <section className="bg-navy-50/60 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">About the Venue</p>
            <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Where Every Event Becomes a Memorable Experience
            </h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <p>
              Perfectly designed for celebrations, corporate gatherings, and special
              occasions, <i className="font-semibold text-navy-800">Camp and Pride Place</i>{" "}
              offers a sophisticated venue where every event becomes a memorable experience.
              Our versatile event spaces are ideal for weddings, conferences, seminars,
              birthdays, receptions, exhibitions, and private celebrations of all sizes.
            </p>
            <p>
              With elegant interiors, modern facilities, ample parking, professional event
              support, and customizable venue setups, we provide everything you need to
              bring your vision to life from an intimate gathering to a grand celebration.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Support */}
<section id="why-us" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Why Camp & Pride"
          title="Spacious Event Hall and Meeting Rooms"
          subtitle="Comprehensive professional support to make your event seamless and memorable."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROFESSIONAL_SUPPORT.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-navy-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-gold-600">
                <Icon size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-navy-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      

      {/* Policies */}
<section id="policies" className="scroll-mt-20 bg-navy-950 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">
              Good to Know
            </p>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Our Policies</h2>
            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gold-400" />
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {POLICIES.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10"
              >
                <Icon size={20} className="mt-0.5 shrink-0 text-gold-400" />
                <p className="text-sm leading-snug text-navy-50">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Booking / Contact */}
<section id="contact" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">
              Book Your Event
            </p>
            <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Events Made Easy
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-gray-600">
              From weddings and birthdays to conferences and corporate meetings, our
              flexible event spaces and dedicated team ensure your event is seamless
              from start to finish. Submit your details and we'll be in touch.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-800">
                  <CalendarCheck size={18} />
                </div>
                <div>
                  <p className="font-medium text-navy-900">Quick &amp; Simple</p>
                  <p className="text-sm text-gray-600">
                    Fill in a few details  no account needed.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-800">
                  <Headset size={18} />
                </div>
                <div>
                  <p className="font-medium text-navy-900">Personal Support</p>
                  <p className="text-sm text-gray-600">
                    Our team responds within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <BookingForm />
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-navy-100 shadow-lg">
          <LocationMap address="22a Eastern Bypass, Port Harcourt, 500101, Rivers State" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
