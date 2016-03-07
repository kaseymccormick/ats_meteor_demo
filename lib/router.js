Router.configure({
    layoutTemplate: 'NavigationLayout',
});

Router.route('', {
    name: 'signin',
    template: 'signin'
});
Router.route('/addressbook', {
    name: 'address book dashboard',
    template: 'test'
});