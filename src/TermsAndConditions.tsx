import LegalPage from "./LegalPage";

const sections = [
  {
    "title": "1. About These Terms",
    "content": [
      "These Terms & Conditions (\"Terms\") govern your access to and use of bharatinex.com (the \"Website\"), operated by Bharatinex Technologies Private Limited (\"Bharatinex\", \"we\", \"our\" or \"us\").",
      "By accessing or using the Website, you agree to these Terms. If you do not agree, please do not use the Website."
    ]
  },
  {
    "title": "2. Website Information",
    "content": [
      "The Website provides general information about Bharatinex, its areas of technology activity and ways to contact the company.",
      "Website content is provided for general informational purposes. It does not, by itself, constitute a commercial offer, proposal, quotation, technical specification, professional advice or commitment to provide a particular service."
    ]
  },
  {
    "title": "3. Acceptable Use",
    "content": [
      "You agree to use the Website lawfully and responsibly. You must not:",
      "• Use the Website in violation of applicable law.\n• Attempt unauthorised access to the Website or related systems.\n• Introduce malware or malicious code.\n• Copy or exploit Website content in a way that infringes rights or violates law.\n• Submit false, abusive, unlawful or unsolicited material through the contact form."
    ]
  },
  {
    "title": "4. Enquiries and Communications",
    "content": [
      "You agree that information you submit is accurate to the best of your knowledge and that you have the right to share it.",
      "Submitting an enquiry does not create a client, agency, employment, partnership or other contractual relationship. Specific services require a separate written agreement accepted by the relevant parties."
    ]
  },
  {
    "title": "5. Intellectual Property",
    "content": [
      "Unless otherwise stated, Website text, design, graphics, branding, logos and other materials are owned by or used with permission by Bharatinex and may be protected by intellectual property laws.",
      "You must not reproduce, modify, distribute or commercially exploit Website materials without prior written permission, except where applicable law permits."
    ]
  },
  {
    "title": "6. Third-Party Services and Links",
    "content": [
      "The Website may link to third-party websites or use third-party services, including hosting and contact-form processing providers. Those services are operated independently and may be governed by their own terms and privacy policies.",
      "We do not control and are not responsible for third-party websites, services, content, availability or practices."
    ]
  },
  {
    "title": "7. Availability and Changes",
    "content": [
      "We aim to keep the Website available and information reasonably current, but do not guarantee uninterrupted access, error-free operation, completeness or accuracy of every item of content.",
      "We may change, suspend or remove Website content or functionality where reasonably necessary."
    ]
  },
  {
    "title": "8. Disclaimer",
    "content": [
      "To the maximum extent permitted by applicable law, the Website and its content are provided on an \"as is\" and \"as available\" basis, without warranties or representations of any kind.",
      "Nothing in these Terms excludes a warranty, right or remedy that cannot lawfully be excluded under applicable law."
    ]
  },
  {
    "title": "9. Limitation of Liability",
    "content": [
      "To the maximum extent permitted by applicable law, Bharatinex will not be liable for indirect, incidental, special or consequential loss arising from or related to use of, or inability to use, the Website.",
      "Nothing in these Terms limits liability where such limitation is prohibited by applicable law."
    ]
  },
  {
    "title": "10. Privacy",
    "content": [
      "Our handling of personal information submitted through the Website is described in our Privacy Policy. Please review it before submitting personal information."
    ]
  },
  {
    "title": "11. Governing Law and Jurisdiction",
    "content": [
      "These Terms are governed by the laws of India. Subject to mandatory applicable law, courts having jurisdiction in Maharashtra, India will have jurisdiction over disputes arising from these Terms or use of the Website."
    ]
  },
  {
    "title": "12. Changes to These Terms",
    "content": [
      "We may revise these Terms from time to time. The updated version will be published on this page with a revised Last Updated date."
    ]
  },
  {
    "title": "13. Contact Us",
    "content": [
      "Bharatinex Technologies Private Limited\nEmail: contact@bharatinex.com\nSupport: support@bharatinex.com\nPhone: +91 94236 99318\nWebsite: https://bharatinex.com\nRegistered office: S. No. 98/2/7/9/10/2, FL. No. 201, First Line, Gadhinglaj, Kolhapur, Maharashtra, India – 416502\nCIN: U58200PN2026PTC262624"
    ]
  }
];

export default function TermsAndConditions() {
 return <LegalPage title="Terms & Conditions" eyebrow="WEBSITE TERMS OF USE" description="The terms that apply when you access or use the Bharatinex Technologies Private Limited website." path="/terms-and-conditions" sections={sections} />;
}
