import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Log environment variables (for debugging - remove in production)
      console.log('EmailJS Config:', {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.substring(0, 5) + '...',
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        recipientEmail: import.meta.env.VITE_EMAILJS_RECIPIENT_EMAIL
      });

      // Initialize EmailJS with your public key from environment variable
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: import.meta.env.VITE_EMAILJS_RECIPIENT_EMAIL,
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        }
      );

      console.log('Email sent successfully:', response);
      setSubmitStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      if (error instanceof Error) {
        console.error('Error message:', error.message);
      }
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] bg-clip-text text-transparent">Contact Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300">
            Get in touch with us to learn more about membership, events, or our mission
          </p>
        </div>

        <div className="bg-zinc-800 p-8 md:p-12 rounded-2xl border border-[#D9BA84]/30">
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-900/30 border border-green-600 rounded-lg text-green-400">
              Message sent successfully! We'll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-900/30 border border-red-600 rounded-lg text-red-400">
              Error sending message. Please try again.
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-[#D9BA84]/30 rounded-lg text-white focus:outline-none focus:border-[#D9BA84] transition-colors"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-[#D9BA84]/30 rounded-lg text-white focus:outline-none focus:border-[#D9BA84] transition-colors"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black border border-[#D9BA84]/30 rounded-lg text-white focus:outline-none focus:border-[#D9BA84] transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black border border-[#D9BA84]/30 rounded-lg text-white focus:outline-none focus:border-[#D9BA84] transition-colors"
                placeholder="What is this regarding?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black border border-[#D9BA84]/30 rounded-lg text-white focus:outline-none focus:border-[#D9BA84] transition-colors resize-none"
                placeholder="Tell us how we can help..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] text-[#031100] font-bold rounded-lg hover:from-[#CCB550] hover:to-[#DCBD84] transform hover:scale-105 transition-all shadow-lg shadow-[#D9BA84]/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
