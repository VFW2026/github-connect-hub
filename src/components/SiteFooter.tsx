export function SiteFooter() {
  return (
    <footer className="bg-footer px-6 pt-22 pb-10 text-footer-foreground md:px-10">
      <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="mb-3.5 text-xs tracking-[0.12em] uppercase text-footer-label">
            Say hello
          </p>
          <h3 className="mb-4 text-[26px] font-bold">
            hello@loremstudio.example
          </h3>
          <p className="mb-2.5 text-sm leading-relaxed text-footer-muted">
            Level 4, 123 Ipsum Street, Dolor City DC 1000
          </p>
          <p className="text-sm leading-relaxed text-footer-muted">Sitamet</p>
        </div>

        <div>
          <p className="mb-3.5 text-xs tracking-[0.12em] uppercase text-footer-label">
            Liberté, visualité, identité
          </p>
          <p className="mb-2.5 text-sm leading-relaxed text-footer-muted">
            Daily eye-candies on our
          </p>
          <a
            href="#"
            className="mb-2.5 inline-block border-b border-transparent text-base font-semibold hover:border-footer-foreground"
          >
            Loremgram
          </a>
          <p className="text-sm leading-relaxed text-footer-muted">
            Follow, invite, join, get inspired, be kind
          </p>
        </div>

        <div>
          <p className="mb-3.5 text-xs tracking-[0.12em] uppercase text-footer-label">
            Find us on
          </p>
          <a
            href="#"
            className="mb-2.5 block w-fit border-b border-transparent text-base font-semibold hover:border-footer-foreground"
          >
            LinkedIn
          </a>
          <p className="mb-2.5 text-sm leading-relaxed text-footer-muted">
            Tons of works on
          </p>
          <a
            href="#"
            className="inline-block border-b border-transparent text-base font-semibold hover:border-footer-foreground"
          >
            Behance
          </a>
        </div>
      </div>

      <div className="mx-auto mt-17 flex max-w-[1200px] flex-wrap justify-between gap-2.5 border-t border-footer-border pt-6 text-xs text-footer-label">
        <span>© 2026 Lorem Studio. All rights reserved.</span>
        <span>Lorem Ipsum / Dolor Sit / Amet Consectetur</span>
      </div>
    </footer>
  );
}
