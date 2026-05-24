import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Bell,
  BookMarked,
  CalendarCheck,
  ClipboardList,
  Download,
  FileText,
  GraduationCap,
  HeartHandshake,
  Library,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Trophy,
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

const studentStats = [
  { value: "24/7", label: "Resource access" },
  { value: "20+", label: "Societies & clubs" },
  { value: "6", label: "Support desks" },
  { value: "100+", label: "Campus activities" }
];

const services = [
  {
    title: "Academic Planning",
    text: "Advising, course guidance, study planning, and degree progression support.",
    icon: GraduationCap
  },
  {
    title: "Student Affairs",
    text: "Campus requests, event approvals, society coordination, and student records.",
    icon: ClipboardList
  },
  {
    title: "Library & Learning",
    text: "Study spaces, digital references, research help, and reading resources.",
    icon: Library
  },
  {
    title: "Wellbeing & Care",
    text: "Confidential guidance, peer support, and practical wellbeing assistance.",
    icon: HeartHandshake
  }
];

const quickActions = [
  {
    title: "Academic Calendar",
    text: "Semester dates, breaks, assessments, and key academic deadlines.",
    icon: CalendarCheck
  },
  {
    title: "Course Registration",
    text: "Registration windows, credit guidance, and enrollment checklist.",
    icon: BookMarked
  },
  {
    title: "Student Handbook",
    text: "Policies, conduct guidance, campus services, and student procedures.",
    icon: FileText
  },
  {
    title: "Exam Schedule",
    text: "Assessment dates, exam instructions, and venue information.",
    icon: Bell
  },
  {
    title: "Scholarships",
    text: "Merit support, eligibility notes, and financial assistance updates.",
    icon: ShieldCheck
  },
  {
    title: "Society Registration",
    text: "Join student groups, apply for leadership roles, and submit proposals.",
    icon: Users
  }
];

const campusTracks = [
  {
    title: "Societies",
    text: "Computing, media, entrepreneurship, debate, service, and creative circles."
  },
  {
    title: "Leadership",
    text: "Class representation, event teams, student councils, and peer mentoring."
  },
  {
    title: "Sports",
    text: "Team activities, fitness events, tournaments, and interdepartment games."
  },
  {
    title: "Community",
    text: "Volunteer programs, awareness drives, outreach work, and social impact."
  }
];

const supportChannels = [
  {
    icon: MessageCircle,
    title: "Advising Desk",
    text: "Study planning and course guidance"
  },
  {
    icon: Mail,
    title: "Student Help",
    text: "student.help@example.edu.pk"
  },
  {
    icon: MapPin,
    title: "Student Center",
    text: "Visit during campus hours"
  }
];

export default function StudentsPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-white/92 backdrop-blur">
        <div className="section-shell flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-sm font-black text-white">
              BU
            </span>
            <span>
              <span className="block text-sm font-bold leading-4 text-slate-950">
                BUKC Redesign
              </span>
              <span className="block text-xs leading-4 text-slate-500">
                Student hub
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {[
              ["Home", "/"],
              ["Programs", "/#academics"],
              ["Downloads", "/#downloads"],
              ["Contact", "/#contact"]
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-sm font-semibold text-slate-600 transition hover:text-primary"
              >
                {label}
              </Link>
            ))}
          </nav>
          <Button asChild size="sm" variant="outline">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back Home
            </Link>
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white">
        <Image
          src="/campus-hero.png"
          alt="Original generated concept image of a modern university campus"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(14,165,233,0.18),transparent_32%),linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.92)_48%,rgba(255,255,255,0.28)_100%)]" />
        <div className="section-shell relative grid min-h-[calc(100vh-4rem)] items-center py-16 lg:grid-cols-[1.03fr_0.97fr] lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-md border bg-white/85 px-3 py-2 text-sm font-semibold text-primary shadow-sm">
              <Users className="h-4 w-4" />
              Student resources
            </div>
            <h1 className="mt-7 text-4xl font-black tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
              A focused hub for campus life, support, and student services.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Find academic resources, support channels, student activities, and
              everyday campus links in one clean, easy-to-scan space.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#resources">View Resources</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/80">
                <Link href="#support">Get Support</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </section>

      <section className="border-y bg-white py-8">
        <div className="section-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {studentStats.map((item) => (
            <Card key={item.label} className="border-slate-200 bg-slate-50/70">
              <CardContent className="p-5">
                <p className="text-3xl font-black text-primary">{item.value}</p>
                <p className="mt-1 text-sm font-medium text-slate-600">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="section-shell">
          <p className="section-kicker">Student Services</p>
          <h2 className="section-title">Support built around the student journey.</h2>
          <p className="section-copy">
            Key services are grouped around the tasks students handle most often:
            academics, records, learning resources, and wellbeing.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="transition hover:-translate-y-1 hover:shadow-soft">
                <CardHeader>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent">
                    <service.icon className="h-6 w-6 text-secondary" />
                  </span>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="bg-white py-20">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="section-kicker">Resources</p>
              <h2 className="section-title">Fast access to the links students use most.</h2>
              <p className="section-copy">
                Clear resource cards keep academic dates, forms, schedules, and
                student documents easy to scan.
              </p>
            </div>
            <Button asChild variant="outline" className="bg-white">
              <Link href="/#downloads">More Downloads</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {quickActions.map((action) => (
              <Link
                key={action.title}
                href="#"
                className="group rounded-lg border bg-white p-5 transition hover:-translate-y-1 hover:border-secondary/60 hover:shadow-soft"
              >
                <span className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent">
                    <action.icon className="h-5 w-5 text-secondary" />
                  </span>
                  <Download className="h-5 w-5 shrink-0 text-primary transition group-hover:translate-y-0.5" />
                </span>
                <span className="mt-5 block text-lg font-bold text-slate-950">
                  {action.title}
                </span>
                <span className="mt-2 block text-sm leading-6 text-slate-600">
                  {action.text}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-kicker">Campus Involvement</p>
            <h2 className="section-title">
              Student life that feels active, structured, and easy to join.
            </h2>
            <p className="section-copy">
              Explore societies, leadership roles, sports, and service tracks
              that help students build confidence beyond the classroom.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg bg-primary shadow-soft">
            <div className="grid min-h-[360px] gap-px bg-white/20 sm:grid-cols-2">
              {campusTracks.map((track, index) => (
                <div
                  key={track.title}
                  className="flex items-end bg-[linear-gradient(135deg,rgba(255,255,255,0.22),rgba(255,255,255,0.04))] p-6"
                >
                  <div>
                    <p className="text-5xl font-black text-white/20">0{index + 1}</p>
                    <div className="mt-4 flex items-center gap-3">
                      <Trophy className="h-6 w-6 text-sky-200" />
                      <h3 className="text-2xl font-bold text-white">{track.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-blue-100">{track.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="support" className="bg-primary py-20 text-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-200">
              Student Support
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Get routed to the right help quickly.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100">
              Reach advising, student help, and on-campus support without
              searching through multiple pages.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {supportChannels.map((item) => (
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
