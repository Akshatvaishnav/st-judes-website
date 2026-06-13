import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="St. Jude's School logo" className="h-12 w-12 object-contain bg-white rounded-lg p-1" />
            <div className="font-display font-bold text-lg">St. Jude's School</div>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/80 leading-relaxed">
            Empowering young minds through quality education, strong values and
            holistic development since our founding in Fatehnagar, Udaipur.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-gold hover:text-gold-foreground transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-base mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/academics", "Academics"],
              ["/facilities", "Facilities"],
              ["/admissions", "Admissions"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-primary-foreground/80 hover:text-gold transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-base mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/85">
            <li className="flex gap-2.5"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /> Fatehnagar, Udaipur, Rajasthan, India</li>
            <li className="flex gap-2.5"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /> <a href="tel:+917023335023" className="hover:text-gold transition">+91 7023335023</a></li>
            <li className="flex gap-2.5"><Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" /> <a href="mailto:st.judesfnr@gmail.com" className="hover:text-gold transition">st.judesfnr@gmail.com</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-base mb-4">Office Hours</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/85">
            <li className="flex justify-between"><span>Mon – Fri</span><span>8:00 AM – 3:30 PM</span></li>
            <li className="flex justify-between"><span>Saturday</span><span>8:00 AM – 12:30 PM</span></li>
            <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/70">
          <p>© {new Date().getFullYear()} St. Jude's School, Fatehnagar. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
