Router.configure({
    layoutTemplate: 'NavigationLayout',
});
Router.route('', {
    name: 'user',
    template: 'user',
    layoutTemplate:'LoginLayout'
});
Router.route('/dashboard', {
    name: 'dashboard',
    template: 'dashboard',
});
Router.route('/register', {
    name: 'register',
    template: 'register',
    layoutTemplate:'LoginLayout'
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
Router.route('/account-view', {
    name: 'Account View',
    template: 'account_view'
});
Router.route('/add-account', {
    name: 'Add New Account',
    template: 'add_new_account'
});
Router.route('/individual-profile', {
    name:'individual profile',
    template:'address-book_individual-profile'
});
Router.route('/organizationprofile', {
    name:'organization profile',
    template:'address-book_organization-profile'
});
Router.route('/vendor_profile', {
    name:'vendor_profile',
    template:'vendor_profile'
});
Router.route('/OrganizationManagement', {
    name:'Organization Management Dashboard',
    template:'organization-management_dashboard'
});
Router.route('/organization_profile', {
    name:'organization_profile',
    template:'organization_profile'
});
Router.route('/view-disb', {
    name:'pay file disbursement',
    template:'pay_file-disbursement'
});