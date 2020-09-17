let StudentComponentProto = Object.create(HTMLElement.prototype);

StudentComponentProto.createdCallback = function() {
    this.innerHTML = '<h2>Ја сам студент!</h2>';
};

// new element
let StudentComponent = document.registerElement('uvit-student', {
    prototype: StudentComponentProto
});