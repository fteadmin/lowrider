# lowrider

## RSVP Email Setup

The RSVP form in the Events section sends submissions using EmailJS.

1. Copy `.env.example` to `.env`.
2. Fill in your EmailJS values:
	- `VITE_EMAILJS_PUBLIC_KEY`
	- `VITE_EMAILJS_SERVICE_ID`
	- `VITE_EMAILJS_RSVP_TEMPLATE_ID` (or reuse `VITE_EMAILJS_TEMPLATE_ID`)
	- `VITE_RSVP_RECIPIENT_EMAIL` (the email that receives RSVP submissions)
3. Restart the dev server after updating `.env`.

Template params sent by the RSVP form include:

- `to_email`
- `from_name`
- `from_email`
- `subject`
- `message`
- `first_name`
- `last_name`
- `phone`
- `guest_count`
- `notes`
- `event_name`
- `event_date`
- `event_location`
