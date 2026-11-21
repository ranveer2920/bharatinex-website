import { useEffect } from "react";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export type LegalSection = { title: string; content: string[] };
type Props = { title: string; eyebrow: string; description: string; path: string; sections: LegalSection[] };

export default function LegalPage({ title, eyebrow, description, path, sections }: Props) {
  useEffect(() => {
    document.title = `${title} | Bharatinex Technologies Private Limited`;
    const meta = (key: string, value: string, attr = "name") => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, key); document.head.appendChild(el); }
      el.content = value;
    };
    meta("description", description);
    meta("og:title", document.title, "property");
    meta("og:description", description, "property");
    meta("og:url", `https://bharatinex.com${path}`, "property");
    meta("og:type", "website", "property");
    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = `https://bharatinex.com${path}`;
  }, [title, description, path]);

  return <div style={{ minHeight: "100vh", background: "#f7f9fc", color: "#172338", fontFamily: "inherit" }}>
    <header style={{ padding: "22px 6%", background: "#fff", borderBottom: "1px solid #e7ebf1" }}>
      <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "#172338", textDecoration: "none", fontWeight: 700 }}><ArrowLeft size={18}/> Back to Bharatinex</a>
    </header>
    <main style={{ width: "min(900px, 88%)", margin: "0 auto", padding: "64px 0 80px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#168b78", fontSize: 13, fontWeight: 700, letterSpacing: "1.5px", marginBottom: 18 }}><ShieldCheck size={19}/> {eyebrow}</div>
      <h1 style={{ fontSize: "clamp(36px, 6vw, 58px)", lineHeight: 1.1, letterSpacing: "-2px", margin: "0 0 18px", color: "#14243b" }}>{title}</h1>
      <p style={{ color: "#64748b", lineHeight: 1.7, marginBottom: 12 }}>{description}</p>
      <p style={{ color: "#64748b", fontSize: 14, marginBottom: 34 }}>Effective Date: 22 November 2026 · Last Updated: 22 November 2026</p>
      <div style={{ background: "#fff", border: "1px solid #e7ebf1", borderRadius: 18, padding: "clamp(22px, 5vw, 42px)", boxShadow: "0 12px 40px rgba(20, 35, 55, 0.04)" }}>
        {sections.map((s,i)=><section key={s.title} style={{ marginBottom: i===sections.length-1?0:32, paddingBottom:i===sections.length-1?0:28, borderBottom:i===sections.length-1?"none":"1px solid #edf0f4" }}>
          <h2 style={{ color:"#172d49",fontSize:20,margin:"0 0 14px",letterSpacing:"-0.3px" }}>{s.title}</h2>
          {s.content.map((p,j)=><p key={j} style={{ color:"#526176",fontSize:15,lineHeight:1.85,whiteSpace:"pre-line",margin:"0 0 12px" }}>{p}</p>)}
        </section>)}
      </div>
      <nav aria-label="Legal pages" style={{ display:"flex",flexWrap:"wrap",gap:18,justifyContent:"center",marginTop:28,fontSize:14 }}>
        <a href="/privacy-policy">Privacy Policy</a><a href="/terms-and-conditions">Terms &amp; Conditions</a><a href="/cookie-policy">Cookie Policy</a>
      </nav>
      <p style={{ textAlign:"center",color:"#7b8798",fontSize:13,marginTop:24 }}>© {new Date().getFullYear()} Bharatinex Technologies Private Limited. All rights reserved.</p>
    </main>
  </div>;
}
