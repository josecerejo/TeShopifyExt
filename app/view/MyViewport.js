/*
 * File: app/view/MyViewport.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TeShopifyExt.view.MyViewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'TeShopifyExt.view.NavBarLeft'
    ],

    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'north',
                    border: false,
                    height: 50,
                    id: 'northPanel',
                    layout: {
                        align: 'stretch',
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype: 'container',
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 1
                                },
                                {
                                    xtype: 'container',
                                    html: '<h3>TeShopify</h3>',
                                    margin: '0 0 0 50'
                                },
                                {
                                    xtype: 'container',
                                    flex: 1
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1
                        },
                        {
                            xtype: 'container',
                            flex: 1
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'center',
                    border: false,
                    id: 'centralPanel',
                    layout: {
                        type: 'fit'
                    },
                    bodyBorder: false
                },
                {
                    xtype: 'panel',
                    region: 'west',
                    id: 'westPanel',
                    width: 220,
                    layout: {
                        type: 'fit'
                    },
                    collapsed: false,
                    collapsible: false,
                    items: [
                        {
                            xtype: 'navbarleft',
                            bodyBorder: false
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'east',
                    id: 'eastpanel',
                    width: 100,
                    layout: {
                        type: 'fit'
                    },
                    collapsed: false,
                    collapsible: false
                }
            ]
        });

        me.callParent(arguments);
    }

});