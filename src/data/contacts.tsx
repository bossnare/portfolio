export const contacts = [
  {
    name: 'Email',
    content: 'For professional inquires.',
    icon: 'mail',
    link: 'mailto:razafimangagervaischristo@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Christo, ',
    contact: 'razafimangagervaischristo@gmail.com',
  },
  {
    name: 'Direct call',
    content: 'Give me a call.',
    icon: 'phone',
    link: 'tel:+261382742449',
    contact: '+261 38 27 424 49',
  },
  {
    name: 'WhatsApp',
    content: 'Start a conversation.',
    icon: 'message',
    contact: "LET'S GO CHRIS",
    link: 'https://wa.me/261382742449',
  },
];

export type Contact = (typeof contacts)[number];
