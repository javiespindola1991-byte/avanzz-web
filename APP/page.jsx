export default function AvanzzLogisticsWebsite() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      <header className="fixed w-full z-50 bg-white/90 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight">AVANZZ LOGISTICS</div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative h-screen w-full">
        <img src="/cinematic_port_sunset_scene_index_0.jpeg" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 flex items-center h-full max-w-6xl mx-auto px-6">
          <div className="text-white max-w-2xl">
            <h1 className="text-6xl font-bold leading-tight">
              Execution-driven logistics.
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Freight forwarding solutions built for companies that demand precision, speed, and control.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#contact" className="bg-white text-black px-6 py-3 rounded-lg font-semibold">
                Request quote
              </a>
              <a href="https://wa.me/525534093159" className="border border-white px-6 py-3 rounded-lg">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold">About AVANZZ</h2>
            <p className="mt-6 text-lg text-slate-600 leading-8">
              AVANZZ LOGISTICS is a Mexico-based freight forwarder focused on delivering execution-driven logistics solutions. We support companies with import and export operations across ocean, air, and ground.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-8">
              Our approach is built on responsiveness, operational control, and direct communication, ensuring every shipment moves with clarity and confidence.
            </p>
          </div>

          <img src="/cargo_container_terminal_professional_index_1.jpeg" className="rounded-2xl shadow-lg" />
        </div>
      </section>

      <section id="services" className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Services</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <img src="/cinematic_port_sunset_scene_index_0.jpeg" className="rounded-xl" />
              <h3 className="mt-4 text-xl font-semibold">Ocean Freight</h3>
              <p className="text-gray-400 mt-2">FCL and LCL solutions with full coordination and visibility.</p>
            </div>

            <div>
              <img src="/night_logistics_cargo_plane_index_2.jpeg" className="rounded-xl" />
              <h3 className="mt-4 text-xl font-semibold">Air Freight</h3>
              <p className="text-gray-400 mt-2">Fast and secure solutions for time-sensitive cargo.</p>
            </div>

            <div>
              <img src="/a_high_resolution_digital_photograph_captures_a_sl.png" className="rounded-xl" />
              <h3 className="mt-4 text-xl font-semibold">Ground Transport</h3>
              <p className="text-gray-400 mt-2">Reliable domestic and cross-border transportation.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-16">
            <div className="border border-white/10 p-8 rounded-xl">
              <h3 className="text-xl font-semibold">Customs Coordination</h3>
              <p className="text-gray-400 mt-3">Efficient customs handling for smooth clearance.</p>
            </div>
            <div className="border border-white/10 p-8 rounded-xl">
              <h3 className="text-xl font-semibold">Cargo Security</h3>
              <p className="text-gray-400 mt-3">Protection for high-value or sensitive shipments.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-bold">Mission</h3>
          <p className="mt-4 text-slate-600 leading-7">
            Deliver reliable and efficient logistics solutions that allow our clients to execute their international operations with control and confidence.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Vision</h3>
          <p className="mt-4 text-slate-600 leading-7">
            Become a trusted logistics partner recognized for execution, responsiveness, and operational excellence.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold">Contact</h2>
          <div className="mt-8 text-lg space-y-3 text-gray-300">
            <p>info@avanzz.com.mx</p>
            <p>operaciones2@avanzz.com.mx</p>
            <p>+52 55 5545 9828</p>
            <p>WhatsApp: +52 55 3409 3159</p>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-gray-500">
        © 2026 AVANZZ LOGISTICS
      </footer>

    </div>
  );
}
