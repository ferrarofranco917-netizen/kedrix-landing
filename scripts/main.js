// KEDRIX — Landing main.js (FIXED)
const CONFIG = {
  gasEndpoint: "https://script.google.com/macros/s/AKfycbxFvwj64WGRqm_cFAzHoVOZQije1yvoQ5-bZdCmhjZzMtqopwmEvInBOCgeJreM-Dpm/exec",
  betaAppUrl: "https://beta.kedrix.tech/",
  defaultTrialDays: 14
};

async function postToBackend(body) {
  const res = await fetch(CONFIG.gasEndpoint, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(body)
  });
  const text = await res.text();
  try { return JSON.parse(text); } catch(e) { return { ok:false }; }
}

function isValidResponse(r) {
  return r && (r.ok === true || r.success === true) && r.tester_id;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("beta-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name")?.value || "";
    const email = document.getElementById("email")?.value || "";

    const payload = {
      action: "register_beta_request",
      name,
      email,
      commitment: true,
      source: "landing_private_beta"
    };

    const res = await postToBackend(payload);

    if (!isValidResponse(res)) {
      alert("Errore attivazione beta. Riprova.");
      return;
    }

    const url = CONFIG.betaAppUrl +
      "?email=" + encodeURIComponent(email) +
      "&tester_id=" + encodeURIComponent(res.tester_id);

    window.location.href = url;
  });
});
