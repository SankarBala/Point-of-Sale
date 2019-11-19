export default {
  items: [
    {
      name: 'Home',
      url: '/',
      icon: 'icon-home',
    },
    {
      title: true,
      name: 'Inventory',
    },
    {
      name: 'Product',
      url: '/products',
      icon: 'icon-layers',
      children: [
        {
          name: 'Add Product',
          url: '/product/add/',
          icon: 'fa fa-plus-square',
        },
        {
          name: 'All Products',
          url: '/products',
          icon: 'fa fa-cubes',
        },
        {
          name: 'Required List',
          url: '/product/required',
          icon: 'icon-puzzle',
        },
        {
          name: 'Low Stock',
          url: '/product/low-stock',
          icon: 'fa fa-database',
        },
        {
          name: 'Demand List',
          url: '/product/demand',
          icon: 'fa fa-eye',
        }
      ]
      },
      {
        name: 'Sales',
        url: '/sales',
        icon: 'fa fa-shopping-cart',
        children: [
          {
            name: 'New Sale',
            url: '/sale/new',
            icon: 'fa fa-cart-plus',
          },
          {
            name: 'All Sales',
            url: '/sales',
            icon: 'fa fa-check-square-o',
          }, 
           {
            name: 'Order',
            url: '/sale/order',
            icon: 'fa fa-cart-arrow-down',
          },
          {
            name: 'Pending',
            url: '/sale/pending',
            icon: 'fa fa-hourglass-half',
          },
          {
            name: 'Return',
            url: '/sale/return',
            icon: 'fa fa-reply',
          }
        ]
        },
        {
          title: true,
          name: 'Promotion',
        },
        {
          name: 'Discount',
          url: '/discount',
          icon: 'fa fa-retweet',
        },
        {
          name: 'Offer',
          url: '/offer',
          icon: 'fa fa-bullhorn',
        },
        {
          title: true,
          name: 'Others',
        },
        {
          name: 'Customers',
          url: '/customers/',
          icon: 'icon-people',
        },
        { 
          name: 'Settings',
          url: '/settings/',
          icon: 'icon-settings',
        },
  ]
};
