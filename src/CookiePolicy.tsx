import LegalPage from "./LegalPage";

const sections = [
  {
    "title": "1. Introduction",
    "content": [
      "This Cookie Policy explains how Bharatinex Technologies Private Limited (\"Bharatinex\", \"we\", \"our\" or \"us\") describes the use of cookies and similar technologies on bharatinex.com.",
      "This policy should be read together with our Privacy Policy."
    ]
  },
  {
    "title": "2. What Are Cookies?",
    "content": [
      "Cookies are small text files that a website may store on your browser or device. Similar technologies may include local storage, pixels, tags and scripts. They can support website functionality, security, preferences, measurement or advertising."
    ]
  },
  {
    "title": "3. Technologies Used on This Website",
    "content": [
      "The website is designed as a company information and contact website. We do not intentionally configure advertising cookies or cross-site behavioural advertising as part of the current website setup.",
      "Our hosting, security, delivery or embedded third-party resources may use technical mechanisms or process server logs needed to deliver, protect and operate the website. The precise technologies may change as the infrastructure changes.",
      "The contact form is processed by Web3Forms. When you submit the form, Web3Forms may process technical information under its own policies."
    ]
  },
  {
    "title": "4. Third-Party Services",
    "content": [
      "Third-party providers may process information when their services are used to deliver the website or contact form. Their technologies and practices are controlled by those providers.",
      "For contact-form processing information, see https://web3forms.com/privacy."
    ]
  },
  {
    "title": "5. Managing Cookies",
    "content": [
      "You can use your browser settings to view, block or delete cookies and control certain site data. If you block essential technologies, some parts of a website may not function as intended.",
      "Browser controls vary by browser and device. Please consult your browser provider for instructions."
    ]
  },
  {
    "title": "6. Changes to This Policy",
    "content": [
      "We may update this Cookie Policy if our website technologies, service providers or legal requirements change.",
      "If we introduce analytics, advertising pixels, chat widgets or other non-essential tracking technologies, we will review required notices and consent mechanisms before using them."
    ]
  },
  {
    "title": "7. Contact Us",
    "content": [
      "Bharatinex Technologies Private Limited\nEmail: contact@bharatinex.com\nSupport: support@bharatinex.com\nPhone: +91 94236 99318\nWebsite: https://bharatinex.com\nRegistered office: S. No. 98/2/7/9/10/2, FL. No. 201, First Line, Gadhinglaj, Kolhapur, Maharashtra, India – 416502\nCIN: U58200PN2026PTC262624"
    ]
  }
];

export default function CookiePolicy() {
 return <LegalPage title="Cookie Policy" eyebrow="COOKIES & WEBSITE TECHNOLOGIES" description="Information about cookies and similar technologies that may be used when you visit bharatinex.com." path="/cookie-policy" sections={sections} />;
}
