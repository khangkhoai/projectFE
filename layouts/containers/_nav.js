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
            name: 'Project',
            to: '/project',
            icon: 'cil-drop'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Task',
            to: '/task',
            icon: 'cil-drop'
        },

        {
            _name: 'CSidebarNavItem',
            name: 'User',
            to: '/user',
            icon: 'cil-pencil'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Role',
            to: '/roles',
            icon: 'cil-pencil'
        }
    ]
}]