import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: getIcon(peopleFill)
  },
  {
    title: 'product',
    path: '/dashboard/products',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'blog',
    icon: getIcon(fileTextFill),
    path: '/dashboard/blog',
    // collapse submenu
    children: [
      {
        title: 'blog 1',
        path: '/dashboard/blog-1',
        icon: getIcon(fileTextFill)
      },
      {
        title: 'blog 2',
        path: '/dashboard/blog-2',
        icon: getIcon(fileTextFill)
      },
      {
        title: 'blog 3',
        path: '/dashboard/blog-3',
        icon: getIcon(fileTextFill)
      },
      {
        title: 'blog 4',
        path: '/dashboard/blog-4',
        icon: getIcon(fileTextFill)
      }
    ]
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon(lockFill)
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon(personAddFill)
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon(alertTriangleFill)
  }
];

export default sidebarConfig;
