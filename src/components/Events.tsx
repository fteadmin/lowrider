import { useState } from 'react';
import { Calendar } from 'lucide-react';
import emailjs from '@emailjs/browser';

type RSVPFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  guests: string;
  notes: string;
};

export default function Events() {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [formData, setFormData] = useState<RSVPFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    guests: '1',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
    const templateId =
      (import.meta.env.VITE_EMAILJS_RSVP_TEMPLATE_ID as string | undefined) ||
      (import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined);
    const recipientEmail = import.meta.env.VITE_RSVP_RECIPIENT_EMAIL as string | undefined;

    if (!publicKey || !serviceId || !templateId || !recipientEmail) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 7000);
      return;
    }

    try {
      emailjs.init(publicKey);

      await emailjs.send(serviceId, templateId, {
        to_email: recipientEmail,
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        subject: 'RSVP: Lowrider Cultural Meetup',
        message: [
          `Name: ${formData.firstName} ${formData.lastName}`,
          `Email: ${formData.email}`,
          `Phone: ${formData.phone || 'Not provided'}`,
          `Guest Count: ${formData.guests}`,
          `Notes: ${formData.notes || 'None'}`,
          'Event: Lowrider Cultural Meetup',
          'Date: April 26',
          'Location: Longbeach, CA'
        ].join('\n'),
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone: formData.phone,
        guest_count: formData.guests,
        notes: formData.notes,
        event_name: 'Lowrider Cultural Meetup',
        event_date: 'April 26',
        event_location: 'Longbeach, CA'
      });

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        guests: '1',
        notes: ''
      });
      setTimeout(() => setSubmitStatus('idle'), 7000);
    } catch (error) {
      console.error('RSVP submission failed:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 7000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="events" className="min-h-screen flex items-center py-20 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] bg-clip-text text-transparent">Our Events</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] mx-auto mb-8"></div>
        </div>

        <div className="bg-gradient-to-br from-[#D9BA84]/20 to-[#031100]/50 p-8 md:p-12 rounded-2xl border-2 border-[#D9BA84]/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D9BA84]/10 rounded-full filter blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <Calendar className="w-12 h-12 text-[#D9BA84] mr-4" />
              <h3 className="text-4xl md:text-5xl font-bold text-[#D9BA84]">Lowrider Cultural Meetup</h3>
            </div>

            <p className="text-xl text-center text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join us for an elevated celebration event, meaningful connections, and a first look at our vision and growth strategy.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-black/50 p-6 rounded-lg border border-[#D9BA84]/30">
                <h4 className="text-2xl font-bold text-[#D9BA84] mb-4">Event Details</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span><strong>Date:</strong> April 26</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span><strong>Time:</strong> 4:00 PM - 8:00 PM</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span><strong>Location:</strong> Longbeach, CA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span><strong>Address:</strong> Provided upon registration</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/50 p-6 rounded-lg border border-[#D9BA84]/30">
                <h4 className="text-2xl font-bold text-[#D9BA84] mb-4">What to Expect</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span>Catered By Good Chef</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span>Special Presentation By Randolph Enterprises</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span>Investor & Founders' Networking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span>Exclusive Community Experience</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-black/50 p-6 rounded-lg border border-[#D9BA84]/30">
                <h4 className="text-2xl font-bold text-[#D9BA84] mb-4">Who Should Attend</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span><strong>Angel & Seed-Stage Investors</strong> seeking culturally anchored, high-upside opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span><strong>Prospective Founding Members</strong> and strategic partners ready to build together</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span><strong>Lowrider Community Leaders</strong> and enthusiasts passionate about the culture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span><strong>Allies from Outside the Community</strong> who value inclusive, sustainable growth</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/50 p-6 rounded-lg border border-[#D9BA84]/30">
                <h4 className="text-2xl font-bold text-[#D9BA84] mb-4">Attire</h4>
                <p className="text-gray-300 text-lg">
                  <strong>Smart Casual / Elevated Street</strong>
                </p>
                <p className="text-gray-400 text-sm mt-4">
                  Dress to impress while expressing your personal style. This is a celebration of culture and community—come as your best self.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-300 mb-6">Limited spots available. Reserve your place now.</p>
              <button
                type="button"
                onClick={() => setIsRsvpOpen(true)}
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] text-[#031100] font-bold rounded-lg hover:from-[#CCB550] hover:to-[#DCBD84] transform hover:scale-105 transition-all shadow-lg shadow-[#D9BA84]/50"
              >
                RSVP Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {isRsvpOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsRsvpOpen(false)}
        >
          <div
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-950 border border-[#D9BA84]/40 rounded-2xl p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="RSVP Form"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-2xl md:text-3xl font-bold text-[#D9BA84]">RSVP Form</h4>
              <button
                type="button"
                onClick={() => setIsRsvpOpen(false)}
                className="text-gray-300 hover:text-white text-2xl leading-none"
                aria-label="Close RSVP form"
              >
                x
              </button>
            </div>

            <p className="text-gray-300 mb-8">Submit your RSVP and we will email confirmation details.</p>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-900/30 border border-green-600 rounded-lg text-green-300">
                RSVP submitted successfully. We received your information.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-900/30 border border-red-600 rounded-lg text-red-300">
                We could not submit your RSVP. Check EmailJS environment variables and try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-[#D9BA84]/30 rounded-lg text-white focus:outline-none focus:border-[#D9BA84] transition-colors"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-[#D9BA84]/30 rounded-lg text-white focus:outline-none focus:border-[#D9BA84] transition-colors"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-[#D9BA84]/30 rounded-lg text-white focus:outline-none focus:border-[#D9BA84] transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone (optional)</label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-[#D9BA84]/30 rounded-lg text-white focus:outline-none focus:border-[#D9BA84] transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-300 mb-2">Number of Guests</label>
                <select
                  id="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-[#D9BA84]/30 rounded-lg text-white focus:outline-none focus:border-[#D9BA84] transition-colors"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4+">4+</option>
                </select>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-300 mb-2">Notes (optional)</label>
                <textarea
                  id="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-[#D9BA84]/30 rounded-lg text-white focus:outline-none focus:border-[#D9BA84] transition-colors resize-none"
                  placeholder="Anything we should know?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] text-[#031100] font-bold rounded-lg hover:from-[#CCB550] hover:to-[#DCBD84] transform hover:scale-[1.01] transition-all shadow-lg shadow-[#D9BA84]/50 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting RSVP...' : 'Submit RSVP'}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
