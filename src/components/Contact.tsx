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

const Contact: React.FC = () => {
  const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [cursor, setCursor] = useState<string>("");
  const [lastUpdatedField, setLastUpdatedField] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const { ref } = useSectionInView("Contact");
  const { theme } = useTheme();

  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const notifySentForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name,
          email,
          subject,
          message,
          time: new Date().toLocaleString(),
        },
        publicKey
      );
      toast.success(toastMessages.successEmailSent.en);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      toast.error(toastMessages.failedEmailSent.en);
    } finally {
      setIsSending(false);
    }
  };

  const handleInputFocus = (fieldName: string) => {
    setCursor(`${fieldName}${cursor}`);
  };

  const wordWrap = (text: string, maxLen: number, indent: string) => {
    const words = text.split(" ");
    let lines: string[] = [];
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name: field, value } = e.target;
    if (field === "name") setName(value);
    else if (field === "email") setEmail(value);
    else if (field === "subject") setSubject(value);
    else if (field === "message") setMessage(value);
    setLastUpdatedField(field);
  };

  const [cursorBlink, setCursorBlink] = useState<boolean>(true);
  useEffect(() => {
    const id = setInterval(() => setCursorBlink((p) => !p), 500);
    return () => clearInterval(id);
  }, []);

  const cur = (field: string) =>
    lastUpdatedField === field ? (cursorBlink ? "█" : " ") : "";

  const displayName = name || "your_name";
  const displayEmail = email || "your@email.com";
  const displaySubject = subject || "your_subject";
  const displayMsg = message
    ? wordWrap(message, 34, "    ")
    : "your message here...";

  const codeSnippet = `interface ContactPayload {
  from:    "${displayName}${cur("name")}";
  email:   "${displayEmail}${cur("email")}";
  subject: "${displaySubject}${cur("subject")}";
  body: \`
    ${displayMsg}${cur("message")}
  \`;
}

const sendMessage = async (
  payload: ContactPayload
): Promise<Response> => {
  return await fetch("/api/contact", {
    method:  "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Powered-By": "suhail.dev",
    },
    body: JSON.stringify(payload),
  });
};

// 🚀 Initiating transmission...
const res = await sendMessage({
  from:    "${displayName}",
  email:   "${displayEmail}",
  subject: "${displaySubject}",
  body:    \`${message ? message.slice(0, 28) + (message.length > 28 ? "..." : "") : "..."}\`,
});`;

  const terminalLine = isSending
    ? "⏳ Transmitting payload..."
    : name || email || subject || message
    ? `✦ Payload ready — ${[name && "from", email && "email", subject && "subject", message && "body"].filter(Boolean).join(", ")} set`
    : "$ Awaiting input...";

  return (
    <React.Fragment>
      <section
        className="contact-container w-full min-[1921px]:px-[55rem] mt-16"
        id="contact"
      >
        <div
          className="title-container flex flex-col gap-6 justify-center items-center py-16 max-lg:p-16"
          ref={ref}
        >
          <motion.div
            ref={animationReference}
            style={{ scale: scaleProgess, opacity: opacityProgess, textAlign: "center" }}
          >
            <p className="text-[--black] mb-6">
              <span className="text-[--orange]">&lt;</span>
              {contactData.title.en}
              <span className="text-[--orange]">/&gt;</span>
            </p>
            <h2 className="text-[--black] text-center">
              {contactData.description.en}
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-row justify-center items-stretch gap-10 px-32 pb-32 max-lg:flex-col max-lg:px-8 max-lg:pb-16">

          {/* ── Code Editor Panel ── */}
          <div className="w-1/2 max-lg:w-full flex flex-col rounded-2xl overflow-hidden code-panel-glow"
            style={{ border: "2px solid rgba(139,156,255,0.4)" }}>

            {/* Title bar */}
            <div className="flex items-center gap-3 px-6 py-[1.2rem] bg-[#0d1117] border-b border-white/10 flex-shrink-0">
              <span className="w-[1.1rem] h-[1.1rem] rounded-full bg-[#ff5f57] shadow-[0_0_6px_#ff5f57]"></span>
              <span className="w-[1.1rem] h-[1.1rem] rounded-full bg-[#febc2e] shadow-[0_0_6px_#febc2e]"></span>
              <span className="w-[1.1rem] h-[1.1rem] rounded-full bg-[#28c840] shadow-[0_0_6px_#28c840]"></span>
              <div className="ml-auto flex items-center gap-3">
                <span className="text-[1.2rem] font-mono text-white/40 tracking-widest uppercase">
                  TypeScript
                </span>
                <span
                  className="relative inline-block w-[0.85rem] h-[0.85rem] rounded-full bg-[#28c840] shadow-[0_0_6px_#28c840] live-dot"
                  title="Live"
                />
              </div>
            </div>

            {/* Tab bar */}
            <div className="flex items-end bg-[#161b22] border-b border-white/10 flex-shrink-0 px-4 pt-2">
              <div className="flex items-center gap-2 bg-[#1e2d3d] border border-b-0 border-white/10 px-5 py-2 rounded-t-lg">
                <span className="text-[1.3rem] text-[#58a6ff]">⬡</span>
                <span className="text-[1.3rem] font-mono text-white/80">contact.tsx</span>
              </div>
            </div>

            {/* Code area */}
            <div className="flex-1 overflow-auto max-lg:max-h-[40rem] relative" style={{ background: "#0d1117" }}>
              <div className="scan-line" />
              <Highlight code={codeSnippet} language="tsx" theme={themes.nightOwl}>
                {({ tokens, getLineProps, getTokenProps }) => (
                  <pre
                    style={{
                      margin: 0,
                      padding: "2rem 0",
                      fontSize: "1.35rem",
                      lineHeight: "1.9",
                      background: "transparent",
                      fontFamily: "'Fira Code', 'Cascadia Code', monospace",
                    }}
                  >
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })} style={{ display: "flex", alignItems: "baseline" }}>
                        <span
                          style={{
                            display: "inline-block",
                            minWidth: "4rem",
                            textAlign: "right",
                            paddingRight: "2rem",
                            color: "#30363d",
                            userSelect: "none",
                            flexShrink: 0,
                            fontSize: "1.15rem",
                          }}
                        >
                          {i + 1}
                        </span>
                        <span style={{ paddingRight: "2rem" }}>
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

            {/* Terminal output */}
            <div className="flex-shrink-0 bg-[#0a0e14] border-t border-white/10 px-6 py-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[1.2rem] font-mono text-white/30 uppercase tracking-widest">Terminal</span>
                <span className="h-[1px] flex-1 bg-white/10" />
              </div>
              <div className="flex items-center gap-3 font-mono text-[1.3rem]">
                <span className="text-[--orange]">›</span>
                <span className="text-[#8b9cff]">{terminalLine}</span>
                {!isSending && <span className="terminal-cursor ml-1" />}
              </div>
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between px-5 py-[0.6rem] bg-[--darkblue] flex-shrink-0">
              <div className="flex items-center gap-4">
                <span className="text-[1.1rem] font-mono text-white/50">⎇ main</span>
                <span className="text-[1.1rem] font-mono text-[--lightblue]/60">contact.tsx</span>
              </div>
              <span className="text-[1.1rem] font-mono text-[--orange]/80">● Live Preview</span>
            </div>
          </div>

          {/* ── Form Panel ── */}
          <div
            className={`w-1/2 max-lg:w-full flex flex-col rounded-2xl overflow-hidden transition-all duration-500 ${
              theme === "dark" ? "bg-[--blackblue]" : "bg-white"
            }`}
            style={{ border: "2px solid rgba(139,156,255,0.4)" }}
          >
            <div className="px-8 py-6 bg-[--darkblue] border-b border-white/10 flex-shrink-0">
              <p className="text-[--lightblue] font-mono text-[1.3rem] mb-1">// new message</p>
              <h3 className="text-white">Get in touch</h3>
            </div>

            <form
              className="flex flex-col gap-6 p-10 flex-1"
              onSubmit={notifySentForm}
              autoComplete="off"
            >
              {contactData.inputfields.map((input, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <label
                    className={`text-[1.35rem] font-mono tracking-wide ${
                      theme === "dark" ? "text-[--lightblue]" : "text-[--darkblue]"
                    }`}
                  >
                    <span className="text-[--orange] mr-1">const</span>
                    {input.name}
                  </label>
                  <input
                    type={input.type}
                    placeholder={`${input.placeholder.en}`}
                    name={input.name}
                    value={
                      input.name === "name" ? name
                      : input.name === "email" ? email
                      : input.name === "subject" ? subject
                      : message
                    }
                    required
                    onFocus={() => { handleInputFocus(input.name); setLastUpdatedField(input.name); }}
                    onMouseEnter={() => { handleInputFocus(input.name); setLastUpdatedField(input.name); }}
                    onChange={handleInputChange}
                    className={`rounded-xl border-[0.2rem] border-transparent focus:border-[--orange] transition-all duration-200 ${
                      theme === "dark"
                        ? "bg-[#1a2535] text-white"
                        : "bg-[--icewhite]"
                    }`}
                    style={{ marginBottom: 0 }}
                  />
                </div>
              ))}

              <div className="flex flex-col gap-2">
                <label
                  className={`text-[1.35rem] font-mono tracking-wide ${
                    theme === "dark" ? "text-[--lightblue]" : "text-[--darkblue]"
                  }`}
                >
                  <span className="text-[--orange] mr-1">const</span>
                  message
                </label>
                <textarea
                  rows={6}
                  placeholder={`${contactData.textarea.placeholder.en}`}
                  name={contactData.textarea.name}
                  onFocus={() => { handleInputFocus(contactData.textarea.name); setLastUpdatedField(contactData.textarea.name); }}
                  onMouseEnter={() => { handleInputFocus(contactData.textarea.name); setLastUpdatedField(contactData.textarea.name); }}
                  onChange={handleInputChange}
                  className={`rounded-xl border-[0.2rem] border-transparent focus:border-[--orange] transition-all duration-200 ${
                    theme === "dark"
                      ? "bg-[#1a2535] text-white"
                      : "bg-[--icewhite]"
                  }`}
                  style={{ marginBottom: 0 }}
                />
              </div>

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
    </React.Fragment>
  );
};

export default Contact;
