export const siteConfig = {
  name: "ណាំង សីហា",
  role: "Software Engineer & គ្រូបង្រៀន",
  description:
    "គេហទំព័រផ្ទាល់ខ្លួន បង្ហាញការងារ និងវគ្គបណ្តុះបណ្តាល \"AI សម្រាប់គ្រូបង្រៀន\"",

  navLinks: [
    { label: "ទំព័រដើម", href: "/" },
    { label: "អំពីខ្ញុំ", href: "/about" },
    { label: "វគ្គបណ្តុះបណ្តាល", href: "/courses" },
    { label: "ទំនាក់ទំនង", href: "/contact" },
  ],

  cta: {
    label: "ចុះឈ្មោះឥឡូវនេះ",
    href: "/courses",
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
