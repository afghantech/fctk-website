import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-16">
      <div className="space-y-6">
        <span className="inline-flex rounded-full bg-omsu-blue/10 px-4 py-2 text-sm font-medium text-omsu-blue">
          Факультет ЦТМК ОмГУ
        </span>
        <div className="space-y-4">
          <h1 className="max-w-2xl text-4xl font-black tracking-tight text-omsu-black sm:text-5xl lg:text-6xl">
            Технологии, образование и наука в одном месте
          </h1>
          <p className="max-w-xl text-lg leading-8 text-omsu-gray">
            Современные программы обучения, новости факультета, научные события и
            контакты для абитуриентов — всё на одном сайте.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white p-3 shadow-soft">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-omsu-blue/20 to-transparent" />
        <div className="relative overflow-hidden rounded-[1.5rem] bg-black/5">
          <Image
            src="/images/campus-hero.png"
            alt="Баннер факультета и корпус ОмГУ"
            width={960}
            height={720}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="relative mt-4 rounded-[1.5rem] bg-omsu-blue px-5 py-4 text-white">
          <p className="text-sm uppercase tracking-[0.18em] text-white/70">Наш корпус</p>
          <p className="mt-2 text-xl font-semibold">ФЦТМК — образовательная среда для будущих инженеров</p>
        </div>
      </div>
    </section>
  );
}
