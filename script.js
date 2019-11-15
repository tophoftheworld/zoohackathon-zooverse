//Include all the needed modules
const NativeUI = require('NativeUI');
const Textures = require('Textures');
const Patches = require('Patches');

const index = 0;

// Create a configuration object
const configuration = {

  // The index of the selected item in the picker
  selectedIndex: index,

  // The image textures to use as the items in the picker
  items: [
    {image_texture: Textures.get('1')},
    {image_texture: Textures.get('2')},
    {image_texture: Textures.get('3')},
    {image_texture: Textures.get('4')},
    {image_texture: Textures.get('5')},
	//{image_texture: Textures.get('6')}
  ]

};

const picker = NativeUI.picker;
picker.configure(configuration);
picker.visible = true;

picker.selectedIndex.monitor().subscribe(function(val) {
  //We are sending the "index" variable to the patch editor.
  //It is a number, so we are using a "Scalar" type of value.
  //The name of the variable that will appear in the patch editor is "texturePick"

  //We pass the value of the picked item (0  - 4 in this case)
  //to the "texturePick" variable inside of the "Variables From Script" patch.
  //You can set "texturePick" to be any name you want on the "From Script" area on
  //the inspector panel of the script file.
  Patches.setScalarValue("texturePick", val.newValue);
});