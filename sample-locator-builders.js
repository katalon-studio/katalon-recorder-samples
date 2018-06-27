// Usage: Add this to Extension Scripts, restart Katalon Recorder, and refresh the browser tab
// THIS IS ONLY AN EXAMPLE, PLEASE DON'T USE IT IN REAL PROJECT

LocatorBuilders.add('my super locator', function(e) {
  if (e.id) {
      return "css=" + e.tagName + '#' + e.id;
  }
  return null;
});

// built-in locators: "id", "link", "name", "dom:name", "xpath:link", "xpath:img", "xpath:attributes", "xpath:idRelative", "xpath:href", "dom:index", "xpath:position", "css"
LocatorBuilders._preferredOrder = ['xpath:position', 'my super locator'];
// Change the default order to preferredOrder
LocatorBuilders._orderChanged();
