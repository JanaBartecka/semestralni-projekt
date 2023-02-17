// Modal window START

let dialogButtonID;
let dialogNumber;
let dialog;
let dialogWindow;

document.addEventListener('click', (e) => {
  console.log(e.target.id.slice(0,15))
  if (e.target.id.slice(0,15)==='dialog__openBtn') {
  dialogButtonID=e.target.id
  dialogNumber=dialogButtonID.split("--")[1];
  dialog=document.getElementById('dialog--' + dialogNumber);
// const dialog_mask=dialog.querySelector('.dialog__mask');
  dialogWindow=dialog.querySelector('.dialog .dialog__window');
  OpenDialog();
}});

const KEYCODE= {
  ESC:27
};
   
let previousActiveElement;

function OpenDialog () {
  previousActiveElement=document.activeElement;
  Array.from(document.body.children).forEach(child => {
    if (child!== dialog)
      child.inert=true;
  });

  dialog.classList.add('active');

  // close dialog
  // dialogMask.addEventListener('click',closeDialog);
  dialogWindow.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click',closeDialog);
  });
  document.addEventListener('keydown',checkCloseDialog);

  // finally move focus into the dialog
  dialog.querySelector('button').focus();
}

function checkCloseDialog(e) {
  if (e.keyCode === KEYCODE.ESC) 
  closeDialog();
}

function closeDialog () {
  // clean up any event listeners
  // dialogMask.removeEventListener('click',closeDialog);
  dialogWindow.querySelectorAll('button').forEach(btn => {
    btn.removeEventListener('keydown',checkCloseDialog);

    // uninert our siblings
    Array.from(document.body.children).forEach(child => {
      if (child !==dialog)
        child.inert = false;
    });

    // hide the dialog
    dialog.classList.remove('active');

    // restore focus to the previous active element
    previousActiveElement.focus();
  })
}
// Modal window END