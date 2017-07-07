window.addEventListener('WebComponentsReady', function(e) {
  // imports are loaded and elements have been registered
  console.log('Components are ready');

  var element = {alias: "Group", uuid: "123455667", type: "group"};
  for(var t=0; t < 100; t++)
  {
    element.alias = "Grupo " + t;
    document.getElementById("group_container").addElement(element);

    element.alias = "Elemento " + t;
    document.getElementById("element_container").addElement(element);
  }

  document.addEventListener('add-group', onAddGroup);
});

function onAddGroup()
{
  document.getElementById("add_group_dialog").open();  
}
//<domular-section-element element_name="Group 02"></domular-section-element>