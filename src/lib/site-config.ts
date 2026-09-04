export const siteConfig = {
  name: "ណាំង សីហា",
  role: "Senior Software Engineer & AI Specialist",
  description:
    "គេហទំព័រផ្ទាល់ខ្លួន បង្ហាញស្នាដៃវិស្វកម្មសូហ្វវែរ (Web, Mobile, Cloud) និងវគ្គបណ្តុះបណ្តាល \"AI សម្រាប់គ្រូបង្រៀន\"",

  navLinks: [
    { label: "ទំព័រដើម", href: "/" },
    { label: "គម្រោងស្នាដៃ", href: "/#projects" },
    { label: "អំពីខ្ញុំ", href: "/about" },
    { label: "វគ្គបណ្តុះបណ្តាល", href: "/courses" },
    { label: "ទំនាក់ទំនង", href: "/contact" },
  ],

  cta: {
    label: "ទាក់ទងសហការ",
    href: "/contact",
  },

  contact: {
    email: "naing.seiha@gmail.com",
    phone: "+420 778 026 061",
    location: "ក្រុងប្រាក ប្រទេសឆែក (Prague, Czech Republic)",
  },

  social: {
    github: "https://github.com/naingseiha",
    linkedin: "https://linkedin.com/in/naingseiha",
    twitter: "https://x.com/seiha_naing",
  },
};

export type NavLink = (typeof siteConfig.navLinks)[number];

