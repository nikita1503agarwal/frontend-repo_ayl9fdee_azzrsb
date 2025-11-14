import React from 'react'
import Spline from '@splinetool/react-spline'

function Section({ id, title, children }) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-6">{title}</h2>
        <div className="bg-white/70 backdrop-blur rounded-xl shadow-sm ring-1 ring-black/5 p-6 md:p-8">
          {children}
        </div>
      </div>
    </section>
  )
}

function App() {
  const brand = {
    primary: '#2563EB',
    secondary: '#7C3AED',
    accent: '#06B6D4',
    success: '#10B981',
    warning: '#F59E0B',
    danger: '#EF4444',
    neutrals: {
      900: '#0F172A',
      700: '#334155',
      500: '#64748B',
      300: '#CBD5E1',
      100: '#F1F5F9'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Hero with Spline */}
      <header className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Gradient overlay for legibility (does not block Spline interaction) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 ring-1 ring-black/5 text-sm font-medium text-slate-700 mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Vibe Coder Design System
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Futuristic, vibrant, and accessible UI for builders
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-700">
              A cohesive design language for fast, consistent, and beautiful product experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#foundations" className="px-5 py-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">Foundations</a>
              <a href="#components" className="px-5 py-2.5 rounded-lg bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 transition-colors">Components</a>
              <a href="#branding" className="px-5 py-2.5 rounded-lg bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 transition-colors">Brand</a>
              <a href="#motion" className="px-5 py-2.5 rounded-lg bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 transition-colors">Motion</a>
              <a href="#a11y" className="px-5 py-2.5 rounded-lg bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </header>

      {/* Foundations */}
      <Section id="foundations" title="1. Core Foundations">
        <div className="space-y-10">
          {/* Color strategy */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Color Strategy</h3>
            <p className="text-slate-600 mb-4">Vibrant blues and purples with iridescent accents. Neutrals keep content readable and professional. Semantic colors for clear feedback.</p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {[{name:'Primary',hex:brand.primary},{name:'Secondary',hex:brand.secondary},{name:'Accent',hex:brand.accent},{name:'Success',hex:brand.success},{name:'Warning',hex:brand.warning},{name:'Danger',hex:brand.danger}].map((c) => (
                <div key={c.name} className="rounded-lg ring-1 ring-black/5 overflow-hidden">
                  <div className="h-16" style={{ backgroundColor: c.hex }}></div>
                  <div className="p-3 text-sm flex items-center justify-between bg-white">
                    <span className="font-medium">{c.name}</span>
                    <code className="text-slate-500">{c.hex}</code>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
              {Object.entries(brand.neutrals).map(([k,v]) => (
                <div key={k} className="rounded-lg ring-1 ring-black/5 overflow-hidden">
                  <div className="h-12" style={{ backgroundColor: v }}></div>
                  <div className="p-2 text-xs bg-white flex items-center justify-between"><span>Neutral {k}</span><code className="text-slate-500">{v}</code></div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Typography</h3>
            <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-4">
              <li>Headings: Inter/Geist, tight tracking, bold weights</li>
              <li>Body: Inter regular, line-height 1.6–1.8 for readability</li>
              <li>Mono: Geist Mono for code and metrics</li>
              <li>Scale: 12, 14, 16, 18, 20, 24, 30, 36, 48, 60</li>
            </ul>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h1 className="text-4xl font-extrabold">Heading XL</h1>
                <h2 className="text-3xl font-bold">Heading L</h2>
                <h3 className="text-2xl font-semibold">Heading M</h3>
                <p className="text-base text-slate-700">Body text default – comfortable reading width and contrast.</p>
                <p className="text-sm text-slate-500">Caption – supportive details and helper text.</p>
              </div>
              <div className="font-mono text-slate-700 bg-slate-50 rounded-lg p-4 ring-1 ring-black/5">
                <p>Font stack: Inter, Geist, Geist Mono</p>
                <p>Line lengths: 45–75 characters</p>
                <p>Weights: 400, 500, 600, 700, 800</p>
              </div>
            </div>
          </div>

          {/* Spacing & sizing */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Spacing & Sizing</h3>
            <p className="text-slate-600 mb-4">Use a 4px base grid. Key sizes: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64.</p>
            <div className="flex flex-wrap items-end gap-3">
              {[4,8,12,16,20,24,32,40,48,64].map((s) => (
                <div key={s} className="flex flex-col items-center">
                  <div className="w-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-t" style={{ height: s }}></div>
                  <span className="text-xs text-slate-600 mt-1">{s}px</span>
                </div>
              ))}
            </div>
          </div>

          {/* Grid & layout */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Grid & Layout</h3>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>12-column responsive grid</li>
              <li>Container widths: 640, 768, 1024, 1280, 1536</li>
              <li>Gutters: 16–24px; Sections: 64–96px vertical</li>
              <li>Use max-width for readable content blocks</li>
            </ul>
          </div>

          {/* Radius / Shadows */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Radius, Shadows & Elevation</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-md shadow-sm ring-1 ring-black/5">
                <p className="font-medium mb-2">Subtle</p>
                <div className="h-16 rounded-md bg-gradient-to-br from-slate-50 to-white ring-1 ring-black/5"></div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md ring-1 ring-black/5">
                <p className="font-medium mb-2">Mid</p>
                <div className="h-16 rounded-lg bg-gradient-to-br from-slate-50 to-white shadow-lg"></div>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-xl ring-1 ring-black/5">
                <p className="font-medium mb-2">High</p>
                <div className="h-16 rounded-xl bg-gradient-to-br from-slate-50 to-white shadow-2xl"></div>
              </div>
            </div>
            <p className="text-slate-600 mt-3">Default radius: 12px. Use 8px for compact, 16px for prominent components. Keep elevation meaningful and minimal.</p>
          </div>

          {/* Icons & imagery */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Iconography & Imagery</h3>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Use simple, geometric icon sets with 2px strokes; rounded caps</li>
              <li>Imagery: futuristic, iridescent, tech-forward; avoid clutter</li>
              <li>Illustrations: gradients, glass, subtle glow accents</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Components */}
      <Section id="components" title="2. Component Library Guidelines">
        <div className="space-y-10">
          {/* Buttons */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Buttons</h3>
            <p className="text-slate-600 mb-4">Primary drives the main action. Secondary is neutral. Ghost is low-emphasis. Include proper hover/focus/disabled states.</p>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 active:scale-[.98] transition">Primary</button>
              <button className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 active:scale-[.98] transition">Secondary</button>
              <button className="px-4 py-2 rounded-lg bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 active:scale-[.98] transition">Tertiary</button>
              <button className="px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300 transition">Ghost</button>
              <button disabled className="px-4 py-2 rounded-lg bg-slate-200 text-slate-500 cursor-not-allowed">Disabled</button>
            </div>
            <ul className="list-disc pl-5 text-slate-600 mt-3 space-y-1">
              <li>Hover: +6–10% luminance; Focus: visible 2px ring</li>
              <li>Active: 0.98 scale; Disabled: 40–50% contrast</li>
              <li>Min target: 44x44px</li>
            </ul>
          </div>

          {/* Inputs & Forms */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Inputs & Forms</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="block">
                  <span className="block text-sm font-medium text-slate-700">Email</span>
                  <input type="email" placeholder="you@vibecoder.dev" className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
                </label>
                <label className="block">
                  <span className="block text-sm font-medium text-slate-700">Password</span>
                  <input type="password" className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
                </label>
                <p className="text-sm text-slate-500">States: default, focus, error (ring-red-500), success (ring-green-500), disabled (bg-slate-100).</p>
              </div>
              <div className="space-y-3">
                <textarea rows="4" className="w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Message..." />
                <div className="flex gap-3">
                  <input type="checkbox" id="agree" className="rounded text-blue-600 focus:ring-blue-500" />
                  <label htmlFor="agree" className="text-sm text-slate-700">I agree to the terms</label>
                </div>
                <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Submit</button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Navigation Bar</h3>
            <nav className="w-full bg-white rounded-xl ring-1 ring-black/5 p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500"></div>
                <span className="font-semibold">Vibe Coder</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                {['Foundations','Components','Brand','Motion','A11y'].map((i) => (
                  <a key={i} href={`#${i.toLowerCase()}`} className="px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700">{i}</a>
                ))}
              </div>
              <button className="px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Get Started</button>
            </nav>
          </div>

          {/* Cards */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Cards</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {["Project","Skill","Content"].map((t, idx) => (
                <div key={t} className="rounded-xl bg-white ring-1 ring-black/5 shadow-sm overflow-hidden">
                  <div className="h-24 bg-gradient-to-br from-blue-500 to-purple-500"></div>
                  <div className="p-4">
                    <p className="text-sm text-slate-500">{t} Card</p>
                    <h4 className="font-semibold text-slate-900 mt-1">Card title {idx+1}</h4>
                    <p className="text-sm text-slate-600 mt-2">Short description of the card content. Hover adds subtle lift.</p>
                    <button className="mt-3 text-blue-600 hover:text-blue-700">Learn more →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modals / dialogs (example) */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Modals & Dialogs</h3>
            <p className="text-slate-600 mb-3">Use for focused tasks. Dim background with 20–40% overlay. Trap focus; close on ESC and outside click.</p>
            <div className="relative p-6 bg-slate-50 rounded-xl ring-1 ring-black/5">
              <div className="absolute inset-0 bg-slate-900/10 rounded-xl"></div>
              <div className="relative mx-auto max-w-md bg-white rounded-xl shadow-xl ring-1 ring-black/5 p-6">
                <h4 className="font-semibold text-lg">Example Modal</h4>
                <p className="text-sm text-slate-600 mt-1">This is a preview of modal styling and spacing.</p>
                <div className="mt-4 flex justify-end gap-2">
                  <button className="px-4 py-2 rounded-lg hover:bg-slate-100">Cancel</button>
                  <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Confirm</button>
                </div>
              </div>
            </div>
          </div>

          {/* Containers & wrappers */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Section Containers & Wrappers</h3>
            <p className="text-slate-600">Use max-width containers (lg to 6xl), 64–96px vertical padding, and consistent gutters. Prefer white or subtle tinted backgrounds with 12px radius and soft rings.</p>
          </div>
        </div>
      </Section>

      {/* Branding */}
      <Section id="branding" title="3. Branding & Aesthetic Identity">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-semibold">Theme</h4>
            <p className="text-slate-600">Futuristic, vibrant, trustworthy. Iridescent accents and glass morphism cues evoke modern fintech and developer tooling.</p>
            <h4 className="font-semibold">Motifs</h4>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Holographic cards & glowing verification marks</li>
              <li>Soft gradients: blue → purple with cyan highlights</li>
              <li>Rounded rectangles, layered depth, subtle noise</li>
            </ul>
            <h4 className="font-semibold">Brand Voice</h4>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Confident, concise, helpful</li>
              <li>Jargon-light, developer-friendly</li>
              <li>Encourage action; celebrate progress</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Logo Usage</h4>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Minimum clear space: 1x logomark width</li>
              <li>Prefer monochrome on busy backgrounds</li>
              <li>Avoid warping, shadows, or low contrast placements</li>
            </ul>
            <h4 className="font-semibold">Do / Don’t</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="p-4 rounded-lg bg-green-50 ring-1 ring-green-200">Do: Keep consistent padding, radius, and elevation.</div>
              <div className="p-4 rounded-lg bg-red-50 ring-1 ring-red-200">Don’t: Mix too many accent colors or overly sharp corners.</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Motion */}
      <Section id="motion" title="4. Motion & Interaction System">
        <div className="space-y-4">
          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li>Timings: 150ms (micro), 250–350ms (UI), 400–600ms (entrance)</li>
            <li>Easing: ease-out for entrance, ease-in for exit, spring for playful micro-interactions</li>
            <li>Entrance: fade+translate 8–16px; Exit: fade+translate</li>
            <li>Hover: 1–2% scale, shadow lift; Active: scale 0.98</li>
            <li>Scroll: smooth, reveal-on-scroll with 12–24px translate</li>
          </ul>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-6 rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-md hover:-translate-y-0.5">Hover card</div>
            <button className="p-6 rounded-xl bg-slate-900 text-white shadow-sm ring-1 ring-black/5 transition active:scale-[.98]">Active press</button>
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-md">Emphasis</div>
          </div>
        </div>
      </Section>

      {/* Accessibility */}
      <Section id="a11y" title="5. Accessibility Requirements">
        <div className="space-y-4">
          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li>Color contrast: ≥ 4.5:1 for text ≤ 18pt/24px, 3:1 for larger</li>
            <li>Touch targets: ≥ 44×44px</li>
            <li>Typography: base 16px, line-height ≥ 1.5</li>
            <li>Keyboard: visible focus rings, logical tab order, ESC to close dialogs</li>
            <li>Use semantic HTML and ARIA roles where necessary</li>
          </ul>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-lg ring-1 ring-black/5 bg-white">Example focus style: focus:ring-2 focus:ring-blue-500</div>
            <div className="p-4 rounded-lg ring-1 ring-black/5 bg-white">Forms: associate labels with inputs and include helper/error text</div>
          </div>
        </div>
      </Section>

      {/* Documentation format note */}
      <Section id="docs" title="6. Documentation Format">
        <div className="space-y-3 text-slate-600">
          <p>Use this page as the single source of truth. Organize sections with clear headings and examples. Each component should list visual spec, interaction rules, states, responsive behavior, and variants.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Tables/lists for token scales</li>
            <li>Embedded live examples next to rules</li>
            <li>Code snippets optional; focus on behavior and specs</li>
          </ul>
        </div>
      </Section>

      <footer className="py-10">
        <div className="max-w-6xl mx-auto px-6 text-sm text-slate-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Vibe Coder — Design System</p>
          <a className="hover:text-slate-700" href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
