import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Download,
  GraduationCap,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Newspaper,
  Phone,
  Users
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const navItems = [
  ["About", "#about"],
  ["Admissions", "#admissions"],
  ["Programs", "#academics"],
  ["Students", "/students"],
  ["Campus Life", "#campus-life"],
  ["Research", "#research"],
  ["Contact", "#contact"]
];

const stats = [
  { value: "8,500+", label: "Learners supported" },
  { value: "35+", label: "Academic pathways" },
  { value: "120+", label: "Faculty mentors" },
  { value: "20+", label: "Student societies" }
];

const programs = [
  {
    title: "Computer Science",
    text: "Software engineering, AI foundations, data systems, and human-centered computing.",
    icon: BookOpen
  },
  {
    title: "Management Sciences",
    text: "Business strategy, entrepreneurship, finance, marketing, and analytics for modern teams.",
    icon: Building2
  },
  {
    title: "Engineering Technology",
    text: "Applied technical learning with labs, design thinking, and industry-ready practice.",
    icon: GraduationCap
  },
  {
    title: "Social Sciences",
    text: "Communication, psychology, policy, and research skills for community impact.",
    icon: Users
  }
];

const news = [
  {
    title: "Career readiness week connects students with industry mentors",
    meta: "Campus News",
    text: "A focused week of workshops, mock interviews, and portfolio reviews prepared students for internships and graduate roles."
  },
  {
    title: "Innovation lab hosts prototype showcase",
    meta: "Innovation",
    text: "Student teams presented practical ideas across education technology, sustainability, fintech, and health systems."
  },
  {
    title: "Community service drive expands neighborhood outreach",
    meta: "Student Life",
    text: "Volunteers contributed mentoring hours, donation coordination, and awareness sessions through campus societies."
  }
];

const events = [
  { date: "Jun 12", title: "Undergraduate Open House", place: "Main Auditorium" },
  { date: "Jun 20", title: "Research Poster Forum", place: "Innovation Studio" },
  { date: "Jul 03", title: "Admissions Guidance Session", place: "Student Center" }
];

