
import { ArrowLeft, ShieldCheck } from "lucide-react";

const sections = [
  {
    title: "1. Introduction",
    content: [
      "Bharatinex Technologies Private Limited (\"Bharatinex\", \"we\", \"our\" or \"us\") respects your privacy and is committed to handling personal information responsibly.",
      "This Privacy Policy explains what information may be collected when you visit bharatinex.com or contact us through our website, how that information is used, and the choices available to you."
    ]
  },
  {
    title: "2. Information We Collect",
    content: [
      "When you submit an enquiry through our website, we may collect the following information:",
      "• Your name\n• Your work email address\n• Your company name, if provided\n• The enquiry category you select (general enquiry or query / support)\n• The message and other information you choose to include",
      "When you visit our website, technical information may also be processed by our hosting and infrastructure providers. This may include your IP address, browser type, device information, access timestamps and server or security logs."
    ]
  },
  {
    title: "3. How We Use Your Information",
    content: [
      "We may use the information collected to:",
      "• Respond to general enquiries and business requests\n• Respond to support questions\n• Understand and address the requirements described in your message\n• Maintain, secure and improve our website\n• Prevent misuse, spam, fraud or security incidents\n• Meet applicable legal and regulatory obligations"
    ]
  },
  {
    title: "4. Contact Form and Email Processing",
    content: [
      "Our website contact form uses Web3Forms to process and deliver submitted enquiries.",
      "General enquiries are routed to contact@bharatinex.com. Queries and support requests are routed to support@bharatinex.com.",
      "Information submitted through the form is processed by Web3Forms for delivery to the relevant inbox. Its handling of information is also subject to its own privacy policy: https://web3forms.com/privacy."
    ]
  },
  {
    title: "5. Sharing of Information",
    content: [
      "We do not sell your personal information.",
      "We may share information with service providers who help us operate, host, secure or maintain our website and enquiry process, including website hosting and contact-form processing providers.",
      "We may also disclose information where required by applicable law, a valid legal process or a competent government authority, or where reasonably necessary to protect our rights, users or services."
    ]
  },
  {
    title: "6. Data Retention",
    content: [
      "We retain enquiry information for as long as reasonably necessary to respond to your request, maintain relevant business records, resolve disputes, meet legal obligations and protect our legitimate business interests.",
      "Retention periods may vary depending on the nature of the enquiry and applicable legal requirements."
    ]
  },
  {
    title: "7. Data Security",
    content: [
      "We take reasonable technical and organisational measures intended to protect information against unauthorised access, alteration, disclosure or destruction.",
      "However, no method of transmission or electronic storage is completely secure. We cannot guarantee absolute security."
    ]
  },
  {
    title: "8. Your Privacy Rights",
    content: [
      "Subject to applicable law, you may have rights to request access to, correction of or deletion of personal information that we hold about you, and to raise concerns about how it is handled.",
      "To make a privacy-related request, contact us using the details in the Contact Us section. We may need to verify your identity before responding."
    ]
  },
  {
    title: "9. Cookies and Similar Technologies",
    content: [
      "Our website and its hosting infrastructure may use essential technical mechanisms or server logs to support website delivery, security and reliability.",
      "If we introduce analytics, advertising or other non-essential tracking technologies, we will update this policy and provide any notices or choices required by applicable law."
    ]
  },
  {
    title: "10. Children's Privacy",
    content: [
      "Our website is intended for a general business and professional audience and is not directed at children. We do not knowingly seek to collect personal information from children through the website."
    ]
  },
  {
    title: "11. Third-Party Websites",
    content: [
      "Our website may contain links to third-party websites or services. We are not responsible for the privacy practices, content or security of those third parties. We encourage you to review their privacy policies before sharing information with them."
    ]
  },
  {
    title: "12. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, services or applicable legal requirements. The updated version will be published on this page with a revised Last Updated date."
    ]
  },
  {
    title: "13. Contact Us",
    content: [
      "For questions, concerns or requests relating to this Privacy Policy or the handling of your personal information, you can contact us:",
      "Bharatinex Technologies Private Limited\nEmail: contact@bharatinex.com\nSupport: support@bharatinex.com\nPhone: +91 94236 99318\nWebsite: https://bharatinex.com\nRegistered office: S. No. 98/2/7/9/10/2, FL. No. 201, First Line, Gadhinglaj, Kolhapur, Maharashtra, India – 416502\nCIN: U58200PN2026PTC262624"
    ]
  }
];

function PrivacyPolicy() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f9fc",
        color: "#172338",
        fontFamily: "inherit"
      }}
    >
      <header
        style={{
          padding: "22px 6%",
          background: "#ffffff",
          borderBottom: "1px solid #e7ebf1"
        }}
      >
        <a
          href="/"
          aria-label="Back to Bharatinex homepage"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            color: "#172338",
            textDecoration: "none",
            fontWeight: 700
          }}
        >
          <ArrowLeft size={18} />
          Back to Bharatinex
        </a>
      </header>

      <main
        style={{
          width: "min(900px, 88%)",
          margin: "0 auto",
          padding: "64px 0 80px"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "#168b78",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "1.5px",
            marginBottom: 18
          }}
        >
          <ShieldCheck size={19} />
          YOUR PRIVACY MATTERS
        </div>

        <h1
          style={{
            fontSize: "clamp(36px, 6vw, 58px)",
            lineHeight: 1.1,
            letterSpacing: "-2px",
            margin: "0 0 18px",
            color: "#14243b"
          }}
        >
          Privacy Policy
        </h1>

        <p style={{ color: "#64748b", lineHeight: 1.7, marginBottom: 12 }}>
          How Bharatinex Technologies Private Limited collects, uses and
          protects information when you use our website.
        </p>

        <p style={{ color: "#64748b", fontSize: 14, marginBottom: 34 }}>
          Effective Date: 22 November 2026 · Last Updated: 22 November 2026
        </p>

        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e7ebf1",
            borderRadius: 18,
            padding: "clamp(22px, 5vw, 42px)",
            boxShadow: "0 12px 40px rgba(20, 35, 55, 0.04)"
          }}
        >
          {sections.map((section, index) => (
            <section
              key={section.title}
              style={{
                marginBottom: index === sections.length - 1 ? 0 : 32,
                paddingBottom: index === sections.length - 1 ? 0 : 28,
                borderBottom:
                  index === sections.length - 1
                    ? "none"
                    : "1px solid #edf0f4"
              }}
            >
              <h2
                style={{
                  color: "#172d49",
                  fontSize: 20,
                  margin: "0 0 14px",
                  letterSpacing: "-0.3px"
                }}
              >
                {section.title}
              </h2>

              {section.content.map((paragraph, paragraphIndex) => (
                <p
                  key={paragraphIndex}
                  style={{
                    color: "#526176",
                    fontSize: 15,
                    lineHeight: 1.85,
                    whiteSpace: "pre-line",
                    margin: "0 0 12px"
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            color: "#7b8798",
            fontSize: 13,
            marginTop: 28
          }}
        >
          © {new Date().getFullYear()} Bharatinex Technologies Private Limited.
          All rights reserved.
        </p>
      </main>
    </div>
  );
}

export default PrivacyPolicy;
