import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { submitContactForm } from "@/services/wordpress";

export default function ContactForm({
  formId = undefined,
  fieldMap = {
    name: "your-name",
    company: "your-company",
    email: "your-email",
    phone: "your-phone",
    message: "your-message",
    hear: "your-hear",
  },
  className = "",
  submitLabel = undefined,
  submitAlign = "full",
}) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    hear: "",
  });
  const [state, setState] = useState({ status: "idle", message: "", invalid: [] });
  const { executeRecaptcha } = useGoogleReCaptcha();

  const inputCls =
    "w-full text-[14px] px-4 py-3.5 rounded border border-[#e5e7eb] focus:border-gold focus:outline-none focus:ring-[3px] focus:ring-gold/15 transition-all bg-white";

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const isInvalid = (key) =>
    state.invalid.some((i) => i.field === fieldMap[key] || i.into === fieldMap[key]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      setState({
        status: "error",
        message: "reCAPTCHA not ready. Please try again.",
        invalid: [],
      });
      return;
    }

    const token = await executeRecaptcha("contact_form");

    setState({ status: "submitting", message: "", invalid: [] });

    const payload = Object.fromEntries(
      Object.entries(fieldMap).map(([k, wpName]) => [wpName, form[k] || ""]),
    );

    try {
      const res = await submitContactForm(payload, formId, token);
      if (res.ok) {
        setState({ status: "success", message: res.message, invalid: [] });
        setForm({ name: "", company: "", email: "", phone: "", message: "", hear: "" });
      } else {
        setState({
          status: "error",
          message: res.message || "Something went wrong. Please try again.",
          invalid: res.invalid_fields || [],
        });
      }
    } catch (err) {
      setState({
        status: "error",
        message: "Network error — please try again in a moment.",
        invalid: [],
      });
    }
  };

  if (state.status === "success") {
    return (
      <div className={`p-6 rounded border border-gold/30 bg-gold/5 text-[14px] text-[#0A0B14] ${className}`}>
        Thank you — your message has been received. We'll be in touch shortly.
      </div>
    );
  }

  const btnContent = state.status === "submitting"
    ? "Sending…"
    : submitLabel
      ? submitLabel
      : <> Send Your Message <ArrowRight size={14} /></>;

  const btnWrapStyle = submitAlign === "right"
    ? { display: "flex", justifyContent: "flex-end" }
    : {};

  const btnStyle = submitAlign === "right"
    ? { padding: "12px 32px", fontSize: 13, width: "auto" }
    : { padding: "14px 28px", fontSize: 15, width: "100%" };

  return (
    <form onSubmit={onSubmit} className={`space-y-5 ${className}`}>
      <div className="grid md:grid-cols-2 gap-5">
        <input
          className={`${inputCls} ${isInvalid("name") ? "border-red-400" : ""}`}
          placeholder="Full Name"
          required
          value={form.name}
          onChange={onChange("name")}
        />
        <input
          className={inputCls}
          placeholder="Company Name"
          value={form.company}
          onChange={onChange("company")}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <input
          type="email"
          className={`${inputCls} ${isInvalid("email") ? "border-red-400" : ""}`}
          placeholder="Email Address"
          required
          value={form.email}
          onChange={onChange("email")}
        />
        <input
          className={inputCls}
          placeholder="Phone Number"
          value={form.phone}
          onChange={onChange("phone")}
        />
      </div>
      <textarea
        className={`${inputCls} min-h-[140px] resize-y ${isInvalid("message") ? "border-red-400" : ""}`}
        placeholder="How can we help?"
        required
        value={form.message}
        onChange={onChange("message")}
      />
      <select className={inputCls} value={form.hear} onChange={onChange("hear")}>
        <option value="">How did you hear about us?</option>
        <option>LinkedIn</option>
        <option>Referral</option>
        <option>Search</option>
        <option>Event</option>
        <option>Other</option>
      </select>

      {state.status === "error" && (
        <div className="p-3 rounded border border-red-200 bg-red-50 text-[13px] text-red-700">
          {state.message}
        </div>
      )}

      <div style={btnWrapStyle}>
        <button
          type="submit"
          disabled={state.status === "submitting"}
          className="btn-gold disabled:opacity-60"
          style={btnStyle}
        >
          {btnContent}
        </button>
      </div>

      <p className="text-[11px] text-gray-400 mt-1">
        Protected by reCAPTCHA —{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline">Privacy</a>{" "}
        &{" "}
        <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" className="underline">Terms</a>
      </p>
    </form>
  );
}