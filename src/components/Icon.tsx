import React from 'react';
import { 
  PenTool, 
  Monitor, 
  Tv, 
  Printer, 
  Armchair, 
  Cloud, 
  FileText, 
  Tag, 
  Package, 
  Gift, 
  UserSquare,
  Laptop,
  MousePointer2,
  Wifi,
  Cpu,
  Projector,
  Tablet,
  Hand,
  Speaker,
  Smartphone,
  Lightbulb,
  Presentation,
  ExternalLink,
  Users,
  Layers,
  Folder,
  Maximize,
  MapPin,
  Phone,
  Mail,
  Clock,
  Search,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  PenTool, Monitor, Tv, Printer, Armchair, Cloud, FileText, Tag, Package, Gift, UserSquare,
  Laptop, MousePointer2, Wifi, Cpu, Projector, Tablet, Hand, Speaker, Smartphone,
  Lightbulb, Presentation, ExternalLink, Users, Layers, Folder, Maximize,
  MapPin, Phone, Mail, Clock, Search, Facebook, Twitter, Linkedin, Instagram, Youtube,
  ChevronRight, Menu, X
};

export const Icon = ({ name, className }: { name: string, className?: string }) => {
  const LucideIcon = iconMap[name] || Monitor;
  return <LucideIcon className={className} />;
};
