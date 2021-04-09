export default [{
    _name: 'CSidebarNav',
    _children: [{
            _name: 'CSidebarNavItem',
            name: 'Home',
            to: '/dashboard',
            icon: 'cil-speedometer',

        },
        {
            _name: 'CSidebarNavItem',
            name: 'Product',
            to: '/product',
            icon: 'cil-drop'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Category',
            to: '/category',
            icon: 'cil-drop'
        },

       
        {
            _name: 'CSidebarNavItem',
            name: 'Customer',
            to: '/customer',
            icon: 'cil-pencil'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Order',
            to: '/order',
            icon: 'cil-pencil'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Order Detail',
            to: '/order_detail',
            icon: 'cil-pencil'
        },
    ]
}]