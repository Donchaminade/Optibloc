/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: 'blue_light' | 'photochromic';
  type_label: string;
  price: number; // in F CFA
  image: string;
  description: string;
  features: string[];
  usage: ('office' | 'gaming' | 'reading' | 'outdoor' | 'driving')[];
  frame_material: string;
  frame_shape: string;
  gender: 'femme' | 'homme' | 'unisex';
  rating: number;
}

export interface AdviceArticle {
  id: string;
  category: string;
  title: string;
  summary: string;
  content: string;
  readTime: string;
  tags: string[];
}

export interface AdvisorQuestion {
  id: string;
  text: string;
  options: {
    value: string;
    label: string;
    description?: string;
    icon: string; // lucide icon name
  }[];
}
