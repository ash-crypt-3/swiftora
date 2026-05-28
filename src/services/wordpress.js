// WordPress REST API service
// Talks to the swiftoraconsulting.co.ke WordPress instance.

const WP_API = import.meta.env.VITE_WP_API_URL || "https://swiftoraconsulting.co.ke/wp-json/wp/v2";
const CF7_API = import.meta.env.VITE_WP_CF7_URL || "https://swiftoraconsulting.co.ke/wp-json/contact-form-7/v1";
const CONTACT_FORM_ID = import.meta.env.VITE_WP_CONTACT_FORM_ID || "4609";

export const wpConfig = { WP_API, CF7_API, CONTACT_FORM_ID };

/** Generic fetcher — used by SWR. */
export const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const err = new Error(`WordPress request failed: ${res.status}`);
    err.status = res.status;
    throw err;
  }
  return res.json();
};

/** Build the posts list URL with embedded media + author + terms. */
export const postsUrl = ({ page = 1, perPage = 12, search = "" } = {}) => {
  const params = new URLSearchParams({
    _embed: "1",
    per_page: String(perPage),
    page: String(page),
  });
  if (search) params.set("search", search);
  return `${WP_API}/posts?${params.toString()}`;
};

/** Single post by slug. Returns the first match or null. */
export const postBySlugUrl = (slug) =>
  `${WP_API}/posts?_embed=1&slug=${encodeURIComponent(slug)}`;

export const fetchPosts = (opts) => fetcher(postsUrl(opts));

export const fetchPostBySlug = async (slug) => {
  const arr = await fetcher(postBySlugUrl(slug));
  return Array.isArray(arr) && arr.length ? arr[0] : null;
};

/** Submit a Contact Form 7 entry. `fields` is a plain object of CF7 field names. */
export const submitContactForm = async (fields, formId = CONTACT_FORM_ID, token = null) => {
  const data = new FormData();

  // Add all form fields
  Object.entries(fields).forEach(([k, v]) => data.append(k, v ?? ""));

  // Add required CF7 hidden fields
  data.append("_wpcf7_unit_tag", `wpcf7-f${formId}-o1`);
  data.append("_wpcf7", formId);

  // reCAPTCHA token is intentionally not sent to CF7
  // to avoid conflicting with CF7's built-in reCAPTCHA validation
  // if (token) data.append("g-recaptcha-response", token);

  const res = await fetch(`${CF7_API}/contact-forms/${formId}/feedback`, {
    method: "POST",
    body: data,
  });
  const json = await res.json().catch(() => ({}));
  return {
    ok: res.ok && (json.status === "mail_sent" || json.status === "mail_failed" ? json.status === "mail_sent" : res.ok),
    status: json.status,
    message: json.message || (res.ok ? "Sent" : "Failed"),
    invalid_fields: json.invalid_fields || [],
    raw: json,
  };
};

/** Helpers for embedded data. */
export const getFeaturedImage = (post) => {
  const media = post?._embedded?.["wp:featuredmedia"]?.[0];
  return media?.source_url || null;
};

export const getAuthorName = (post) =>
  post?._embedded?.author?.[0]?.name || "Swiftora";

export const getCategory = (post) => {
  const terms = post?._embedded?.["wp:term"]?.flat?.() || [];
  const cat = terms.find((t) => t.taxonomy === "category");
  return cat?.name || "";
};

export const formatDate = (iso) => {
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
};