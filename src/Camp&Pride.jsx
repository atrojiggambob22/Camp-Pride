import React from "react"
import LocationMap from "./LocationMap";
import NavBar from "./NavBar";
import ImageCarousel from "./ImageCarousel";
import Footer from "./Footer";
import CampPrideBookingBar from "./CampPrideBookingBar"
import { Accessibility, Ban, Bath, Briefcase, Building2, CalendarCheck, CalendarClock, Car, CheckCircle2, ClipboardCheck, ClipboardList, Crown, Headset, Layers, Presentation, Shield, Snowflake, Sparkles, Speaker, Timer, Utensils, UtensilsCrossed, Wifi, Zap } from "lucide-react";
<LocationMap address="22a Eastern Bypass, Port Harcourt, 500101, Rivers State" />
    
export default function CampAndPride() {
    return(
        <div className="overflow-hidden">
        <section>

        <div>
            <div>
                <NavBar/>
            </div>
            <div>

            </div>
        </div>
        </section>

        <section>
            <div>
               {/* <CampPrideBookingBar/> */}

            </div>
            <div className="my-15">

            <ImageCarousel/>
            </div>
        </section>

        <section className="flex mx-40 my-40 justify-between gap-20">
            <div>
               <h1 className="text-[40px] mb-5">
                 Create Unforgettable Moments at <i className="font-bold"> Camp and Pride Place</i> 
               </h1>
                <p className="w-130 ">

Perfectly designed for celebrations, corporate gatherings, and special occasions, <i className="font-bold"> Camp and Pride Place</i>  offers a sophisticated venue where every event becomes a memorable experience. Our versatile event spaces are ideal for weddings, conferences, seminars, birthdays, receptions, exhibitions, and private celebrations of all sizes.
<br />
<br />
With elegant interiors, modern facilities, ample parking, professional event support, and customizable venue setups, we provide everything you need to bring your vision to life. Whether you're planning an intimate gathering or a grand celebration, Camp and Pride Place delivers the perfect setting for exceptional events and lasting memories.
                </p>
            </div>
            <div>
                <h1 className="text-[40px] mb-20">Our amenties</h1>
                <div className="grid grid-cols-3 gap-20 text-nowrap">


                <div>

               <p>
                    <Wifi/>
                </p> 
                
                <p>Free Wi-Fi </p>
                </div>
                <div>

                <Snowflake/>
                <p>
                     Air-Conditioned Halls
                </p>
                </div>
                <div>

                <Utensils/>
                <p> Catering Services</p>
                </div>

                <div>

                <Car/>
                <p>
                     Secure Parking
                </p>
                </div>

                <div>

                <Speaker/>
                <p>
                     Sound & Lighting
                </p>
                </div>

                <div>

                <ClipboardList/>
                <p>
                     Event Planning
                </p>
                </div>

                <div>

                <Crown/>
                <p>
                     Bridal Suite
                </p>
                </div>

                <div>

                <Presentation/>
                <p>
                    Conference Rooms
                </p>
                </div>
                <div>

                <Zap/>
                <p>
                    24/7 Power Supply
                </p>
                </div>

                <div>

                <Shield/>
                <p>
                    Security
                </p>
                </div>

                <div>

                <Bath/>
                <p>
                    Modern Restrooms
                </p>
                </div>

                <div>

                <Accessibility/>
                <p>
                    Accessible Venue
                </p>
                </div>
                </div>
            </div>
        </section>

        <section className="my-50">
            <h1 className="text-center text-[30px]">
                Why Choose Camp and Pride Place
            </h1>

            <div className="flex justify-center gap-10 my-20">
               
                <div>
                     <span>
                    <CalendarCheck/>
                </span>Easy Venue Booking 
                </div>

                
                <div>
                    <span>

                    <Layers/>
                </span>
                    Flexible Event Packages</div>

                
                <div>
                    <span>
                
                    <Building2/>
                </span>Spacious Event Halls</div>
                
                <div>
                    <span>
                    <Headset/>
                </span>Professional Event Support</div>
                
                <div>
                    <span>
                    <Sparkles/>
                </span>Modern Facilities</div>
                
                <div>
                    <span>
                    <Car/>
                </span>Secure Parking</div>
            </div>
        </section>

        <section className="my-50" >
            <h1 className="text-center relative -top-10 text-[30px]">Our Policies</h1> 

            <div className="grid grid-cols-2 relative left-50 gap-5">

                <div className="flex gap-5"> <CalendarClock/> Advance Booking Required</div>
                <div className="flex gap-5"> <CheckCircle2/> Booking Confirmation Upon Payment</div>
                <div className="flex gap-5"> <UtensilsCrossed/> Outside Catering by Approval</div>
                <div className="flex gap-5"> <Ban/> No Smoking Inside the Venue</div>
                <div className="flex gap-5"> <Briefcase/> Guests Are Responsible for Personal Belongings</div>
                <div className="flex gap-5"><ClipboardCheck/> Decorations Must Be Pre-Approved</div>
                <div className="flex gap-5"> <Timer/> Event Must End Within Booked Time</div>
                <div className="flex gap-5"> <Shield/>Security Available On-Site</div>
            </div>

        </section>


        <section className="grid grid-cols-2 mx-20 my-50">
            <h1 className="text-[40px]">Events Made Easy</h1>

            <div>
                <p>From weddings and birthdays to conferences and corporate meetings, <i className="font-bold"> Camp and Pride Place</i>  offers the perfect venue for every occasion. Our flexible event spaces and dedicated team ensure your event is seamless from start to finish.</p>

                <button>
                Book Your Event
                </button>
            </div>


        </section>
        <div className="w-350 h-[450px] relative left-3 my-20">
          <LocationMap address="22a Eastern Bypass, Port Harcourt, 500101, Rivers State" />
        </div>

        <Footer/>
        </div>
    )
}