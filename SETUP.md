## EmailJS Setup

1. Create an account at EmailJS.
2. Create an Email Service.
3. Create an Email Template with variables:
   - `from_name`
   - `reply_to`
   - `message`
   - `to_email`
4. Create a `.env.local` file in the project root with:
   - `VITE_EMAILJS_SERVICE_ID=your_service_id`
   - `VITE_EMAILJS_TEMPLATE_ID=your_template_id`
   - `VITE_EMAILJS_PUBLIC_KEY=your_public_key`
   - `VITE_EMAIL_TO_EMAIL=garg.anshu0007@gmail.com`
5. Restart the Vite dev server after adding the keys.
