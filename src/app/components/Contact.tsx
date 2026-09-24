import { Mail, Linkedin } from "lucide-react";

export function Contact() {
  const contacts = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shanesheth",
      href: "https://linkedin.com/in/shanesheth",
    },
    {
      icon: Mail,
      label: "Email",
      value: "shanesheth07@gmail.com",
      href: "mailto:shanesheth07@gmail.com",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-4xl w-full text-center space-y-16">
        <h1 className="text-5xl">Contact Me!</h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.label === "LinkedIn" ? "_blank" : undefined}
              rel={contact.label === "LinkedIn" ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center gap-4 p-8 rounded-2xl bg-white hover:bg-neutral-50 transition-all hover:shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                <contact.icon className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-neutral-500">{contact.label}</p>
                <p className="text-lg">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}