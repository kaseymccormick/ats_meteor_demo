Router.configure({
    layoutTemplate: 'NavigationLayout',
});

Router.route('', {
    name: 'signin',
    template: 'signin'
});

Router.route('/addressbook', {
    name: 'address book dashboard',
    template: 'address-book_dashboard'
});
Router.route('/VendorManagement', {
    name: 'vendor management dashboard',
    template: 'vendor-management_dashboard'
});
Router.route('/pay', {
    name: 'pay dashboard',
    template: 'pay_dashboard'
});