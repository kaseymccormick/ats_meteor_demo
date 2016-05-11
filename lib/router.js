Router.configure({
    layoutTemplate: 'NavigationLayout'
});

Router.route('/', {
    template: 'user',
    layoutTemplate:'LoginLayout'
});
Router.route('/dashboard', {
    name: 'dashboard',
    template: 'dashboard'
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
Router.route('/new_invoice', {
    name: 'Send Invoice',
    template: 'new_invoice'
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
Router.route('/organizationprofile_higgins', {
    name:'Higgins & Lathrop',
    template:'ab_organization-profile__higgins'
});
Router.route('/vendor_profile', {
    name:'vendor_profile',
    template:'vendor_profile'
});
Router.route('/OrganizationManagement', {
    name:'Organization Management Dashboard',
    template:'organization-management_dashboard'
});
Router.route('/VV_organization_profile', {
    name:'VV_organization_profile',
    template:'VV_organization_profile'
});
Router.route('/view-disb', {
    name:'pay file disbursement',
    template:'pay_file-disbursement'
});
Router.route('/popup__arrange-payment',{
    name:'popup arrange payment',
    template:'popup__arrange-payment'
});
Router.route('/upload-doc',{
    name:'upload document',
    template:'popup__upload_document'
});
Router.route('/add-payee',{
    name:'add payee',
    template:'popup__add-payee'
});
Router.route('/SettlementCoordinatorReview', {
    name:'Settlement Coordinator Review',
    template:'settlement-coordinator-review'
});