const quickLinks = [
  "Admissions Prospectus",
  "Fee Structure Guide",
  "Academic Calendar",
  "Scholarship Information",
  "Transport Routes",
  "Student Handbook"
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-white/92 backdrop-blur">
        <div className="section-shell flex h-16 items-center justify-between">
          <Link href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-sm font-black text-white">
              BU
            </span>
            <span>
              <span className="block text-sm font-bold leading-4 text-slate-950">
                BUKC Redesign
              </span>
              <span className="block text-xs leading-4 text-slate-500">
                Portfolio concept
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-sm font-semibold text-slate-600 transition hover:text-primary"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="#admissions">Apply Now</Link>
            </Button>
            <Button variant="outline" size="sm" className="lg:hidden" aria-label="Open menu">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.9)_42%,rgba(255,255,255,0.25)_100%)]" />
        <Image
          src="/campus-hero.png"
          alt="Original generated concept image of a modern university campus"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(14,165,233,0.18),transparent_32%),linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.9)_48%,rgba(255,255,255,0.2)_100%)]" />
        <div className="section-shell relative grid min-h-[calc(100vh-4rem)] items-center py-16 lg:grid-cols-[1.03fr_0.97fr] lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-md border bg-white/85 px-3 py-2 text-sm font-semibold text-primary shadow-sm">
              <GraduationCap className="h-4 w-4" />
              Karachi campus inspired university redesign
            </div>
            <h1 className="mt-7 text-4xl font-black tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
              Build your future through focused learning and campus opportunity.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              A modern, responsive redesign concept for Bahria University Karachi
              Campus, created as an educational portfolio project with original
              content and visuals.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#admissions">
                  Apply Now <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/80">
                <Link href="#academics">Explore Programs</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </section>

      <section className="border-y bg-white py-8">
        <div className="section-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <Card key={item.label} className="border-slate-200 bg-slate-50/70">
              <CardContent className="p-5">
                <p className="text-3xl font-black text-primary">{item.value}</p>
                <p className="mt-1 text-sm font-medium text-slate-600">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-kicker">About</p>
            <h2 className="section-title">A campus experience shaped for practical ambition.</h2>
            <p className="section-copy">
              This redesign presents a clear, student-first university experience:
              simple navigation, confident admissions messaging, accessible program
              discovery, and a professional visual system suitable for a modern
              higher education website.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Academic focus", "Outcome-driven programs with mentoring and guided learning paths."],
              ["Student support", "Advising, societies, career guidance, and wellbeing resources."],
              ["Industry links", "Events, portfolio reviews, internship preparation, and guest sessions."],
              ["Modern facilities", "Labs, collaborative spaces, seminar rooms, and activity areas."]
            ].map(([title, text]) => (
              <Card key={title} className="transition hover:-translate-y-1 hover:shadow-soft">
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="admissions" className="bg-white py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="section-kicker">Admissions</p>
            <h2 className="section-title">Clear steps from inquiry to enrollment.</h2>
            <p className="section-copy">
              Explore programs, review eligibility, prepare documents, and connect
              with an admissions counselor for guidance through your application.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="#downloads">Download Prospectus</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#contact">Contact Admissions</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            {["Choose your program", "Submit application details", "Attend test or interview", "Confirm admission offer"].map(
              (step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-lg border bg-slate-50 p-5 transition hover:border-secondary/50 hover:bg-accent"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-950">{step}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      A streamlined placeholder admissions journey for the portfolio redesign.
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section id="academics" className="py-20">
        <div className="section-shell">
          <p className="section-kicker">Academics</p>
          <h2 className="section-title">Programs designed for learning, practice, and progression.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <Card key={program.title} className="transition hover:-translate-y-1 hover:shadow-soft">
                <CardHeader>
                  <program.icon className="h-9 w-9 text-secondary" />
                  <CardTitle>{program.title}</CardTitle>
                  <CardDescription>{program.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="bg-white py-20">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="section-kicker">News & Events</p>
              <h2 className="section-title">Campus updates that keep students connected.</h2>
            </div>
            <Button asChild variant="outline">
              <Link href="#downloads">View Quick Links</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {news.map((item) => (
              <Card key={item.title} className="overflow-hidden transition hover:-translate-y-1 hover:shadow-soft">
                <div className="h-2 bg-secondary" />
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm font-bold text-primary">
                    <Newspaper className="h-4 w-4" />
                    {item.meta}
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {events.map((event) => (
              <Card key={event.title} className="bg-slate-50">
                <CardContent className="flex gap-4 p-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-primary text-center text-sm font-black text-white">
                    {event.date}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-950">{event.title}</h3>
                    <p className="mt-1 flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="h-4 w-4" />
                      {event.place}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="campus-life" className="py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="overflow-hidden rounded-lg bg-primary shadow-soft">
            <div className="grid min-h-[360px] gap-px bg-white/20 sm:grid-cols-2">
              {["Societies", "Sports", "Workshops", "Community"].map((item, index) => (
                <div
                  key={item}
                  className="flex items-end bg-[linear-gradient(135deg,rgba(255,255,255,0.22),rgba(255,255,255,0.04))] p-6"
                >
                  <div>
                    <p className="text-5xl font-black text-white/20">0{index + 1}</p>
                    <h3 className="mt-4 text-2xl font-bold text-white">{item}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="section-kicker">Campus Life</p>
            <h2 className="section-title">A balanced student life beyond lectures.</h2>
            <p className="section-copy">
              Student societies, sports events, creative workshops, volunteer
              programs, and peer networks create space for confidence, leadership,
              and collaboration.
            </p>
          </div>
        </div>
      </section>

      <section id="research" className="bg-white py-20">
        <div className="section-shell grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="section-kicker">Research & Innovation</p>
            <h2 className="section-title">Ideas move from classroom to prototype.</h2>
            <p className="section-copy">
              Placeholder research themes highlight applied learning, innovation
              culture, and interdisciplinary student work.
            </p>
          </div>
          {[
            { title: "Applied AI", icon: Lightbulb },
            { title: "Sustainable Systems", icon: Microscope },
            { title: "Entrepreneurship", icon: GraduationCap }
          ].map((item) => (
            <Card key={item.title} className="transition hover:-translate-y-1 hover:shadow-soft">
              <CardHeader>
                <item.icon className="h-10 w-10 text-secondary" />
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>
                  Faculty-guided projects, prototype reviews, seminars, and
                  portfolio-ready research communication.
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section id="downloads" className="py-20">
        <div className="section-shell">
          <p className="section-kicker">Downloads / Quick Links</p>
          <h2 className="section-title">Useful student resources in one place.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="flex items-center justify-between rounded-lg border bg-white p-5 font-semibold text-slate-800 transition hover:-translate-y-1 hover:border-secondary/60 hover:shadow-soft"
              >
                <span>{link}</span>
                <Download className="h-5 w-5 text-secondary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-primary py-20 text-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-200">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Plan your visit or connect with admissions.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100">
              This section uses portfolio-safe placeholder contact information
              and does not represent official university contact channels.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: MapPin, title: "Location", text: "Karachi, Pakistan" },
              { icon: Phone, title: "Phone", text: "+92 21 0000 0000" },
              { icon: Mail, title: "Email", text: "info@example.edu.pk" }
            ].map((item) => (
              <Card key={item.title} className="border-white/15 bg-white/10 text-white">
                <CardHeader>
                  <item.icon className="h-8 w-8 text-sky-200" />
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="text-blue-100">{item.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-10 text-white">
        <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold">BUKC Redesign</p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
              Unofficial redesign project for portfolio purposes only. Not
              affiliated with Bahria University.
            </p>
          </div>
          <p className="text-sm text-slate-400">
            Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui-style components.
          </p>
        </div>
      </footer>
    </main>
  );
}
