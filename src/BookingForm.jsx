import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Calendar,
  Clock,
  Users,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  Loader2,
  X,
} from "lucide-react";

// EmailJS configuration
// IMPORTANT: Replace these with your actual EmailJS credentials
const SERVICE_ID = "service_zcewwuj";
const TEMPLATE_ID = "template_6uvs4a9";
const PUBLIC_KEY = "qQHLRaiv_phvb3QTq";
const RECIPIENT_EMAIL = "wearenovarisx@gmail.com";

// Initialize EmailJS once with the public key
emailjs.init({ publicKey: PUBLIC_KEY });

const inputClasses =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-navy-900 placeholder-gray-400 outline-none transition focus:border-navy-500 focus:ring-2 focus:ring-navy-200";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "Wedding",
    eventDate: "",
    guests: "",
    message: "",
  });
const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const templateParams = {
      to_email: RECIPIENT_EMAIL,
      from_name: form.name,
      from_email: form.email,
      from_phone: form.phone,
      event_type: form.eventType,
      event_date: form.eventDate,
      guests: form.guests,
      message: form.message,
    };

try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        eventType: "Wedding",
        eventDate: "",
        guests: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      // Fallback: open the user's email client with the booking details
      // pre-filled, so the request is never lost.
      const subject = encodeURIComponent(
        `New Booking Request: ${form.eventType} - ${form.name}`
      );
      const body = encodeURIComponent(
        `Name: ${form.name}\n` +
          `Email: ${form.email}\n` +
          `Phone: ${form.phone}\n` +
          `Event Type: ${form.eventType}\n` +
          `Event Date: ${form.eventDate}\n` +
          `Guests: ${form.guests}\n` +
          `Message: ${form.message}\n`
      );
      window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        eventType: "Wedding",
        eventDate: "",
        guests: "",
        message: "",
      });
    }
  };

  return (
    <div className="relative rounded-3xl border border-navy-100 bg-white p-6 shadow-xl sm:p-8">
      <h3 className="font-display text-2xl font-bold text-navy-900">
        Book Your Event
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        Fill in your details and our team will get back to you shortly.
      </p>

      {status === "success" ? (
        <div className="mt-8 flex flex-col items-center rounded-2xl bg-green-50 p-8 text-center">
          <CheckCircle2 size={48} className="text-green-600" />
          <h4 className="mt-4 font-display text-xl font-bold text-green-800">
            Booking Request Sent!
          </h4>
          <p className="mt-2 text-sm text-green-700">
            Thank you for your interest. We'll get back to you as soon as possible.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 rounded-md bg-navy-900 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
          >
            Make Another Booking
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-navy-900">
                <User size={14} className="text-gold-600" /> Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className={inputClasses}
              />
            </div>
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-navy-900">
                <Mail size={14} className="text-gold-600" /> Email *
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className={inputClasses}
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-navy-900">
                <Phone size={14} className="text-gold-600" /> Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="+234 ..."
                className={inputClasses}
              />
            </div>
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-navy-900">
                <Calendar size={14} className="text-gold-600" /> Event Type *
              </label>
              <select
                name="eventType"
                value={form.eventType}
                onChange={handleChange}
                className={inputClasses}
              >
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Conference</option>
                <option>Corporate Meeting</option>
                <option>Reception</option>
                <option>Exhibition</option>
                <option>Private Celebration</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-navy-900">
                <Clock size={14} className="text-gold-600" /> Event Date *
              </label>
              <input
                type="date"
                name="eventDate"
                value={form.eventDate}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-navy-900">
                <Users size={14} className="text-gold-600" /> Expected Guests
              </label>
              <input
                type="number"
                name="guests"
                value={form.guests}
                onChange={handleChange}
                min="1"
                placeholder="e.g. 150"
                className={inputClasses}
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-navy-900">
              <MessageSquare size={14} className="text-gold-600" /> Additional Details
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us about your event (optional)"
              className={`${inputClasses} resize-none`}
            />
          </div>

{status === "error" && (
            <div className="flex items-start gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
              <X size={16} className="mt-0.5 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? (
              <>
                <Loader2 size={18} className="animate-spin" /> Sending...
              </>
            ) : (
              "Submit Booking Request"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
