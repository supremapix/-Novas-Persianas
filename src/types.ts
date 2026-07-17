/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SubmenuItem {
  name: string;
  hash: string; // Hash or query state to filter products
}

export interface NavItem {
  name: string;
  path: string;
  submenu?: string[]; // Simplified for list
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  specifications?: string[];
  idealFor?: string[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  details: string[];
  image: string;
}

export interface CarouselSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  secondaryText?: string;
  secondaryLink?: string;
}

export interface Benefit {
  title: string;
  description: string;
  iconName: string; // Name of Lucide icon
}
