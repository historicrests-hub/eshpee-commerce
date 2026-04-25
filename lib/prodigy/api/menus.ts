import { TAGS } from '../constants';
import { prodigyFetch } from '../core';
import { Menu } from '../types';

export async function getMenu(handle: string): Promise<Menu[]> {
  if (handle === 'next-js-frontend-header-menu') {
    const response = await prodigyFetch({
      endpoint: '/api/v1/plugin/categories',
      method: 'GET',
      tags: [TAGS.collections],
      params: { limit: '2' }
    });

    if (!Array.isArray(response.data)) {
      return [];
    }

    return [
      {
        title: 'All',
        path: '/search'
      },
      ...response.data.map((collection) => ({
        title: collection.name as string,
        path: `/search/${collection.id}`
      }))
    ];
  }

  if (handle === 'next-js-frontend-footer-menu') {
    return [
      {
        title: 'Home',
        path: '/'
      },
      {
        title: 'About',
        path: '/about'
      },
      {
        title: 'Privacy Policy',
        path: '/privacy-policy'
      },
      {
        title: 'Terms & Conditions',
        path: '/terms-conditions'
      },
      {
        title: 'Refund Policy',
        path: '/refund-policy'
      },
      {
        title: 'How It Works',
        path: '/how-it-works'
      },
      {
        title: 'Contact Us',
        path: '/contact-us'
      }
    ];
  }

  return [];
}
