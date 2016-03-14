Router.configure({
    layoutTemplate: 'NavigationLayout',
});
Router.route('/', {
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
Router.route('/logOut',{
    name:'log out',
    template: 'user',
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
Router.route('/individual-profile-sally', {
    name:'sally',
    template:'address-book_individual-profile__SallyB'
});
Router.route('/individual-profile-art', {
    name:'art',
    template:'address-book_individual-profile__ArtL'
});
Router.route('/individual-profile-frank', {
    name:'frank',
    template:'address-book_individual-profile__FrankS'
});
Router.route('/individual-profile-chuck', {
    name:'chuck',
    template:'address-book_individual-profile__ChuckR'
});
Router.route('/individual-profile-cindy', {
    name:'cindy',
    template:'address-book_individual-profile__CindyM'
});
Router.route('/individual-profile-Eliz', {
    name:'eliz',
    template:'address-book_individual-profile__ElizabethW'
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