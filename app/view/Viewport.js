Ext.define('Myapp.view.Viewport', {
    extend: 'Ext.tab.Panel',
    
    config: {
        fullscreen: true,

        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },

        defaults: {
            scrollable: true
        },

        items: [
            {
                title: 'home',
                iconCls: 'home',
                xtype : 'welcomescreen'                 
            },

            {
                title: 'My catalog',
                iconCls: 'bookmarks',
                xtype: 'nestedlist',
                store: 'Section',
                displayField: 'name',
                getItemTextTpl: function(node) {
                    return '{' + this.getDisplayField() + '}<tpl if="leaf !== true">/</tpl>';
                }
            }
        ]
    }
});
