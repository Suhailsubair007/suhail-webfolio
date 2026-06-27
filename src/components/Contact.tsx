import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import emailjs from "@emailjs/browser";
import { Highlight, themes } from "prism-react-renderer";
import { contactData, toastMessages } from "../assets/lib/data.tsx";
import { useSectionInView } from "../assets/lib/hooks";
import { ToastContainer, toast } from "react-toastify";
import { useTheme } from "../context/theme-context";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

/* ─── theme tokens for the code editor ─── */
const editorColors = {
  dark: {
    titleBar:  "#0d1117",
    tabBar:    "#161b22",
    codeArea:  "#0d1117",
    terminal:  "#0a0e14",
    statusBar: "#0f1f12",
    lineNum:   "#30363d",
    tabText:   "rgba(255,255,255,0.8)",
    tabIcon:   "#58a6ff",
    langLabel: "rgba(255,255,255,0.4)",
    termLabel: "rgba(255,255,255,0.3)",
    termLine:  "rgba(255,255,255,0.1)",
    termText:  "#8b9cff",
    border:    "rgba(255,255,255,0.08)",
  },
  light: {
    titleBar:  "#f6f8fa",
    tabBar:    "#eaeef2",
    codeArea:  "#ffffff",
    terminal:  "#f6f8fa",
    statusBar: "#e8ecf0",
    lineNum:   "#8c959f",
    tabText:   "rgba(36,41,47,0.8)",
    tabIcon:   "#0969da",
    langLabel: "rgba(36,41,47,0.5)",
    termLabel: "rgba(36,41,47,0.4)",
    termLine:  "rgba(36,41,47,0.1)",
    termText:  "#6639ba",
    border:    "rgba(36,41,47,0.1)",
  },
};

const Contact: React.FC = () => {
  const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [name, setName]                         = useState("");
  const [email, setEmail]                       = useState("");
  const [subject, setSubject]                   = useState("");
  const [message, setMessage]                   = useState("");
  const [lastUpdatedField, setLastUpdatedField] = useState<string | null>(null);
  const [focusedField, setFocusedField]         = useState<string | null>(null);
  const [isSending, setIsSending]               = useState(false);
  const [cursorBlink, setCursorBlink]           = useState(true);

  const { ref } = useSectionInView("Contact");
  const { theme } = useTheme();
  const ec = editorColors[theme];

  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress   = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  useEffect(() => {
    const id = setInterval(() => setCursorBlink((p) => !p), 500);
    return () => clearInterval(id);
  }, []);

  const notifySentForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        { name, email, subject, message, time: new Date().toLocaleString() },
        publicKey
      );
      toast.success(toastMessages.successEmailSent.en);
      setName(""); setEmail(""); setSubject(""); setMessage("");
    } catch {
      toast.error(toastMessages.failedEmailSent.en);
    } finally {
      setIsSending(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name: field, value } = e.target;
    if (field === "name")         setName(value);
    else if (field === "email")   setEmail(value);
    else if (field === "subject") setSubject(value);
    else if (field === "message") setMessage(value);
    setLastUpdatedField(field);
  };

  const fieldValue = (fieldName: string) => {
    if (fieldName === "name")    return name;
    if (fieldName === "email")   return email;
    if (fieldName === "subject") return subject;
    return message;
  };

  const inputStyle = (fieldName: string): React.CSSProperties => {
    const isFocused = focusedField === fieldName;
    const isFilled  = !!fieldValue(fieldName);
    return {
      borderRadius: "1.4rem",
      border: `2px solid ${
        isFocused ? "var(--orange)"
        : isFilled ? "rgba(34,197,94,0.45)"
        : theme === "dark" ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)"
      }`,
      boxShadow: isFocused
        ? "0 0 0 4px rgba(245,158,11,0.12), 0 4px 24px rgba(245,158,11,0.08)"
        : isFilled
        ? "0 0 0 3px rgba(34,197,94,0.08)"
        : "none",
      transform: isFocused ? "translateY(-2px)" : "none",
      transition: "border 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
      background: theme === "dark" ? "#1a2535" : "#f6f8fa",
      color: theme === "dark" ? "#fff" : "var(--darkblue)",
      padding: "1.8rem 2rem",
      fontSize: "1.6rem",
      width: "100%",
      outline: "none",
      fontFamily: "poppins-regular, sans-serif",
      marginBottom: 0,
      resize: "none" as const,
    };
  };

  const cur = (field: string) =>
    lastUpdatedField === field ? (cursorBlink ? "█" : " ") : "";

  const wordWrap = (text: string, maxLen: number, indent: string) => {
    const words = text.split(" ");
    const lines: string[] = [];
    let current = "";
    words.forEach((word) => {
      if (current.length + word.length <= maxLen) {
        current += word + " ";
      } else {
        lines.push(current.trim());
        current = `${indent}${word} `;
      }
    });
    if (current) lines.push(current.trim());
    return lines.join("\n");
  };

  const dn = name    || "your_name";
  const de = email   || "your@email.com";
  const ds = subject || "your_subject";
  const dm = message ? wordWrap(message, 30, "    ") : "your message here...";

  const codeSnippet =
