// WordPress REST API service
const WP_API = import.meta.env.VITE_WP_API_URL || "https://swiftoraconsulting.co.ke/wp-json/wp/v2";
const CF7_API = import.meta.env.VITE_WP_CF7_URL || "https://swiftoraconsulting.co.ke/wp-json/contact-form-7/v1";
const CONTACT_FORM_ID = import.meta.env.VITE_WP_CONTACT_FORM_ID || "4609";

export const wpConfig = { WP_API, CF7_API, CONTACT_FORM_ID };

export const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const err = new Error(`WordPress request failed: ${res.status}`);
    err.status = res.status;
    throw err;
  }
  return res.json();
};

export const postsUrl = ({ page = 1, perPage = 12, search = "" } = {}) => {
  const params = new URLSearchParams({
    _embed: "1",
    per_page: String(perPage),
    page: String(page),
  });
  if (search) params.set("search", search);
  return `${WP_API}/posts?${params.toString()}`;
};

export const postBySlugUrl = (slug) =>
  `${WP_API}/posts?_embed=1&slug=${encodeURIComponent(slug)}`;

export const fetchPosts = (opts) => fetcher(postsUrl(opts));

export const fetchPostBySlug = async (slug) => {
  const arr = await fetcher(postBySlugUrl(slug));
  return Array.isArray(arr) && arr.length ? arr[0] : null;
};

export const submitContactForm = async (fields, formId = CONTACT_FORM_ID, token = null) => {
  const data = new FormData();

  Object.entries(fields).forEach(([k, v]) => data.append(k, v ?? ""));

  data.append("_wpcf7_unit_tag", `wpcf7-f${formId}-o1`);
  data.append("_wpcf7", formId);

  // Send the reCAPTCHA v3 token — CF7 expects this field name
  if (token) data.append("_wpcf7_recaptcha_response", token);

  const res = await fetch(`${CF7_API}/contact-forms/${formId}/feedback`, {
    method: "POST",
    body: data,
  });
  const json = await res.json().catch(() => ({}));
  return {
    ok: res.ok && json.status === "mail_sent",
    status: json.status,
    message: json.message || (res.ok ? "Sent" : "Failed"),
    invalid_fields: json.invalid_fields || [],
    raw: json,
  };
};

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