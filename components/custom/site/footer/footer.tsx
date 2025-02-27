import Logo from "../../logo";
import NoiseBg from "../../noise-bg";

export function Footer() {
  return (
    <footer className="relative w-full flex flex-col items-center border-t px-4 md:px-6 pt-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <NoiseBg
          patternSize={150}
          patternScaleX={3}
          patternScaleY={5}
          patternRefreshInterval={5}
          patternAlpha={15}
        />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center border-b pb-4">
          <div className="flex items-start justify-center flex-col">
          <div className="flex items-center">
            <Logo size="lg" />
          </div>
          {/* <span className="text-lg text-center text-muted-foreground">
          Smart, Secure, and Seamless Transactions.
          </span> */}
          </div>

          <span className="font-semibold text-lg md:text-2xl text-center md:text-right">
          Smart, Secure, and Seamless Deals.
          </span>
        </div>
      </div>

      {/* Large Text - Closer to Border */}
      <div className="flex w-full items-center justify-center overflow-hidden leading-none">
        <h1 className="font-bold text-[260px] tracking-wide text-muted text-center translate-y-1/3">
          Middle-Ai
        </h1>
      </div>
    </footer>
  );
}