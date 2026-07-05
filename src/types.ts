/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  color: 'red' | 'yellow' | 'blue' | 'green' | 'orange' | 'purple' | 'pink' | 'black' | 'brown' | 'grey';
  colorHex: string;
  tags: string[];
  image: string;
  description: string;
  tools: string[];
  whatsappMessage: string;
  featured?: boolean;
  date?: string;
  client?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
  priceRange?: string;
}

export interface Stat {
  label: string;
  value: string;
  iconName: string;
}
