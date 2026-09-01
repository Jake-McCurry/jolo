import { SEO } from "@/components/ui/SEO";

const MAILCHIMP_ACTION =
  "https://jesusonline.us1.list-manage.com/subscribe/post?u=c02949f5de137184b156da9bc&id=e06ba0649d&f_id=00a787e5f0";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Send a message to the JesusOnline team. A real person will read what you send."
        path="/contact"
      />

      <section className="bg-gray-50 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-secondary sm:text-4xl">
              Contact Us
            </h1>
            <p className="mt-3 text-gray-600">
              If a question or concern is on your heart, you are welcome to
              share it. A real person will read what you send.
            </p>
          </div>

          <form
            action={MAILCHIMP_ACTION}
            method="post"
            target="_blank"
            className="rounded-2xl bg-white p-6 shadow-sm sm:p-8"
            data-testid="form-contact"
          >
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-semibold text-secondary"
              >
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                id="contact-email"
                name="EMAIL"
                type="email"
                autoComplete="email"
                required
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="block text-sm font-semibold text-secondary"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="MMERGE25"
                rows={7}
                className="mt-2 w-full resize-y rounded-lg border border-gray-300 px-4 py-3 text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <input type="hidden" name="tags" value="5798255" />
            <div
              aria-hidden="true"
              className="absolute -left-[5000px]"
            >
              <label htmlFor="contact-company">Leave this field blank</label>
              <input
                id="contact-company"
                type="text"
                name="b_c02949f5de137184b156da9bc_e06ba0649d"
                tabIndex={-1}
                defaultValue=""
              />
            </div>

            <button
              type="submit"
              name="subscribe"
              className="btn-primary mt-6 w-full sm:w-auto"
              data-testid="button-contact-submit"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}