window.addEventListener('WebComponentsReady', function(e) {
  // imports are loaded and elements have been registered
  console.log('Components are ready');
  document.getElementById("progress_bar").indeterminate = false;
  document.getElementById("progress_bar").value = 100;


  var element = {alias: "Group", uuid: "123455667", type: "group", value: "newValue", rangeH:"rangeHigh", rangeL:"rangeLow"};
  for(var t=0; t < 5; t++)
  {
    element.alias = "Grupo " + t;    
    document.getElementById("group_container").addElement(element);   
  }

  element.alias = "Elemento interruptor";
  element.type = "switch";
  document.getElementById("element_container").addElement(element);

  element.alias = "Elemento rango";
  element.type = "range";
  document.getElementById("element_container").addElement(element);

  element.alias = "Elemento video";
  element.type = "video";
  document.getElementById("element_container").addElement(element);

  document.addEventListener('element-visible-change', onVisibleChange);

});

function onVisibleChange(e)
{
  console.log("onVisibleChange");
}

//<domular-section-element element_name="Group 02"></domular-section-element>