`// contact.ts — live preview

interface Message {
  from:    "${dn}${cur("name")}";
  email:   "${de}${cur("email")}";
  subject: "${ds}${cur("subject")}";
  body: \`
    ${dm}${cur("message")}
  \`;
}

async function send(
  payload: Message
): Promise<void> {
  await emailjs.send({
    serviceId: process.env.EMAIL_SVC,
    templateId: process.env.EMAIL_TPL,
    ...payload,
  });
}

// ✦ ${
  isSending
    ? "Transmitting..."
    : name || email || subject || message
    ? "Payload ready"
    : "Awaiting input"
}
await send({
  from:    "${dn}",
  email:   "${de}",
  subject: "${ds}",
  body:    \`${message ? message.slice(0, 24) + (message.length > 24 ? "..." : "") : "..."}\`,
});`;

  const terminalLine = isSending
    ? "⏳  Transmitting payload..."
    : name || email || subject || message
    ? `✦  Payload ready — ${[name && "from", email && "email", subject && "subject", message && "body"].filter(Boolean).join(", ")} set`
    : "$  Awaiting input...";

  const codeTheme = theme === "dark" ? themes.nightOwl : themes.github;

  return (
    <section className="contact-container w-full min-[1921px]:px-[55rem] mt-16" id="contact">
      <div
        className="title-container flex flex-col gap-6 justify-center items-center py-16 max-lg:p-16"
        ref={ref}
      >
        <motion.div
          ref={animationReference}
          style={{ scale: scaleProgress, opacity: opacityProgress, textAlign: "center" }}
        >
          <p className="text-[--black] mb-6">
            <span className="text-[--orange]">&lt;</span>
            {contactData.title.en}
            <span className="text-[--orange]">/&gt;</span>
          </p>
          <h2 className="text-[--black] text-center">{contactData.description.en}</h2>
        </motion.div>
      </div>

      <div className="flex flex-row justify-center items-stretch gap-10 px-32 pb-32 max-lg:flex-col max-lg:px-6 max-lg:pb-20 min-h-0">

        {/* ── Code Editor Panel ── */}
        <div
          className="w-1/2 max-lg:w-full flex flex-col rounded-2xl overflow-hidden code-panel-glow transition-all duration-300"
          style={{ border: `1.5px solid ${ec.border}` }}
        >
          {/* Title bar — traffic lights */}
          <div
            className="flex items-center gap-3 px-5 py-[1rem] flex-shrink-0 transition-colors duration-300"
            style={{ background: ec.titleBar, borderBottom: `1px solid ${ec.border}` }}
          >
            <span className="w-[1rem] h-[1rem] rounded-full bg-[#ff5f57] shadow-[0_0_5px_#ff5f57]" />
            <span className="w-[1rem] h-[1rem] rounded-full bg-[#febc2e] shadow-[0_0_5px_#febc2e]" />
            <span className="w-[1rem] h-[1rem] rounded-full bg-[#28c840] shadow-[0_0_5px_#28c840]" />
            <div className="ml-auto flex items-center gap-3">
              <span
                className="font-mono text-[1.1rem] max-lg:text-[1rem] tracking-widest uppercase transition-colors duration-300"
                style={{ color: ec.langLabel }}
              >
                TypeScript
              </span>
              <span
                className="relative inline-block w-[0.75rem] h-[0.75rem] rounded-full bg-[#28c840] shadow-[0_0_5px_#28c840] live-dot"
                title="Live"
              />
            </div>
          </div>

          {/* Tab bar */}
          <div
            className="flex items-end flex-shrink-0 px-3 pt-2 transition-colors duration-300"
            style={{ background: ec.tabBar, borderBottom: `1px solid ${ec.border}` }}
          >
            <div
              className="flex items-center gap-2 px-4 py-[0.6rem] rounded-t-lg"
              style={{
                background: ec.codeArea,
                border: `1px solid ${ec.border}`,
                borderBottom: "none",
              }}
            >
              <span className="text-[1.2rem]" style={{ color: ec.tabIcon }}>⬡</span>
              <span
                className="font-mono text-[1.2rem] max-lg:text-[1.1rem] transition-colors duration-300"
                style={{ color: ec.tabText }}
              >
                contact.ts
              </span>
            </div>
          </div>

          {/* Code area */}
          <div
            className="flex-1 overflow-auto relative transition-colors duration-300 max-lg:max-h-[50rem]"
            style={{ background: ec.codeArea }}
          >
            <div className="scan-line" />
            <Highlight code={codeSnippet} language="tsx" theme={codeTheme}>
              {({ tokens, getLineProps, getTokenProps }) => (
                <pre
                  style={{
                    margin: 0,
                    padding: "1.6rem 0",
                    fontSize: "1.25rem",
                    lineHeight: "1.85",
                    background: "transparent",
                    fontFamily: "'Fira Code', 'Cascadia Code', 'JetBrains Mono', monospace",
                    overflowX: "auto",
                  }}
                >
                  {tokens.map((line, i) => (
                    <div
                      key={i}
                      {...getLineProps({ line })}
                      style={{ display: "flex", alignItems: "baseline" }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          minWidth: "3.6rem",
                          textAlign: "right",
                          paddingRight: "1.6rem",
                          color: ec.lineNum,
                          userSelect: "none",
                          flexShrink: 0,
                          fontSize: "1.05rem",
                          fontFamily: "monospace",
                        }}
                      >
                        {i + 1}
                      </span>
                      <span style={{ paddingRight: "1.6rem", whiteSpace: "pre" }}>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </span>
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>

          {/* Terminal strip */}
          <div
            className="flex-shrink-0 px-5 py-3 transition-colors duration-300"
            style={{ background: ec.terminal, borderTop: `1px solid ${ec.border}` }}
          >
            <div className="flex items-center gap-3 mb-[0.5rem]">
              <span
                className="font-mono text-[1.05rem] uppercase tracking-widest transition-colors duration-300"
                style={{ color: ec.termLabel }}
              >
                Terminal
              </span>
              <span className="h-[1px] flex-1 transition-colors duration-300" style={{ background: ec.termLine }} />
            </div>
            <div className="flex items-center gap-2 font-mono text-[1.2rem] max-lg:text-[1.1rem]">
              <span className="text-[--orange]">›</span>
              <span className="transition-colors duration-300 truncate" style={{ color: ec.termText }}>
                {terminalLine}
              </span>
              {!isSending && <span className="terminal-cursor ml-1 flex-shrink-0" />}
            </div>
          </div>

          {/* Status bar */}
          <div
            className="flex items-center justify-between px-4 py-[0.5rem] flex-shrink-0 transition-colors duration-300"
            style={{ background: ec.statusBar, borderTop: `1px solid ${ec.border}` }}
          >
            <div className="flex items-center gap-4">
              <span
                className="font-mono text-[1rem] transition-colors duration-300"
                style={{ color: ec.termLabel }}
              >
                ⎇ main
              </span>
              <span className="font-mono text-[1rem] text-[--lightblue] opacity-70">
                contact.ts
              </span>
            </div>
            <span className="font-mono text-[1rem] text-[--orange] opacity-80">
              ● Live
            </span>
          </div>
        </div>

        {/* ── Form Panel ── */}
        <div
          className={`w-1/2 max-lg:w-full flex flex-col rounded-2xl overflow-hidden transition-all duration-300 ${
            theme === "dark" ? "bg-[--blackblue]" : "bg-white"
          }`}
          style={{ border: "1.5px solid rgba(139,156,255,0.35)" }}
        >
          <div
            className="px-8 py-6 flex-shrink-0"
            style={{
              background: theme === "dark" ? "#0f1f12" : "#f6f8fa",
              borderBottom: `1px solid ${ec.border}`,
            }}
          >
            <p
              className="font-mono text-[1.25rem] mb-1"
              style={{ color: theme === "dark" ? "var(--lightblue)" : "var(--darkblue)" }}
            >
              // new message
            </p>
            <h3 style={{ color: theme === "dark" ? "#fff" : "var(--darkblue)" }}>
              Get in touch
            </h3>
          </div>

          <form className="flex flex-col gap-7 p-10 max-lg:p-8 flex-1" onSubmit={notifySentForm} autoComplete="off">
            {contactData.inputfields.map((input, index) => {
              const isFilled = !!fieldValue(input.name);
              return (
                <div key={index} className="flex flex-col gap-[0.6rem]">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[1.25rem] text-[--orange]">const</span>
                    <span
                      className="font-mono text-[1.25rem]"
                      style={{ color: theme === "dark" ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.5)" }}
                    >
                      {input.name}
                    </span>
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: isFilled ? 1 : 0, opacity: isFilled ? 1 : 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 28 }}
                      className="text-[--lightblue] text-[1.2rem]"
                    >
                      ✓
                    </motion.span>
                  </div>
                  <input
                    type={input.type}
                    placeholder={input.placeholder.en}
                    name={input.name}
                    value={fieldValue(input.name)}
                    required
                    onFocus={() => { setFocusedField(input.name); setLastUpdatedField(input.name); }}
                    onBlur={() => setFocusedField(null)}
                    onChange={handleInputChange}
                    style={inputStyle(input.name)}
                  />
                </div>
              );
            })}

            {/* Message textarea */}
            {(() => {
              const fieldName = contactData.textarea.name;
              const isFilled  = !!message;
              return (
                <div className="flex flex-col gap-[0.6rem]">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[1.25rem] text-[--orange]">const</span>
                    <span
                      className="font-mono text-[1.25rem]"
                      style={{ color: theme === "dark" ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.5)" }}
                    >
                      message
                    </span>
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: isFilled ? 1 : 0, opacity: isFilled ? 1 : 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 28 }}
                      className="text-[--lightblue] text-[1.2rem]"
                    >
                      ✓
                    </motion.span>
                  </div>
                  <textarea
                    rows={5}
                    placeholder={contactData.textarea.placeholder.en}
                    name={fieldName}
                    value={message}
                    onFocus={() => { setFocusedField(fieldName); setLastUpdatedField(fieldName); }}
                    onBlur={() => setFocusedField(null)}
                    onChange={handleInputChange}
                    style={inputStyle(fieldName)}
                  />
                </div>
              );
            })()}

            <Button
              value={isSending ? "Sending..." : contactData.button.value.en}
              iconSVG={contactData.icon}
              buttoncolor={contactData.colors.main}
              iconcolor={contactData.colors.icon}
              type="submit"
              elementType="input"
            />

            <ToastContainer
              className="w-max text-3xl block p-3 max-lg:w-full"
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme={theme}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
