import Image from "next/image";
import Link from "next/link";

export function BrandLockup() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="relative inline-flex h-12 w-14 shrink-0 items-center justify-center">
        <Image
          src="/images/vedang-logo-mark.png"
          alt="Vedang Properties logo"
          fill
          className="object-contain"
          sizes="56px"
          priority
        />
      </span>
      <span>
        <span className="block text-lg font-semibold">Vedang Properties</span>
        <span className="block text-xs font-medium text-white/70">
          Mohali real estate advisory
        </span>
      </span>
    </Link>
  );
}
