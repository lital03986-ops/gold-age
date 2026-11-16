// Framer Code Component: button -> large overlay with the app in an iframe (loaded only on open). X button + Escape close it.
import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
export default function TryTheApp({ appUrl, label }: { appUrl: string; label: string }) {
  const [open, setOpen] = React.useState(false)
  React.useEffect(() => {
    if (!open) return
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    const prev = document.body.style.overflow; document.body.style.overflow = "hidden"
    window.addEventListener("keydown", k)
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = prev }
  }, [open])
  return <>
    <button onClick={() => setOpen(true)} style={{ background: "#2D6260", color: "#fff", border: 0, borderRadius: 8, padding: "16px 32px", fontSize: 20, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>{label}</button>
    {open && <div role="dialog" aria-modal="true" style={{ position: "fixed", inset: 0, zIndex: 99999, background: "rgba(15,20,30,.6)", display: "grid", placeItems: "center" }} onClick={() => setOpen(false)}>
      <div onClick={(e) => e.stopPropagation()} style={{ position: "relative", width: "min(96vw,1500px)", height: "min(94vh,900px)", borderRadius: 14, overflow: "hidden", background: "#FFF9F0", boxShadow: "0 20px 80px rgba(0,0,0,.5)" }}>
        <iframe src={appUrl} title="Gold Age app" allow="autoplay" style={{ width: "100%", height: "100%", border: 0 }} />
        <button aria-label="Close demo" onClick={() => setOpen(false)} style={{ position: "absolute", top: 14, right: 14, width: 44, height: 44, borderRadius: "50%", border: 0, background: "#000", color: "#fff", fontSize: 24, cursor: "pointer", zIndex: 2 }}>✕</button>
      </div></div>}
  </>
}
TryTheApp.defaultProps = { appUrl: "https://YOUR-APP.vercel.app", label: "Try the App" }
addPropertyControls(TryTheApp, { appUrl: { type: ControlType.String, title: "App URL" }, label: { type: ControlType.String, title: "Label" } })
