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
Router.route('/individual-profile', {
    name:'individual profile',
    template:'address-book_individual-profile'
});
Router.route('/organizationprofile', {
    name:'organization profile',
    template:'address-book_organization-profile'
});
Router.route('/organization_profile', {
    name:'organization_profile',
    template:'organization_profile'
});
