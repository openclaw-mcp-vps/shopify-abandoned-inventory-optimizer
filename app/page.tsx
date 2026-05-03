export default function Home() {
  const faqs = [
    {
      q: "How does it connect to my Shopify store?",
      a: "After subscribing, you install a lightweight webhook that sends abandoned cart events to our analyzer. No app store approval needed."
    },
    {
      q: "What kind of recommendations does it give?",
      a: "You get per-product signals: restock urgency score, suggested reorder quantity, and a discontinue flag when demand consistently drops off."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Cancel from your Lemon Squeezy customer portal at any time. No questions, no lock-in."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Shopify Inventory Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Stop Restocking Products{" "}
          <span className="text-[#58a6ff]">Nobody Wants</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-xl mx-auto">
          Connect your Shopify store and let abandoned cart patterns tell you exactly what to restock, what to cut, and how much to order — automatically.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Optimizing — $12/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">Cancel anytime. No Shopify app store required.</p>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl bg-[#161b22] p-6">
          {[
            { value: "3×", label: "Faster restock decisions" },
            { value: "28%", label: "Avg. overstock reduction" },
            { value: "100%", label: "Webhook-based, no polling" }
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-[#58a6ff]">{s.value}</div>
              <div className="text-xs text-[#8b949e] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="border border-[#30363d] rounded-xl bg-[#161b22] p-8 text-center">
          <div className="text-xs text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-sm text-[#8b949e] mb-6">per month</div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Unlimited abandoned cart analysis",
              "Per-product restock & discontinue signals",
              "Demand forecasting dashboard",
              "Shopify webhook integration",
              "Email digest of weekly insights",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((item) => (
            <div key={item.q} className="border border-[#30363d] rounded-lg bg-[#161b22] p-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Inventory Optimizer. Built for Shopify store owners.
      </footer>
    </main>
  );
}
