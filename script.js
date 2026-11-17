const data = {
  hero: { tag: "EXECUTIVE PROFILE", text: "Branch Banking Professional skilled in financial reconciliation, KYC compliance, internal controls, and daily/weekly MIS productivity dashboards." },
  hdfc: {
    tag: "HDFC BANK • PUNE",
    title: "Branch Operations Manager",
    sub: "HDFC Bank, Pune (2020 – Present) • Winner: Best Audit Rated Branch 2020–21",
    items: [
      "Reconcile assets between finance and operations while researching accounting issues for strict regulatory compliance.",
      "Maintain detailed records of crucial financial transactions and author accounting policies to strengthen internal control systems.",
      "Conduct branch-level risk assessments, identify control gaps, and mentor high-performing operations teams."
    ]
  },
  scb: {
    tag: "STANDARD CHARTERED • PUNE",
    title: "Assistant Operations Manager",
    sub: "Standard Chartered Bank, Pune",
    items: [
      "Recruited and oversaw onboarding training for all incoming branch employees and executed annual staff performance appraisals.",
      "Co-developed annual branch business plans focused on cost control and maximum branch profitability.",
      "Managed complex financial service lines across diverse client segments with high retention."
    ]
  },
  audit: { tag: "RECOGNITION", text: "Awarded Best Audit Rated Branch (2020–21) at HDFC Bank Pune for zero-defect compliance and internal control rigor." },
  risk: { tag: "CORE CAPABILITIES", text: "KYC Operations • Financial Reporting • Internal Controls • Risk Mitigation • Team Leadership • English, Hindi, Punjabi." },
  edu: {
    tag: "ACADEMIC FOUNDATION",
    title: "Accounting & Finance",
    sub: "SRCC & St. Xavier's College",
    items: [
      "M.Com (Accounting and Finance) — Shri Ram College of Commerce (SRCC), 2018.",
      "B.Com (Accounting and Finance) — St. Xavier's College, 2017.",
      "Core Skills: Branch Operations, KYC Operations, Financial Reporting, Process Improvement, Compliance Management."
    ]
  },
  contact: {
    tag: "DIRECT CONTACT",
    title: "Smriti Ahuja",
    sub: "23, B.T. Road, New Delhi",
    items: [
      "Email: smahuge@gmail.com",
      "Phone: +91 9674512356",
      "Languages: English, Hindi, Punjabi"
    ]
  }
};

const card = document.getElementById('preview-card');
const lines = document.querySelectorAll('.kinetic-line');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;
  lines.forEach((line, i) => {
    const dir = i % 2 === 0 ? 1 : -1;
    line.style.transform = `translateX(${x * 20 * dir}px) skewX(${x * -3}deg)`;
  });
  bar1.style.transform = `translateX(${x * 90}px)`;
  bar2.style.transform = `translateX(${x * -90}px)`;
  card.style.left = e.clientX + 'px';
  card.style.top = (e.clientY - 70) + 'px';
});

document.querySelectorAll('[data-key]').forEach(el => {
  el.addEventListener('mouseenter', () => {
    const item = data[el.dataset.key];
    if(item) {
      document.getElementById('card-tag').textContent = item.tag;
      document.getElementById('card-text').textContent = item.text || item.sub;
      card.classList.add('active');
    }
  });
  el.addEventListener('mouseleave', () => card.classList.reset && card.classList.remove('active') || card.classList.remove('active'));
});

const drawer = document.getElementById('drawer');

function syncRoute() {
  const hash = window.location.hash.replace('#', '');
  const item = data[hash];

  if (item) {
    document.getElementById('drawer-title').textContent = item.title || item.tag;
    document.getElementById('drawer-sub').textContent = item.sub || item.text;
    const ul = document.getElementById('drawer-list');
    ul.innerHTML = (item.items || [item.text]).map(i => `<li>${i}</li>`).join('');
    drawer.classList.add('open');
  } else {
    drawer.classList.remove('open');
  }
}

window.addEventListener('hashchange', syncRoute);
window.addEventListener('load', syncRoute);