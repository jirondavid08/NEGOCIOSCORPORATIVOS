export const siteConfig = {
  name: "Negocios Corporativos",
  tagline: "Bienes Raíces Comerciales",
  whatsappNumber: "593999901087",
  whatsappQuito: "593981111669",
  phoneQuito: "+593 999 901 087",
  phoneQuito2: "+593 981 111 669",
  phoneGuayaquil: "+593 993 014 874",
  emailQuito: "spsalazar@negocioscorporativos.com.ec",
  emailComercial: "comercial@negocioscorporativos.com",
  emailOperaciones: "operaciones@negocioscorporativos.com",
  facebook: "https://www.facebook.com/profile.php?id=100085492885401",
  instagram: "https://www.instagram.com/negocioscorporativos.ec/",
  linkedin: "https://www.linkedin.com/company/negocios-corporativos-ec/",
  youtube: "https://www.youtube.com/@NegociosCorporativosEC",
  parquesUrl: "https://parquesindustrialesecuador.com",
};

export function whatsappLink(message: string, number: string = siteConfig.whatsappNumber) {
  return `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`;
}
