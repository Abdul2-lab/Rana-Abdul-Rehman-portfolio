import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2, XCircle } from "lucide-react";
import { profile, formspreeEndpoint } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  // status: "idle" | "sending" | "success" | "error"
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formspreeEndpoint.includes("YOUR_FORM_ID")) {
      // Formspree endpoint not configured yet — fall back to mailto so the
      // form still works while you finish setup (see README).
      const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
      const body = encodeURIComponent(
        `${form.message}\n\n— ${form.name} (${form.email})`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const infoItems = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
    { icon: MapPin, label: "Location", value: profile.location, href: null },
    { icon: LinkedinIcon, label: "LinkedIn", value: profile.linkedin, href: `https://${profile.linkedin}` },
    { icon: GithubIcon, label: "GitHub", value: profile.github, href: `https://${profile.github}` },
  ];

  return (
    <section
      id="contact"
      className="bg-slate-50 dark:bg-darkcard2/40 py-16 md:py-20 transition-colors duration-300 scroll-mt-16"
    >
      <div className="section-container">
        <ScrollReveal variant="up">
        <h2 className="section-eyebrow">
          <span className="section-num">06</span> Contact
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-1 mb-8">
          Let's work together
        </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal variant="left" className="space-y-5">
            {infoItems.map((item) => {
              const Wrapper = item.href ? "a" : "div";
              const wrapperProps = item.href
                ? {
                    href: item.href,
                    target: item.href.startsWith("http") ? "_blank" : undefined,
                    rel: item.href.startsWith("http") ? "noreferrer" : undefined,
                  }
                : {};
              return (
                <Wrapper
                  key={item.label}
                  {...wrapperProps}
                  className={`flex items-start gap-4 group ${
                    item.href ? "cursor-pointer" : ""
                  }`}
                >
                  <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <item.icon size={18} />
                  </span>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                    <p className="font-medium text-slate-800 dark:text-slate-200 break-all group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </Wrapper>
              );
            })}
          </ScrollReveal>

          <ScrollReveal variant="right" delay={100}>
          <form onSubmit={handleSubmit} className="card p-6 space-y-4">
            <div>
              <label className="text-sm text-slate-500 dark:text-slate-400 mb-1 block">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-slate-500 dark:text-slate-400 mb-1 block">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-sm text-slate-500 dark:text-slate-400 mb-1 block">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Have an idea? Let's talk!"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full justify-center hover:scale-[1.02] active:scale-[0.98] transition-transform disabled:opacity-60 disabled:pointer-events-none"
            >
              {status === "sending" ? (
                "Sending…"
              ) : status === "success" ? (
                <>
                  <CheckCircle2 size={16} /> Message Sent!
                </>
              ) : status === "error" ? (
                <>
                  <XCircle size={16} /> Failed — try again
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
            {status === "success" && (
              <p className="text-sm text-emerald-500 text-center">
                Thanks! Your message has been sent — I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-500 text-center">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
