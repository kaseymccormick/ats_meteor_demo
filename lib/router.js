Router.configure({
    layoutTemplate: 'NavigationLayout',
});

Router.route('', {
    name: 'hello',
    template: 'hello'
});