import pos1 from '../assets/pos1.jpeg';
import pos2 from '../assets/pos2.jpeg';
import pos3 from '../assets/pos3.jpeg';
import Hardware1 from '../assets/hardware1.jpeg';
import Hardware2 from '../assets/hardware2.jpeg';
import Hardware3 from '../assets/hardware3.jpeg';
import ar1 from '../assets/ar1.jpeg';
import ar2 from '../assets/ar2.jpeg';
import ar3 from '../assets/ar3.jpeg';

export interface Project {
  id: number;
  title: string;
  description: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "POS & Inventory Apps",
    description: "Apps for POS & Inventory using React Native and Firebase. Syifa Frozenfood Semarang",
    images: [
      pos1,
      pos2,
      pos3
    ]
  },
  {
    id: 2,
    title: "Maintenance Hardware & Software",
    description: "Maintenance laptop, pc, printer, and other hardware and software.CV RPA Frost",
    images: [
      Hardware1,
      Hardware2,
      Hardware3
    ]
  },
  {
    id: 3,
    title: "MufroAR - AR Learning",
    description: "AR Learning using Unity and Vuforia.",
    images: [
      ar1,
      ar2,
      ar3
    ]
  }
];